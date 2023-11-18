"use client";

import { useState } from "react";

const UpdateTodo =  ({id, title, description}) => {

  const [todoTitle, setTodoTitle] = useState(title)
  const [todoDescription, setTodoDescription] = useState(description)
  

  const handleSubmit =  (e) => {
    e.preventDefault();

    try {
      const res =  fetch(`http://localhost:3000/api/todo/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ todoTitle, todoDescription }),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log("Couldn't entered the try block");
    }
  };
 
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-blue-50 ">
      <form
        action=""
        className="border p-6 rounded-md shadow-md w-1/3 bg-blue-300 "
        onSubmit={handleSubmit}
      >
        <h1 className="font-semibold text-center text-3xl mb-4">Update Todo</h1>
        
        <input
          type="text"
          placeholder="Title"
          className="border p-2 rounded block w-full"
          onChange={e => setTodoTitle(e.target.value)}
          value={todoTitle}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Write your thinking...."
          className="block w-full border my-3 p-2 rounded"
          onChange={e => setTodoDescription(e.target.value)}
          value={todoDescription}
        ></textarea>

        <input
          type="submit"
          value="Update"
          className="rounded p-2 bg-yellow-500 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default UpdateTodo;
