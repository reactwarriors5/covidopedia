import React from 'react'
// violet
const DepartmentBanner = (props) => {
  // console.log(props.deptName);
  // const {name}=props.deptName;
  return (
    <section>
      <div
        className='w-full h-auto bg-no-repeat bg-cover'
        style={{
          backgroundImage: `url("https://image.shutterstock.com/image-photo/medical-physician-doctor-hands-healthcare-260nw-261024704.jpg")`,
        }}
      >
        <div className='mx-40 grid-cols-6'>
          <br />
          <br />
          <h1 className='text-4xl font-bold'>{props.deptName}</h1>
          <br />
          <p className='text-md'>
            {' '}
            COVIDOPEDIA {'>'}
            {'>'} SERVICES {'>'}
            {'>'} MEDICINE {'>'}
            {'>'} {props.deptName}
          </p>
          <br />
          <br />
          <br />
        </div>
      </div>
    </section>
  )
}

export default DepartmentBanner
