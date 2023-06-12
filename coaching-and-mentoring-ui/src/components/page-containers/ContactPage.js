import React from 'react';
import { Grid, Typography, List, ListItem, ListItemText } from '@mui/material';
import {Link} from 'react-router-dom';

function ContactPage() {
    const options = [
        { text: "Conduction of Workshop and both Camps/Talks/Retreats", link:"/contact/workshop" },
        { text: "Building your Curriculum/Course Creation", link:"/contact/course" },
        { text: "Get Mentored at our Company", link:"/contact/mentor" },
        { text: "Call us as Guest", link:"/contact/guest" },
        { text: "Have us as Analyst OR Dissuasion with us on what is already created", link:"/contact/analyst" }];

    return (
        <div style={{ marginTop: "50px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid container>
                <Grid item>
                    <h2> Contact Options</h2>
                </Grid>
                <Grid item xs={12}>
                    <List style={{ textAlign: 'center' }}>
                        {options.map((option) => (
                            <Link to={option.link}>
                                <ListItem key={option.text}>
                                    <ListItemText primary={option.text} />
                                </ListItem>
                            </Link>

                        ))}
                    </List>
                </Grid>
            </Grid>
        </div>
    );
}

export default ContactPage;
