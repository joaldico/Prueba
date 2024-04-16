import moment from 'moment';
import { FC, useContext, useEffect, useState } from 'react';
import { Route, RouteProps, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { refreshSession } from '../../api/api';
import BusinessUnitParamsContext from '../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { isEmpty } from '../../util/commons';
import { getSessionInfo, setSessionInfo } from '../../util/LocalStorage/login';
import Footer from './Footer/index';
import Header from './Header';
import { useStyles } from './styles';

const intervalsArrayRefresh: any = [];
const clock = {
  minute: 1,
  second: 59,
};

type Props = {
  routes: RouteProps[];
};
const LayoutClient: FC<Props> = ({ routes }) => {
  const classes = useStyles();
  const { businessUnitUUID } = useContext(BusinessUnitParamsContext);
  const [timeRefresh, setTimeRefresh] = useState<any>(clock);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const { refreshBefore } = getSessionInfo(businessUnitUUID);
    if (!isEmpty(refreshBefore)) {
      const tokenExpiration = moment(refreshBefore, 'YYYY-MM-DD HH:mm');
      const today = moment();
      const diffMinutes = tokenExpiration.diff(today, 'minutes');
      let minutes = diffMinutes - 4;
      let seconds = 0;

      setTimeRefresh({
        minutes,
        seconds,
      });

      const intervalInternal = setInterval(() => {
        if (minutes < 0) {
          setTimeRefresh({
            minute: 0,
            second: 0,
          });
          minutes = 0;
          seconds = 0;
          renewToken();
        } else {
          if (seconds === 0) {
            minutes = minutes - 1;

            if (minutes !== 0) {
              seconds = 59;
            }
          } else {
            seconds = seconds - 1;
          }
        }
      }, 1000);
      intervalsArrayRefresh.push(intervalInternal);
    }
  }, [refresh]);

  const renewToken = () => {
    const { refreshToken } = getSessionInfo(businessUnitUUID);
    refreshSession(refreshToken)
      .then((response) => {
        if (intervalsArrayRefresh.length) {
          intervalsArrayRefresh.forEach((interval: any) => {
            window.clearInterval(interval);
          });
        }

        setSessionInfo(response, businessUnitUUID);
        setRefresh(refresh + 1);
      })
      .catch((err) => {
        if (intervalsArrayRefresh.length) {
          intervalsArrayRefresh.forEach((interval: any) => {
            window.clearInterval(interval);
          });
        }
        console.error(err);
        logout();
      });
  };

  const logout = () => {
    localStorage.clear();
    setTimeout(() => {
      location.reload();
    }, 1000);
  };

  return (
    <>
      <Header />
      <main className={classes.main}>
        <div className={classes.root}>
          <BrowserRouter>
            <Switch>
              {routes.map((props, i) => (
                <Route key={i} {...props} />
              ))}
            </Switch>
          </BrowserRouter>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LayoutClient;
