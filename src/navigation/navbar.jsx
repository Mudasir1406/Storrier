import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { HOMEPAGR_URL, ABOUTPAGE_URL, HISTORYPAGE_URL, USERPROFILE_URL } from './PageLinks'
import { NavLink } from "react-router-dom";
import SearchBox from '../components/SearchBox'
import UserProfile from '../components/UserProfile'
import { HiOutlineBookmark } from "react-icons/hi";

const drawerWidth = 240;
const navItems = [
  { Name: "Home", Link: HOMEPAGR_URL },
  { Name: "About Us", Link: ABOUTPAGE_URL },
  { Name: "History", Link: HISTORYPAGE_URL },
  { Name: "User Profile", Link: USERPROFILE_URL },
];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        STORRIER
      </Typography>
      <Divider />
      <List>
        {navItems.map((value, index) => (
          <ListItem key={index} disablePadding>
            <NavLink to={value.Link} style={{
              padding: '10px',
              display: 'inlineBlock',
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 500
            }}>
              <ListItemText primary={value.Name} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: 'transparent', boxShadow: 0, color: 'black', position: 'static' }}>
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
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            STORRIER
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1, ml: 4, mr: 2 }}>
            {navItems.map((value, index) => (
              <NavLink to={value.Link} key={index} style={{
                padding: '10px 15px 10px',
                display: 'inlineBlock',
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 500
              }}>
                {value.Name}
              </NavLink>
            ))}
          </Box>
          <Box display='flex' alignItems='center'>
            <SearchBox />
            <UserProfile />
            <Box display="flex" alignItems='center' sx={{
              background: '#F5F5F5',
              lineHeight: '1',
              padding: '10px',
              borderRadius: '10px',
              marginLeft: '10px'
            }}><HiOutlineBookmark color="#3E3232" style={{ width: '20px', heigth: '22px' }} /></Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default NavBar;
