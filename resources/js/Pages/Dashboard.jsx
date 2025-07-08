import React from 'react';
import { Head } from '@inertiajs/react';
import Layout from '../Components/Layout';

export default function Welcome(props) {
    return (
        <div>
            <Head title={props.page} />
            <Layout>
                <p>PAGE: {props.page}</p>
            </Layout>
        </div>
    );
}
