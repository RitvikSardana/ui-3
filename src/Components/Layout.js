import React from "react";
import { makeStyles, Drawer, Typography } from "@material-ui/core";
import { useHistory, useLocation } from "react-router";
import { SubjectOutlined } from "@material-ui/icons";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SecurityOutlinedIcon from "@material-ui/icons/SecurityOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { AppBar, Toolbar } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
function Layout({ children }) {
  const drawerWidth = 280;
  const history = useHistory();
  const location = useLocation();

  const useStyles = makeStyles((theme) => {
    return {
      page: {
        // background:'#f9f9f9',
        width: "100%",
        padding: theme.spacing(3),
      },

      drawer: {
        width: drawerWidth,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      root: {
        display: "flex",
      },
      active: {
        background: "#E1D8F1",
        color:'#673AB7',
        "&:hover": {
          background: "#E1D8F1",
        },
      },
      title: {
        padding: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        fontWeight: 600,
        color: "#330B86",
      },
      appbar: {
        width: `calc(100% - ${drawerWidth}px)`, //use spaces between operators and use PX
        justifyContent: "flex-end",
        background: "white",
        color: "black",
      },
      toolbar: theme.mixins.toolbar,
      date: {
        flexGrow: 1,
      },
      avatar: {
        marginRight: theme.spacing(2),
      },
      icon: {
        marginRight: 5,
      },
      appbar_div: {
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }
    };
  });

  const menuItems = [
    {
      text: "Projects",
      icon: <SubjectOutlined color="primary" />,
      path: "/Projects",
    },
    {
      text: "Organisation Profile",
      icon: <LocalMallOutlinedIcon color="primary" />,
      path: "/Profile",
    },
    {
      text: "Access Control",
      icon: <SecurityOutlinedIcon color="primary" />,
      path: "/AccessControl",
    },
  ];

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            <HomeOutlinedIcon className={classes.icon} color="primary" />
            MY DASHBOARD
          </Typography>
        </div>
        <List>
          {menuItems.map((item,index) => (
            <ListItem
              button
              key={item.index}
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <AppBar elevation={0} className={classes.appbar}>
        <Toolbar style={{ justifyContent: "flex-end" }}>
          <div className={classes.appbar_div}>
            <Avatar src="" className={classes.avatar} />
            <Typography style={{ marginRight: 16 }}>Kishore</Typography>
            <NotificationsNoneOutlinedIcon style={{ marginRight: 8 }} />
            <HelpOutlineOutlinedIcon />
          </div>
        </Toolbar>
      </AppBar>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
