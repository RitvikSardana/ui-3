import React from 'react'
import { useHistory,useLocation } from 'react-router'
import { makeStyles,Drawer,Typography } from '@material-ui/core'
import { List,ListItem,ListItemIcon,ListItemText, } from '@material-ui/core'
import {SubjectOutlined,AddCircleOutline} from '@material-ui/icons'
import { AppBar,Toolbar } from '@material-ui/core'
// import {format } from 'date-fns'
import { Avatar } from '@material-ui/core'

function Layout({children}) {

    const drawerWidth = 240;
    const history = useHistory()
    const location = useLocation()

    const useStyles = makeStyles((theme)=>{
        return{
            page:{
                background:'#f9f9f9',
                width:'100%',
                padding:theme.spacing(3)
            },
            drawer:{
                width:drawerWidth
            },
            drawerPaper:{
                width:drawerWidth
            },
            root:{
                display:'flex'
            },
            active:{
                background:'#f3f3f4'
            },
            title:{
                padding:theme.spacing(2)
            },
            appbar:{
                width:`calc(100% - ${drawerWidth}px)` //use spaces between operators and use PX
            },
            toolbar:theme.mixins.toolbar,
            date:{
                flexGrow:1
            },
            avatar:{
                marginLeft: theme.spacing(2)
            }

        }
    })
    const menuItems = [
        {
            text:'My Notes',
            icon:<SubjectOutlined color = 'primary' />,
            path: '/'
        },
        {
            text:'Create Note',
            icon:<AddCircleOutline color = 'primary' />,
            path: '/create'
        }
    ]
    const classes = useStyles()


    return (
        <div className={classes.root}>
            {/* app bar */}
            <AppBar
                elevation={0}
                className={classes.appbar}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Hii
                    </Typography>
                    <Typography>
                        Ritvik
                    </Typography>
                    <Avatar src='https://raw.githubusercontent.com/iamshaunjp/material-ui-tut/lesson-17/public/mario-av.png' className = {classes.avatar} />
                </Toolbar>
            </AppBar>
            {/* Side Drawer */}
            <Drawer
                className={classes.drawer}
                variant = 'permanent'
                anchor='left'
                classes={{
                    paper:classes.drawerPaper
                }}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>
                        Ritvik Notes
                    </Typography>
                </div>
                {
                    console.log(location)
                }
                {/* List Links */}
                <List>
                    {menuItems.map(item=>(
                        <ListItem 
                        button
                        key = {item.text}
                        onClick = {()=>history.push(item.path)}
                        className={location.pathname===item.path? classes.active:null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

export default Layout
