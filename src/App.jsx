import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state, setState] = useState("OFF");
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  function toogle(){
    state==="ON" ? setState("OFF") : setState("ON") 
  }

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a className='toogle' onClick={toogle}>
          <img src={file} className="logotile" alt="logo" />
        </a>
      </div>
      <h1>{state}</h1>
      <div className="card">
        <input type="text" className="fname" name="fname" placeholder='Enter address of the Loxone Miniserver' />
        <input type="text" className="fname" name="fname" placeholder='Enter the Lighting Controller' />
        <h2>Add logo:</h2>
        <input type="file" onChange={handleChange} />
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
