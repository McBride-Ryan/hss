import React from 'react';
import { Head } from '@inertiajs/react';

export default function Welcome(props) {
    return (
        <div>
            <Head title="Welcome" />
            <h1 className='text-blue-400'>Hello from Inertia.js with React!</h1>
            <p>PHP Version: {props.phpVersion}</p>
        </div>
    );
}
