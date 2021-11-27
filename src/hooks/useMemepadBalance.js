import { useState } from 'react'

const useMemepadBalance = () => {

const [ memepadBalance, setMemepadBalance] = useState()

return { memepadBalance, setMemepadBalance }

}

export default useMemepadBalance