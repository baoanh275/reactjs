import { Navigate,Outlet } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import { isCheckBuyer, isCheckSeller } from './IsCheckAuth';
import ProductPage from '../Page/ProductPage';
import LoginBuyerPage from '../Page/LoginBuyerPage';
import CartPage from '../Page/CartPage';
import DetailPage from '../Page/DetailPage';
import ProfilePage from '../Page/ProfilePage';
import EditPasswordPage from '../Page/EditPasswordPage';
import RegisterBuyerPage from '../Page/RegisterBuyerPage';
import HandleOrderPage from '../Page/HandleOrderPage';
  
import LoginBuyer from './../login/LoginBuyer'
import RegisterBuyer from './../register/RegisterBuyer'
import RegisterSeller from './../register/RegisterSeller'
import ManageOrderPage from '../Page/ManageOrderPage';
import SellerManageOrderPage from '../PageSeller/SellerManageOrderPage';


import ManageOrder from '../section/ManageOrder';
import ManageOrderPending from '../section/ManageOrderPending';
import ManageOrderWaitingGoods from '../section/ManageOrderWaitingGoods';
import ManageOrderDelivered from '../section/ManageOrderDelivered';
import ManageOrderCancel from '../section/ManageOrderCancel';
import ManageOrderRefund from '../section/ManageOrderRefund';
import ManageOrderShipping from '../section/ManageOrderShipping';


import SellerManageOrder from '../sectionSeller/SellerManageOrder';
import SellerManageOrderPending from '../sectionSeller/SellerManageOrderPending';
import SellerManageOrderWaitingGoods from '../sectionSeller/SellerManageOrderWaitingGoods';
import SellerManageOrderDelivered from '../sectionSeller/SellerManageOrderDelivered';
import SellerManageOrderCancel from '../sectionSeller/SellerManageOrderCancel';
import SellerManageOrderRefund from '../sectionSeller/SellerManageOrderRefund';
import SellerManageOrderShipping from '../sectionSeller/SellerManageOrderShipping';

import LoginSeller from '../login/LoginSeller';
import ProfilePageSeller from './../PageSeller/ProfilePageSeller'
import EditPasswordSellerPage from './../PageSeller/EditPasswordPage'
import SellerManageProduct from '../sectionSeller/SellerManageProduct';
import SellerManageProductActive from '../sectionSeller/SellerManageProductActive';
import SellerManageProductInactive from '../sectionSeller/SellerManageProductInactive';
import SellerManageProductTrash from '../sectionSeller/SellerManageProductTrash';
import SellerAddProduct from '../sectionSeller/SellerAddProduct'
import SellerEditProduct from '../sectionSeller/SellerEditProduct'
import SellerManageRevenue from '../sectionSeller/SellerManageRevenue';
import SellerManageRevenueUnpaid from '../sectionSeller/SellerManageRevenueUnpaid';
import ManageOrderCompleted from '../section/ManageOrderCompleted';

const PrivateRoute = () => {
 
    let routee = useRoutes([
      {
          path: '/',
          element: <ProductPage />,
      
      },
      {
        path: '/search',
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
                        {path: '/pending', element: <ManageOrderPending />},
                        {path: '/waiting', element: <ManageOrderWaitingGoods />},
                        {path: '/shipping', element: <ManageOrderShipping />},
                        {path: '/delivered', element: <ManageOrderDelivered />},
                        {path: '/cancel', element: <ManageOrderCancel />},
                        {path: '/refund', element: <ManageOrderRefund />},
                        {path: '/completed', element: <ManageOrderCompleted />},
                    ]
                  }
              ]


            },
            {
                path : '/cart',
                element :  <Outlet/>,
                children : [
                  {path: '/', element: <CartPage />},
                  {path: '/handle', element: <HandleOrderPage />},
                 

                ]
            }
           
          ],
      },
      {
        path: 'seller',
        element : (isCheckSeller()) ? <Outlet/> : <Navigate to="/login/seller"/>,
        children: [
          { 
            path: '/info', 
            element: <Outlet />,
            children : [
              {path: '/', element: <ProfilePageSeller/>},
              {path: '/editpassword', element: <EditPasswordSellerPage />},
              {
                path: '/manageorder', element: <ManageOrderPage />,
                children : [
                    {path: '/all', element: <SellerManageOrder />},
                    {path: '/pending', element: <SellerManageOrderPending />},
                    {path: '/waiting', element: <SellerManageOrderWaitingGoods />},
                    {path: '/shipping', element: <SellerManageOrderShipping />},
                    {path: '/delivered', element: <SellerManageOrderDelivered />},
                    {path: '/cancel', element: <SellerManageOrderCancel />},
                    {path: '/refund', element: <SellerManageOrderRefund />},
                ]
              },
              {
                path: '/manageproduct', element: <SellerManageOrderPage />,
                children : [
                    {path: '/all', element: <SellerManageProduct />},
                    {path: '/active', element: <SellerManageProductActive />},
                    {path: '/inactive', element: <SellerManageProductInactive />},
                    {path: '/trash', element: <SellerManageProductTrash />},
                    {path: '/add', element: <SellerAddProduct/>},
                    {path: '/edit/:id', element: <SellerEditProduct/>},
                   
                ]
              },
              {
                path: '/managerevenue', element: <SellerManageOrderPage />,
                children : [
                    {path: '/paid', element: <SellerManageRevenue />},
                    {path: '/willpay', element: <SellerManageRevenueUnpaid />},
           
                   
                ]
              }
            ]

          }
        ] 
      },
      {
        path : '/books/:id',
        element : <DetailPage/>
      },
      {
         path: '/login', 
         element: <LoginBuyerPage/>, 
         children : [
             {path : '/buyer', element: <LoginBuyer/> },
             {path : '/seller', element: <LoginSeller/> }
         ]
      }
      ,
      {
         path: '/register', 
         element: <RegisterBuyerPage />, 
         children : [
             {path : '/buyer', element: <RegisterBuyer/>},
             {path : '/seller', element: <RegisterSeller/>}
         ]
      }

  ])
    return routee
  }
  
export default PrivateRoute;
