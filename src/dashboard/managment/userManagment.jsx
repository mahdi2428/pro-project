import React from 'react'
import UserManagerCollape from '../../widget/userManagerCollape'
import { useController } from '../../context'
import Filter from '../../widget/filter';


export default function UserManagment() {


  const login = localStorage.getItem("Login") 
  
  const [controller, dispatch] = useController()
  let {sidenavType} = controller

  return (
    <div >
      <div style={{color: sidenavType =="dark"?"white" : "black"}}>
        مدریت کاربران 
      </div> 
      {login ? 
        <div className='flex flex-col-reverse xl:flex-row xl:justify-evenly md:items-center xl:items-start'>
          <div  className='w-3/5 mt-4'>
            <UserManagerCollape/>
          </div>
          <div>
            <Filter />
          </div>
        </div>:
        <div className='text-2xl mt-6 text-red-600'>برای دیدن این بخش ابتدا لاگین کنید</div>
        }
    </div>
  )
}
