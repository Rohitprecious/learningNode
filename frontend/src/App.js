import React, { useState, useEffect } from "react";
function App() {
  const [form, setForm] = useState();
  const [initialData, setinitialData] = useState([]);
  const getSavedData = async () => {
    const rawRespo = await fetch("http://localhost:8080/", {
      method: "GET",
    });
    const respo = await rawRespo.json();
    setinitialData(respo);
  };

  useEffect(() => {
    getSavedData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log({ name });
    if (name === "fName") {
      setForm({ ...form, [name]: value });
    }
    if (name === "lName") {
      setForm({ ...form, [name]: value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      fName: form.fName,
      lName: form.lName,
    });
    const rawResponse = await fetch("http://localhost:8080/dummyData", {
      method: "POST",
      body: body,
      headers: { "Content-Type": "application/json" },
    });
    const response = await rawResponse.json();
    console.log({ response });
    getSavedData();
    // setinitialData(response.data);
  };
  return (
    <div className="App">
      <header className="App-header"></header>
      <form onSubmit={handleSubmit}>
        <label>
          first Name:
          <input type="text" name="fName" onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lName" onChange={handleChange} />
        </label>
        {!!initialData.length &&
          initialData.map((item, index) => <p key={index}>{item.fullName}</p>)}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
