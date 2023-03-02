import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import isBetween from 'dayjs/plugin/isBetween'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import dayjs from 'dayjs'
import 'react-toastify/dist/ReactToastify.css'
import 'react-image-lightbox/style.css'
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify'
import configureStore, { history } from "./config/store";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker'
import "./mobile.css";

export const store = configureStore()
dayjs.extend(isBetween)
dayjs.extend(timezone)
dayjs.extend(utc)

ReactDOM.render(
    <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
            <React.StrictMode>
                <App history={history}/>
                <ToastContainer />
            </React.StrictMode>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister()
