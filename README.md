Manual Setup (without Breeze)

If you prefer to set up everything manually, here's how:

1. Create a new Laravel Project:
Bash

composer create-project laravel/laravel my-inertia-manual-app
cd my-inertia-manual-app

2. Install Inertia.js Server-Side Adapter:
Bash

composer require inertiajs/inertia-laravel

3. Publish Inertia Middleware:
Bash

php artisan inertia:middleware

4. Register Inertia Middleware:

Open bootstrap/app.php and add HandleInertiaRequests::class to your web middleware group.
PHP

use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            HandleInertiaRequests::class, // Add this line
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();

5. Create a Root Blade Template:

Create resources/views/app.blade.php and add the following:
HTML

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @viteReactRefresh
    @vite(['resources/js/app.jsx', 'resources/css/app.css'])
    @inertiaHead
</head>
<body>
    @inertia
</body>
</html>

6. Install Client-Side Dependencies:
Bash

npm install react react-dom @inertiajs/react @vitejs/plugin-react

7. Configure Vite:

Open vite.config.js and ensure it looks like this:
JavaScript

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            // This is a common alias to make imports easier
            '@': '/resources/js',
        },
    },
});

8. Initialize Inertia.js on the Client-Side:

Rename resources/js/app.js to resources/js/app.jsx and add the following code:
JavaScript

import './bootstrap'; // If you have any bootstrap.js content
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    // Resolve page components from the 'Pages' directory
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        // Create a React root and render the Inertia App component
        createRoot(el).render(<App {...props} />);
    },
});

9. Create Your First React Page:

Create a new directory resources/js/Pages and inside it, create a file named Welcome.jsx (or any other name you prefer):
JavaScript

import React from 'react';
import { Head } from '@inertiajs/react';

export default function Welcome(props) {
    return (
        <div>
            <Head title="Welcome" />
            <h1>Hello from Inertia.js with React!</h1>
            <p>Laravel Version: {props.laravelVersion}</p>
            <p>PHP Version: {props.phpVersion}</p>
        </div>
    );
}

10. Define a Route to Render Your React Page:

Open routes/web.php and add a route that renders your Welcome component:
PHP

<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

11. Install Node Dependencies and Compile Assets:
Bash

npm install
npm run dev

12. Start the Laravel Development Server:
Bash

php artisan serve

Now, visit http://localhost:8000 (or your server's address), and you should see your React component rendered via Inertia.

Key Concepts of Inertia.js

    Server-Driven Navigation: Instead of building a full API for your frontend to consume, Inertia allows you to use your existing Laravel routes and controllers to return Inertia responses.

    Pages as Components: Your frontend framework (React) components become your "pages."

    Props: Data from your Laravel backend is passed as props directly to your React components.

    Shared Data: You can share common data (like authenticated user, flash messages) across all Inertia requests using the share method in your HandleInertiaRequests middleware.

    Links: Use Inertia's Link component (@inertiajs/react) for navigation, which prevents full page reloads and only fetches new props and renders the relevant component.

    Forms: Inertia provides useForm for easily handling form submissions, including file uploads and displaying validation errors.

Next Steps

    Explore Inertia.js Documentation: The official Inertia.js documentation is an excellent resource for learning more about its features: https://inertiajs.com/

    Laravel Breeze (if you used it): Familiarize yourself with the files and structure Breeze provides.

    Build Your Application: Start creating more React components in your resources/js/Pages directory and define corresponding routes and controllers in Laravel.

    Form Handling: Learn how to submit forms using useForm from @inertiajs/react.

    Layouts: Create a main layout component in React to wrap your page components, allowing for consistent headers, footers, and navigation.

    CSS Framework: Consider integrating a CSS framework like Tailwind CSS (often pre-configured with Breeze) for faster styling.
