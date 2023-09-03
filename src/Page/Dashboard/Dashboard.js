import React from 'react'
import {employeesData} from '../../Data/Data'
// import Swal from 'sweetalert2'

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

const handleEdit=()=>{

}

const handleDelete=()=>{

}

  return (
    <div className=''>
      
      <div>
        {/* //list of employees */}
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

        {/* //add employee */}

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

        {/* //edit employee */}

        {
          isEditing && (
            <div>
              <Edit
              setIsEditing={setIsEditing}
              selectedEmployee={selectedEmployee}
              employees={employees}
              setEmployees={setEmployees}
              />
            </div>
          )}

      </div>
    </div>
  )
}

export default Dashboard
