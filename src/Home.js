import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <>
                <header className="header">
                    This App is made to show various new features of React
                </header>
                <ul className="list">
                    <li>
                        <Link to="/lazysuspense">Lazy Suspense loading</Link>
                    </li>
                </ul>
            </>
        );
    }
}