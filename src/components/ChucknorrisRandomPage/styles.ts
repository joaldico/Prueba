import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 10,
    padding: 50
  },
  containerCategories: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 10,
    paddingTop: 20
  },
  categoryTitle: {
    paddingTop: 30
  }
}));
