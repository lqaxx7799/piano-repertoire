import { ListRepertoire } from '@features/repertoires';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListRepertoire />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
