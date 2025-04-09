import { Box, Stack, Typography } from '@mui/material';

export const Loading = () => {
  return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <Stack
        sx={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" color="info">
          Loading...
        </Typography>
      </Stack>
    </Box>
  );
};
