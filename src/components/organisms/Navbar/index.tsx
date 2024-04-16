import { Box, Container, Typography } from '@mui/material';
import React, { FC, useContext } from 'react';

import logo from '../../../assets/images/logos/Logo.svg';
import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { Image } from '../../Atoms/Image';
import { NavbarStyled } from './styles';

export const Navbar: FC = () => {
  const { titleState } = useContext(BusinessUnitParamsContext);
  return (
    <NavbarStyled>
      <Container maxWidth={'xl'}>
        <Box display={'flex'} alignItems={'center'}>
          <Box position={'relative'} p={2}>
            <Image src={logo} />
          </Box>
          <Box mx={2}>
            <Typography color={'#252525'} variant={'body2'} fontWeight={'600'}>
              {titleState}
            </Typography>
          </Box>
        </Box>
      </Container>
    </NavbarStyled>
  );
};
