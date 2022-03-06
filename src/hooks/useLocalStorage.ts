import { useCallback, useEffect, useMemo, useState } from "react"

function stringifyLocalStorageData(data: any): string {
    if (typeof data === 'function') {
        return JSON.stringify(data())
    }
    return JSON.stringify(data)
}

export const useLocalStorage = <T>(key: string, initialData?: T | (() => T)): [T, (payload: T | (() => T)) => void, () => void] => {
    const [data, setData] = useState(stringifyLocalStorageData(initialData))

    useEffect(() => {
        const localData = window.localStorage.getItem(key)
        if (localData) setData(localData)
    }, [key])

    const result = useMemo<T>(() => JSON.parse(data), [data])

    const set = useCallback((payload: T | (() => T)) => {
        window.localStorage.setItem(key, stringifyLocalStorageData(payload))
    }, [key])

    const remove = useCallback(() => {
        window.localStorage.removeItem(key)
    }, [key])


    return [result, set, remove]
}