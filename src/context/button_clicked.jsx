import { createContext, useState } from "react";


export const ClickedContext = createContext()

export function ClickedContextProvider ({children}){
  const [buttonClicked, setButtonClicked] = useState({name: 'firstRender', active: false})

  return(
    <ClickedContext.Provider value={{buttonClicked, setButtonClicked}} >
      {children}
    </ClickedContext.Provider>
  ) 
}