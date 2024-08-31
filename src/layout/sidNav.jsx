// import PropTypes from "prop-types";
// import { Link, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout, Menu, Button, Typography, Space } from 'antd';
import { useState } from "react";
import {SunOutlined ,MoonOutlined } from "@ant-design/icons"
import { useController,setSidenavType , isActive } from "../context";
import { useLocation } from "react-router-dom";
import { setsidenaveDirection } from "../context";
import Navbar from "./navbar";

export function Sidenav({ brandName, routes }) {
  const [currentActive, setCurrentActive] = useState(null);
  const handleActive = (id)=>{
      setCurrentActive(id);
  }
  const [controller , dispatch] = useController()
  const {openSidenav , sidenavType , sidenavDirection} = controller
  const locations = useLocation()



  const handlenavetype = ()=>{
    if (sidenavType == "dark"){
      setSidenavType(dispatch , "white")
    }else{
      setSidenavType(dispatch , "dark")
    }
  }

const { Sider } = Layout;
  return (
    <div dir="" style={{backgroundColor:sidenavType === "dark" ? "rgb(17 16 22)" : "rgb(241 245 249)"}} className={` ${
      sidenavDirection ? openSidenav ? "-translate-x-0" : "translate-x-80 hidden" :openSidenav ? "translate-x-0" : "-translate-x-80 " 
      } ${sidenavDirection ? "left-auto" : ""} inset-x-0	lg:block absolute inset-0 z-50 my-4 mx-4 h-[calc(100vh-32px)] w-72 shadow rounded-xl transition-transform duration-700 lg:translate-x-0 border border-blue-gray-100`}>
  <Sider
    className={`relative`}
  >
    <Link to="/" className="py-6 px-8 text-center">
      <Typography.Title level={2} style={{ color: sidenavType === "dark" ? "white" : "black" }}>
        {brandName}
      </Typography.Title>
    </Link>
    <Button
      type="text"
      size="small"
      className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
    >

    </Button>
  </Sider>
  <Menu mode="inline" style={{backgroundColor:sidenavType === "dark" ? "rgb(17 16 22)" : "rgb(241 245 249)"}}  className={`${sidenavType === "dark" ? "bg-blue-950" : "bg-slate-100"} mb-4 flex flex-col gap-1`}>
    {routes.map(({ layout, title, pages }, key) => (
      <div key={key} className="text-center ">  
        {title && 
        <Menu.Item style={{ backgroundColor:sidenavType == "dark"? "rgb(17 16 22)" : "rgb(243 244 246)"}} itemActiveBg="white" className="opacity-75 text-left bg-sky-800">
            <Typography.Text style={{ color: sidenavType === "dark"  ? "white" : "black" , }}  className="font-black  uppercase p-4">
                {title}
            </Typography.Text>
        </Menu.Item>
        }
        {pages.map(({ icon, name, path }) => (
          <Menu.Item className={`${sidenavType=="dark"?"border-sky-900":"border-gray-200"} border-b-2 shadow`} style={{ backgroundColor :sidenavType === "dark"?"rgb(17 16 22)" :  sidenavType === "dark" || locations.pathname==="/dashboard" + path ? "black" : "rgb(241 245 249)"}}>
            <Link to={`/${layout}${path}`} style={{color:"blue"}} className="flex" >
                {icon}
                <Typography.Text  style={{ color: sidenavType === "dark" || locations.pathname==="/dashboard" + path ? "#fbe094": "black" , }} className="font-medium capitalize p-4 ">{name}</Typography.Text>
            </Link>
          </Menu.Item>
        ))}
      </div>
    ))}
    <Menu.Item style = {{backgroundColor:sidenavType=="dark" ? "rgb(17 16 22)" :"rgb(243 244 246)" }} onClick={()=>{setsidenaveDirection(dispatch , !sidenavDirection)}} className={`${sidenavType=="dark"?"border-sky-900":"border-gray-200"} border-b-2 shadow`}>
      <Typography.Text  style={{color : sidenavType =="dark" ? "#fbe094" : "black" }} className="font-medium capitalize p-4 ">راست چین چپ چین</Typography.Text>
    </Menu.Item>
  </Menu>
  <Button
      type="text"
      onClick={()=>{handlenavetype()}}
      size="large"
      style={{color:sidenavType=="dark" ? "white" : "black"}}
      className= "absolute right-0 top-0 grid rounded-br-none rounded-tl-none">
        {sidenavType === "dark" ? <SunOutlined />: <MoonOutlined />}
        
    </Button>
</div>






















    // <aside
    //   className={`${sidenavTypes[sidenavType]} ${
    //     openSidenav ? "translate-x-0" : "-translate-x-80"
    //   } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
    // >
    // <>
    // <div>
    //   <div
    //     className={`relative`}
    //   >
    //     <Link to="/" className="py-6 px-8 text-center">
    //       <Typography
    //         variant="h6"
    //         color={sidenavType === "dark" ? "white" : "blue-gray"}
    //       >
    //         {brandName}
    //       </Typography>
    //     </Link>
    //     <IconButton
    //       variant="text"
    //       color="white"
    //       size="sm"
    //       ripple={false}
    //       className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
    //       onClick={() => setOpenSidenav(dispatch, false)}
    //     >
    //       <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
    //     </IconButton>
    //   </div>
    //   <div className="m-4">
    //     {routes.map(({ layout, title, pages }, key) => (
    //       <ul key={key} className="mb-4 flex flex-col gap-1">
    //         {title && (
    //           <li className="mx-3.5 mt-4 mb-2">
    //             <Typography
    //               variant="small"
    //               color={sidenavType === "dark" ? "white" : "blue-gray"}
    //               className="font-black uppercase opacity-75"
    //             >
    //               {title}
    //             </Typography>
    //           </li>
    //         )}
    //         {pages.map(({ icon, name, path }) => (
    //           <li key={name}>
    //             {/* <NavLink to={`/${layout}${path}`}> */}
    //               {({ isActive }) => (
    //                 <Button
    //                   variant={isActive ? "gradient" : "text"}
    //                   color={
    //                     isActive
    //                       ? sidenavColor
    //                       : sidenavType === "dark"
    //                       ? "white"
    //                       : "blue-gray"
    //                   }
    //                   className="flex items-center gap-4 px-4 capitalize"
    //                   fullWidth
    //                 >
    //                   {icon}
    //                   <Typography
    //                     color="inherit"
    //                     className="font-medium capitalize"
    //                   >
    //                     {name}
    //                   </Typography>
    //                 </Button>
    //               )}
    //             {/* </NavLink> */}
    //           </li>
    //         ))}
    //       </ul>
    //     ))}
    //   </div>
    //   </div>
    //   </>
    // </aside>
  );
}

// Sidenav.defaultProps = {
//   brandImg: "/img/logo-ct.png",
//   brandName: "Material Tailwind React",
// };

// Sidenav.propTypes = {
//   brandImg: PropTypes.string,
//   brandName: PropTypes.string,
//   routes: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;