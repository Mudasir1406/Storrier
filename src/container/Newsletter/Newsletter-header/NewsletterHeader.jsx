import React from 'react'
import styles from './newsletter-header.module.scss';
import { Container, Box, Paper, InputBase, IconButton, Grid, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { SIGNIN_URL } from '../../../navigation/PageLinks';
import Navbar from '../../../components/newsletter/Navbar';
import Divider from '@mui/material/Divider';

const NewsletterHeader = () => {
    return (
        <>
            <header className={styles.header}>
                <Container maxWidth="xl">
                    <Box display='flex' justifyContent="space-between" sx={{ py: 7 }}>
                        <NavLink to={SIGNIN_URL}>
                            <img src={require("../../../assets/newsletter.png")} alt="newsletter logo" style={{ width: '220px' }} />
                        </NavLink>
                        <Paper
                            component="form"
                            sx={{ display: 'flex', alignItems: 'center', width: 600, background: '#04594D', borderRadius: '0' }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1, color: '#F7F7F459', px: 2 }}
                                placeholder="Search for headlines"
                                inputProps={{ 'aria-label': 'Search for headlines' }}
                            />
                            <IconButton sx={{ background: '#8E4042', p: '10px 20px', borderRadius: '0', fontSize: '15px', color: '#fff', fontWeight: '600', height: '100%' }} type="button" aria-label="search">
                                SEARCH
                            </IconButton>
                        </Paper>
                    </Box>
                </Container>
            </header>


            {/* navigation bar */}
            <Box sx={{ marginTop: '-352px' }}>
                <Container maxWidth="xl">
                    <Navbar />
                    <Grid container sx={{ background: '#fff', color: '#000000' }}>
                        <Grid item lg={6} sx={{ p: 3 }}>
                            <Box className={styles.imageWrapper}>
                                <Typography sx={{ fontSize: '1.8rem', lineHeight: '1', marginBottom: '10px' }} variant="h4" component="h3">Democrats Overhaul Party’s Primary Calendar, Upending a Political Tradition</Typography>
                                <Typography>By Ginny Dennis <span style={{ marginLeft: '15px' }}>Just now</span></Typography>
                            </Box>
                            <Box sx={{ pt: 3 }} display="flex" justifyContent="space-between" className={styles.TopHeaderNewsBeneth}>
                                <Box sx={{ pr: 2 }} className={styles.TopHeaderNewsBenethText}>
                                    <Typography sx={{ fontSize: '1.3rem', fontWeight: '500', lineHeight: '1', marginBottom: '10px' }} variant="h5" component="h3">Philomena Cunk Is Weird Enough to Take on the World</Typography>
                                    <Typography sx={{ color: '#04594D', lineHeight: '1.2' }} variant="body2" component="p">The new Netflix show “Cunk on Earth” looks like an ambitious BBC documentary. Until its fictional host, created by Charlie Brooker, starts to ask some deeply silly questions.</Typography>
                                </Box>
                                <Box className={styles.TopHeaderNewsBenethImg}>
                                    <img src={require('../../../assets/newsletter-img2.png')} alt="newsletter image 2" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6}>
                            <Grid container sx={{ background: '#1A1A1A' }}>
                                <Grid item lg={5}>
                                    <Box>
                                        <Typography sx={{ fontSize: '1.1rem', px: 3, py: 2, color: '#fff', lineHeight: '1.4', marginBottom: '10px', fontWeight: 300 }} variant="p" component="p">
                                            Secretary of State Antony J. Blinken on Friday canceled a weekend trip to Beijing after a Chinese spy balloon was sighted above the Rocky Mountain state of Montana, igniting a frenzy of media coverage and political commentary over a machine that the Pentagon said posed no threat to the United States.
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item lg={7}>
                                    <Box ox className={styles.imageWrapper2}>
                                        <Typography sx={{ fontSize: '1.8rem', lineHeight: '1', marginBottom: '10px' }} variant="h4" component="h3">Furor Over Chinese Spy Balloon Leads to a Diplomatic Crisis</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box sx={{ py: 3 }} display="flex" justifyContent="space-between" className={styles.TopHeaderNewsBeneth}>
                                <Box sx={{ pr: 2 }} className={styles.TopHeaderNewsBenethImg}>
                                    <img src={require('../../../assets/baloon-journey.jpg')} alt="baloon journey image 2" />
                                </Box>
                                <Divider sx={{ px: 1 }} orientation="vertical" flexItem />
                                <Box sx={{ pl: 3, pr: 3 }} className={styles.TopHeaderNewsBenethText}>
                                    <Typography sx={{ fontSize: '1.3rem', fontWeight: '500', lineHeight: '1', marginBottom: '10px' }} variant="h5" component="h3">More Airports to Use Greener ‘Glide’ Approach to Landing</Typography>
                                    <Typography sx={{ mb: 2 }}>By Ginny Dennis <span style={{ marginLeft: '15px' }}>Feb. 4, 2023</span></Typography>
                                    <Divider sx={{ px: 1, mb: 2 }} orientation="horizontal" flexItem />
                                    <Typography sx={{ color: '#04594D', lineHeight: '1.2', fontSize: '1rem' }} variant="body2" component="p">The Stopping Home Office Work’s Unproductive Problems (SHOW UP, get it?) Act of 2023 passed the Republican-majority US House of Representatives on a close-to-party-line vote l...</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default NewsletterHeader