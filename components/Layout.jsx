import React from 'react'
import Link from 'next/link'

export const Layout = ({children}) => {
  return (
    <>
        <div className="flex justify-around z-10 shadow-md bg-white fixed top-0 shadow-black-900 w-full font-oswald">
            <div>
                <span className="  text-2xl p-4 inline-block text-blue-400">Devs<span className='text-blue-900'>Blog</span></span>
                <input placeholder="Search..." className="w-96 font-thin h-content border-[1px] border-gray-400 rounded-md focus:ring-blue-400 focus:outline-none focus:ring-1 p-1"/>
            </div>
            <div className="space-y-3">
                <Link href="/">
                    <a className="inline-block text-lg text-blue-900 p-1 mr-2" >
                        Log in
                    </a>
                </Link>
                <Link href="/">
                    <a className="inline-block text-lg border-2 border-blue-600 text-blue-600  p-1 rounded-md px-2">
                        Create Account
                    </a>
                </Link>
            </div>
        </div>
        <div className=" bg-gray-100">
            {children}
        </div>
    </>
  )
}
