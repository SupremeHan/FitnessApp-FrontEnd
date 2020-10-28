import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Tab, Tabs, Box, AppBar, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import UserWorkout from '../UserDashboard/modules/UserWorkout';
import UserProfile from '../UserDashboard/modules/UserProfile';
import UserStats from './modules/UserStats';
import { Link } from 'react-router-dom';
import authService from '../../services/auth.service';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    header: {
      display: 'flex',
      height: '50px',
      backgroundColor: theme.palette.primary,
      alignItems: 'center',
      justifyContent: 'flex-end',
      
    },
    headerBtn: {
      marginRight: '20px'
    }
}));


function User() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <div className={classes.root}>
        <div className={classes.header}>
          <Button
            className={classes.headerBtn}
            onClick={() => (authService.logout())}
          >
            <Link to='/'>Logout</Link>
          </Button>
        </div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="full width tabs example"
          centered
        >
          <Tab label="Workouts" {...a11yProps(0)} />
          <Tab label="Profile" {...a11yProps(1)} />
          <Tab label="Stats" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
     
        <TabPanel value={value} index={0} dir={theme.direction}>
          <UserWorkout/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <UserProfile/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <UserStats/>
        </TabPanel>
      
    </div>
      );
}

export default User;