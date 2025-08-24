import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ShowStyledCount } from '@shared-ui';
import { getStyledCount } from '@shared-utils';
import { useCountStore } from '@shared-stores';

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
        <Typography variant="h1">Single Page App</Typography>

        <Stack direction="row" spacing={3}>
          <Link to="/module-1">Click here to go to section 1 </Link>
          <Link to="/module-2">Click here to go to section 2 </Link>
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
