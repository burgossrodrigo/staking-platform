import { useState } from 'react'

const useOutput = () => { 

    const [output, setOutput] = useState()

    return { output, setOutput }

}

export default useOutput