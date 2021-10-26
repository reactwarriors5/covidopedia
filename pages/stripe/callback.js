import { useEffect } from 'react'
import { SyncOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { loggin } from '../../features/userSlice/userSlice'
import axios from 'axios'
axios.defaults.withCredentials = true

const StripeCallback = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/get-account-status`)
      .then(response => {
        dispatch(
          loggin({
            user: response.data,
          })
        )
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
