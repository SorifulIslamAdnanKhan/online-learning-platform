import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Blog from '../Pages/Blog/Blog';
import Tutorials from '../Pages/Tutorials/Tutorials';
import TutorialDetails from '../Pages/Tutorials/TutorialDetails';
import FAQs from '../Pages/FAQs/FAQs';

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
                element:<Tutorials></Tutorials>,
                loader: () => fetch('https://akj-tutorial-server.vercel.app/tutorials/')
            },
            {
                path:'/tutorials/:id',
                element:<TutorialDetails></TutorialDetails>,
                loader: ({params}) => fetch(`https://akj-tutorial-server.vercel.app/tutorials/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<FAQs></FAQs>
            }
        ]
    }
]);

