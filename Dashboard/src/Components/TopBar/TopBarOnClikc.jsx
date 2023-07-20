import { useState } from "react";
import message1 from "../../Assets/MessageNav/message1.jpg";
import message2 from "../../Assets/MessageNav/message2.jpg";
import message3 from "../../Assets/MessageNav/message3.jpg";
const TopBarOnClick = () => {
  const [showTodoList, setShowTodoList] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const handleShowTodo = () => {
    setShowTodoList(true);
    setShowMessage(false);
  };
  const handleShowChats = () => {
    setShowTodoList(false);
    setShowMessage(true);
  };
  const [todo, setTodo] = useState([
    "Print StateMent",
    "Creative invoice",
    "Call John",
    "Meeting with Asia",
    "Pick kids from School",
  ]);
  const [todoItem, setTodoItem] = useState("");

  const addToDo = () => {
    if (todoItem.trim() !== "") {
      setTodo([...todo, todoItem]);
      setTodoItem("");
    }
  };

  const removeTodo = (index) => {
    const delTodo = todo.filter((_, i) => i !== index);
    setTodo(delTodo);
  };

  return (
    <div className="w-[400px] bg-blue-400 p-3 rounded">
      <div className="flex justify-around">
        <button
          onClick={() => handleShowTodo("todo")}
          className={`text-xl font-medium ${
            showTodoList ? " text-white " : "text-gray-600"
          }`}
        >
          TodoList
        </button>
        <button
          onClick={() => handleShowChats("chat")}
          className={`text-xl font-medium ${
            showMessage ? "text-white" : "text-gray-600"
          }`}
        >
          Charts
        </button>
      </div>
      {showTodoList && (
        <div>
          <h2 className="text-2xl font-bold pb-2">Todo List</h2>
          <div className="flex my-3">
            <input
              type="text"
              placeholder="What do you need"
              className="px-4 w-full py-2 focus:outline-none"
              onChange={(e) => setTodoItem(e.target.value)}
              value={todoItem}
            />
            <button
              onClick={addToDo}
              className="px-6 py-2 bg-purple-500 text-white ml-2"
            >
              Add
            </button>
          </div>
          {todo.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <h3 className="text-xl font-bold pb-2 text-white">{item}</h3>
                <button
                  className="text-white font-bold"
                  onClick={() => removeTodo(index)}
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {showMessage && (
        <div className=" shadow-2xl p-2 rounded  ">
          <div>
            <h3 className="py-3 text-xl font-medium">Messages</h3>
          </div>
          <div className="flex items-center border-y-[0.5px] border-y-gray-300 py-1">
            <div className="mr-1">
              <img
                className="w-[35px] rounded-full"
                src={message1}
                alt="message1"
              />
            </div>
            <div>
              <h2>Mark Send you a message</h2>
              <h4>1 Minutes ago</h4>
            </div>
          </div>
          <div className="flex items-center border-y-[0.5px] border-y-gray-300  py-1">
            <div className="mr-1">
              <img
                className="w-[35px] rounded-full"
                src={message2}
                alt="message1"
              />
            </div>
            <div>
              <h2>Cregh Send you a message</h2>
              <h4>21 Minutes ago</h4>
            </div>
          </div>
          <div className="flex items-center border-y-[0.5px] border-y-gray-300  py-1">
            <div className="mr-1">
              <img
                className="w-[35px] rounded-full"
                src={message3}
                alt="message1"
              />
            </div>
            <div>
              <h2>Profile Picture Updated</h2>
              <h4>12 Minutes ago</h4>
            </div>
          </div>
          <button></button>
        </div>
      )}
    </div>
  );
};
// todolist combine with messages 
export default TopBarOnClick;

// JustTodoListt
export const JustTodoList = () => {
  const [todo, setTodo] = useState([
    "Print Statement",
    "Create invoice",
    "Call John",
    "Meeting with Asia",
    "Pick kids from School",
  ]);
  const [todoItem, setTodoItem] = useState("");

  const addToDo = () => {
    if (todoItem.trim() !== "") {
      setTodo([...todo, todoItem]);
      setTodoItem("");
    }
  };

  const removeTodo = (index) => {
    const delTodo = todo.filter((_, i) => i !== index);
    setTodo(delTodo);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold pb-2">Todo List</h2>
      <div className="flex">
        <input
          type="text"
          placeholder="What do you need"
          className="px-4 w-full py-2 focus:outline-none"
          onChange={(e) => setTodoItem(e.target.value)}
          value={todoItem}
        />
        <button
          onClick={addToDo}
          className="px-6 py-2 bg-purple-500 text-white ml-2"
        >
          Add
        </button>
      </div>
      {todo.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold pb-2 text-white">{item}</h3>
            <button
              className="text-white font-bold"
              onClick={() => removeTodo(index)}
            >
              Remove Item
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
