<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

# Booking Exchange

## Introduction

Booking Exchange is a web application built with Laravel, React, Inertia, and MySQL as the database management system.

## Technologies Used

- [Laravel](https://laravel.com): Laravel is a web application framework with expressive, elegant syntax.
- [React](https://reactjs.org/): React is a JavaScript library for building user interfaces.
- [Inertia.js](https://inertiajs.com/): Inertia is a library that allows you to create fully client-side rendered, single-page apps, without building an API.
- MySQL: MySQL is an open-source relational database management system.

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. It provides tools required for building large, robust applications.

## Learning Resources

- **Documentation**: Laravel has extensive [documentation](https://laravel.com/docs) and video tutorial library.
- **Laravel Bootcamp**: A guided course for building modern Laravel applications from scratch.
- **Laracasts**: Thousands of video tutorials covering Laravel, modern PHP, unit testing, and JavaScript.

## Running the Application

To run the Booking Exchange application locally, follow these steps:

1. **Clone the Repository**: 
    ```bash
    git clone https://github.com/your_username/booking-exchange.git
    ```
2. **Install Dependencies**:
    ```bash
    cd booking-exchange
    composer install
    npm install
    ```
3. **Set Environment Variables**:
    - Rename the `.env.example` file to `.env`.
    - Update the database connection details in the `.env` file according to your local setup.
4. **Generate Application Key**:
    ```bash
    php artisan key:generate
    ```
5. **Run Migrations**:
    ```bash
    php artisan migrate
    ```
6. **Start the Development Server**:
    ```bash
    php artisan serve
    ```
7. **Run Frontend Assets**:
    ```bash
    npm run dev
    ```
8. **Access the Application**:
    Open your web browser and visit `http://localhost:8000` to access the Booking Exchange application.

## Group Members
1. Patil Khemraj - 2023mt93177
2. Agrawal Lavleen Mahesh - 2023mt93178

## Contributing

Thank you for considering contributing to the Booking Exchange project! You can find the contribution guide in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

To ensure that the Booking Exchange community is welcoming to all, please review and abide by our [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover any security vulnerabilities within the Booking Exchange application, please send an email to the development team at [admin@bookingexchange.com](mailto:admin@bookingexchange.com). All security vulnerabilities will be promptly addressed.

## License

Booking Exchange is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
