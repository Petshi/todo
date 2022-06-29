import React from "react"

function TasksList(props) {
    
const data = props.task
console.log(data)
 const listToDo = data.map((item) => 
    <li key={item.id} className="list-group-item d-flex justify-content-between task-item">
                <span className="task-title">{item.text}</span>
                <div className="task-item__buttons">
                    <button type="button" data-action="done" className="btn-action">
                        <img src="./img/tick.svg" alt="Done" width="18" height="18"></img>
                    </button>
                    <button type="button" data-action="delete" className="btn-action">
                        <img src="./img/cross.svg" alt="Done" width="18" height="18"></img>
                    </button>
                </div>
            </li>
    ) 


    return (
        <div className="card mb-4">
        <ul id="tasksList" className="list-group list-group-flush">
       
{listToDo }
            </ul>
</div>
        )
        

}
export default React.memo(TasksList);