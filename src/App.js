 import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';
import MainContainer from './components/MainContainer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WatchPage from './components/WatchPage';
import SearchResultsContainer from './components/SearchResultsContainer';
import Error from './components/Error';

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      },
      {
        path: "search",
        element: <SearchResultsContainer />
      }
    ]
  }, 
 
])
function App() {
  return (
   
    <div>
      <Head /> 
      {/* <RouterProvider router={appRouter} /> */}
      <Body />
    </div>

  );
}

export default App;
