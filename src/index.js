import React, { useState, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

const RemoteApp1 = lazy(() => import('SubApp1/SubApp'));
const RemoteApp2 = lazy(() => import('SubApp2/SubApp'));

const NAV_ITEMS = [
  { key: 'app1', label: 'SubApp1' },
  { key: 'app2', label: 'SubApp2' },
];

const App = () => {
  const [selected, setSelected] = useState('app1');

  let Content = null;
  if (selected === 'app1') {
    Content = <RemoteApp1 />;
  } else if (selected === 'app2') {
    Content = <RemoteApp2 />;
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <nav style={{ width: 200, background: '#f0f0f0', padding: 20 }}>
        <h2>Navigation</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {NAV_ITEMS.map(item => (
            <li key={item.key} style={{ margin: '16px 0' }}>
              <button
                style={{
                  background: selected === item.key ? '#1890ff' : '#fff',
                  color: selected === item.key ? '#fff' : '#000',
                  border: 'none',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  borderRadius: 4,
                  width: '100%',
                  textAlign: 'left'
                }}
                onClick={() => setSelected(item.key)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main style={{ flex: 1, padding: 40 }}>
        <h1>Main App</h1>
        <Suspense fallback={<div>Loading...</div>}>
          {Content}
        </Suspense>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));