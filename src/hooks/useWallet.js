import {  useState } from 'react'

const useWallet = () => {

    const [openWallet, setOpenWallet] = useState(false)

    return { openWallet, setOpenWallet }

}

export default useWallet