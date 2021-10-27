import React, { useState, useEffect } from 'react';
import "antd/dist/antd.css";
import { Modal } from 'antd';
import { useRouter } from 'next/router'
import axios from 'axios'
axios.defaults.withCredentials = true


const PatientModal = ({appointmentCardData}) => {
    console.log(appointmentCardData);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

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
    <> 
     <button className="btn-home" onClick={showModal}>
        View
      </button>
      <Modal title="Appointment Details" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className="space-y-4">
        <p className="text-indigo-700 font-semibold text-lg">Name : <span className="text-gray-600">{appointmentCardData.patient.name}</span></p>
        <p className="text-indigo-700 text-lg font-semibold">Age : <span className="text-gray-600">{appointmentCardData.age}</span></p>
        <p className="text-indigo-700 text-lg font-semibold">Gender : <span className="text-gray-600">{appointmentCardData.gender}</span></p>
        <p className="text-indigo-700 text-lg font-semibold">Issue : <span className="text-gray-600">{appointmentCardData.message}</span> </p>
        </div>
        
      </Modal>
      </>
  )
}

export default PatientModal
