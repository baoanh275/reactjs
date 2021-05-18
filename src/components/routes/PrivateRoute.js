import { Navigate,Outlet } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import { isCheckBuyer } from './IsCheckAuth';
import ProductPage from '../Page/ProductPage';
import LoginBuyerPage from '../Page/LoginBuyerPage';
import CartPage from '../Page/CartPage';
import DetailPage from '../Page/DetailPage';
import ProfilePage from '../Page/ProfilePage';
import EditPasswordPage from '../Page/EditPasswordPage';
import RegisterBuyerPage from '../Page/RegisterBuyerPage';
import HandleOrderPage from '../Page/HandleOrderPage';
import ManageOrderPage from '../Page/ManageOrderPage';
import ManageOrder from '../section/ManageOrder';
import ManageOrderPeding from '../section/ManageOrderPending';
import ManageOrderWaitingGoods from '../section/ManageOrderWaitingGoods';
import ManageOrderDelivered from '../section/ManageOrderDelivered';
import ManageOrderCancel from '../section/ManageOrderCancel';
import ManageOrderRefund from '../section/ManageOrderRefund';

const PrivateRoute = () => {
 
    let routee = useRoutes([
      {
          path: '/',
          element: <ProductPage />,
      
      },
      {
        path: 'buyer',
        element : (isCheckBuyer()) ? <Outlet/> : <Navigate to="/login/buyer"/>,
        children: [
           
            { 
              path: '/info', 
              element: <Outlet />,
              children : [
                  {path: '/', element: <ProfilePage />},
                  {path: '/editpassword', element: <EditPasswordPage />},
                  {
                    path: '/manageorder', element: <ManageOrderPage />,
                    children : [
                        {path: '/all', element: <ManageOrder />},
                        {path: '/pending', element: <ManageOrderPeding />},
                        {path: '/waiting', element: <ManageOrderWaitingGoods />},
                        {path: '/delivered', element: <ManageOrderDelivered />},
                        {path: '/cancel', element: <ManageOrderCancel />},
                        {path: '/refund', element: <ManageOrderRefund />},
                    ]
                  }
              ]


            },
            {
                path : '/cart',
                element :  <Outlet/>,
                children : [
                  {path: '/', element: <CartPage />},
                  {path: '/handle', element: <HandleOrderPage />}

                ]
            }
           
          ],
      },
      {
        path : '/books/:id',
        element : <DetailPage/>
      },
      {
         path: '/login', 
         element: <Outlet />, 
         children : [
             {path : '/buyer', element: <LoginBuyerPage/>}
         ]
      }
      ,
      {
         path: '/register', 
         element: <Outlet />, 
         children : [
             {path : '/buyer', element: <RegisterBuyerPage/>}
         ]
      }

  ])
    return routee
  }
  
export default PrivateRoute;

  /* {
    path: '/app',
    element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/account', element: <Account /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      {
        path: 'member',
        element: <Outlet />,
        children: [
          { path: '/', element: <MemberGrid /> },
          { path: '/add', element: <AddMember /> },
        ],
      },
    ],
  }, */