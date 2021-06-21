import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HelloWolrd from './components/HelloWorld';

// Em Route declare "path" e "component" para cada rota
// Exact somente é encessário para a rota /
export default function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={HelloWolrd}/>
    </BrowserRouter>
  );
}