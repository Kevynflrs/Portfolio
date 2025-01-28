import React from 'react';
import Navbar from '../../Components/Common/Navbar/Navbar';
import Preview from '../Preview/Preview';

export default function Header() {
    return (
        <div className="min-h-screen">
            <Navbar/>
            <div className="h-[calc(100vh-6rem)]">
                <Preview/>
            </div>
        </div>
    );
}