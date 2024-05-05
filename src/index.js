import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from "./app";
import './css/mainCSS.css';


const mainReactApp = ReactDOMClient.createRoot(document.getElementById("mainReactApp"));

mainReactApp.render(<App />)
