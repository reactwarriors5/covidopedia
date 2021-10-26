import React, { useState } from 'react'
import "antd/dist/antd.css";
import { Modal, Button } from 'antd'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios';
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice/userSlice";
axios.defaults.withCredentials = true

const AppointmentModal = ({ doctorId, doctorFee }) => {
  const user = useSelector(selectUser);
  const router = useRouter();

  const [isModalVisible, setIsModalVisible] = useState(false);
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

  //   let name, value
  //   const handleChange = e => {
  //     name = e.target.name
  //     value = e.target.value
  //     setPatient({ ...patient, [name]: value })
  //   }

  // const fetchPatientApp = async () => {
  //   const { data } = await axios.get(
  //     `${process.env.NEXT_PUBLIC_API}/patient-appointments`
  //   )
  //   console.log(data)
  // }
  const handleSubmit = async e => {
    e.preventDefault()
    console.log(patient)
    
    // check if user is logged in//
    if(user === null ) return router.push("/login")


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
      <button className="btn-home mt-4 uppercase tracking-wider" onClick={showModal}>
        Book an Appointment
      </button>
      {/* <br />
      <Button type='primary' onClick={() => fetchPatientApp()}>
        Get Patient Appointments
      </Button> */}
      <Modal
        title='Appointment'
        visible={isModalVisible}
        onOk={handleOk}
        footer={null}
        onCancel={handleCancel}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label for='name' className='block mb-2'>
              Patient Name
            </label>
            <input
              className='block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 border border-indigo-600'
              name='name'
              type='text'
              onChange={handleChange}
              value={patient.name}
              placeholder='Your name'
              required=''
            />
          </div>
          <div>
            <label for='age' className='block mb-2'>
              Age
            </label>
            <input
              className='block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 border border-indigo-600'
              name='age'
              type='text'
              onChange={handleChange}
              value={patient.age}
              placeholder='enter your age'
              required=''
            />
          </div>
          <div className='grid grid-cols-1 mx-0'>
            <label className='block mb-2'>Gender</label>
            <select
              className='block w-full p-2 rounded border border-indigo-600  bg-white'
              name='gender'
              onChange={handleChange}
              value={patient.gender}
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label htmlFor='message' className='block mb-2'>
              Describe Your Issue
            </label>
            <textarea
              className='border border-indigo-600 block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 '
              id='message'
              name='message'
              onChange={handleChange}
              value={patient.message}
              placeholder='Message...'
            ></textarea>
            <div className="mt-4">
              <p>Appointment Fee: <span className="font-semibold text-indigo-600">${doctorFee}</span> </p>
            </div>
          </div>
          <div>
            <button
              className='btn-home w-full'
              type='submit'
            >
              Send
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}
export default AppointmentModal
