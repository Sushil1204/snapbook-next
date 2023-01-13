import React from 'react'
import Navigation from './Navigation'

const Layout = ({children}) => {
  return (
    <div className="flex mt-4 container mx-auto">
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-6 gap-5">
          <div className="w-8/12 mx-auto">
            <Navigation/>
          </div>
          <div className="col-span-2 w-9/12">
            {children}
          </div>
        </div>
      </div>
  )
}

export default Layout