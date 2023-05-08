import React from 'react'
import { Container, Grid, Typography, Box, Divider, Button } from "@mui/material";
import styles from './NewsletterContent.module.scss'
const NewsletterContent = () => {
  return (
    <Container maxWidth="xl">
      <Grid container sx={{ margin: '30px 0 50px', }} columnSpacing={3} >
        <Grid item lg={8}>
          <Typography className={styles.sectionHeading} variant='h4' component='h3' sx={{ margin: '0 10px 0', }}>Latest News</Typography>
          <Grid container>
            <Grid item lg={6}>
              <Box className={styles.imageWrapper}>
                <Typography sx={{ fontSize: '1.8rem', lineHeight: '1', marginBottom: '10px' }} variant="h4" component="h3">Democrats Overhaul Party’s Primary Calendar, Upending a Political Tradition</Typography>
                <Typography>By Ginny Dennis <span style={{ marginLeft: '15px' }}>Just now</span></Typography>
              </Box>
              <Box sx={{ margin: '25px 10px', padding: '20px 30px', background: ' #fff' }} className={styles.TopHeaderNewsBenethText}>
                <Typography sx={{ fontSize: '1.3rem', fontWeight: '500', lineHeight: '1.2', marginBottom: '10px' }} variant="h5" component="h3">More Airports to Use Greener ‘Glide’ Approach to Landing</Typography>
                <Typography sx={{ marginTop: '9px', marginBottom: '10px', fontSize: '0.9rem', lineHeight: '1.5' }}>By Ginny Dennis <span style={{ marginLeft: '15px' }}>Feb. 4, 2023</span></Typography>
                <Divider sx={{ px: 1, mb: 2 }} orientation="horizontal" flexItem />
                <Typography sx={{ color: '#04594D', lineHeight: '1.2', fontSize: '1rem' }} variant="body2" component="p">Romantic cross-European train journeys have long been associated with the Orient Express. But you no longer need to fork out thousands to make this fabled journey.
                  <br />
                  <br />
                  From Byway to Tailor Made Rail, companies are cropping up to meet renewed demand for long distance train travel.
                  <br />
                  <br />
                  An epic trip with the latter takes you all the way۔ An epic trip with the latter takes you all the way...</Typography>
              </Box>
              <Box className={styles.imageWrapper2}>
                <Typography sx={{ fontSize: '1.8rem', lineHeight: '1', marginBottom: '10px' }} variant="h4" component="h3">Democrats Overhaul Party’s Primary Calendar, Upending a Political Tradition</Typography>
                <Typography>By Ginny Dennis <span style={{ marginLeft: '15px' }}>Just now</span></Typography>
              </Box>
              <Box sx={{ margin: '25px 10px', padding: '20px 30px', background: ' #fff' }} className={styles.TopHeaderNewsBenethText}>
                <Typography sx={{ fontSize: '1.3rem', fontWeight: '500', lineHeight: '1.2', marginBottom: '10px' }} variant="h5" component="h3">More Airports to Use Greener ‘Glide’ Approach to Landing</Typography>
                <Typography sx={{ marginTop: '9px', marginBottom: '10px', fontSize: '0.9rem', lineHeight: '1.5' }}>By Ginny Dennis <span style={{ marginLeft: '15px' }}>Feb. 4, 2023</span></Typography>
                <Divider sx={{ px: 1, mb: 2 }} orientation="horizontal" flexItem />
                <Typography sx={{ color: '#04594D', lineHeight: '1.2', fontSize: '1rem' }} variant="body2" component="p">Romantic cross-European train journeys have long been associated with the Orient Express. But you no longer need to fork out thousands to make this fabled journey.
                  <br />
                  <br />
                  From Byway to Tailor Made Rail, companies are cropping up to meet renewed demand for long distance train travel.
                  <br />
                  <br />
                  An epic trip with the latter takes you all the way۔ An epic trip with the latter takes you all the way...</Typography>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box className={styles.imageWrapper3}>
                <Typography sx={{ fontSize: '1.8rem', lineHeight: '1', marginBottom: '10px' }} variant="h4" component="h3">Democrats Overhaul Party’s Primary Calendar, Upending a Political Tradition</Typography>
                <Typography>By Ginny Dennis <span style={{ marginLeft: '15px' }}>Just now</span></Typography>
              </Box>
              <Box sx={{ margin: '25px 10px', padding: '20px 30px', background: ' #fff' }} className={styles.TopHeaderNewsBenethText}>
                <Typography sx={{ fontSize: '1.3rem', fontWeight: '500', lineHeight: '1.2', marginBottom: '10px' }} variant="h5" component="h3">More Airports to Use Greener ‘Glide’ Approach to Landing</Typography>
                <Typography sx={{ marginTop: '9px', marginBottom: '10px', fontSize: '0.9rem', lineHeight: '1.5' }}>By Ginny Dennis <span style={{ marginLeft: '15px' }}>Feb. 4, 2023</span></Typography>
                <Divider sx={{ px: 1, mb: 2 }} orientation="horizontal" flexItem />
                <Typography sx={{ color: '#04594D', lineHeight: '1.2', fontSize: '1rem' }} variant="body2" component="p">Romantic cross-European train journeys have long been associated with the Orient Express. But you no longer need to fork out thousands to make this fabled journey.
                  <br />
                  <br />
                  From Byway to Tailor Made Rail, companies are cropping up to meet renewed demand for long distance train travel.
                  <br />
                  <br />
                  An epic trip with the latter takes you all the way۔ An epic trip with the latter takes you all the way...</Typography>
              </Box>
              <Box className={styles.imageWrapper4}>
                <Typography sx={{ fontSize: '1.8rem', lineHeight: '1', marginBottom: '10px' }} variant="h4" component="h3">Democrats Overhaul Party’s Primary Calendar, Upending a Political Tradition</Typography>
                <Typography>By Ginny Dennis <span style={{ marginLeft: '15px' }}>Just now</span></Typography>
              </Box>
              <Box className={styles.imageWrapper5}>
                <Typography sx={{ fontSize: '1.8rem', lineHeight: '1', marginBottom: '10px' }} variant="h4" component="h3">Democrats Overhaul Party’s Primary Calendar, Upending a Political Tradition</Typography>
                <Typography>By Ginny Dennis <span style={{ marginLeft: '15px' }}>Just now</span></Typography>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center' }}>
            <Button sx={{
              background: '#04594D',
              color: '#fff',
              padding: '15px 25px 14px',
              borderRadius: '0 !important',
              lineHeight: '1',
              '&:hover': {
                background: '#04594D',
                color: '#fff',
              }

            }}>View More</Button>
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box sx={{
            background: '#fff',
            padding: '15px 20px'
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 0 15px'
            }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: '400' }}>Trending Headlines</Typography>
              <Button sx={{
                background: '#000',
                color: '#fff',
                padding: '7px 25px 6px'
              }}>View All</Button>
            </Box>
            <Divider sx={{ px: 1, mb: 2 }} orientation="horizontal" flexItem />

            <Box sx={{ pt: 3, mb: 3 }} display="flex" justifyContent="space-between" className={styles.TopHeaderNewsBeneth}>
              <Box sx={{ pr: 2 }} className={styles.TopHeaderNewsBenethImg}>
                <img src={require('../../../assets/baloon-journey.jpg')} alt="baloon journey image 2" />
              </Box>
              <Box sx={{ pl: 1, pr: 1 }} className={styles.TopHeaderNewsBenethText}>
                <Typography sx={{ fontSize: '1.3rem', fontWeight: '500', lineHeight: '1', marginBottom: '10px' }} variant="h5" component="h3">More Airports to Use Greener ‘Glide’ Approach to Landing</Typography>
                <Typography sx={{ color: '#04594D', lineHeight: '1.2', fontSize: '1rem' }} variant="body2" component="p">China called the vessel’s downing “an excessive reaction” and said it “retains the right to respond further.”</Typography>
                <Typography display="flex" justifyContent='space-between' sx={{ mt: 2, fontSize: '0.9rem' }}>By Ginny Dennis <span style={{ marginLeft: '15px' }}>Feb. 4, 2023</span></Typography>
              </Box>
            </Box>
            <Divider sx={{ px: 1, mb: 2 }} orientation="horizontal" flexItem />

            <Box sx={{ pt: 3, mb: 3 }} display="flex" justifyContent="space-between" className={styles.TopHeaderNewsBeneth}>
              <Box sx={{ pr: 2 }} className={styles.TopHeaderNewsBenethImg}>
                <img src={require('../../../assets/baloon-journey.jpg')} alt="baloon journey image 2" />
              </Box>
              <Box sx={{ pl: 1, pr: 1 }} className={styles.TopHeaderNewsBenethText}>
                <Typography sx={{ fontSize: '1.3rem', fontWeight: '500', lineHeight: '1', marginBottom: '10px' }} variant="h5" component="h3">More Airports to Use Greener ‘Glide’ Approach to Landing</Typography>
                <Typography sx={{ color: '#04594D', lineHeight: '1.2', fontSize: '1rem' }} variant="body2" component="p">China called the vessel’s downing “an excessive reaction” and said it “retains the right to respond further.”</Typography>
                <Typography display="flex" justifyContent='space-between' sx={{ mt: 2, fontSize: '0.9rem' }}>By Ginny Dennis <span style={{ marginLeft: '15px' }}>Feb. 4, 2023</span></Typography>
              </Box>
            </Box>
            <Divider sx={{ px: 1, mb: 2 }} orientation="horizontal" flexItem />

            <Box sx={{ pt: 3, mb: 3 }} display="flex" justifyContent="space-between" className={styles.TopHeaderNewsBeneth}>
              <Box sx={{ pr: 2 }} className={styles.TopHeaderNewsBenethImg}>
                <img src={require('../../../assets/baloon-journey.jpg')} alt="baloon journey image 2" />
              </Box>
              <Box sx={{ pl: 1, pr: 1 }} className={styles.TopHeaderNewsBenethText}>
                <Typography sx={{ fontSize: '1.3rem', fontWeight: '500', lineHeight: '1', marginBottom: '10px' }} variant="h5" component="h3">More Airports to Use Greener ‘Glide’ Approach to Landing</Typography>
                <Typography sx={{ color: '#04594D', lineHeight: '1.2', fontSize: '1rem' }} variant="body2" component="p">China called the vessel’s downing “an excessive reaction” and said it “retains the right to respond further.”</Typography>
                <Typography display="flex" justifyContent='space-between' sx={{ mt: 2, fontSize: '0.9rem' }}>By Ginny Dennis <span style={{ marginLeft: '15px' }}>Feb. 4, 2023</span></Typography>
              </Box>
            </Box>
            <Divider sx={{ px: 1, mb: 2 }} orientation="horizontal" flexItem />


            <Box sx={{ pt: 3, mb: 3 }} display="flex" justifyContent="space-between" className={styles.TopHeaderNewsBeneth}>
              <Box sx={{ pr: 2 }} className={styles.TopHeaderNewsBenethImg}>
                <img src={require('../../../assets/baloon-journey.jpg')} alt="baloon journey image 2" />
              </Box>
              <Box sx={{ pl: 1, pr: 1 }} className={styles.TopHeaderNewsBenethText}>
                <Typography sx={{ fontSize: '1.3rem', fontWeight: '500', lineHeight: '1', marginBottom: '10px' }} variant="h5" component="h3">More Airports to Use Greener ‘Glide’ Approach to Landing</Typography>
                <Typography sx={{ color: '#04594D', lineHeight: '1.2', fontSize: '1rem' }} variant="body2" component="p">China called the vessel’s downing “an excessive reaction” and said it “retains the right to respond further.”</Typography>
                <Typography display="flex" justifyContent='space-between' sx={{ mt: 2, fontSize: '0.9rem' }}>By Ginny Dennis <span style={{ marginLeft: '15px' }}>Feb. 4, 2023</span></Typography>
              </Box>
            </Box>
            <Divider sx={{ px: 1, mb: 2 }} orientation="horizontal" flexItem />


            <Box sx={{ pt: 3, mb: 3 }} display="flex" justifyContent="space-between" className={styles.TopHeaderNewsBeneth}>
              <Box sx={{ pr: 2 }} className={styles.TopHeaderNewsBenethImg}>
                <img src={require('../../../assets/baloon-journey.jpg')} alt="baloon journey image 2" />
              </Box>
              <Box sx={{ pl: 1, pr: 1 }} className={styles.TopHeaderNewsBenethText}>
                <Typography sx={{ fontSize: '1.3rem', fontWeight: '500', lineHeight: '1', marginBottom: '10px' }} variant="h5" component="h3">More Airports to Use Greener ‘Glide’ Approach to Landing</Typography>
                <Typography sx={{ color: '#04594D', lineHeight: '1.2', fontSize: '1rem' }} variant="body2" component="p">China called the vessel’s downing “an excessive reaction” and said it “retains the right to respond further.”</Typography>
                <Typography display="flex" justifyContent='space-between' sx={{ mt: 2, fontSize: '0.9rem' }}>By Ginny Dennis <span style={{ marginLeft: '15px' }}>Feb. 4, 2023</span></Typography>
              </Box>
            </Box>
            <Divider sx={{ px: 1, mb: 2 }} orientation="horizontal" flexItem />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default NewsletterContent
