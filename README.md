# ClockWeatherInfo

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Clock & Weather Widget

An **Angular v20 standalone application** that displays a functional analogue clock with **date** and **weather overlay**. Current Weather of London is diplayed and styled inside the clock using OpenWeather API.

## Features

- Analogue clock with smooth hour, minute, and second hands
- 12-hour ticks with **dark ticks at 12, 3, 6, 9**
- Date overlay inside the clock (`THU, DEC 25` format)
- Weather overlay inside the clock (live cloud icon and temperature)
- Minimalist, modern design with pill-style overlays

## Installation

1. **Clone the repository:**

```bash
git clone <repo-url>
cd <your-repo-folder>
```

2. **Install dependencies:**

```bash
npm install
```

3. **Add your OpenWeather API key:**

```bash
// src/environments/environment.ts
export const environment = {
  production: false,
  weatherApiKey: 'YOUR_API_KEY_HERE'
};
```
