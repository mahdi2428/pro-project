import Sidenav from "./sidNav";
import routes from "../routes";
import { useState } from "react";
import { Route , Routes } from "react-router-dom";
import { useController } from "../context";
import { Button } from "antd";
import { useFunc } from "../funcProvider";
import Navbar from "./navbar";


export function Dashboard() {
  const [controller, dispatch] = useController()
  const login = localStorage.getItem("Login")

  
  let {sidenavType , sidenavDirection} = controller
  let {Logout} = useFunc()
  
// #fbe094
// #0f0d0d
// rgb(36 36 39)
  return (
    <div dir={sidenavDirection ? "rtl" : ""} style={{backgroundColor:sidenavType=="dark"?"#191919":"white"}} className="min-h-screen overflow-x-hidden w-screen bg-blue-gray-50/50 ">
      <div className="">
        <Sidenav
        routes={routes}
        brandName = {"Pro Website"}
        />
      </div>
      
      <div className="sm:mr-9 mr-2">
        <Navbar/>
      </div>
      <div className={`${ sidenavDirection ? "lg:mr-80" : "lg:ml-80"} p-7 h-fit duration-700 `}>

      {login  &&
      
      <Button
        type="text"
        onClick={()=>{Logout()}}
        size="large"
        style={{color:sidenavType=="dark" ? "white" : "black"}}
        className= " right-auto top-5 border-2 border-slate-300 mb-6 grid rounded-br-none rounded-tl-none">
          SignOut
      </Button>
      }
      
        <Routes>
        {routes.map(
          ({ layout, pages }) =>
            
            layout === "dashboard" &&
            pages.map(({ path, element }) => (
              // console.log(element)
              
              <Route  path={path} element={element} />
              
            ))
          )}
        {/* <Home/> */}
        </Routes>
      </div>
      
      {/* <div className="p-4 xl:ml-80">
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div> */}
    </div>
  );
}

// Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;