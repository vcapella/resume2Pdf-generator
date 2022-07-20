// import "./App.css";
import axios from "axios";
import { saveAs } from "file-saver";
import { useState } from "react";

function App() {
  //useState
  const [formValue, setFormValue] = useState({
    yourName: "",
    city: "",
    price1: 0,
    price2: 0,
  });

  //handleChange to update form
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  //value for each input
  const { yourName, city, price1, price2 } = formValue;

  //blobs are immutable objects that represent raw data
  //save function
  const createAndDownloadPdf = () => {
    axios
      .post("/create-pdf", formValue)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPdf.pdf");
      });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter your name."
        name="yourName"
        onChange={handleChange}
        value={yourName}
      />
      <input
        type="text"
        placeholder="Enter your city."
        name="city"
        onChange={handleChange}
        value={city}
      />
      <input
        type="number"
        placeholder="Price1"
        name="price1"
        onChange={handleChange}
        value={price1}
      />
      <input
        type="number"
        placeholder="Price2"
        name="price2"
        onChange={handleChange}
        value={price2}
      />
      <button onClick={createAndDownloadPdf}>Download PDF</button>
    </div>
  );
}

export default App;
