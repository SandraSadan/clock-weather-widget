import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnalogClock } from './analog-clock/analog-clock';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AnalogClock],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('clock-weather-info');
}
