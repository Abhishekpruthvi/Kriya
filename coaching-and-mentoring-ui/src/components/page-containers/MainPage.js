import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Paper } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { withStyles, makeStyles } from "@mui/styles";
import AccountDropdown from '../layout/AccountDropdown';
import { Button, Container } from '@mui/material';
import { CustomizedPrimaryButton, WhiteButton } from '../common/CustomizedPrimaryButton';
import { Link, useNavigate } from "react-router-dom";
import './MainPage.css'
import studentProgram from '../../assets/images/studentProgram.jpeg';
import aboutUs from '../../assets/images/aboutUs.jpeg';
export default function MainPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  return (
    <>

      {/* <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>

        <Grid container style={{ flex: 1 }} >


          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', width: "100vh", backgroundColor: "lightsteelblue" }}>
            <Link to="/contact">
              <h1>Contact Us</h1>
            </Link>
            
          </Grid>
          <Grid item xs={12} style={{ height: '50%', width: "100vh", backgroundColor: "lightsteelblue" }}>
           
          </Grid>

        </Grid>
      </div> */}

      <div style={{marginTop:"50px", textAlign:"center"}}>
        
        <img src={aboutUs} alt="Image Description" />

        <img src={studentProgram} alt="Image Description" />
      </div>
    </>
  )
}