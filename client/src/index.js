import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { datadogRum } from '@datadog/browser-rum';

const root = ReactDOM.createRoot(document.getElementById('root'));

datadogRum.init({
  applicationId: 'c3492ab0-25bb-4b84-a896-39539b75cdff',
  clientToken: 'pub9b634a2bde7143fde8f7bef44c08e01d',
  site: 'datadoghq.com',
  service: 'pastebin',
  version: "1.0",
  sampleRate: 100,
  trackInteractions: true,
  defaultPrivacyLevel: 'mask-user-input',
  allowedTracingOrigins: ["http://localhost:5500", "http://localhost:5500/"]
});

datadogRum.startSessionReplayRecording();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
