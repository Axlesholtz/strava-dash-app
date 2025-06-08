import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>GPX Viewer</h1>
            <nav>
                <ul>
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#map">Map</a></li>
                    <li><a href="#upload">Upload GPX</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;