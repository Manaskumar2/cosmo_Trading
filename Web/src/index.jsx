import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { RecoilRoot } from "recoil";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <HashRouter>
      <RecoilRoot >
        <App />
      </RecoilRoot>
    </HashRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

