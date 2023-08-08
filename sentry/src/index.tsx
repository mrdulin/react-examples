import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from '@sentry/react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

Sentry.init({
	dsn: 'https://336623194dac4e7ea0aabd443b6ebad3@o1050767.ingest.sentry.io/6033388',
	integrations: [
		new Sentry.BrowserTracing({
			// See docs for support of different versions of variation of react router
			// https://docs.sentry.io/platforms/javascript/guides/react/configuration/integrations/react-router/
			// routingInstrumentation: Sentry.reactRouterV6Instrumentation(
			//   React.useEffect,
			//   useLocation,
			//   useNavigationType,
			//   createRoutesFromChildren,
			//   matchRoutes
			// ),
		}),
		new Sentry.Replay(),
	],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	tracesSampleRate: 1.0,

	// Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
	tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],

	// Capture Replay for 10% of all sessions,
	// plus for 100% of sessions with an error
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,

});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
