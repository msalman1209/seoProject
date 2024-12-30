import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        py: 3,
        mt: 5,
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Professional Website. All rights reserved.
      </Typography>
    </Box>
  );
}
