import React from 'react';
import {ReactComponent as Logo} from './logo.svg';
import SpaceFlightNewsBlog from "./SpaceFlightNewsBlog";
import './App.css';

type Props = {
    greeting?: string;
    username?: string;
    hideLearnReact?: boolean;
    spaceFlightNewsAPIProxyURL?: string;
}

function App({greeting, username, hideLearnReact, spaceFlightNewsAPIProxyURL}: Props) {
    return (
        <div className="App">
            <header className="App-header">
                <div className='App-logo'>
                    <Logo/>
                </div>
                <p>
                    {greeting ?? 'Hello'} {username ?? 'World'}!
                </p>
                {!hideLearnReact && (
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                )}
                <div className='news'>
                    <SpaceFlightNewsBlog proxyUrl={spaceFlightNewsAPIProxyURL} />
                </div>
            </header>
        </div>
    );
}

export default App;
