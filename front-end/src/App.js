// import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

import ShowNotices from './components/ShowNotice/showNotice';
import AddNotices from './components/AddNotice/addNotice';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom'; 
function App() {
  return (

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
          <Redirect from="*" to="/add" />
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;