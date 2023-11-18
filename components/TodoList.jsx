"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import Button from "./shared/Button";

const TodoList = () => {
  const [todo, setTodo] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/api/todo", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  console.log(todo);
  return (
    <div className="px-24 py-10">
      <h1 className="text-center text-7xl uppercase pb-8">Todos</h1>
      <div className="grid grid-cols-4 gap-4">
        <Link
          href={"/addtodo"}
          className="bg-gray-300 rounded-md p-4 flex justify-center items-center "
        >
          <h1 className="text-5xl text-gray-500">+</h1>
        </Link>

        {todo?.map((t) => (
          <div className="bg-orange-200 rounded-md p-4 cursor-pointer">
            <h1 className="text-xl font-semibold">{t.title}</h1>
            <p>{t.description}</p>
            <div className="flex justify-end items-end space-x-3">
              <Link href={`updatetodo/${t._id}`}> <FaEdit className="cursor-pointer text-xl" /></Link>
              <Button id={t._id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
