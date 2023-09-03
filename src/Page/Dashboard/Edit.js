import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  // Use useEffect to update state when selectedEmployee changes
  useEffect(() => {
    setFirstName(selectedEmployee.firstName);
    setLastName(selectedEmployee.lastName);
    setEmail(selectedEmployee.email);
    setSalary(selectedEmployee.salary);
    setDate(selectedEmployee.date);
  }, [selectedEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedEmployee = {
      id: selectedEmployee.id, // Use the id from selectedEmployee
      firstName,
      lastName,
      email,
      salary,
      date,
    };

    const updatedEmployees = employees.map((employee) =>
      employee.id === selectedEmployee.id ? updatedEmployee : employee
    );

    setEmployees(updatedEmployees);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Employee Updated Successfully',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Edit Employee
        </h1>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="input-field"
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="input-field"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />

        <label htmlFor="salary">Salary</label>
        <input
          type="number"
          id="salary"
          name="salary"
          required
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="input-field"
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input-field"
        />

        <div className="mt-6">
          <button type="submit" className="btn-primary">
            Update
          </button>
          <input
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
            className="btn-secondary ml-2"
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
