import { Component, signal, OnDestroy, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-analog-clock',
  standalone: true,
  templateUrl: './analog-clock.html',
  styleUrl: './analog-clock.scss',
})
export class AnalogClock implements OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  private http = inject(HttpClient);

  hourDeg = signal(0);
  minuteDeg = signal(0);
  secondDeg = signal(0);
  formattedDate = signal('');

  // Static weather
  weatherIcon = signal('☁️');
  temperature = signal('9°C');

  // 12 tick array
  hourTicks = Array.from({ length: 12 }, (_, i) => i);

  private intervalId: number | null = null;

  constructor() {
    if (this.isBrowser) {
      this.startClock();
      this.fetchWeather();
    }
  }

  private startClock() {
    this.updateTime();
    this.intervalId = window.setInterval(() => this.updateTime(), 1000 / 60);
  }

  private updateTime() {
    const now = new Date();
    const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60;

    this.secondDeg.set(seconds * 6);
    this.minuteDeg.set(minutes * 6);
    this.hourDeg.set(hours * 30);

    this.formattedDate.set(this.formatDate(now));
  }

  private formatDate(date: Date): string {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const months = [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ];

    return `${days[date.getDay()]}, ${
      months[date.getMonth()]
    } ${date.getDate()}`;
  }

  private fetchWeather() {
    // Latitude and longitude of London region
    const lat = 51.5074;
    const lon = -0.1278;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${environment.weatherApiKey}`;

    this.http.get<any>(url).subscribe({
      next: (data) => {
        // If data exists, update signals
        if (data && data.main && data.weather?.[0]) {
          this.temperature.set(`${Math.round(data.main.temp)}°C`);
          this.weatherIcon.set(
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          );
        }
      },
      error: () => {
        // Keep default static values on error
        console.warn('Weather API failed, using default values');
      },
    });
  }

  ngOnDestroy() {
    if (this.intervalId !== null) clearInterval(this.intervalId);
  }
}
