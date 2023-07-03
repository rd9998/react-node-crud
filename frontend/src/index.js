import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import ShowComponent from './components/ShowComponent';
import CreateComponent from './components/CreateComponent';


export default function Index(){
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/app' element={<App />} />
        <Route path='/' element={<CreateComponent />} />
        <Route path='/posts' element={<ShowComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
