import { Outlet, RouterProvider, createBrowserRouter, NavLink } from 'react-router-dom'
import ErrorPage from "../Page/error-page";
import Pagina2 from "../Page/Pagina2";
import Pagina1 from "../Page/Pagina1";
import Pagina3 from '../Page/Pagina3';
import "./Layout.css"
import Navbar from './Navbar';
import Sidebar from './SideBar';

export default function Layout() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        
          <Navbar />
          <Sidebar />
          <div className='outlet'>
            <Outlet />
          </div>
        </>
      ),
      errorElement: <ErrorPage />,
      children: [
        { path: "/Pagina1", element: <Pagina1/> },
        { path: "/Pagina2", element: <Pagina2 /> },
        { path: "/Pagina3", element: <Pagina3 /> }
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}
