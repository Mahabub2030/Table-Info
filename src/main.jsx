import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Root from './Componetnt/Root/Root';
import Home from './Componetnt/Home/Home';
import CampeScurety from './Groupe/Campe &Securety/CampeScurety';
import Irrigation from './Groupe/Irrigation/Irrigation';
import Landscipin from './Groupe/Landsciping/Landscipin';
import ManagMent from './Groupe/ManagMent/ManagMent';
import Messhall from './Groupe/Messhall/Messhall';
import StreetLight from './Groupe/StreetLight/StreetLight';
import Nursery from './Groupe/Nursery/Nursery';
import WastManagmen from './Groupe/WastManagment/WastManagmen';
import WorkShop from './Groupe/WorkShope/WorkShop';
import FenceRoadDrain from './Groupe/FenceRoadDrain/FenceRoadDrain';
import DataTable from './Componetnt/DataTable/DataTable';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/home',
        element:<Home></Home>,
      },
      {
        path:'/campeSecurety',
        element:<CampeScurety></CampeScurety>,
      },
      {
        path:'/irrigation',
        element:<Irrigation></Irrigation>,
      },
    
      {
        path:'/landscipin',
        element:<Landscipin></Landscipin>,
      },
      {
        path:'/managment',
        element:<ManagMent></ManagMent>,
      },
      {
        path:'/messhall',
        element:<Messhall></Messhall>,
      },
    
      {
        path:'/streetlight',
        element:<StreetLight>,</StreetLight>,
      },
      {
        path:'/nursery',
        element:<Nursery></Nursery>,
      },
      {
        path:'/wastmanagment',
        element:<WastManagmen></WastManagmen>,
      },
      {
        path:'/workshope',
        element:<WorkShop></WorkShop>,
      },
      {
        path:'/fenceroaddrain',
        element:<FenceRoadDrain></FenceRoadDrain>,
      },
    
      {
        path:'/datatable',
        element:<DataTable></DataTable>
      },
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
