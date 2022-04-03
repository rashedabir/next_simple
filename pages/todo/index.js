import axios from "axios";
import React from "react";
import { TodoList } from "../../component";

const Todo = ({ todoList }) => {
  return (
    <div>
      <TodoList todoList={todoList} />
    </div>
  );
};

export default Todo;

export async function getServerSideProps(context) {
  let props = {
    todoList: "",
  };

  try {
    await axios.get("http://localhost:3000/api/todo").then((res) => {
      if (res.data) {
        props.todoList = res.data;
      }
    });

    return { props };
  } catch (error) {
    console.log(error);
  }
}
