import { Container } from '@mui/material';
import { FC } from 'react';
import { Route, RouteProps, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Footer from './Footer/index';
import Header from './Header';
import { MainBlock } from './mainBlockStyles';
import { useStyles } from './styles';

type Props = {
  routes: RouteProps[];
};
const LayoutPublicPortal: FC<Props> = ({ routes }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <MainBlock>
        <Container maxWidth="lg" className={classes.root}>
          <BrowserRouter>
            <Switch>
              {routes.map((props, i) => (
                <Route key={i} {...props} />
              ))}
            </Switch>
          </BrowserRouter>
        </Container>
      </MainBlock>
      <Footer />
    </>
  );
};

export default LayoutPublicPortal;
