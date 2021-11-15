import { Box } from "@mui/system";
import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Header = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <Navbar
        bg="primary"
        className="px-2"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">ABX MOTOR BIKE</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavLink className="text-white m-3" to="/">
              Home
            </NavLink>
            <NavLink className="text-white m-3 fs-bold" to="/bikeexplore">
              Expolor Bike
            </NavLink>
            {user?.email ? (
              <Box>
                 <NavLink className="text-white m-3 fs-bold" to="/deshboard">
                  Deshboard
                </NavLink>
                <Button
                  onClick={logout}
                  className="text-info m-3"
                  color="inherit"
                >
                  LogOut
                </Button>
              </Box>
            ) : (
              <NavLink className="text-white m-3" to="/login">
                Login
              </NavLink>
              
            )}
            <Navbar.Text>User {user?.displayName}</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
