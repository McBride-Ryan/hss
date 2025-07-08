<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the Welcome page.
     */
    public function index()
    {
        return Inertia::render('Welcome', [
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'page' => 'Welcome'

        ]);
    }

    public function dashboard()
    {
        return Inertia::render('Dashboard', [
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'page' => 'Dashboard'
        ]);
    }

    public function about()
    {
        return Inertia::render('About', [
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'page' => 'About'
        ]);
    }
}
