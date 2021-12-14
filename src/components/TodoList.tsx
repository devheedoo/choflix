import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { statusAtom } from '../states/statusAtom';
import { todosSelector } from '../states/todosSelector';
import CreateTodo from './CreateTodo';
import Todo from './Todo';

function TodoList() {
  const todos = useRecoilValue(todosSelector);
  const setStatus = useSetRecoilState(statusAtom);
  const handleInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setStatus(value);
  };

  return (
    <div>
      <h1>TODOLIST</h1>
      <select onInput={handleInput}>
        <option value={'todo'}>todo</option>
        <option value={'doing'}>doing</option>
        <option value={'done'}>done</option>
      </select>
      <CreateTodo />
      <div style={{ marginTop: 10 }}>
        <ul>
          {todos.map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
