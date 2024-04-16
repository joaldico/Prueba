import { FC } from 'react';
import { Route, RouteProps, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

type Props = {
  routes: RouteProps[];
};
const LayoutAuth: FC<Props> = ({ routes }) => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((props, i) => (
          <Route key={i} {...props} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default LayoutAuth;
