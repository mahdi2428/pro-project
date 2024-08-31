import React from 'react';
import { Input, Menu } from 'antd';
import {FilterOutlined , CloseOutlined} from '@ant-design/icons'
import { setsearchvalue, useController,setcityvalue ,setrollvalue , setswicherFilterValue,setopenfilternav} from '../context';
import { SpaceContext } from 'antd/es/space';



const { Search } = Input;

export default function Filter() {
    const [controller, dispatch] = useController()
    let {openFilternav , sidenavType} = controller 
    
     return (
        
    <div>
        {
        openFilternav ? 
        <div style={{color : sidenavType =="dark" ? "#fbe094" : "black" , border:sidenavType =="dark" ?"1px solid white":"" }} className='group cursor-pointer	 relative flex rounded-xl shadow w-fit py-1 px-2' onClick={()=>setopenfilternav(dispatch, !openFilternav)}>
            <FilterOutlined className='cursor-pointer'/>
            <p>فیلتر</p>
        </div> :
          <Menu
          style={{backgroundColor: sidenavType == "dark" ? "rgb(30, 28, 41)" : "" ,width: 270 ,color : sidenavType =="dark" ? "#fbe094" : "black" }}
          className="p-2 rounded-xl shadow m-1 bg-gray-100 border"
          mode="inline"
          >
        <div className='md py-2 cursor-pointer	' onClick={() =>setopenfilternav(dispatch, !openFilternav)}>
            <CloseOutlined />
        </div>
        
        <Search
            onClick={()=>{setswicherFilterValue(dispatch , "search")}}
            onChange={(e)=>{setsearchvalue(dispatch , e.target.value)}}
            placeholder="نام را وارد کنید"
            allowClear
            style={{color : sidenavType =="dark" ? "#fbe094" : "black" }}
        />
        <Menu.SubMenu
        onClick={()=>{setswicherFilterValue(dispatch , "role")}}
          key="roles"
          className="shadow m-1 py-[0.5px]  border-b text-white border-blue-300"
          title={<span style={{color : sidenavType =="dark" ? "#fbe094" : "black" }}>roll</span>}
        >
          <Menu.Item style={{color : sidenavType =="dark" ? "#fbe094" : "black" }} onClick={()=>{setrollvalue(dispatch , "normaluser")}} key="normalUser" className="shadow m-1 border-white">
            Normal User
          </Menu.Item>
          <Menu.Item style={{color : sidenavType =="dark" ? "#fbe094" : "black" }} onClick={()=>{setrollvalue(dispatch ,"manager")}} key="manager" className="shadow m-1">
            Manager
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
        onClick={()=>{setswicherFilterValue(dispatch , "city")}}
          key="city"
          className="shadow m-1 py-[0.5px] border-b border-blue-200"
          title={<soan style={{color : sidenavType =="dark" ? "#fbe094" : "black" }}>city</soan>}
        >
          <Menu.Item style={{color : sidenavType =="dark" ? "#fbe094" : "black" }} onClick={()=>{setcityvalue(dispatch ,"mashhad")}} key="mashhad" className="shadow m-1">
            Mashhad
          </Menu.Item>
          <Menu.Item style={{color : sidenavType =="dark" ? "#fbe094" : "black" }} onClick={()=>{setcityvalue(dispatch ,"tehran")}} key="tehran" className="shadow m-1">
            Tehran
          </Menu.Item>
          <Menu.Item style={{color : sidenavType =="dark" ? "#fbe094" : "black" }} onClick={()=>{setcityvalue(dispatch ,"isfahan")}} key="isfahan" className="shadow m-1">
            Isfahan
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
        }
      
    </div>
  );
}