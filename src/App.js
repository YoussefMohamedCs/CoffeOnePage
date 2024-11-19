import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([{
    index:true , element:<Home /> ,

  }])
  return (
 <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
