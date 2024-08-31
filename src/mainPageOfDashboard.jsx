import { Menu } from 'antd'
import React, { useState } from 'react'
import {ContainerOutlined ,DesktopOutlined,PieChartOutlined, AppstoreOutlined , MailOutlined , SettingOutlined} from '@ant-design/icons'
export default function MainPageOfDashboard() {
  
    const [collapse , setcollapse] = useState(false)
    const toggleCollapse =(e)=>{
        if (e.key == '1'){
            setcollapse(!collapse)
        }
        console.log(collapse);
        
      }
    


    const items = [
        {
          key: '1',
          
          icon: <PieChartOutlined />,
          label: 'Option 1',
        },
        {
          key: '2',
          icon: <DesktopOutlined />,
          label: 'Option 2',
        },
        {
          key: '3',
          icon: <ContainerOutlined />,
          label: 'Option 3',
        },
        {
          key: 'sub1',
          label: 'Navigation One',
          icon: <MailOutlined />,
          children: [
            {
              key: '5',
              label: 'Option 5',
            },
            {
              key: '6',
              label: 'Option 6',
            },
            {
              key: '7',
              label: 'Option 7',
            },
            {
              key: '8',
              label: 'Option 8',
            },
          ],
        },
        {
          key: 'sub2',
          label: 'Navigation Two',
          icon: <AppstoreOutlined />,
          children: [
            {
              key: '9',
              label: 'Option 9',
            },
            {
              key: '10',
              label: 'Option 10',
            },
            {
              key: 'sub3',
              label: 'Submenu',
              children: [
                {
                  key: '11',
                  label: 'Option 11',
                },
                {
                  key: '12',
                  label: 'Option 12',
                },
              ],
            },
          ],
        },
      ];

      

    return (
    <div dir='rtl'>
        <Menu
            style={{
                width : 256 , 
                
            }}
            
            className='h-screen bg-blue-300	'
            items={items}
            onClick = {toggleCollapse }
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            mode="inline"
            // theme="dark"
            inlineCollapsed = {collapse}
            darkItemSelectedBg
            activeBarBorderWidth="10"
            activeBarWidth={10}
            activeBarHeight={10}
            colorText='rgba(0, 4, 1, 0.88)'
        >

        </Menu>
    </div>
  )
}
