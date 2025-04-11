import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import routes from './routes';

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="h-screen bg-amber-50 py-5">
      <div className="max-w-screen-md mx-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
