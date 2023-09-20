import React, { useEffect } from "react";
import { useState } from "react";
// import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../style/ToDo.css";
import { logout } from "../slices/UserSlice.js";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../services/authService";

function ToDo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const [todoList, setTodoList] = useState([]);
  const [taskStatusList, setTaskStatusList] = useState([]);
  const [editEnabled, setEditEnabled] = useState([]); //edit button clicked
  const [editInputVal, setEditInputVal] = useState(""); //stores value that is being entered

  useEffect(() => {
    !isLoggedIn() && navigate("/");
  }, [navigate]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(currentUser);
    setTodoList(currentUser?.tasks);
  }, []);

  function updateTaskList() {
    const userObj = JSON.parse(localStorage.getItem(currentUser?.email));
    if (!userObj) {
      return;
    }
    userObj.tasks = todoList;
    localStorage.setItem(currentUser?.email, JSON.stringify(userObj));
  }

  useEffect(() => {
    updateTaskList();
  }, [todoList, updateTaskList]);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleEditClick(i) {
    const updatedEditEnabled = [...editEnabled];
    updatedEditEnabled[i] = !updatedEditEnabled[i];
    setEditEnabled(updatedEditEnabled);
    setEditInputVal(todoList[i]);
  }

  function handleTrashClick(i) {
    const updateListData = todoList.filter((elem, id) => {
      return i !== id;
    });
    setTodoList(updateListData);
    const updatedTaskStatusData = taskStatusList.filter((elem, id) => {
      return i !== id;
    });
    setTaskStatusList(updatedTaskStatusData);
    const updatedEditEnabled = [...editEnabled];
    updatedEditEnabled.splice(i, 1);
    setEditEnabled(updatedEditEnabled);
  }

  function handleAddCLick(e) {
    if (input !== "") {
      setTodoList((todoList) => {
        const updatedList = [...todoList, input];
        setTaskStatusList([...taskStatusList, false]);
        setEditEnabled([...editEnabled, false]);
        setInput("");
        return updatedList;
      });
    }
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      handleAddCLick();
    }
  }

  function handleCheckboxChange(i) {
    const updatedTaskStatusList = [...taskStatusList];
    updatedTaskStatusList[i] = !updatedTaskStatusList[i];
    setTaskStatusList(updatedTaskStatusList);
  }
  function handleEditInput(e) {
    setEditInputVal(e.target.value);
  }
  function handleUpdateList(i) {
    if (editInputVal !== "") {
      const updatedTodoList = [...todoList];
      updatedTodoList[i] = editInputVal;
      setTodoList(updatedTodoList);

      const updatedEditEnabled = [...editEnabled];
      updatedEditEnabled[i] = false;
      setEditEnabled(updatedEditEnabled);

      setEditInputVal("");
    }
  }
  function handleEditEnter(e, i) {
    if (e.key === "Enter") {
      handleUpdateList(i); // Call handleUpdateList when Enter key is pressed
    }
  }

  function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  }

  return (
    <div className="container">
      <div>
        <button className="logout-btn" onClick={handleLogout}>
          {" "}
          Logout{" "}
        </button>
      </div>
      <div className="header">
        <div className="text">My ToDo List</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <FontAwesomeIcon className="custom-icon-class" icon={faList} />
          <input
            type="text"
            placeholder="What are you supposed to do?"
            value={input}
            onChange={handleInput}
            onKeyDown={handleEnter}
          />
        </div>
      </div>
      {todoList &&
        todoList.length > 0 &&
        todoList.map((data, i) => {
          const isChecked = taskStatusList[i];
          const textStyle = isChecked ? "checked" : "normal";

          return (
            <div key={i}>
              <div className="task-container">
                {editEnabled[i] ? (
                  <input
                    type="text"
                    className="input-1"
                    value={editInputVal}
                    checked={isChecked}
                    onChange={handleEditInput}
                    onBlur={() => handleUpdateList(i)}
                    onKeyDown={(e) => handleEditEnter(e, i)}
                  />
                ) : (
                  <div className="in-line">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCheckboxChange(i)}
                    />
                    <div className={textStyle}>{data}</div>
                  </div>
                )}
                <FontAwesomeIcon
                  icon={faEdit}
                  className="edit-icon"
                  onClick={() => handleEditClick(i)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="trash-icon"
                  onClick={() => handleTrashClick(i)}
                />
              </div>
            </div>
          );
        })}
      <div className="submit-container">
        <button className="submit" onClick={handleAddCLick}>
          {" "}
          Add Item{" "}
        </button>
      </div>
    </div>
  );
}

export default ToDo;
