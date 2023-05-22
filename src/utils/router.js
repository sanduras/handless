import MainLayout from "../components/layouts/MainLayout";
import ProductEdit from "../pages/products/ProductEdit";
import ProductAdd from "../pages/products/ProductAdd";
import Home from "../pages/home/Home";
export default [
  {
    path: "/",
    element: <MainLayout />,
    children:[
        {
            index: true,
            element: <Home/>

        },
        {
            path: "/products/",
            children: [
              {
                  path: "/products/edit",
                  element: <ProductEdit />
              },
              {
                  path: "/products/add",
                  element: <ProductAdd />
              }
            ]
      
          },

    ] 
  },
];
