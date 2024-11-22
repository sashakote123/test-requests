import { useEffect, useState } from "react";
import Table from "./components/table/Table";
import ResultTable from "./components/resultTable/ResultTable";
import FormPage from "./components/formPage/FormPage";
import ResultPage from "./components/resultPage/ResultPage";
import NavBar from "./components/navigation/NavBar";
import { Route, Routes } from "react-router";
import './reset.css'


function App() {


  const [requests, setRequests] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/requests').then(res => res.json()).then(obj => setRequests(obj))
  }, [])






  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<FormPage requests={requests} setRequests={setRequests} />} />
        <Route path="/requests" element={<ResultPage requests={requests} />} />
      </Routes>




    </div>


  );
}

export default App;
