import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: '20px',
    columnGap: '2.5rem',
    width: '-webkit-fill-available !important',
    paddingBottom: '2.5rem',
    [theme.breakpoints.down('md')]: {
      rowGap: '20px',
      columnGap: '3.3rem',
    },
    [theme.breakpoints.down('sm')]: {
      rowGap: '20px',
      columnGap: '1.6rem',
    },
  },
  card: {
    minWidth: 'calc(20% - 2rem)',
    maxWidth: 'calc(20% - 2rem)',
    height: '6.75rem',
    borderRadius: '1.875rem !important',
    backgroundColor: 'white',
    display: 'inline-block',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      minWidth: 'calc(25% - 2.625rem)',
      height: '10rem',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 'calc(33% - 1rem)',
      height: '5.5625rem',
    },
  },
  cardQuantity1: {
    minWidth: '100% !important',
  },
  cardQuantity2: {
    minWidth: 'calc(50% - 2rem) !important',
    maxWidth: 'calc(50% - 2rem) !important',
    [theme.breakpoints.down('sm')]: {
      minWidth: 'calc(50% - 1rem) !important',
    },
  },
  cardQuantity3: {
    [theme.breakpoints.up('md')]: {
      minWidth: 'calc(33.3% - 2rem) !important',
    },
    [theme.breakpoints.up('sm')]: {
      minWidth: 'calc(33.3% - 2.625rem) !important',
    },
  },
  cardQuantity4: {
    [theme.breakpoints.up('md')]: {
      minWidth: 'calc(25% - 2rem) !important',
    },
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '1.5rem 0.7rem !important',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      padding: '2rem 1rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 0.1rem !important',
    },
  },
  categoryName: {
    fontWeight: '500 !important',
    fontSize: '1.125rem !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8125rem !important',
    },
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  categoryCard: {
    borderRadius: '50%', // Aplicar borde redondeado
    textAlign: 'center', // Centrar el contenido
    // Agregar cualquier otro estilo deseado para las categorías
  },
  iconContainer: {
    marginBottom: theme.spacing(1), // Espacio inferior para el icono
  },
  accordion: {
    borderRadius: '1.875rem !important', // Aplicar borde redondeado al acordeón
    // Agregar otros estilos deseados para el acordeón
  },
  accordionSummary: {
    height: '108px',
    borderRadius: '1.875rem !important',
    backgroundColor: 'white',
    display: 'inline-block',
    cursor: 'pointer',
    // Agregar otros estilos deseados para el resumen del acordeón
  },
  fullWidthSummary: {
    width: '100%',
  },
}));
