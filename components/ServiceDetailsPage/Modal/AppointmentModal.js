import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const AppointmentModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [patient, setPatient] = useState({
        name: "",
        age: "",
        gender: "",
        message: ""
    })

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    let name, value;
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setPatient({ ...patient, [name]: value })
    }
    const handleSubmit= (e) => {
        e.preventDefault();
        // const { name, age, gender, message } = patient;
        axios
            .post(`${process.env.NEXT_PUBLIC_API}/appointment`, {
                ...patient,
            })
            .then(response => {
                console.log('success', response)
            })
            .catch(error => {
                console.log(error.response)
            })

            setIsModalVisible(false);
    }


    return (
        <>
            <Button type="primary" onClick={showModal}>
                Book an Appointment
            </Button>
            <Modal title="Appointment" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <form >
                    <div>
                        <label for="name" className="block mb-1 ml-1">Patient Name</label>
                        <input
                            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-coolGray-100"
                            id="name"
                            type="text"
                            onChange={handleChange}
                            value={patient.name}
                            placeholder="Your name"
                            required=""
                        />
                    </div>
                    <div>
                        <label for="age" className="block mb-1 ml-1">Age</label>
                        <input
                            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-coolGray-100"
                            id="age"
                            type="age"
                            onChange={handleChange}
                            value={patient.age}
                            placeholder="enter your age"
                            required=""
                        />
                    </div>
                    <div className='grid grid-cols-1 mt-5 mx-0'>
                        <label className="block mb-1 ml-1 ">
                            Gender
                        </label>
                        <select
                            className="block w-full p-2 rounded  bg-white"
                            name='gender'
                            onChange={handleChange}
                            value={patient.gender}

                        >
                            <option>Male</option>
                            <option>Female</option>

                        </select>
                    </div>
                    <div>
                        <label for="message" className="block mb-1 ml-1 mt-3">Message</label>
                        <textarea
                            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-coolGray-100"
                            id="message"
                            type="text"
                            onChange={handleChange}
                            value={patient.message}
                            placeholder="Message..."
                        ></textarea>
                    </div>
                    <div>
                        <button
                            className="w-full px-4 py-2 mt-5 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-purple-600 focus:ring-violet-600 hover:ring-violet-600 text-coolGray-50"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Send
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
};
export default AppointmentModal;