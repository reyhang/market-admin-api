import React from 'react'
import { Redirect } from 'react-router'

const redirectRoute= [
    {
        path:'/',
        exact:true,
        component:()=><Redirect to='/dashboard' />,
    },
]


const dashBoardRoutes=[
    {
        path:'/dashboard',
        component:React.lazy(()=>import('./components/Views/Dashboard/index.js')),
        name:'Dashboard'
        
    },
    {
        path:'/products',
        component:React.lazy(()=>import('./components/Views/DataTable.js/DataTable')),
        name:'Products'
        
    },{
        path:'/products/add',
        component:React.lazy(()=>import('./components/Views/Product/AddProduct')),
        name:'AddProduct'
        
    },{
        path:'/products/update/:id',
        component:React.lazy(()=>import('./components/Views/Product/UpdateProduct')),
        name:'UpdateProduct'
        
    }
]


const routes=[
    ...redirectRoute,
    ...dashBoardRoutes,
]

export default routes