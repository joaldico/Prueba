import {
  Category as CategoryIcon,
  DirectionsBoat as DirectionsBoatIcon,
  DirectionsBus as DirectionsBusIcon,
  DirectionsCar as DirectionsCarIcon,
  DirectionsWalk as DirectionsWalkIcon,
  Home as HomeIcon,
  Hotel as HotelIcon,
  LaptopWindows as LaptopWindowsIcon,
  LocalAirport as LocalAirportIcon,
  LocalConvenienceStore as LocalConvenienceStoreIcon,
  LocalDrink as LocalDrinkIcon,
  LocalGasStation as LocalGasStationIcon,
  People as PeopleIcon,
  Person as PersonIcon,
  Pets as PetsIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    fontSize: '2.1875rem !important',
    color: theme.palette.primary.dark,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.48rem !important',
    },
  },
}));

const IconSelector: React.FC<{ value: string }> = ({ value }) => {
  const classes = useStyles();

  const iconOptions = [
    { icon: <HomeIcon className={classes.icon} />, value: 'homeIcon' },
    { icon: <CategoryIcon className={classes.icon} />, value: 'categoryIcon' },
    { icon: <LocalGasStationIcon className={classes.icon} />, value: 'localGasStationIcon' },
    { icon: <PersonIcon className={classes.icon} />, value: 'personIcon' },
    { icon: <LocalAirportIcon className={classes.icon} />, value: 'localAirportIcon' },
    { icon: <PetsIcon className={classes.icon} />, value: 'petsIcon' },
    {
      icon: <LocalConvenienceStoreIcon className={classes.icon} />,
      value: 'localConvenienceStoreIcon',
    },
    { icon: <LaptopWindowsIcon className={classes.icon} />, value: 'laptopWindowsIcon' },
    { icon: <HotelIcon className={classes.icon} />, value: 'hotelIcon' },
    { icon: <DirectionsWalkIcon className={classes.icon} />, value: 'directionsWalkIcon' },
    { icon: <DirectionsBusIcon className={classes.icon} />, value: 'directionsBusIcon' },
    { icon: <LocalDrinkIcon className={classes.icon} />, value: 'localDrinkIcon' },
    { icon: <PhoneIcon className={classes.icon} />, value: 'phoneIcon' },
    { icon: <DirectionsBoatIcon className={classes.icon} />, value: 'directionsBoatIcon' },
    { icon: <DirectionsCarIcon className={classes.icon} />, value: 'directionsCarIcon' },
    { icon: <PeopleIcon className={classes.icon} />, value: 'peopleIcon' },
  ];
  const selectedIcon = iconOptions.find((option) => option.value === value);

  return selectedIcon ? selectedIcon.icon : null;
};

export default IconSelector;
