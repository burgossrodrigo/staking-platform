import {  useState } from 'react'

const useInput = () => {

    const [useInput, setUSeInput] = useState()

    return { useInput, setUSeInput }

}

export default useInput