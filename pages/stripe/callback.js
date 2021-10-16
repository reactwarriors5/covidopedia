import { useEffect } from 'react'
import { SyncOutlined } from '@ant-design/icons'
import axios from 'axios'
axios.defaults.withCredentials = true

const StripeCallback = () => {
  useEffect(() => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/get-account-status`)
      .then(res => {
        console.log(res)
        // dispatch({
        //   type: 'LOGIN',
        //   payload: res.data,
        // })
        // window.localStorage.setItem('user', JSON.stringify(res.data))
        window.location.href = '/dashboard'
      })
  }, [])

  return (
    <div className='flex justify-center items-center h-screen text-7xl text-indigo-600'>
      <SyncOutlined spin />
    </div>
  )
}

export default StripeCallback
