import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Dashboard from "./Dashboards/Dashboard";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AddProduct from "./AddProduct/AddProduct";
import Order from "./Order/Order";
import Pay from "./Pay/Pay";
import Review from "./Review/Review";
import ManageAllOrder from "./ManageAllOrder/ManageAllOrder";
import useAuth from "../../hooks/useAuth";
import AdminRoute from "../Authentication/AdminRoute/AdminRoute";




const drawerWidth = 200;

function Deshboardhome(props) {
  const { window } = props;
  const {admin,user,logout}=useAuth()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Link to="/bikeexplore">
        <Button color="inherit">BikeExplore</Button>
      </Link>
      <Divider />
      <List>
        {admin && (
          <Box>
          <Link to={`${url}/deshboard`}>
          <Button color="inherit" >Added Bikes</Button>
        </Link>
            <Link to={`${url}/makeAdmin`}>
              <Button color="inherit">Make Admin</Button>
            </Link>

            <Link to={`${url}/addproduct`}>
              <Button color="inherit">Add product</Button>
            </Link>
            <Link to={`${url}/manageallorder`}>
              <Button color="inherit">Manage all order</Button>
            </Link>
          </Box>
        )}
           {!admin && (
          <Box>
            <Link className="d-block" to={`${url}/order`}>
              <Button color="inherit">Order</Button>
            </Link>
            <Link className="d-block" to={`${url}/pay`}>
              <Button color="inherit">pay</Button>
            </Link>
            <Link className="d-block" to={`${url}/review`}>
              <Button color="inherit">review</Button>
            </Link>
          </Box>
        )}
        <Button color="inherit" onClick={logout}>LogOut</Button>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
           <div>{ 
           admin && <h1>Hello Admin {user.email}</h1>
           }
           {
             !admin &&<h1>Hello user {user.email}</h1>
           }
           
           </div>
          </Route>
          <AdminRoute exact path={`${path}/deshboard`}>
            <Dashboard></Dashboard>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addproduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manageallorder`}>
            <ManageAllOrder></ManageAllOrder>
          </AdminRoute>
          <Route path={`${path}/order`}>
            <Order></Order>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Deshboardhome.propTypes = {
  /**
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.xhxaw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
   */
  window: PropTypes.func,
};

export default Deshboardhome;
