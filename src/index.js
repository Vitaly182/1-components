import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'Hi, what\'s up?', likesCount: 15}, 
  {id: 2, message: 'The best or nothing', likesCount: 25}
]

let dialogs = [
  {id: 1, name: 'Vitaly'}, 
  {id: 2, name: 'Max'}, 
  {id: 3, name: 'Bork'}, 
  {id: 4, name: 'Ork'}, 
  {id: 5, name: 'Lind'}
]

let messages = [
  {id: 1, message: 'Hi'}, 
  {id: 2, message: "Who's that ?"}, 
  {id: 3, message: 'Nothing'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
