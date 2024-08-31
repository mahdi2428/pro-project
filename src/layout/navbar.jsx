// {openMenuNav ?
//     <div dir="rt" style={{backgroundColor:sidenavType === "dark" ? "rgb(17 16 22)" : "rgb(241 245 249)"}} className={` 
            
//           } ${sidenavDirection ? "left-auto" : ""} w-screen h-screen absolute z-50 top-0 left-0  shadow rounded-xl transition-transform duration-700 xl:translate-x-0 border border-blue-gray-100`}>
//       <Sider
//         className={`relative`}
//       >
//         <Link to="/" className="py-6 px-8 text-center">
//           <Typography.Title level={2} style={{ color: sidenavType === "dark" ? "white" : "black" }}>
//             {brandName}
//           </Typography.Title>
//         </Link>
//         <Button
//           type="text"
//           size="small"
//           className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
//         >
    
//         </Button>
//       </Sider>
      
//       <Menu mode="inline" style={{backgroundColor:sidenavType === "dark" ? "rgb(17 16 22)" : "rgb(241 245 249)"}}  className={`${sidenavType === "dark" ? "bg-blue-950" : "bg-slate-100"} mb-4 flex flex-col gap-1`}>
      
//       <div onClick={()=>setopenmenunav(dispatch ,!openMenuNav)} className=" p-2 ">
//         <CloseOutlined />
//       </div>
    
//         {routes.map(({ layout, title, pages }, key) => (
//           <div key={key} className="text-center ">  
//             {title && 
//             <Menu.Item style={{ backgroundColor:sidenavType == "dark"? "rgb(17 16 22)" : "rgb(243 244 246)"}} itemActiveBg="white" className="opacity-75 text-left bg-sky-800">
//                 <Typography.Text style={{ color: sidenavType === "dark"  ? "white" : "black" , }}  className="font-black  uppercase p-4">
//                     {title}
//                 </Typography.Text>
//             </Menu.Item>
//             }
//             {pages.map(({ icon, name, path }) => (
//               <Menu.Item onClick={()=>setopenmenunav(dispatch ,!openMenuNav)} className={`${sidenavType=="dark"?"border-sky-900":"border-gray-200"} border-b-2 shadow`} style={{ backgroundColor :sidenavType === "dark"?"rgb(17 16 22)" :  sidenavType === "dark" || locations.pathname==="/dashboard" + path ? "black" : "rgb(241 245 249)"}}>
//                 <Link to={`/${layout}${path}`}  className="flex" >
//                     {icon}
//                     <Typography.Text  style={{ color: sidenavType === "dark" || locations.pathname==="/dashboard" + path ? "#fbe094": "black" , }} className="font-medium capitalize p-4 ">{name}</Typography.Text>
//                 </Link>
//               </Menu.Item>
//             ))}
//           </div>
//         ))}
//         <Menu.Item style = {{backgroundColor:sidenavType=="dark" ? "rgb(17 16 22)" :"rgb(243 244 246)" }} onClick={()=>{setsidenaveDirection(dispatch , !sidenavDirection);setopenmenunav(dispatch ,!openMenuNav)}} className={`${sidenavType=="dark"?"border-sky-900":"border-gray-200"} border-b-2 shadow`}>
//           <Typography.Text  style={{color : sidenavType =="dark" ? "#fbe094" : "black" }} className="font-medium capitalize p-4 ">راست چین چپ چین</Typography.Text>
//         </Menu.Item>
//       </Menu>
//       <Button
//           type="text"
//           onClick={()=>{handlenavetype();setopenmenunav(dispatch ,!openMenuNav)}}
//           size="large"
//           style={{color:sidenavType=="dark" ? "white" : "black"}}
//           className= "absolute right-0 top-0 grid rounded-br-none rounded-tl-none">
//             {sidenavType === "dark" ? <SunOutlined />: <MoonOutlined />}
            
//         </Button>
//     </div> : <>
//             <div className="p-4" onClick={()=>setopenmenunav(dispatch ,!openMenuNav)}>
//               <MenuOutlined />
//             </div>
//     </>}

// import { Menu } from 'antd';
// // import 'antd/dist/antd.css';
// import { Link } from 'react-router-dom';


