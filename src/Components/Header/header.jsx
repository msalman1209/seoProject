import { Box, Typography, Button } from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
        Welcome to Your Professional Website
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, mb: 4 }}>
        Build your online presence with excellence and creativity.
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Learn More
      </Button>
    </Box>
  );
}
