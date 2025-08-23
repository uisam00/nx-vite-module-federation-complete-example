import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ShowStyledCount } from '@nx-vite-module-federation-complete-example/shared-ui';
import { getStyledCount } from '@nx-vite-module-federation-complete-example/shared-utils';
import { useCountStore } from '@nx-vite-module-federation-complete-example/shared-stores';

const Home = () => {
  const { increase, decrease, count } = useCountStore();

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
        <Typography variant="h4">
          Module 1 (Loaded Statically With Module Federation)
        </Typography>

        <Stack direction="row" spacing={3}>
          <Link to="/module-2">Click here to go to section 2 </Link>
          <Link to="/">Click here to go to Single Page App </Link>
        </Stack>

        <Stack direction="row" spacing={3}>
          <Button variant="contained" color="primary" onClick={increase}>
            Increase Count +
          </Button>

          <Button variant="contained" color="error" onClick={decrease}>
            Decrease Count -
          </Button>
        </Stack>
        <ShowStyledCount count={getStyledCount(count)} />
      </Stack>
    </Box>
  );
};

export default Home;
