import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ErrorBoundaries from "./ErrorBoundaries";

export default class Home extends Component {
    render() {
        return (
            <>
                <ErrorBoundaries>
                    <header className="header">
                        This App is made to show various new features of React
                    </header>
                    <ul className="list">
                        <li>
                            <Link to="/lazysuspense">Lazy Suspense</Link>
                        </li>
                        <li>
                            <Link to="/errorboundaries">Error Boundaries</Link>
                        </li>
                        <li>
                            <Link to="/statehook">State Hooks</Link>
                        </li>
                    </ul>
                </ErrorBoundaries>
            </>
        );
    }
}