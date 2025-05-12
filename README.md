# React Weather App with Vite

This project is a weather application built using React and Vite. It allows users to search for weather information by city name and displays the current weather details such as temperature, humidity, and more.

## Features

- **Weather Search**: Enter a city name to fetch real-time weather data using the OpenWeatherMap API.
- **Responsive Design**: Built with Material-UI for a modern and responsive user interface.
- **Error Handling**: Displays error messages for invalid city names or API issues.
- **Animations**: Includes hover effects and animations for a better user experience.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Vite**: Fast build tool for modern web development.
- **Material-UI**: Component library for styling and layout.
- **OpenWeatherMap API**: Provides weather data for the application.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohitjoer/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   VITE_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at `http://localhost:5173`.

## Build for Production

To build the application for production, run:
```bash
npm run build
```

The production-ready files will be in the `dist` directory.
