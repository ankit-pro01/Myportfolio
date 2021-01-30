import React  from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import SimplePortfolio from "./Components/SimplePortfolio/SimplePortfolio"
import AnimatedPortFolio from './Components/PortfolioWorld/AnimatedPortFolio';



export default function App() {


  return (
    <>
      <Router>
        <Switch>
          <Route exact path = {"/"} component = {Home} />
          <Route path = {"/world"} component = {AnimatedPortFolio} />
          <Route path = {"/simple"} component  = {SimplePortfolio} />
        </Switch>
      </Router>

  </>
  )
} 