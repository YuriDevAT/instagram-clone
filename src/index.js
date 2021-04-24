import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';

ReactDOM.render(
<FirebaseContext.Provider value={{ firebase, FieldValue }}>
<App />
</FirebaseContext.Provider>
, document.getElementById('root'));
