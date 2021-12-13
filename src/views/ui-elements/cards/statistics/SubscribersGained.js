import { useEffect, useState } from 'react'
import axios from 'axios'
import { Users } from 'react-feather'

const SubscribersGained = ({ kFormatter }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-statistics/subscribers').then(res => setData(res.data))
  }, [])

  return data !== null ? (
    <div></div>
  
  ) : null
}

export default SubscribersGained
