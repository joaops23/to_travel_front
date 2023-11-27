import * as React from "react";
import { createContext, useState } from "react";

const StoreContext = createContext([{}, () => {}])

export const StoreProvider = ({children}) => {
    const [state, setState] = useState({})
    return (
        <StoreContext.Provider value={[state, setState]}>
            {children}
        </StoreContext.Provider>
    )
}


// Hook para acessar facilmente a store
export const useStore = () => {
    const [store, setStore] = React.useContext(StoreContext)
    return [store, setStore]
}