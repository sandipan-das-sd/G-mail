import './App.css';
import Body from './components/Body';
import Inbox from './components/Inbox';
import Navbar from './components/shared/Navbar';

import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Mail from './Mail';
const router= createBrowserRouter(
[
  {
    path:'/',
    element:<Body/>,
    //through outlet children data passed
    children:[
      {
        path:'/',
        element:<Inbox/>
      },
      {
        path:'/mail/:id',
        element:<Mail/>
      },
     
    ]
  }
]
)
function App() {
  return (
    <div className='bg-[#F6F8FC] h-screen w-screen overflow-hidden '>
      <Navbar />
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
