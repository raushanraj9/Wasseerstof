import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Firstpage from "./pages/Firstpage";
import Layout from "./pages/Layout";
import Secondpage from "./pages/Secondpage";
import Thirdpage from "./pages/Thirdpage";

function App() {
  // State to store users data
  const [users, setUsers] = useState([]);

  // Fetching data from the API when component mounts
  useEffect(() => {
    const fetchData = async () => {
      // Fetching data from the COVID tracking API
      const response = await fetch(
        "https://api.covidtracking.com/v1/states/current.json"
      );
      // Parsing response to JSON format
      const data = await response.json();
      // Updating the state with fetched data
      setUsers(data);
    };
    // Calling the fetchData function
    fetchData();
  }, []);
 
  return (
    <>
      {/* Logging users data */}
      {console.log(users)}
      {/* Using BrowserRouter for routing */}
      <BrowserRouter>
        {/* Defining routes */}
        <Routes>
          {/* Main layout component */}
          <Route path="/" element={<Layout users={users} />}>
            {/* First page component */}
            <Route index element={<Firstpage users={users} />} />
            {/* Second page component */}
            <Route path="secondPage" element={<Secondpage />} />
            {/* Third page component */}
            <Route path="thirdPage" element={<Thirdpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
