import React from 'react'


const Header = ({setIsAdding}) => {
  return (
    <div>
        <h1 className='text-[50px] font-bold text-center'>Employee Management Software</h1>
        <div>
            <button onClick={()=>setIsAdding(true)}  className='round-button' >Add Employee</button>
        </div>

    </div>
  )
}

export default Header
