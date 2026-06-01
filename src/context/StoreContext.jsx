import { createContext, useContext, useReducer } from "react"
import storeReducer from "../store"
import { initialStore } from "../store";

const StoreContext = createContext();

export const StoreProvider = ({children}) => {
    const [store, dispatch] = useReducer(storeReducer, initialStore());

    return (
        <StoreContext.Provider
            value={{store, dispatch}}>
                {children}
            </StoreContext.Provider>
    );

};

const useGlobalReducer = () => {
    return useContext(StoreContext);
};

export default useGlobalReducer;

