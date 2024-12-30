import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list, setList] = useState([]); // State to hold the list
  const [formData, setFormData] = useState({ name: "", age: "" }); // State to hold form input

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.age) {
      setList((prevList) => [...prevList, formData]);
      setFormData({ name: "", age: "" }); // Clear the form
    }
  };
  
  return (
    <div>
      <h1>Add to List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>

      <h2>List of People</h2>
      <table>
        <tr>
          <th>name</th>
          <th>age</th>
        </tr>
        {list.map((item, index) => (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      ))}
      </table>

    </div>
  );
}

export default App
