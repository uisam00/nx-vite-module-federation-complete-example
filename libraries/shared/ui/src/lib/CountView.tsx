import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ShowStyledCount } from '@shared-ui';
import { getStyledCount } from '@shared-utils';
import { useCountStore } from '@shared-stores';

type Props = {
  title: string;
  isRemote: boolean;
  linkTo: string[];
};

export const CountView = ({ title, isRemote, linkTo }: Props) => {
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
          {title} (Loaded With{' '}
          {isRemote ? 'Module Federation' : 'Static Loading'})
        </Typography>

        <Stack direction="row" spacing={3}>
          {linkTo.map((link) => (
            <Link key={link} to={link}>
              Click here to go to {link}
            </Link>
          ))}
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
