import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [presData, setPresData] = useState({
    name: '',
    receiptId: 0,
    price1: 0,
    price2: 0,
  })

  // const handleChange = ({ target: { value, name } }) =>
  //   setPresData({ [name]: value })

  const handleChange = e => {
    const newUserInfo = { ...presData }
    newUserInfo[e.target.name] = e.target.value
    setPresData(newUserInfo)
  }

  const createPdf = () => {
    console.log(presData)
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/create-pdf`, presData)
      .then(() => axios.get(`${process.env.NEXT_PUBLIC_API}/upload-pdf`))
  }

  return (
    <div className='App'>
      <form onSubmit={createPdf}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          onChange={handleChange}
        />
        <br />
        <input
          type='number'
          placeholder='Receipt ID'
          name='receiptId'
          onChange={handleChange}
        />
        br
        <input
          type='number'
          placeholder='Price 1'
          name='price1'
          onChange={handleChange}
        />
        <input
          type='number'
          placeholder='Price 2'
          name='price2'
          onChange={handleChange}
        />
        <button type='submit'>Send Prescription</button>
      </form>
    </div>
  )
}

export default App
