import { createContext } from "react"



const store = {}
const MyContext = createContext(store)

export const MyContextProvider = ({children}:any) => {
    return (
        <MyContext.Provider value={store}>{children}</MyContext.Provider>
    )
}