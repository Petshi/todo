import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TasksList from './components/TasksList'

function App() {

  const initialState = [{
		id: Date.now(),
		text: "test",
		done: false,
	}];
  const [task, setTask] = useState(initialState);
  const [newTask, setNewTask] = useState('');

  const addNewTask = () => {
    const taskList=[...task];
    taskList.push({
      id: Date.now(),
      text: newTask,
      done: false,
    });
    setTask(taskList);
  }

  function setTaskHandler(e) {
  e.preventDefault();
  if (newTask.trim() !=="") {
  addNewTask()
  setNewTask("")
  }else console.log("input empty")
}

  return (
    <div>
    <div className="container">

		<div className="display-4 mb-2">ToDo приложение</div>
		<div className="h4 mb-5">список задач на сегодня</div>

   

<TasksList task={task}/>
	

		<div className="card bg-light" >
			<div className="card-header">Добавить новую задачу</div>
			<div className="card-body">
				<form id="form">
					<div className="form-group">
						<input type="text" className="form-control" 
            placeholder="Текст задачи" value={newTask} onChange={(e)=>setNewTask(e.target.value)} required></input>
						<small className="form-text text-muted">Что делаем, сколько времени тратим, какой результат получаем.</small>
					</div>
					<button type="submit" className="btn btn-primary  btn-lg active" onClick={setTaskHandler}>Добавить</button>
				</form>
			</div>
		</div>
		
	<button id="removeDoneTasks" className="btn btn-secondary mt-4 float-right">Удалить выполненные задачи</button> 

	</div>

	<div className="copyright">
		Бесплатный практикум по JavaScript от <a href="https://webcademy.ru" target="_blank">ВебКадеми</a>
	</div>
  </div>
  );
}

export default App;
