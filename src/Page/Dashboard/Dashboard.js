import React from 'react'
import {employeesData} from '../../Data/Data'
import Swal from 'sweetalert2'

import { useState } from 'react'
import List from './List'
import Header from './Header'
import Edit from './Edit'
import Add from './Add'

const Dashboard = () => {

const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

const handleEdit=(id)=>{
    console.log("the id is" , id);
    const [employee] = employees.filter(employee => employee.id === id)
    setSelectedEmployee(employees);
    setIsEditing(true)
  }

const handleDelete = (id) => {
  console.log("the delete id is", id);
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this employee!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) { 
      const updatedEmployees = employees.filter(employee => employee.id !== id);

      Swal.fire({
        icon: 'success',
        title: 'Employee Deleted Successfully',
        showConfirmButton: false,
        timer: 1500,
      });

      setEmployees(updatedEmployees);
    }
  });
}


  return (
    <div className=''>
      
      <div className=''>
        {/* list of employees */}
        {!isAdding && !isEditing && (
          <div>
            <Header
            setIsAdding={setIsAdding}>
            </Header>

            <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            >
            </List>
        </div>
        )}

        {/* add employee */}

        {
          isAdding && (
            <div>
                <Add
                employees={employees}
                setEmployees={setEmployees}
                setIsAdding={setIsAdding}>
                </Add>
            </div>
          )}

        {/* edit employee */}

        {
          isEditing && (
            <div>
              <Edit
              employees={employees}
              selectedEmployee={selectedEmployee}
              setEmployees={setEmployees}
              setIsEditing={setIsEditing}
              />
            </div>
          )}

      </div>
    </div>
  )
}

export default Dashboard
