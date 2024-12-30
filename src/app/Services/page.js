import Navbar from '@/Components/Navbar/navbar';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const services = [
  {
    title: 'Web Development',
    description: 'Create stunning websites tailored to your business needs.',
    image: 'https://source.unsplash.com/random/800x600?web',
  },
  {
    title: 'Digital Marketing',
    description: 'Boost your online presence with our expert marketing solutions.',
    image: 'https://source.unsplash.com/random/800x600?marketing',
  },
  {
    title: 'Graphic Design',
    description: 'Design captivating visuals that engage your audience.',
    image: 'https://source.unsplash.com/random/800x600?design',
  },
];

export default function Services() {
  return (
    <>
      <Navbar/>
    <Box id="services" sx={{ py: 5, backgroundColor: '#f7f7f7' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" image={service.image} alt={service.title} />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
}
