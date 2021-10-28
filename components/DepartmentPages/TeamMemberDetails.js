import React from 'react'
import Link from 'next/link'

const TeamMemberDetails = props => {
  const { name, biography, department, image, _id } = props.doctor

  return (
    <div className='flex flex-col items-center'>
      <img
        className='object-cover mb-2 rounded-full shadow w-52 h-52'
        src={image}
        alt='Person'
      />
      <div className='flex flex-col items-center'>
        <p className='text-lg font-bold'>{name}</p>
        <p className='text-sm text-gray-800'>{department}</p>
        
        <button className='flex items-center justify-center mt-4'>
          <Link
            href={`/doctorDetailsPage/${_id}`}
            className='p-1 border border-gray-300 rounded font-body hover:bg-indigo-500 hover:text-white hover:border-none'
          >
            <a>See Details</a>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default TeamMemberDetails
