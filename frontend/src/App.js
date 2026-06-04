import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';


function App() {

 const [form, setForm] = useState({
  nitrogen : "",
  phosphorus: "",
  potassium :"",
  temperature :"",
  humidity :"",
  ph:"",
  rainfall:""
 });

 const [prediction, setPrediction] = useState("");


 const handleChange = (e) => {
  const {name,value} = e.target;
  setForm((prev) => ({
    ...prev,
    [name]: value
  }));
  // setForm({
  //   ...form,
  //   [e.target.name] : e.target.value
  // });
 };

 const handleSubmit = async () => {
  const response = await fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(form)
  });

  const data = await response.json();
  // alert("Predicted Crop: " + data.prediction);
  setPrediction(data.prediction);
};


  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       <h1 style={{color : "white", fontSize : 50}}>Crop Predictor</h1>
      {/* </header> */}
      <div>
        <InputField
        name="nitrogen"
        placeholder="Enter N"
        value = {form.nitrogen}
        onChange={handleChange}
        />
        <br></br>
        <InputField
        name="phosphorus"
        placeholder="Enter P"
        value = {form.phosphorus}
        onChange={handleChange}
        />
        <br></br>
        <InputField
        name="potassium"
        placeholder="Enter K"
        value = {form.potassium}
        onChange={handleChange}
        />
        <br></br>
        <InputField
        name="temperature"
        placeholder="Enter temp"
        value = {form.temperature}
        onChange={handleChange}
        />
        <br></br>
        <InputField
        name="ph"
        placeholder="Enter pH"
        value = {form.ph}
        onChange={handleChange}
        />
        <br></br>
        <InputField
        name="humidity"
        placeholder="Enter humidity"
        value = {form.humidity}
        onChange={handleChange}
        />
        <br></br>
        <InputField
        name="rainfall"
        placeholder="Enter rainfall"
        value = {form.rainfall}
        onChange={handleChange}
        />
        <br></br>
        <button onClick={handleSubmit} style={{height: 40, width: 150, margin : 15}}>
         Predict Crop
        </button>
          {prediction && (
         <h2 style={{ color: "yellow", marginTop: "20px" }}>
            Predicted Crop: {prediction}
             </h2>
              )}
      </div>
    </div>
  );
}

export default App;
