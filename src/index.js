import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
const screenshots=[
  'https://github.com/JohnM-Kahura/App-folio-React-Demo/blob/master/Screenshot_20220816-025743.png?raw=true',
  'https://github.com/JohnM-Kahura/App-folio-React-Demo/blob/master/Screenshot_20220816-025743.png?raw=true',
  'https://github.com/JohnM-Kahura/App-folio-React-Demo/blob/master/Screenshot_20220816-025743.png?raw=true',
  'https://github.com/JohnM-Kahura/App-folio-React-Demo/blob/master/Screenshot_20220816-025743.png?raw=true',
]
root.render(
  <React.StrictMode>
    <NavBar/>
    <App screenshots={screenshots} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
