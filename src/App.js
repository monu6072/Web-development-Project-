import './App.css';
import { RouterProvider } from 'react-router-dom';
import React from 'react';
import Router from './Routes/Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}
export default App;
