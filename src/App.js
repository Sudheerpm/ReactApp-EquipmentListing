import React from 'react';
import {Breadcrumb as BootstrapBreadcrumb } from 'react-bootstrap';
import {BrowserRouter as Router, NavLink, Link, Switch, Route} from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";
// Container components
import EquipmentsPage from './containers/EquipmentsPage';
import EditEquipmentPage from './containers/EditEquipmentPage';
import AddEquipmentPage from './containers/AddEquipmentPage';


// Assets
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const Device = (props) => (
    <div>
      <BreadcrumbsItem to={`/edit/${props.match.params.id}`}>Equipment {props.match.params.id}</BreadcrumbsItem>
      Equipment {props.match.params.id}
    </div>
  );
  
  const DeviceList = () => (
          <div>
      <BreadcrumbsItem to="/edit">Device Name</BreadcrumbsItem>
      <Switch>
        <Route exact path="/edit" component={EquipmentsPage} />
        <Route exact path="/edit/:id" component={Device} />
      </Switch>
    </div>
  );
  

const App = () => {
    return (
        <div>
        <Router>
            <div className="App">
                <div className="App-header">
                    <nav className="main-nav">
                        <ul>
                            <li><NavLink activeClassName="selected" to="/Equipments">Equipment list</NavLink></li>
                            <li><NavLink activeClassName="selected" to="/add">Add Equipment</NavLink></li>
                        </ul>
                    </nav>
                </div>

                <div className="container">
                    <Route path="/Equipments" component={EquipmentsPage}/>
                    <Route path="/add" component={AddEquipmentPage}/>
                    <Route path="/edit/:serialno" component={EditEquipmentPage}/>
                </div>
            </div>
        </Router>
        </div>
    );
};



export default App;