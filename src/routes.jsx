
import SignUp from "./dashboard/authentication/signUp";
import SignIn from "./dashboard/authentication/signIn";
import Home from "./dashboard/home";
import {HomeOutlined ,LineChartOutlined ,SnippetsOutlined,LoginOutlined ,SignatureOutlined  ,HighlightOutlined  } from "@ant-design/icons"

import TeamManagment from "./dashboard/managment/teamManagment";
import UserManagment from "./dashboard/managment/userManagment";
import ForgetPassword from "./dashboard/authentication/forgetPasswordPage";

  const icon = {
    className: "w-5 h-5 text-inherit",
  };
  
  export const routes = [
    {
      layout: "dashboard",
      pages: [
        {
          icon: <HomeOutlined />,
          name: "خانه",
          path: "/",
          element: <Home />,
        },
        
        {
          icon: <SnippetsOutlined />,
          name: "مدیریت یوزرها",
          path: "/tables",
          element: <UserManagment />,
        } ,
        {
          icon: <LineChartOutlined />,
          name: "درباره ی ما",
          path: "/profile",
          element: <TeamManagment />,
        },
      ],
    },
    {
      title: "auth pages",
      layout: "auth",
      pages: [
        {
          icon: <LoginOutlined />,
          name: "ورود",
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          icon: <SignatureOutlined /> ,
          name: "ثبت نام",
          path: "/signup",
          element: <SignUp />,
        },
        {
          icon : <HighlightOutlined /> , 
          name : "فراموشی رمز",
          path : "/forget-password",
          element:<ForgetPassword/>
        }
      ],
    },
  ];
  
  export default routes;