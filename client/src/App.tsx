import {
  RouterProvider,
  Outlet,
  createBrowserRouter,
} from 'react-router-dom';
import { NavBar } from './components/Navbar';
import { Home } from './pages/Home';
import './App.css';

function Layout() {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
