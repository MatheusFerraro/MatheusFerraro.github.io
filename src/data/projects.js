export const projects = [
  {
    name: 'Recipe World',
    description: 'A full-stack web application designed to demonstrate enterprise-level software development practices using ASP.NET Core MVC (.NET 8). This project was built to showcase proficiency in N-Tier Architecture, Secure Authentication, Database Management, and Unit Testing. It features a complete recipe management ecosystem with role-based security, ingredient tracking, and an admin approval workflow.',
    url: 'https://github.com/MatheusFerraro/RecipeWorld',
    technologies: ['C#', 'ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'xUnit', 'Bootstrap', 'Razor'],
  },

  {
    name: 'Smart Retail System',
    description: 'A full-stack IoT application that automates retail shelf inventory tracking — from hardware sensor to live web dashboard. An ESP32 measures product stock via an ultrasonic sensor and transmits telemetry over Wi-Fi to a C# ASP.NET Core REST API. The backend persists readings in SQL Server and serves them to a live dashboard that auto-updates in real time.',
    url: 'https://github.com/MatheusFerraro/SmartRetail-System',
    technologies: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'ESP32', 'C++', 'Chart.js'],
  },

  {
    name: 'ESP32 Snake Game',
    description: 'A classic Snake Game built from scratch for the ESP32 — demonstrating OOP principles, State Machine architecture, and hardware-level I2C communication in embedded C++. The firmware uses abstract interfaces and polymorphism to fully decouple game logic from hardware drivers, with dynamic fallback to Serial Monitor when no hardware is detected.',
    url: 'https://github.com/MatheusFerraro/Matheus_Snake',
    technologies: ['C++', 'ESP32', 'Arduino', 'SSD1306 OLED', 'I2C'],
  },

  {
    name: 'Embedded-Projects (Arduino UNO R3 + ESP32)',
    description: 'Hands-on embedded systems projects built with the Elegoo Super Starter Kit UNO R3 and a D1 MINI ESP32. This repo focuses on practical hardware + software integration: GPIO, PWM, analog sensing, timing/state machines, and (on ESP32) WiFi networking.',
    url: 'https://github.com/MatheusFerraro/Embedded-Projects',
    technologies: ['C++', 'Arduino IDE', 'Arduino UNO (ATmega328P)', 'ESP32 (D1 Mini)'],
  }
];