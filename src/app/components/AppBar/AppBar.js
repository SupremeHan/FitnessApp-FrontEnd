import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const drawerWidth = '100%';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        boxShadow: 'none',
        height: '100px',
        justifyContent: 'center',
  
      },
      menuButton: {
        marginRight: theme.spacing(2),
        
      },
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#eb5e28" 
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
      },
      active: {
        backgroundColor: 'gray'
      },
      listItemText: {
        fontSize: '3rem',
        paddingLeft: '20px',
        [theme.breakpoints.down('sm')]: {
          fontSize: '2rem'
        },
        fontFamily: 'Teko'
      },
      listItem: {
        width: '100%'
      }
}));

function SideBarDrawer() {
    const dummyCategories = [
        {path: '/', title: 'Home'},
        {path: '/article', title: 'Article'},
        {path: '/login', title: 'Login'}
    ];
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [navbar, setNavbar] = useState(false);

    function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

  const changeBackground = () => {
    if(window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  const drawer = (
    <div>
      <List>
        {dummyCategories.map((text, index) => (
          <Link to={text.path}>
          <ListItem button key={index} className={classes.listItem}>
              
            <ListItemText classes={{primary:classes.listItemText}} primary={text.title} />
             
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return(
      <div className={classes.root}>
          <CssBaseline />
      <AppBar position="fixed" color="transparent" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            size="medium"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon
            fontSize='large'
            />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton fontSize="large" onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon/>
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        
      </nav>
      </div>
  );
};

export default SideBarDrawer;