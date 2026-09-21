import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './TabsPage';
import { TabContent } from './TabContext';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1 className="title">Home page</h1>} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="tabs" element={<TabsPage />}>
          {/* Спрацьовує на /tabs */}
          <Route
            index
            element={
              <div className="block" data-cy="TabContent">
                Please select a tab
              </div>
            }
          />
          {/* Спрацьовує на /tabs/:tabId (наприклад /tabs/tab-1) */}
          <Route path=":tabId" element={<TabContent />} />
        </Route>

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>,
);
