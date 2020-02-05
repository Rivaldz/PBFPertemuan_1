import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Navigation from './components/Navigation';
// import { Button } from 'react-bootstrap';
// import { Tab ,Tabs } from 'react-bootstrap'; 
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';
  

function App() {
  return (
 <div className="App">
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item>Action</NavDropdown.Item>
                    <NavDropdown.Item>Another action</NavDropdown.Item>
                    <NavDropdown.Item>Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <div className=""> 
        <div className="row mb-4">
          <div className="col-sm-12 grid-margin">
            <div className="card h-100">
            {/* <img src={logo.svg}/> */}
            <div align= "center">
            <img src={ require('/Users/rivaldosetyo/kuliah/PBF/Pertemuan_1/src/logo.svg') } 
             style={{width:700,height:700}} 
              />
              </div>
              <div className="card-body">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>  
                      <td>Larry</td>  
                      <td>Redbull</td>  
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
