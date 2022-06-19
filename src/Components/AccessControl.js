import React, { useState } from "react";
import './AccessControl.css'
import { useHistory,useLocation } from "react-router-dom";
import TableComponent from "./TableComponent";
import RssFeedOutlinedIcon from '@material-ui/icons/RssFeedOutlined';
import BorderAllSharpIcon from '@material-ui/icons/BorderAllSharp';
import CachedSharpIcon from '@material-ui/icons/CachedSharp';
import { Typography } from "@material-ui/core";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';



function AccessControl() {



  const[control,setControl] = useState(false)
  const[members,setMembers] = useState(false)


  const history = useHistory();
  const location = useLocation();
  const boardItems = [
    {
      text: "Permissions",
      icon: <RssFeedOutlinedIcon/>,
      path: "/AccessControl",
    }
  ];

  return (
    <>
    <div className='Access'>
      <div style={{marginBottom:10}}>
        <ul>
          {boardItems.map((item) => (
            <li
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? 'active' : null
              }
            >
              {item.icon}
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className = 'Access_refresh'>
        <CachedSharpIcon/>
        <h5>Last Updated 15 mins ago</h5>
      </div>
    </div>
    <hr></hr>
    <div className='Access_details'>
      <KeyboardBackspaceIcon/>
      <Typography color="primary">Management Team</Typography>       
      <EditOutlinedIcon style={{marginLeft:20}} />
    </div>
    <div className='Access_control'>
              <Typography 
                variant='h6' 
                onClick={()=>setControl(!control)}
                className={control?'active':""}
                style={{cursor:'pointer'}}
              >
                Access Control
              </Typography>
              <div className='Separator'></div>
              <Typography 
                variant='h6' 
                onClick={()=>setMembers(!members)}
                className={members?'active':""}
                style={{cursor:'pointer'}}
              >
                Assigned Members
              </Typography>
    </div>
    <hr style={{marginBottom:15}} />
    <TableComponent />
    </>
  );
}

export default AccessControl;
