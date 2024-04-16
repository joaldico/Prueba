import Box from '@mui/material/Box';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { useStyles } from './styles';

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
  const classes = useStyles();

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress className={classes.progress} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${props.value}'`}
        </Typography>
      </Box>
    </Box>
  );
}

export default CircularProgressWithLabel;
