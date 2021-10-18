import { useEffect } from 'react'
import { SyncOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import axios from 'axios'
axios.defaults.withCredentials = true

const StripeSuccess = () => {
  // router
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) successRequest()
  }, [id])

  console.log(id)

  const successRequest = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/stripe-success/${id}`
    )
    // console.log("SUCCESS REQ DATA", data);
    router.push(`/allAppointments`)
  }

  return (
    <div className='flex justify-center items-center h-screen text-7xl text-indigo-600'>
      <SyncOutlined spin />
    </div>
  )
}

export default StripeSuccess
