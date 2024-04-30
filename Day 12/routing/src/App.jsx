import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from "./Home";
import Employee from "./Employee";
import Company from "./Company";
import Search from "./Search";
import PageNotFound from "./PageNotFound";
import HomeDashboard from "./HomeDashboard";
import Orders from "./Orders";
import { useState } from "react";

function App() {

  let [employeeId, setEmployeeId] = useState(1);
  return (
    <>
      <input type="number" onChange={ (evt) => setEmployeeId(evt.target.value)} />
      <BrowserRouter>
        <div>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  
                    <NavLink to={"/home"}>Home</NavLink> &nbsp;
                    <NavLink to={"/employee/" + employeeId}>Employee</NavLink>&nbsp;
                    <NavLink to={"/company"}>Company</NavLink>&nbsp;
                    <NavLink to={"/search"}>Search</NavLink>
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>

          <p>===============================</p>
          <Routes>
            <Route path="" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}>
              <Route path="/home/dashboard" element={<HomeDashboard/>}></Route>
              <Route path="/home/orders" element={<Orders/>}></Route>
            </Route>
            <Route path={"/employee/:employeeId"} element={<Employee/>}></Route>
            <Route path={"/employee"} element={<Employee/>}></Route>
            <Route path="/company" element={<Company/>}></Route>
            <Route path="/search" element={<Search/>}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
          <p>==================================</p>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
