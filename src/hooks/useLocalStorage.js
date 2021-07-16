import {useEffect, useState} from 'react'

const PREFIX = 'codepen-clone-'

export default function useLocalStorage(key, initailValue) {
    const prefixedkey = PREFIX + key

    //getting value
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedkey)
        if(jsonValue != null) return JSON.parse(jsonValue)

        if(typeof initailValue === 'function'){
            return initailValue()
        }
        else{
            return initailValue
        }
    })


    //updating value in local storage
    useEffect(() => {
        localStorage.setItem(prefixedkey, JSON.stringify(value))
    },[prefixedkey, value])


    //returning the value
    return (
        [value, setValue]
    )
}
