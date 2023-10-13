import Header from './component/Header'
import FillForm from './component/FillForm';
import AllTask from './component/AllTask';
import { useState } from 'react';
function App() {
  const [deleteTask,setDeleteTask]=useState([]);
  const [status,setStatus]=useState(false);
  return (
    <>
      <Header />
      <FillForm deleteTask={deleteTask}
      setDeleteTask={setDeleteTask}
      status={status}
      setStatus={setStatus}
      />
      <AllTask 
      status={status}
      setDeleteTask={setDeleteTask}/>
    </>
  );
}

export default App;
