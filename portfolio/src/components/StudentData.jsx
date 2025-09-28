import React, { useState } from "react";

const StudentData = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [student, setStudent] = useState([]);
  const [editing, setEditing] = useState(null);

  const data = {
    name,
    age,
    email,
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (!(name && age && email)) {
      alert("please fill the all input");
      return;
    }

    if (editing !== null) {
      const updateStudent = [...student];
      updateStudent[editing] = data;
      setStudent(updateStudent);
      setEditing(null);
    } else {
      setStudent([...student, data]);
    }

    console.log(`>>>>data>>>>>>>`, data);
    setName("");
    setAge("");
    setEmail("");
  };

  const editHandle = (index) => {
    console.log(`>>>>>>index>>>>`, index);
    const studentEdit = student[index];
    console.log(`>>>>>>studentEdit>>>>>>`, studentEdit);
    setName(studentEdit.name);
    setAge(studentEdit.age);
    setEmail(studentEdit.email);
    setEditing(index);
  };

  return (
    <div>
      <h1>Student Management Dashboard</h1>

      <div>
        <form onSubmit={handleAdd} className="flex gap-8">
          <div className="flex flex-col">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-1 rounded-sm flex flex-col"
            />
          </div>

          <div className="flex flex-col">
            <label>Age</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border p-1 rounded-sm"
            />
          </div>

          <div className="flex flex-col">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-1 rounded-sm"
            />
          </div>

          <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-lg">
            {editing !== null ? "Update" : "Add Student"}
          </button>
        </form>
      </div>

      <div>
        {student.length > 0 ? (
          student.map((item, index) => (
            <div className="flex gap-42">
              <h2>{item.name}</h2>
              <h2>{item.age}</h2>
              <h2>{item.email}</h2>
              <button
                onClick={() => editHandle(index)}
                className="px-5 py-2 bg-blue-200 hover:bg-blue-300 rounded-lg cursor-pointer"
              >
                Edit
              </button>
            </div>
          ))
        ) : (
          <p>No Record Found</p>
        )}
      </div>
    </div>
  );
};

export default StudentData;
