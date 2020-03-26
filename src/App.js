import React, { useState } from 'react';
import { FiTrash2, FiPlus } from 'react-icons/fi';
import './App.css';

function App() {
  const [tarefa, setTarefa] = useState('');
  const [completa, setCompleta] = useState(false);
  const [lista, setLista] = useState([]);


  function onSubmit(event) {
    event.preventDefault();
    setLista([...lista, tarefa]);
    console.log(lista.tarefa);
  }

  function isComplete(event) {
    
  }

  function remove(item) {
     setLista(lista.filter(x=>x != item))
  }

  return (
    <div className="container">
      <div className="header">
        <h1>TO DO React</h1>
        <form onSubmit={onSubmit}>
          <input placeholder="Tarefa..."
            className="task"
            value={tarefa}
            onChange={(e)=> setTarefa(e.target.value)} />
          <button class="addBtn" ><FiPlus size={14}/> Adicionar</button>
        </form>
      </div>

      <ul>
        {lista.map(item =>
          <li onClick={isComplete}>
            <input type="checkbox" className="check"/>
            {item}
            <span onClick={() => remove(item)} className="close"><FiTrash2 /></span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
