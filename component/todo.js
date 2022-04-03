import React from "react";

export const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList &&
        todoList.length > 0 &&
        todoList.map((item, i) => (
          <div key={i}>
            {++i}
            {item.title}
          </div>
        ))}
    </div>
  );
};

export default TodoList;
