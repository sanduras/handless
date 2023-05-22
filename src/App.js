import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import route from './utils/router';

function App() {
  const router = createBrowserRouter(route)
  return (
    <RouterProvider router={router} />
  );
}

export default App;
