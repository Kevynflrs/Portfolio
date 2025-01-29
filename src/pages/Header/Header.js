import React from 'react';
import Navbar from '../../Components/Common/Navbar/Navbar';
import Preview from '../Preview/Preview';

export default function Header() {
    return (
        <section className="min-h-screen">
            <navbar>
                <Navbar />
            </navbar>
            <section className="h-[calc(100vh-6rem)]">
                <Preview />
            </section>
        </section>
    );
}