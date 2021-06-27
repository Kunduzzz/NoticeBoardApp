// import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom'; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

import ShowNotices from './components/ShowNotice/showNotice';
import AddNotices from './components/AddNotice/addNotice';



function App() {
  return <Fragment>
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/add">Notice Board</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/add">Add Notice</Nav.Link>
            <Nav.Link href="/show">Show Notice</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/add" component={AddNotices}/>
          <Route exact path="/show" component={ShowNotices}/>
          <Route exact path="/show:date" component={ShowNotices}/>
          <Redirect from="*" to="/add" />
        </Switch>
      </Router>     
    </div>
  </Fragment>
}

export default App;