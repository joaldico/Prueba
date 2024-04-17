import { FC } from 'react';
import { RouteProps } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

const routes: RouteProps[] = [];

export const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>

      </Switch>
    </BrowserRouter>
  );
};
