"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTodo = () => {
  const [title, sestTitle] = useState();
  const [description, setDes] = useState();
  const route = useRouter();

  const handleSubmit =  (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("All fuield requered!");
      return;
    }
    try {
      const res =  fetch("http://localhost:3000/api/todo", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({title, description }),
      });

      if (res.ok) {
        route.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-blue-50 ">
      <form
        action=""
        className="border p-6 rounded-md shadow-md w-1/3 bg-blue-300 "
        onSubmit={handleSubmit}
      >
        <h1 className="font-semibold text-center text-3xl mb-4">Add Todo</h1>
        <input
          type="text"
          placeholder="Title"
          className="border p-2 rounded block w-full"
          onChange={(e) => sestTitle(e.target.value)}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Write your thinking...."
          className="block w-full border my-3 p-2 rounded"
          onChange={(e) => setDes(e.target.value)}
        ></textarea>

        <input
          type="submit"
          value="Add Todo"
          className="rounded p-2 bg-yellow-500 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default AddTodo;
