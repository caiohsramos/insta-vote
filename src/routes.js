import React from 'react'
import Battle from './components/battle/Battle'
import Feed from './components/feed/Feed'
import Home from './components/home/Home'
import Upload from './components/upload/Upload'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


export default () => (
  <Router>
    <>
      <Navbar />
      <Switch>
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/battle" component={Battle} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  </Router>
)
