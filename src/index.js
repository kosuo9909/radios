import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Tablist from './components/Tablist';
import GeneralTab from './components/tabs/GeneralTab';
import AppearanceTab from './components/tabs/AppearanceTab';
import NotificationsTab from './components/tabs/NotificationsTab';
import PreferencesTab from './components/tabs/PreferencesTab';
import KeyboardTab from './components/tabs/KeyboardTab';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Tablist />,
    children: [
      { path: 'general', element: <GeneralTab /> },
      { path: 'appearance', element: <AppearanceTab /> },
      { path: 'notifications', element: <NotificationsTab /> },
      { path: 'preferences', element: <PreferencesTab /> },
      { path: 'keyboard', element: <KeyboardTab /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
