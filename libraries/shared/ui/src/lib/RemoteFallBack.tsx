import { Box, Stack, Typography } from '@mui/material';

export const RemoteFallBack = ({
  remoteName,
}: {
  remoteName: 'Module1' | 'Module2';
}) => {
  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Stack
        spacing={5}
        sx={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h1" color="error">
          Remote {remoteName} is not available
        </Typography>
      </Stack>
    </Box>
  );
};
