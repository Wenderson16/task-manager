// src/pages/Tasks.js
import React, { useState, useEffect } from 'react';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // Carrega tarefas do localStorage ao iniciar
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Atualiza o localStorage sempre que as tarefas mudam
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    const newTask = { description: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const removeTask = (indexToRemove) => {
    const newTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(newTasks);
  };

  const toggleTask = (indexToToggle) => {
    const newTasks = tasks.map((task, index) => {
      if (index === indexToToggle) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestão de Tarefas</h1>
      
      {/* Formulário para adicionar nova tarefa */}
      <form onSubmit={addTask} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: '10px', width: '300px' }}
        />
        <button type="submit" style={{ padding: '10px' }}>Adicionar</button>
      </form>
      
      {/* Lista de tarefas */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <span
              onClick={() => toggleTask(index)}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                marginRight: '10px',
                cursor: 'pointer'
              }}
            >
              {task.description}
            </span>
            <button onClick={() => removeTask(index)} style={{ padding: '5px 10px' }}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;

  