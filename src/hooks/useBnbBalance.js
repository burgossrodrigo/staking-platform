import { useState } from 'react'

const useBnbBalance = () => {

    const [bnbBalance, setBnbBalance] = useState()

    return { bnbBalance, setBnbBalance }

}

export default useBnbBalance