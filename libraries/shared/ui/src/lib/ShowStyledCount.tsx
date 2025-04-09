import { Typography } from '@mui/material';

export const ShowStyledCount = ({ count }: { count: string }) => {
  return (
    <Typography variant="h4" color="success">
      {count}
    </Typography>
  );
};
