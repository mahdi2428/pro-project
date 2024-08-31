import { createContext, useContext, useEffect, useState } from "react";
import { Button, Form, Input , message } from "antd";
import { useNavigate } from "react-router-dom";
import { useController  } from "./context";
import { setsearchvalue ,setuservalue } from "./context";
const funcContext = createContext();

export const FuncProvider =({children})=>{
    const [controller, dispatch] = useController()
    let {serachValue , rollValue} = controller
    const [loading , setloading] = useState(false)
    const navigate = useNavigate()

    // ------------------Login func -----------------------------------------

    const Login = async(obj)=>{
        setloading(true)
        // console.log(obj);
        
        const respon = await fetch(`http://localhost:4000/users/${obj.username}`)

        if (respon.status == 404){
            message.error("یوزری با این نام کاربری یافت نشد")
            setloading(false)
        }

        const respon_data = await respon.json()
        
        if(obj.username == respon_data.id && obj.password == respon_data.password){
            message.success("خوش آمدید")
            setloading(false)
            navigate("dashboard/")
            localStorage.setItem("Login" ,  [JSON.stringify(respon_data)])
        }else{
            message.error("رمز عبور یا نام کاربری اشتباه است")
            setloading(false)
        } 
    }

    // ------------------------------logout--------------------------------------


    const Logout = ()=>{
        localStorage.removeItem("Login")
        navigate("/")
    }


    // ---------------------------register func ------------------------

    const Register = async(obj)=>{
        setloading(true)
        Object.assign(obj , {"role":"normalUser"})
        if(obj.rpassword == obj.password && obj.password.length > 7){
            const respon = await fetch("http://localhost:4000/users/" , {
            method : "POST",
            headers : {"content-type" : "application/json"} ,
            body : JSON.stringify(obj)
            })
            if(respon.status == 201){
                message.success("ثبت نام با موفقیت انجام شد")
                navigate("auth/sign-in/")
                setloading(false)
            }else{
                message.error("مشکلی در ثبت نام شما وجود دارد")
                setloading(false)
            }
        }else{
            message.error("پسورد را صحیح وارد کنید")
            setloading(false)
        }
        
    }


    // --------------------------change password func ------------------------

    const ChangePassword = async(e)=>{
        if (e.password == e.rpassword){
            const respon = await fetch(`http://localhost:4000/users/${e.id}` , {
                method : "PATCH" , 
                headers : {"content-type": "application/json"} ,
                body:JSON.stringify(e)
            })
            if(respon.status == 200){
                message.success("رمز عبور با موفقیت تغییر کرد")
            }else if(respon.status == 404){
                message.error("یوزری با این نام کاربری وجود ندارد")
            }else{
                message.error("مشکل ناشناخته ای رخ داد")
            }

        }else{
            message.error("پسورد را صحیح وارد کنید" )
        }
    }

// -------------------------get data ------------------------------------

    const Getuser = async(obj)=>{

        const respon = await fetch(`http://localhost:4000/users/`)
        const respon_data = await respon.json()

        return respon_data

    }

// --------------------------------change role of user -----------------------------
const ChangeRollUser = async(user , roll)=>{
    if (roll == "normaluser" || roll == "manager"){
        const respon = await fetch(`http://localhost:4000/users/${user}` , {
            method : "PATCH" , 
            headers : {"content-type": "application/json"} ,
            body:JSON.stringify({"role" : roll})
        })
        if(respon.status == 200){
            message.success("با موفقیت تغییر کرد")
        }else if(respon.status == 404){
            message.error("یوزری با این نام کاربری وجود ندارد")
        }else{
            message.error("مشکل ناشناخته ای رخ داد")
        }
    }else{
        message.error("نقش کاربر باید منیجر یا یوزر عادی باشد ")
    }
}



    const value = {
        Login : Login ,
        Logout : Logout , 
        Register : Register,
        ChangePassword:ChangePassword,
        loading : loading,
        Getuser : Getuser,
        ChangeRollUser : ChangeRollUser , 
        navigate:navigate ,
        
    }


    return <funcContext.Provider value={value}>{children}</funcContext.Provider>
}
export const useFunc = ()=>{
    return useContext(funcContext)
}