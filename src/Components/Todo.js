import { useState , useEffect} from "react"
import './Todo.css'

function Todo (){
    const [tasks,setTasks] = useState([])
    const [message, setMessage] = useState('');
    const [updatedmessage, setUpdatedmessage] = useState('');

    useEffect(()=>{
        let data = {
          arr : tasks
        }
        if(tasks.length){
          window.localStorage.setItem('tasks_list', JSON.stringify(data))
        }
    
      }, [tasks])
    
      useEffect(()=>{
         let data =  window.localStorage.getItem('tasks_list');
         console.log(data)
         if(data){
          data = JSON.parse(data).arr;
            setTasks(data);
         }
      }, [])



    function addTask(){
        setTasks((prevTasks)=>{
            return [...prevTasks,message]
        })
        console.log(message)
        setMessage("")
    }

    function editTask(index){
        document.getElementById("myForm").style.display = "block";
        // tasks[index]=updatedmessage
        // setTasks([...tasks])
        // console.log(updatedmessage)
        setTasks(tasks.map((val,i)=>{
            if(updatedmessage && i===index){
                return updatedmessage
            }
            return val
        })

    )
    setUpdatedmessage("")
    }

    function deleteTask(index){
        tasks.splice(index,1)               //add the set item function here
        setTasks([...tasks])                //then use map function
    }


    return(
        <div>
            <div>
                <input
                    type="text"
                    id="message"
                    name="message"
                    onChange={event => setMessage(event.target.value)}
                    value={message}
                />
                <button onClick={addTask}>Add Task</button>
            </div>

            {tasks.map((task,index)=>{
                return(
                    <div className="list">
                        <div>
                            {task}
                        </div>
                        <div>
                            <button  onClick={() => editTask(index)}>edit</button>
                        </div>
                        <div>
                            <button onClick={() => deleteTask(index)}>delete</button>
                        </div>
                    </div>
                    )
            })}


            {/* <!-- hhhhhhhhhh --> */}


            <div class="form-popup" id="myForm">
                <form class="form-container">  
                <label for="text"><b>new text</b></label>
                <input id="update_placeholder" value={updatedmessage} onChange={event => setUpdatedmessage(event.target.value)} type="text" placeholder="" name="text" required></input>
                {/* <!-- <button type="button" class="btn" onclick="updateItem()">edit</button> --> */}
                <button type="button" class="btn cancel" onClick={event=>document.getElementById("myForm").style.display = "none"}>Close</button>
                </form>
            </div>

            {/* <!-- hhhhhhhhhhhhh --> */}




        </div>
    )
}

export default Todo;