
import React, { useEffect, useState } from 'react';
import { Collapse, Flex, Form, Input, Space, Typography , Button, ConfigProvider } from 'antd';
import {CaretRightOutlined} from '@ant-design/icons'
import { usermanagerdata } from '../data/useManagerData';
import { useFunc } from '../funcProvider';
import { useController,setcollapsechange,setsearchvalue ,setrollvalue } from '../context';


const UserManagerCollape = () => {
  const [controller, dispatch] = useController()
  let {sidenavType , collapseChange ,searchValue , rollValue , swicherFilterValue,cityValue} = controller
  const [collapseopen,setcollapseopen] = useState()
  let{Getuser} = useFunc()
  let{ChangeRollUser} = useFunc()
  const [user , setuser]= useState()
  let local_storage = localStorage.getItem("Login")
  let login = JSON.parse(local_storage)
 
  useEffect(()=>{
      const user = Getuser()
      user.then((data)=>{setuser(data)})
  },[])

  return (
  <Space  className='w-[80vw] md:w-full' direction="vertical">
    {user && user.filter((items)=>{
      return swicherFilterValue=="city" ? cityValue.toLowerCase() === ''? items : items.city.toLowerCase().includes(cityValue) :swicherFilterValue=="role" ? rollValue.toLowerCase() === ""  ? items : items.role.toLowerCase().includes(rollValue) : searchValue.toLowerCase() === ''? items : items.id.toLowerCase().includes(searchValue)

    }).map((user)=>(
      <div style={{backgroundColor:sidenavType=="dark" ? "rgb(30 28 41)" : "rgb(241 245 249)"}} className='rounded-xl'>
        <ConfigProvider
        theme={{
          components : {
            Collapse :{
              contentPadding : 0 ,
            }
          }
        }}>
          
          <Collapse
  expandIcon={({ isActive }) => (
    <CaretRightOutlined rotate={isActive ? 90 : 0} />
  )}
  collapsible="header"
  defaultActiveKey={['1']}
>
  <Collapse.Panel
    header={
      <div
        style={{
          color: sidenavType === 'dark' ? '#fbe094' : 'black',
        }}
        className="flex justify-evenly"
      >
        <div className="md:mr-10">نام کاربری : {user.id}</div>
        <div>نام کامل : {user.fullname}</div>
      </div>
    }
  >
    <div>
      {login.role === 'manager' ? (
        <div>
          <Form
            className="w-full relative p-2"
            onFinish={(e) => {
              console.log(e);
            }}
            style={{backgroundColor:sidenavType=="dark" ? "rgb(30 28 41)" : "rgb(241 245 249)"}}
          >
            <Flex className="md:flex-row flex-col gap-y-1 md:gap-x-4">
              <Form.Item>
                <Typography.Text style={{color: sidenavType === 'dark' ? '#fbe094' : 'black',}}>جیمیل : {user.email}</Typography.Text>
              </Form.Item>
              <Form.Item>
                <Typography.Text style={{color: sidenavType === 'dark' ? '#fbe094' : 'black',}}>نام کامل : {user.fullname}</Typography.Text>
              </Form.Item>
              <Form.Item>
                <Typography.Text style={{color: sidenavType === 'dark' ? '#fbe094' : 'black',}}>شهر : {user.city}</Typography.Text>
              </Form.Item>
              <Form.Item>
                <Typography.Text style={{color: sidenavType === 'dark' ? '#fbe094' : 'black',}}>نام کاربری : {user.id}</Typography.Text>
              </Form.Item>
            </Flex>
            <Form.Item>
              <Typography.Text style={{color: sidenavType === 'dark' ? '#fbe094' : 'black',}}>نقش کاربر : {user.role}</Typography.Text>
            </Form.Item>

            {collapseopen && (
              <Flex className="md:flex-row flex-col">
                <Typography.Text style={{color: sidenavType === 'dark' ? '#fbe094' : 'black',}}>نقش جدید کاربر را وارد کنید</Typography.Text>
                <Input
                  onChange={(e) => {
                    setcollapsechange(dispatch, e.target.value);
                  }}
                  className="sm:w-1/3 sm:mt-0 mt-3 mr-0 sm:mr-3 w-full"
                  type="text"
                />
                <Button
                  type="text"
                  onClick={() => {
                    setcollapseopen(false);
                    console.log(user.id);
                    console.log(collapseChange);
                    ChangeRollUser(user.id, collapseChange);
                  }}
                  size="large"
                  style={{
                    color: sidenavType === 'dark' ? 'white' : 'black',
                  }}
                  className="sm:mt-0 mt-3 mr-0 sm:mr-3 border-slate-300 rounded-br-none rounded-tl-none"
                >
                  ثبت
                </Button>
              </Flex>
            )}

            {!collapseopen && (
              <Button
                type="text"
                onClick={() => {
                  setcollapseopen(true);
                }}
                size="large"
                style={{
                  color: sidenavType === 'dark' ? 'white' : 'black',
                }}
                className="left-0 bottom-0 border-2 border-slate-300 rounded-br-none rounded-tl-none"
              >
                تغییر نقش کاربر
              </Button>
            )}
          </Form>
        </div>
      ) : (
        <div>
          <div className="text-xl mt-1 text-canter text-red-500">
            اجازه دسترسی به این بخش را ندارید
          </div>
        </div>
      )}
    </div>
  </Collapse.Panel>
</Collapse>
    </ConfigProvider>
    </div>
    ))}
  </Space>)
};
export default UserManagerCollape;