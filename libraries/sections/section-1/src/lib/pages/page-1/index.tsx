import { Box, Stack, Typography } from '@mui/material';

import { Link } from 'react-router-dom';
import { ShowStyledCount } from '@nx-vite-module-federation-complete-example/shared-ui';
import { getStyledCount } from '@nx-vite-module-federation-complete-example/shared-utils';
import { useCountStore } from '@nx-vite-module-federation-complete-example/shared-stores';

const Page1 = () => {
  const { count } = useCountStore();

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
        <Typography variant="h1">Section 1 page 1</Typography>

        <Stack direction="row" spacing={3}>
          <Link to="/section-2">Click here to go to section 2 </Link>
          <Link to="/single-page-app">
            Click here to go to Single Page App{' '}
          </Link>
        </Stack>

        <ShowStyledCount count={getStyledCount(count)} />
      </Stack>
    </Box>
  );
};

export default Page1;
