import { createBrowserRouter  } from "react-router-dom";
import { Timeline } from "../../pages/Timeline.tsx";
import { Status } from "../../pages/Status.tsx";
import { Default } from "../../layouts/Default.tsx";

export const router = createBrowserRouter([
   
  {
    path: '/',
    element: <Default/>,
    children: [
      {
        path: '/',
        element: <Timeline />
      },
      {
        path: '/status',
        element: <Status />
      },
    ]
    
  }
])