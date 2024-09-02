import { useState } from "react";

export default function useTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return [todos, setTodos];
}
