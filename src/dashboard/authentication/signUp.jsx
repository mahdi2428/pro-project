import { useFunc } from '../../funcProvider'
import React from 'react';
import { Link } from 'react-router-dom';
// import Link from 'antd/es/typography/Link';
import { Form, Input, Checkbox, Button, Typography , Flex} from 'antd';
import { GoogleOutlined, TwitterOutlined } from '@ant-design/icons';
import { useController } from '../../context';

export default function Signup() {
  
  const [controller, dispatch] = useController()
  let {sidenavType} = controller
    let {Register} = useFunc()
    let {loading} = useFunc()
    let {navigate} = useFunc()


  return (
    <section dir='rtl' style={{backgroundColor:sidenavType=="dark" ? "#191919" : "white"}} className="md:p-8 flex gap-4 ">
      <div className="w-full lg:w-3/5">
        <div className="text-center">
          <Typography.Title level={2} style={{color:sidenavType=="dark"? "white" : "black"}} className="font-bold mb-4">ثبت نام</Typography.Title>
          <Typography.Paragraph style={{color:sidenavType=="dark"? "white" : "black"}} className="text-lg font-normal">فیلد زیر را تکمیل کنید</Typography.Paragraph>
        </div>
        <Form onFinish={(e)=>{Register(e)}} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          {/* -------------------------------------------------------------------- */}
          <Typography.Text style={{color:sidenavType=="dark"? "white" : "black"}} strong>نام کاربری </Typography.Text>
          
          <Form.Item name={"id"} rules={[{
            required:true,
            message:"نام کاربری صحیح را وارد کنید"
          }]}>
            <Input size="large" placeholder="نام کاربری" />
          </Form.Item>
          {/* --------------------------------------------- */}
          <Typography.Text style={{color:sidenavType=="dark"? "white" : "black"}} strong>ایمیل</Typography.Text>
          <Form.Item name={"email"} rules={[{
            required:true , 
            message:"ایمیل را صحیح وارد کنید"
          }]}>
            <Input type="email" size="large" placeholder="ایمیل را وارد کنید" />
          </Form.Item>

          {/* ------------------------------------------------------------------- */}

          <Typography.Text style={{color:sidenavType=="dark"? "white" : "black"}} strong>نام کامل</Typography.Text>
          <Form.Item name={"fullname"} rules={[{
            required:true , 
            message:"نام را صحیح وارد کنید"
          }]}>
            <Input size="large" placeholder="********" />
          </Form.Item>

          {/* ------------------------------------------------------ */}

          <Typography.Text style={{color:sidenavType=="dark"? "white" : "black"}} strong>پسورد</Typography.Text>
          <Form.Item name={"password"} rules={[{
            required:true , 
            message:"رمز صحیح را وارد کنید"
          }]}>
            <Input type="password" size="large" placeholder="********" />
          </Form.Item>

          {/* ----------------------------------------------------------- */}

          <Typography.Text style={{color:sidenavType=="dark"? "white" : "black"}} strong>پسورد</Typography.Text>
          <Form.Item name={"rpassword"} rules={[{
            required:true , 
            message:"رمز صحیح را وارد کنید"
          }]}>
            <Input type="password" size="large" placeholder="********" />
          </Form.Item>

          {/* -------------------------------------------------------------- */}

          <Form.Item rules={[{
            message:"با قوانین موافقت کنید"
          }]} name={"checked"}>
            <Checkbox>
              <Typography.Text style={{color:sidenavType=="dark"? "white" : "black"}}>
                با قوانین موافقم  
                <Link className='border-b-2' style={{color:sidenavType=="dark"? "white" : "black"}} href="#" > قوانین</Link>
              </Typography.Text>
            </Checkbox>
          </Form.Item>

          {/* ------------------------------------------------------------ */}

          <Form.Item>
            <Button style={{color:sidenavType=="dark"? "white" : "black"}} loading={loading} type="primary" htmlType="submit" className="w-full">
              ورود
            </Button>
          </Form.Item>

          {/*----------------------------------------------------------------  */}

          <Typography.Text >
              <Flex vertical>
                <Link to="/auth/forget-password" className='border-b-2' style={{color:sidenavType=="dark"? "white" : "black"}}></Link>
                <Link to="/" className='text-center mt-5 hover:bg-slate-100 border-2 rounded-xl text-lg text-bold text-lg' style={{color:sidenavType=="dark"? "white" : "black"}}>داشبورد</Link>
              </Flex>
            </Typography.Text>
        </Form>
        <Typography.Paragraph  style={{color:sidenavType=="dark"? "white" : "black"}} className="text-center text-gray-500 font-medium mt-4">
          ثبت نام کرده اید؟
          
          <Link style={{color:sidenavType=="dark"? "white" : "black"}} to="/auth/sign-in" className="text-gray-900 ml-1 border-b-2"> ورود</Link>
        </Typography.Paragraph>
      </div>
      <div className=" hidden w-full lg:w-2/5 lg:block">
        <img src="/img/pattern.png" className="h-full xl:h-5/6 w-full rounded-3xl" />
      </div>
    </section>
  );
}

