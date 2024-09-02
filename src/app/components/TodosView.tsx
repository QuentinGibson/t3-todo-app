"use client";
import React, { useState, useRef } from "react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { PiTrashBold } from "react-icons/pi";

export default function TodosView() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };
  const handleTodoCheck = (id: number) => {
    setTodos((prev) =>
      prev.map((todo, index) =>
        index === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setTodos((prevValue) => {
      const newTodo: Todo = {
        name: userInput,
        checked: false,
      };
      return [...prevValue, newTodo];
    });
    setUserInput("");
  };
  const handleDelete = (todo: Todo) => {
    return () => {
      setTodos((prevValue) => {
        return prevValue.filter((item) => item !== todo);
      });
    };
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Add a new task"
            className="flex-1"
            onChange={handleUserInput}
            value={userInput}
          />
          <Button type="submit">New Todo</Button>
        </div>
      </form>
      <ul className="space-y-2">
        {todos?.map((todo, index) => {
          return (
            <li
              key={index}
              className="bg-muted flex items-center justify-between rounded-md px-4 py-2"
            >
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={todo.checked}
                  onCheckedChange={() => handleTodoCheck(index)}
                />
                <span
                  className={`${todo.checked ? "text-muted-foreground line-through" : ""}`}
                >
                  {todo.name}
                </span>
              </div>
              <Button variant="ghost" size="icon" onClick={handleDelete(todo)}>
                <PiTrashBold />
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
