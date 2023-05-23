import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";
import { Header } from '../../common/HeaderFooter';
import '../Home.css';
import { Card, CardContent, Typography, Grid } from '@mui/material';


function MentorHome() {

    const navigate = useNavigate();

    const breadcrumbs = [
        // { label: 'Home', link: '/home' },
        // { label: 'Products', link: '/products' },
        // { label: 'Category', link: '/products/category' },
        // { label: 'Product', link: '/products/category/product' },
    ];


    return (
        <>
            <div style={{ width: "100%" }}>
                <Header title="KRIYA Home Page"
                    breadcrumbs={breadcrumbs} />


                <Grid container spacing={12} justifyContent="center" alignItems="center" style={{ height: '80vh' }} >
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{
                            backgroundImage: 'linear-gradient(to right, #ff5466, #ffcc43)',
                            cursor: "pointer"
                        }}
                        // onClick={() => navigate('/student/test1')}
                        >
                            <CardContent onClick={()=> navigate('/mentor/student/list')}>
                                <Typography variant="h5" component="div" align="center">
                                    Student List
                                </Typography>
                                {/* <Typography variant="body2" color="text.secondary">
                                    <ul>
                                        <li>
                                            <Link to="/student/signup">
                                                Register Student
                                    </Link>
                                        </li>
                                        <li>
                                            <Link to="/login">
                                                Student Login
                                    </Link>
                                        </li>
                                    </ul>
                                </Typography> */}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{
                            backgroundImage: 'linear-gradient(to right, #ff5466, #ffcc43)',
                            cursor: "pointer"
                        }}
                        >
                            <CardContent onClick={()=> navigate('/student/signup')}>
                                <Typography variant="h5" component="div" align="center">
                                    Register Student
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </div>
        </>


    )
}

export default MentorHome;