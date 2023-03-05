import { useState } from "react";


export default function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(initialValue)

    const cat = localStorage.getItem(key);

    const updateData = (data) => {
        localStorage.setItem(key, JSON.stringify(data));
    }
    


    return [value, setValue]
}