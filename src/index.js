import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context'
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="cb8bbbdb-84cc-4fd6-b0ae-77305078eab5" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);