import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import axios from 'axios'
import { toast } from 'react-toastify'
import { SyncOutlined } from '@ant-design/icons'
axios.defaults.withCredentials = true

const PrescriptionModal = ({ appointmentCardData }) => {
  const [loading, setLoading] = useState(false)
  const { name, age, gender, patient, doctor, message, _id } =
    appointmentCardData
  const [presData, setPresData] = useState({
    patientName: name,
    gender: gender,
    age: age,
    message: message,
    patient: patient._id,
    doctor: doctor,
    medicine: '',
    feedback: '',
  })
  const [patientEmail, setPatientEmail] = useState({
    appointmentId: _id,
  })

  const handleChange = e => {
    const newUserInfo = { ...presData }
    newUserInfo[e.target.name] = e.target.value
    setPresData(newUserInfo)
  }

  const createPdf = e => {
    e.preventDefault()
    setLoading(true)

    axios
      .post(`${process.env.NEXT_PUBLIC_API}/create-pdf`, presData)
      .then(() => {
        axios.post(`${process.env.NEXT_PUBLIC_API}/upload-pdf`, patientEmail)
        toast.success('Prescription created & sent to patients email.')
        setLoading(false)
        setIsModalVisible(false)
      })
  }

  console.log(appointmentCardData)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const router = useRouter()
  //   const { id } = router.query
  //   const [doctor, setDoctor] = useState({})
  //   useEffect(() => {
  //     const getDoctor = async () => {
  //       const { data } = await axios.get(
  //         `${process.env.NEXT_PUBLIC_API}/doctor/${id}`
  //       )
  //       setDoctor(data)
  //     }
  //     getDoctor()
  //   }, [id])

  return (
    <div className='flex justify-end'>
      <button className='btn-home' onClick={showModal}>
        Process
      </button>
      <Modal
        title='Appointment Details'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <section className='max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800'>
          <h2 className='text-lg font-semibold text-gray-700 capitalize dark:text-white'>
            Generate Prescription
          </h2>

          <form onSubmit={createPdf}>
            <div className='grid grid-cols-1 gap-6 mt-4 '>
              <div>
                <label
                  className='text-gray-700 dark:text-gray-200'
                  htmlFor='medicine'
                >
                  Medicine
                </label>
                <input
                  id='medicine'
                  name='medicine'
                  onChange={handleChange}
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label
                  className='text-gray-700 dark:text-gray-200'
                  htmlFor='feedback'
                >
                  Feedback
                </label>
                <input
                  id='feedback'
                  onChange={handleChange}
                  name='feedback'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                />
              </div>
            </div>

            <div className='flex justify-end mt-6'>
              <button
                type='submit'
                disabled={loading}
                className='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700'
              >
                {loading ? <SyncOutlined spin /> : 'SUBMIT'}
              </button>
            </div>
          </form>
        </section>
      </Modal>
    </div>
  )
}

export default PrescriptionModal
