import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  subTitle: {
    marginTop: '33px !important',
    marginBottom: '10px !important',
  },
  card: {
    padding: '16px 16px 16px 16px !important',
    borderRadius: '15px !important',
    gap: '16px',
    height: '100%',
  },
  cardContent: {
    padding: '0px !important',
  },
  title: {
    color: `${theme.palette.primary.main} !important`,
    size: '16px !important',
    paddingBottom: '5px !important',
  },
}));
