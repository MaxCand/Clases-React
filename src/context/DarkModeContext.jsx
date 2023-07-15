import { createContext } from "react";



export const DarkMode = createContext()

export const DarkModeProvider = ({children}) => {

    return (
        <DarkMode.Provider>
            {children}
        </DarkMode.Provider>
    )
}