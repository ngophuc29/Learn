import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from 'redux-persist/integration/react'
import '../node_modules/nprogress/nprogress.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import Layout from './Layout';
// import App from './App';
// import User from './components/User/User';
// import Admin from './components/Admin/Admin';
// import HomePage from './components/Home/HomePage';
// import ManagerUser from './components/Admin/Content/ManagarUser';
// import DashBoard from './components/Admin/Content/DashBoard';
// import Login from './components/Auth/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
        <Layout></Layout>
    </BrowserRouter>
    {/* </React.StrictMode> */}
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
