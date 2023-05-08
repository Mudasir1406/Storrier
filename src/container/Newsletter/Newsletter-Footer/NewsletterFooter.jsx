import React from 'react'
import { Grid, Typography } from "@mui/material";
import styles from './newsletter-footer.module.scss'
import { SIGNIN_URL } from '../../../navigation/PageLinks'
import Container from '@mui/material/Container';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { NavLink, Link } from "react-router-dom";

const footerNav = [
    { Name: "Privacy Policy", Link: SIGNIN_URL },
    { Name: "Terms of Service", Link: SIGNIN_URL },
    { Name: "Copyright Policy", Link: SIGNIN_URL },
    { Name: "Data Policy", Link: SIGNIN_URL },
    { Name: "Accessibility", Link: SIGNIN_URL },
    { Name: "Help", Link: SIGNIN_URL },
];
const footerNav2 = [
    { Name: "Politics", Link: SIGNIN_URL },
    { Name: "World", Link: SIGNIN_URL },
    { Name: "Economy", Link: SIGNIN_URL },
    { Name: "Science & Tech", Link: SIGNIN_URL },
    { Name: "Business", Link: SIGNIN_URL },
];
const footerNav3 = [
    { Name: "Travel", Link: SIGNIN_URL },
    { Name: "Climate", Link: SIGNIN_URL },
    { Name: "Lifestyle", Link: SIGNIN_URL },
    { Name: "Food", Link: SIGNIN_URL },
    { Name: "Sports", Link: SIGNIN_URL },
];


const NewsletterFooter = () => {
    return (
        <footer className={styles.footer}>
            <Container maxWidth="xl">
                <Grid container sx={{ py: 5 }}>
                    <Grid item xs={12} md={2} sx={{ textAlign: 'center' }}>
                        <Link href={SIGNIN_URL}>
                            <img
                                src={require("../../../assets/newsletter.png")}
                                alt="newsletter logo"
                                style={{ width: '90%' }}
                            />
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <List sx={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center' }}>
                            {footerNav.map((value, index) => (
                                <ListItem sx={{ justifyContent: ' center', width: 'initial', padding: '0 5px' }} key={index} disablePadding>
                                    <NavLink to={value.Link} style={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                    }}>
                                        <ListItemText primary={
                                            <Typography sx={{ fontWeight: 300, fontSize: '0.9rem' }}>
                                                {value.Name}
                                            </Typography>
                                        } />
                                    </NavLink>
                                </ListItem>
                            ))}
                        </List>
                        <Typography sx={{ textAlign: 'center', fontWeight: 300 }}>© 2023 Newsletter, All rights reserved</Typography>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <List>
                            {footerNav2.map((value, index) => (
                                <ListItem key={index} disablePadding>
                                    <NavLink to={value.Link} style={{
                                        padding: '2px 10px',
                                        display: 'inlineBlock',
                                        textDecoration: 'none',
                                        color: 'inherit',
                                    }}>
                                        <ListItemText primary={
                                            <Typography sx={{ fontWeight: 700 }}>
                                                {value.Name}
                                            </Typography>
                                        } />
                                    </NavLink>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <List>
                            {footerNav3.map((value, index) => (
                                <ListItem key={index} disablePadding>
                                    <NavLink to={value.Link} style={{
                                        padding: '2px 10px',
                                        display: 'inlineBlock',
                                        textDecoration: 'none',
                                        color: 'inherit',
                                    }}>
                                        <ListItemText primary={
                                            <Typography sx={{ fontWeight: 700 }}>
                                                {value.Name}
                                            </Typography>
                                        } />
                                    </NavLink>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </footer >
    )
}

export default NewsletterFooter