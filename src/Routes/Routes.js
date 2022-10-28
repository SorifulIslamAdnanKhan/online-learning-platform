import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Blog from '../Pages/Blog/Blog';
import FAQs from '../Pages/FAQs/FAQs';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Tutorial from '../Pages/Tutorials/Tutorial';
import SingleTutorial from '../Pages/Tutorials/SingleTutorial/SingleTutorial';
import Checkout from '../Pages/Checkout/Checkout';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/tutorials',
                element:<Tutorial></Tutorial>,
                loader: () => fetch('https://akj-tutorial-server.vercel.app/tutorials/')
            },
            {
                path:'/tutorials/:id',
                element:<SingleTutorial></SingleTutorial>,
                loader: ({params}) => fetch(`https://akj-tutorial-server.vercel.app/tutorials/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
                loader: ({params}) => fetch(`https://akj-tutorial-server.vercel.app/tutorials/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/faq',
                element:<FAQs></FAQs>
            }
        ]
    }
]);