// export default function Navbar() {
//   return (
//     <nav className="bg-orange-500 py-4 shadow-md md:flex md:justify-between sm:flex-col sm:items-center">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <Menu mode="horizontal" className="bg-orange-500 border-0">
//             <Menu.Item key="home" className="mr-4">
//               <Link to="#" className="text-lg font-bold text-white hover:text-gray-200 transition duration-300 ease-in-out">
//                 Home
//               </Link>
//             </Menu.Item>
//             <Menu.Item key="about" className="mr-4">
//               <Link to="#" className="text-lg font-bold text-white hover:text-gray-200 transition duration-300 ease-in-out">
//                 About
//               </Link>
//             </Menu.Item>
//             <Menu.Item key="services" className="mr-4">
//               <Link to="#" className="text-lg font-bold text-white hover:text-gray-200 transition duration-300 ease-in-out">
//                 Services
//               </Link>
//             </Menu.Item>
//             <Menu.Item key="contact" className="mr-4">
//               <Link to="#" className="text-lg font-bold text-white hover:text-gray-200 transition duration-300 ease-in-out">
//                 Contact
//               </Link>
//             </Menu.Item>
//             <Menu.Item key="login" className="mr-4">
//               <Link to="#" className="text-lg font-bold text-white hover:text-gray-200 transition duration-300 ease-in-out">
//                 Login
//               </Link>
//             </Menu.Item>
//           </Menu>
//         </div>
//       </div>
//     </nav>
//   );
// }
import {SunOutlined ,MoonOutlined } from "@ant-design/icons"
import React, { useState } from 'react';
import { Menu, Button , Typography} from 'antd';
// import 'antd/dist/antd.css';
import {MenuOutlined} from "@ant-design/icons"
import { Link } from 'react-router-dom';
import { useController } from '../context';
import { setSidenavType } from "../context";
import routes from "../routes";
import { useLocation } from "react-router-dom";
import { setsidenaveDirection } from "../context";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [controller , dispatch] = useController()
  let {sidenavType , sidenavDirection} = controller
  const locations = useLocation()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handlenavetype = ()=>{
    if (sidenavType == "dark"){
      setSidenavType(dispatch , "white")
    }else{
      setSidenavType(dispatch , "dark")
    }
  }

  return (
    <div className=" items-center p-4 ">
      <Button
      style={{backgroundColor:sidenavType === "dark" ? "rgb(17, 16, 22)" : "rgb(241 245 249)" , color : sidenavType =="dark" ? "#fbe094" : "black", border : sidenavType=="dark"?"1px solid #fbe094" : ""}}
        type="primary"
        className="lg:hidden mb-2 w-8 h-8"
        onClick={toggleMenu}
      >
        {/* <Icon type="menu" /> */}
        <MenuOutlined />
      </Button>
      <Menu
        className={`${
          isOpen ? '' : 'hidden'
        } lg:hidden flex flex-col justify-center relative items-start border-2 rounded-xl p-3`}
        mode="inline"
        style={{backgroundColor:sidenavType === "dark" ? "rgb(17 16 22)" : "rgb(241 245 249)"}}
      >
        <Button
      type="text"
      onClick={()=>{handlenavetype()}}
      size="large"
      style={{color:sidenavType=="dark" ? "white" : "black"}}
      className= "absolute left-0 top-0 grid z-10 rounded-bl-none rounded-tr-none">
        {sidenavType === "dark" ? <SunOutlined />: <MoonOutlined />}
        
    </Button>
    {routes.map(({ layout, title, pages }, key) => (
      <div key={key} className="text-center w-full">  
        {pages.map(({ icon, name, path }) => (
          <Menu.Item className={`${sidenavType=="dark"?"border-sky-900":"border-gray-200"} border-b-2 shadow w-full`} style={{ backgroundColor :sidenavType === "dark"?"rgb(17 16 22)" :  sidenavType === "dark" || locations.pathname==="/dashboard" + path ? "black" : "rgb(241 245 249)"}}>
            <Link to={`/${layout}${path}`}  className="flex" >
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
    </div>
  );
}

export default Navbar;