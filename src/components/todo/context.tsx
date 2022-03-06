import { createContext, useContext } from 'react'

const CountContext = createContext<ICountContext>({ ct: 0, lab: 0 })

export const useCount = () => useContext(CountContext)

const CountProvider: React.FC<{ value: ICountContext }> = ({ value, children }) => {
    return (
        <CountContext.Provider value={value}>{children}</CountContext.Provider>
    )
}

export default CountProvider

export interface ICountContext {
    ct: number;
    lab: number;
}