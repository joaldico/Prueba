import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import ReactDOM from 'react-dom';

import App from './app';
import reportWebVitals from './reportWebVitals';

Sentry.init({
  dsn: 'https://7eb0a66028d84de88b960a9f11884423@o455434.ingest.sentry.io/5947597',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
