import React, {useState} from 'react'

const Add = ({employees,setEmployees,setIsAdding}) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');

  return (
    <div>
        <form>
        <h1>Add Employee</h1>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' id='firstName' name='firstName' placeholder='Enter First Name' required value={firstName} onChange={e=>setFirstName(e.target.value)}></input>
        
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' id='lastName' name='lastName' placeholder='Enter Last Name' required value={lastName} onChange={e=>setLastName(e.target.value)}></input>

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' placeholder='Enter Email' required value={email} onChange={e=>setEmail(e.target.value)}></input>

        <label htmlFor='salary'>Salary</label>
        <input type='number' id='salary' name='salary' placeholder='Enter Salary' required value={salary} onChange={e=>setSalary(e.target.value)}></input>

        <label htmlFor='date'>Date</label>
        <input type='date' id='date' name='date' placeholder='Enter Date' required value={date} onChange={e=>setDate(e.target.value)}></input>

        <button type='submit'>Add Employee</button>
        </form>
    </div>
  )
}

export default Add
