import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Professional Website
        </Typography>
        <Link href="/" color="inherit" underline="none" sx={{ mx: 2 }}>
          Home
        </Link>
        <Link href="#about" color="inherit" underline="none" sx={{ mx: 2 }}>
          About
        </Link>
        <Link href="/Services" color="inherit" underline="none" sx={{ mx: 2 }}>
          Services
        </Link>
        <Link href="#contact" color="inherit" underline="none" sx={{ mx: 2 }}>
          Contact
        </Link>
      </Toolbar>
    </AppBar>
  );
}
