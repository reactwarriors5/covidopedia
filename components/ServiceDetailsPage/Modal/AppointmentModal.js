import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
axios.defaults.withCredentials = true

const AppointmentModal = ({ doctorId, doctorFee }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    gender: 'Male',
    message: '',
    doctor: doctorId,
    fee: doctorFee,
  })

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleChange = e => {
    const newPatientInfo = { ...patient }
    newPatientInfo[e.target.name] = e.target.value
    setPatient(newPatientInfo)
  }

  const fetchPatientApp = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/patient-appointments`
    )
    console.log(data)
  }
  const handleSubmit = async e => {
    e.preventDefault()
    console.log(patient)

    // const { name, age, gender, message } = patient;
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/appointment`,
      {
        ...patient,
      }
    )

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
    stripe.redirectToCheckout({ sessionId: data })

    setIsModalVisible(false)
  }

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Book an Appointment
      </Button>
      <br />
      <Button type='primary' onClick={() => fetchPatientApp()}>
        Get Patient Appointments
      </Button>
      <Modal
        title='Appointment'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label for='name' className='block mb-1 ml-1'>
              Patient Name
            </label>
            <input
              className='block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-coolGray-100'
              name='name'
              type='text'
              onChange={handleChange}
              value={patient.name}
              placeholder='Your name'
              required=''
            />
          </div>
          <div>
            <label for='age' className='block mb-1 ml-1'>
              Age
            </label>
            <input
              className='block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-coolGray-100'
              name='age'
              type='text'
              onChange={handleChange}
              value={patient.age}
              placeholder='enter your age'
              required=''
            />
          </div>
          <div className='grid grid-cols-1 mt-5 mx-0'>
            <label className='block mb-1 ml-1 '>Gender</label>
            <select
              className='block w-full p-2 rounded  bg-white'
              name='gender'
              onChange={handleChange}
              value={patient.gender}
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label htmlFor='message' className='block mb-1 ml-1 mt-3'>
              Message
            </label>
            <textarea
              className='block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-coolGray-100'
              id='message'
              name='message'
              onChange={handleChange}
              value={patient.message}
              placeholder='Message...'
            ></textarea>
            <div>
              <p>Appointment Fee: {doctorFee}</p>
            </div>
          </div>
          <div>
            <button
              className='w-full px-4 py-2 mt-5 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-purple-600 focus:ring-violet-600 hover:ring-violet-600 text-white'
              type='submit'
            >
              Proceed to pay
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}
export default AppointmentModal
