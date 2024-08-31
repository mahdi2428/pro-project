// import React from 'react'
// import { useFunc } from './funcProvider'
// import { Button , Tag , Input , Form , Typography } from 'antd'

// export default function ForgetPassword() {


//     let {loading} = useFunc()
//     let {ChangePassword} = useFunc()



//   return (
//     <>
//         <div dir="rtl"  className="flex bg-slate-50	 justify-center flex-wrap items-center w-screen h-screen	">
//             <Form onFinish={(e)=>(ChangePassword(e))} className="bg-zinc-200 border-2 border-slate-300 border-2 border-slate-300 item-center md:p-12 p-4 pb-7 rounded-2xl shadow-xl">
//             <Typography className="text-center pb-6 text-2xl">فراموشی رمز عبور</Typography>
//             {/* -------------------------------------------------------------------- */}

//             <Form.Item rules={[{
//                 required:true,
//                 type:"text",
//                 message:"نام کاربری صحیح را وارد کنید"
//             }]} label="نام کاربری" name={"id"}>
//                 <Input size="large"  className="border-2" placeholder="نام کاربری را وارد کنید"/>
//             </Form.Item>

//             {/* ------------------------------------------------------------------------ */}

//             <Form.Item rules={[{
//                 required:true,
//                 message:"رمز صحیح را وارد کنید"
//                 }]} label=" رمز عبور" name={"password"}>
//                 <Input.Password size='large' placeholder="پسورد را وارد کنید" />
//             </Form.Item>

//             {/* ----------------------------------------------------------------------------- */}

//             <Form.Item rules={[{
//                 required:true,
//                 message:"رمز صحیح را وارد کنید"
//                 }]} label="تکرار رمز عبور" name={"rpassword"}>
//                 <Input.Password size='large' placeholder="پسورد را وارد کنید" />
//             </Form.Item>

//             {/* --------------------------------------------------------------------------------- */}

//             <Button type="text" size="small" className="text-blue-700">صفحه ورود</Button>
//             <Button type="primary" size="large" className="rounded-2xl mt-2" htmlType="submit" block loading={loading}>
//                 ثبت
//             </Button>
//             </Form>
//         </div>
//     </>
//   )
// }

import { useState ,} from "react";
import { useFunc } from "../../funcProvider";
// import {useNavigate} from "react-router-dom"
import React from 'react';
import { Link } from "react-router-dom";
import { Form, Input, Checkbox, Button, Typography , Flex} from 'antd';
import { GoogleOutlined, TwitterOutlined } from '@ant-design/icons';
import { useController } from "../../context";


export function ForgetPassword() {

  const [controller, dispatch] = useController()
  let {sidenavType} = controller

    let {ChangePassword} = useFunc()
    let {loading} = useFunc()

  return (
    <section dir='rtl'  style={{backgroundColor:sidenavType=="dark" ? "#191919" : "white"}}  className="md:p-8 flex gap-4 ">
      <div className="w-full lg:w-3/5 mt-16">
        <div className="text-center">
          <Typography.Title style={{color:sidenavType=="dark"? "white" : "black"}} level={2} className="font-bold mb-4">تغییر پسورد</Typography.Title>
          <Typography.Paragraph style={{color:sidenavType=="dark"? "white" : "black"}} className="text-lg font-normal">نام کاربری و پسورد جدید را وارد کنید</Typography.Paragraph>
        </div>
        <Form onFinish={(e)=>{ChangePassword(e)}} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          {/* -------------------------------------------------------------------- */}
          <Typography.Text style={{color:sidenavType=="dark"? "white" : "black"}} strong>نام کاربری </Typography.Text>
          
          <Form.Item name={"username"} rules={[{
            required:true,
            type:"text",
            message:"نام کاربری صحیح را وارد کنید"
          }]}>
            <Input size="large" placeholder="name@mail.com" />
          </Form.Item>
          {/* ----------------------------------------------- */}
          <Typography.Text style={{color:sidenavType=="dark"? "white" : "black"}} strong>پسورد</Typography.Text>
          <Form.Item name={"password"} rules={[{
            required:true , 
            message:"رمز صحیح را وارد کنید"
          }]}>
            <Input type="password" size="large" placeholder="********" />
          </Form.Item>

          {/* ----------------------------------------------- */}

          <Typography.Text style={{color:sidenavType=="dark"? "white" : "black"}} strong>تکرار پسورد</Typography.Text>
          <Form.Item name={"rpassword"} rules={[{
            required:true , 
            message:"رمز صحیح را وارد کنید"
          }]}>
            <Input type="password" size="large" placeholder="********" />
          </Form.Item>

          {/* -------------------------------------------------- */}

          <Form.Item>
            <Checkbox>
              <Typography.Text style={{color:sidenavType=="dark"? "white" : "black"}}>
                با قوانین موافقم  
                <Link className="border-b-2" href="#" style={{color:sidenavType=="dark"? "white" : "black"}}> قوانین</Link>
              </Typography.Text>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button style={{color:sidenavType=="dark"? "white" : "black"}} loading={loading} type="primary" htmlType="submit" className="w-full">
              تغییر
            </Button>
          </Form.Item>
          <Form.Item>
            <Typography.Text>
              <Link to="/auth/sign-in" style={{color:sidenavType=="dark"? "white" : "black"}} className="border-b-2" href="#">رفتن به صفحه ورود</Link>
            </Typography.Text>
          </Form.Item>
          <Typography.Text >
              <Flex vertical>
                <Link to="/auth/forget-password" className='border-b-2' style={{color:sidenavType=="dark"? "white" : "black"}}></Link>
                <Link to="/" className={`${sidenavType=="dark"?"hover:bg-blue-700":"hover:bg-slate-100"} text-center mt-5 border-2 rounded-xl text-lg text-bold text-lg`} style={{color:sidenavType=="dark"? "white" : "black"}}>داشبورد</Link>
              </Flex>
            </Typography.Text>
        </Form>
        <Typography.Paragraph style={{color:sidenavType=="dark"? "white" : "black"}} className="text-center text-gray-500 font-medium mt-4">
          ثبت نام نکرده اید؟
          <Link to="/auth/signup" style={{color:sidenavType=="dark"? "white" : "black"}} className="text-gray-900 ml-1 border-b-2">ثبت نام</Link>
        </Typography.Paragraph>
      </div>
      <div className=" hidden w-full lg:w-2/5 lg:block">
        <img src="/img/pattern.png" className="h-full xl:h-5/6 w-full rounded-3xl" />
      </div>
    </section>
  );
}

export default ForgetPassword;