import './App.css';
import AddData from './components/AddData';
import BasicList from './components/BasicList';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    // fetch data from server
    const storedData = ["Eat healthy Food", "Sleep early"];
    setData([...storedData]);
  }, []);

  const addData = (newData) => {
    setData([...data, newData]);
    // store the data in server
  }

  return (
    <div className="App" >
      <AddData addData={addData} />
      <BasicList data={data} />
    </div>
  );
}

export default App;
