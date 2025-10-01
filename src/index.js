import React from 'react';
import ReactDOM from 'react-dom';

const RemoteApp1 = React.lazy(() => import('SubApp1/SubApp'));
const RemoteApp2 = React.lazy(() => import('SubApp2/SubApp'));

const App = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <h1>Main App</h1>
    <RemoteApp1 />
    <RemoteApp2 />
  </React.Suspense>
);

ReactDOM.render(<App />, document.getElementById('root'));