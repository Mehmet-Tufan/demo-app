import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatPage from './pages/ChatPage';
import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: "AIzaSyD1s9SZGq3llLMCgbMD1pTwzZLuBIK8vDg",
//   authDomain: "mehmet-ac65f.firebaseapp.com",
//   databaseURL: "https://mehmet-ac65f-default-rtdb.firebaseio.com",
//   projectId: "mehmet-ac65f",
//   storageBucket: "mehmet-ac65f.firebasestorage.app",
//   messagingSenderId: "450722600028",
//   appId: "1:450722600028:web:15fd853f2a6bfcf1508299",
//   measurementId: "G-66QH83PDB2"
// };

const firebaseConfig = {
  apiKey: "AIzaSyD3D2-KHsectdGvQo-_E2U_IlzZM7DsrGU",
  authDomain: "muhammet-chat.firebaseapp.com",
  databaseURL: "https://muhammet-chat-default-rtdb.firebaseio.com",
  projectId: "muhammet-chat",
  storageBucket: "muhammet-chat.firebasestorage.app",
  messagingSenderId: "814084614127",
  appId: "1:814084614127:web:a4d80030901d186562381a",
  measurementId: "G-2H982MGC15"
};
 




// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <ChatPage/>

);


