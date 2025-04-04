import { useReducer } from 'react'

const initialState = [];
function reducer(state, action) {
    switch(action.type){
        case "ADD_TASK":
            return [...state, { id: state.length + 1, name: action.payload }];
        case "DELETE_TASK":
            return state.filter((task) => task.id != action.payload);
        default:
            return state;
    }
}
function init (initialState) {
    const data = [...initialState, {id: 1, name: "Read"}];
    return data;
}

const Todos = () => {

    const[todos, dispatch] = useReducer(reducer, initialState, init);

    const handleChange = (e) => {
        if(e.key === "Enter") {
            dispatch({type:"ADD_TASK", payload: e.target.value});
        }
    };

    const Delete = (id) => {
        dispatch({type:"DELETE_TASK", payload: id});
    };
  return (
    <>
      <h1>Task List {todos.length}</h1>
      <label htmlFor="task">Enter Task </label>
      <input type="text" id='task' onKeyDown={(e) => handleChange(e)} />

      <ul>
        {
            todos.map((todo) => (
                <li key={todo.id}>{todo.name} <button onClick={()=>Delete(todo.id)}>Delete</button></li>
            ))
        }
      </ul>
    </>
  )
}

export default Todos
