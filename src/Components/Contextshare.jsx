import React, { createContext, useState } from 'react'

export const addcontext = createContext()
function Contextshare({children}) {
    const [addtocart,setaddtocart]=useState([])
    const [addwish,setaddwish]=useState([])

  return (
    <addcontext.Provider value={{addtocart,setaddtocart,addwish,setaddwish}}>
        {children}
    </addcontext.Provider>
  )
}

export default Contextshare