import Navbar from './components/Navbar/Navbar';
import HomeWithoutAuth from './pages/Home/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeWithoutAuth />,
  }
])

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
