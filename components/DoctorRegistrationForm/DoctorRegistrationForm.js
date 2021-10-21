import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { SyncOutlined } from '@ant-design/icons'
import Resizer from 'react-image-file-resizer'
axios.defaults.withCredentials = true

const DoctorRegistrationForm = () => {
  const [loading, setLoading] = useState(false)
  const [doctor, setDoctor] = useState({
    name: '',
    email: '',
    department: '',
    degree: '',
    experience: '',
    image: '',
    fee: '',
  })

  //Handle form state
  const handleChange = e => {
    const newDoctorInfo = { ...doctor }
    newDoctorInfo[e.target.name] = e.target.value
    setDoctor(newDoctorInfo)
  }

  const handleImage = async e => {
    let file = e.target.files[0]

    // prepare the image
    const resizeFile = file =>
      new Promise(resolve => {
        Resizer.imageFileResizer(
          file,
          500,
          500,
          'JPEG',
          100,
          0,
          uri => {
            resolve(uri)
          },
          'base64'
        )
      })
    const image = await resizeFile(file)
    const base64Data = image.replace(/^data:image\/\w+;base64,/, '')

    try {
      // Get Image URL
      setLoading(true)
      let { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/doctor/upload-image`,
        {
          image: base64Data,
        }
      )
      console.log(data)
      // set image in the state
      setDoctor({ ...doctor, image: data.display_url })
      setLoading(false)
    } catch (err) {
      console.log(err)
      toast.error('Image upload failed. Try again.')
      setLoading(false)
    }
  }

  //Handle Form Submit
  const handleSubmit = async e => {
    e.preventDefault()
    console.log(doctor)
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/doctors`, {
      withCredentials: true,
    })
    console.log(data)
    setLoading(true)

    axios
      .put(
        `${process.env.NEXT_PUBLIC_API}/doctor-registration`,
        {
          ...doctor,
        },
        { withCredentials: true }
      )
      .then(res => {
        console.log('success', res)
        window.location.href = res.data
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        toast.error(error.response.data)
        console.log(error.response)
      })
  }

  return (
    <div className='flex h-screen bg-white items-center justify-center  mt-5 mb-10'>
      <div className='grid rounded-lg shadow-lg bg-gray-100 w-11/12 md:w-9/12 lg:w-1/2'>
        <div className='flex justify-center'>
          <div className='flex'>
            <h1 className='text-gray-600 pt-5 font-bold md:text-2xl text-xl'>
              Registration Form
            </h1>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 mt-5 mx-7'>
            <label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
              Full Name
            </label>
            <input
              className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
              type='text'
              onChange={handleChange}
              value={doctor.name}
              name='name'
              placeholder='Enter Full Name'
            />
          </div>
          <div className='grid grid-cols-1 mt-5 mx-7'>
            <label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
              Email
            </label>
            <input
              className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
              type='email'
              value={doctor.email}
              onChange={handleChange}
              name='email'
              placeholder='Enter Your Email'
            />
          </div>

          <div className='grid grid-cols-1 mt-5 mx-7'>
            <label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
              Select Department
            </label>
            <select
              onChange={handleChange}
              value={doctor.department}
              name='department'
              className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
            >
              <option>Neurology</option>
              <option>Hematology</option>
              <option>Plastic Surgery</option>
              <option>Pharmacology</option>
              <option>Paleontology</option>
              <option>Gastrologic</option>
            </select>
          </div>

          <div className='grid grid-cols-1 mt-5 mx-7'>
            <label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
              Academic Qualification
            </label>
            <input
              onChange={handleChange}
              value={doctor.degree}
              name='degree'
              className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
              type='text'
              placeholder='Academic qualification'
            />
          </div>

          <div className='grid grid-cols-1 mt-5 mx-7'>
            <label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
              Experience
            </label>
            <select
              onChange={handleChange}
              value={doctor.experience}
              name='experience'
              className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
            >
              <option>One year</option>
              <option>Two year</option>
              <option>Three year</option>
            </select>
          </div>

          <div className='grid grid-cols-1 mt-5 mx-7'>
            <label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
              Appointment Fee
            </label>
            <input
              className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
              type='text'
              onChange={handleChange}
              value={doctor.fee}
              name='fee'
              placeholder='Enter Appointment Fee'
            />
          </div>

          <div className='grid grid-cols-1 mt-5 mx-7'>
            <label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1'>
              Upload Photo
            </label>
            <div className='flex items-center justify-center w-full'>
              <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group'>
                <div className='flex flex-col items-center justify-center pt-7'>
                  <svg
                    className='w-10 h-10 text-purple-400 group-hover:text-purple-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                    ></path>
                  </svg>
                  <p className='lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider'>
                    Select a photo
                  </p>
                </div>
                <input
                  type='file'
                  name='image'
                  onChange={handleImage}
                  accept='image/*'
                  className='hidden'
                />
              </label>
            </div>
          </div>

          <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
            <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>
              Cancel
            </button>
            <button
              type='submit'
              disabled={loading}
              className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'
            >
              {loading ? <SyncOutlined spin /> : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DoctorRegistrationForm
