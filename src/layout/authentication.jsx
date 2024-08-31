import React from 'react'
import { Route , Routes } from 'react-router-dom'
import routes from '../routes'
import SignIn from '../dashboard/authentication/signIn'
export default function Authentication() {
  return (
    <div>
        <div>
            <Routes>
            {routes.map(({layout, pages}) =>(
                layout === "auth" && 
                pages.map(({name , path , element}) =>(
                    <Route  path={path} element={element} />
                ))
            ))}
            </Routes>
        </div>
    </div>
  )
}
