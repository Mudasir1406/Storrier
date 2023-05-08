import React from 'react'
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { SIGNIN_URL } from '../../navigation/PageLinks';

const footerNav3 = [
    { Name: "Politics", Link: SIGNIN_URL },
    { Name: "World", Link: SIGNIN_URL },
    { Name: "Economy", Link: SIGNIN_URL },
    { Name: "Science & Tech", Link: SIGNIN_URL },
    { Name: "Business", Link: SIGNIN_URL },
    { Name: "Travel", Link: SIGNIN_URL },
    { Name: "Climate", Link: SIGNIN_URL },
    { Name: "Lifestyle", Link: SIGNIN_URL },
    { Name: "Food", Link: SIGNIN_URL },
    { Name: "Sports", Link: SIGNIN_URL },
];

const Navbar = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            background: '#1A1A1A',
            padding: '0 30px',
            alignItems: 'center',
            color: '#fff',
        }}>
            <Box>
                <List sx={{
                    p: 0,
                    display: 'flex',
                }}>
                    {footerNav3.map((value, index) => (
                        <ListItem sx={{ width: 'initial' }} key={index} disablePadding>
                            <NavLink to={value.Link} style={{
                                padding: '10px',
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
            </Box>
            <Typography>13:40 <img src={require('../../assets/weather.png')} alt="weather icon" /> 24 °C</Typography>
        </Box>
    )
}

export default Navbar

