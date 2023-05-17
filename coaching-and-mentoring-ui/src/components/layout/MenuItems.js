import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { HiHome } from 'react-icons/hi';
import StudentHome from '../page-containers/student/StudentHome'
import { Link, useNavigate, useLocation } from "react-router-dom";
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import './MenuItem.css'


export default function MenuItems(
    {
        open,
        handleMenuChange
    }
) {

    const navigate = useNavigate();
    const location = useLocation();
    const [custMenuOpen, setCustMenuOpen] = useState(false);
    const [productMenuOpen, setProdcutMenuOpen] = useState(false);


    return (

        <List 
        className="list"
        >
            {location.pathname.startsWith("/student/") ?
            <ListItem className="list-item" onClick={() => {
                navigate("student/home")
            }}>
                <ListItemButton
                    className="list-item-button"
                >
                    <ListItemIcon
                        className="list-item-icon"
                    >
                        <HiHome />
                    </ListItemIcon>
                    <ListItemText className="list-item-text" primary="Home" />
                </ListItemButton>
            </ListItem> : null }

            {location.pathname.startsWith("/mentor/") ?
            <ListItem className="list-item" onClick={() => {
                navigate("mentor/home")
            }}>
                <ListItemButton
                    className="list-item-button"
                >
                    <ListItemIcon
                        className="list-item-icon"
                    >
                        <HiHome />
                    </ListItemIcon>
                    <ListItemText className="list-item-text" primary="Home" />
                </ListItemButton>
            </ListItem> : null }

            {location.pathname.startsWith("/student/") ?
            <ListItem className="list-item" onClick={() => {
                navigate("/student/test1")
            }}>
                <ListItemButton
                    className="list-item-button"
                >
                    <ListItemIcon
                        className="list-item-icon"
                    >
                        <HiHome />
                    </ListItemIcon>
                    <ListItemText className="list-item-text" primary="Student Test 1" />
                </ListItemButton>
            </ListItem> :null }

            {location.pathname.startsWith("/student/") ?
            <ListItem className="list-item" onClick={() => {
                navigate("/student/test2")
            }}>
                <ListItemButton
                    className="list-item-button"
                >
                    <ListItemIcon
                        className="list-item-icon"
                    >
                        <HiHome />
                    </ListItemIcon>
                    <ListItemText className="list-item-text" primary="Student Test 2" />
                </ListItemButton>
            </ListItem> : null }

            {/* <ListItem disablePadding sx={{ display: 'block' }} >
                <ListItemButton sx={buttonStyle} onClick={() => {
                    setCustMenuOpen(!custMenuOpen)
                    navigate("/customer/list")
                }}>
                    <ListItemIcon sx={iconStyle}>
                        <HiHome />
                    </ListItemIcon>
                    <ListItemText primary="Customer" sx={{ opacity: open ? 1 : 0 }} />
                    {custMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={custMenuOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ marginLeft: "20px" }} >
                        <ListItemButton sx={buttonStyle} onClick={() => {
                            navigate("/customer/create")
                        }}>
                            <ListItemIcon sx={iconStyle}>
                                <HiHome />
                            </ListItemIcon>
                            <ListItemText primary="Create Customer" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </ListItem>


            <ListItem disablePadding sx={{ display: 'block' }} >
                <ListItemButton sx={buttonStyle} onClick={() => {
                setProdcutMenuOpen(!productMenuOpen)
                navigate("/product/list")
            }}>
                    <ListItemIcon sx={iconStyle}>
                        <HiHome />
                    </ListItemIcon>
                    <ListItemText primary="Product" sx={{ opacity: open ? 1 : 0 }} />
                    {productMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={productMenuOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ marginLeft: "20px" }}   >
                        <ListItemButton sx={buttonStyle} onClick={() => {
                            navigate("/product/create")
                        }}>
                            <ListItemIcon sx={iconStyle}>
                                <HiHome />
                            </ListItemIcon>
                            <ListItemText primary="Create Product" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </ListItem> */}
        </List>
    )
}