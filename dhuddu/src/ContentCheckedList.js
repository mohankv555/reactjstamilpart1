import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, setItem, handleChange, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChange(item.id)}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleChange(item.id)}
              >
                {item.name}
              </label>
              <button>delete</button>
              <FaTrashAlt
                role="button"
                tabIndex={0}
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p> your list is empty</p>
      )}
    </main>
  );
};

export default Content;
