import './App.css';
import AddData from './components/AddData';
import BasicList from './components/BasicList';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    // fetch data from server
    const data = fetch("http://localhost:3000/pastebin").then(data => data.json()).then(({ data }) => {
      const allPastedData = data.map(({ text }) => text);
      setData([...allPastedData]);
    });
  }, []);

  const addData = (newData) => {
    setData([...data, newData]);
    fetch("http://localhost:3000/pastebin", {
      method: "post",
      body: JSON.stringify({
        text: newData
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(data => data.json()).then(data => {
      console.log(data);
    });
  }

  return (
    <div className="App" >
      <AddData addData={addData} />
      <BasicList data={data} />
    </div>
  );
}

export default App;
