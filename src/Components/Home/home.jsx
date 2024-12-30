import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';


export default function MainHome() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
      <Toolbar sx={{ justifyContent:"center"}}>
        <Typography>
          Professional Website
        </Typography>
        <Link href="#" color="inherit" underline="none" sx={{ mx: 2 }}>
          Home
        </Link>
        <Link href="#about" color="inherit" underline="none" sx={{ mx: 2 }}>
          About
        </Link>
        <Link href="#services" color="inherit" underline="none" sx={{ mx: 2 }}>
          Services
        </Link>
        <Link href="#contact" color="inherit" underline="none" sx={{ mx: 2 }}>
          Contact
        </Link>
      </Toolbar>
    </AppBar>
  );
}
