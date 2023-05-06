import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useLocalStorage } from 'react-use';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const deleteTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const onSubmitForm = text => {
    const todoObj = {
      id: nanoid(),
      text,
    };

    setTodos([...todos, todoObj]);
  };

  return (
    <>
      <SearchForm onSubmit={onSubmitForm} />
      <Grid>
        {todos.map((todo, idx) => {
          return (
            <GridItem key={todo.id}>
              <Todo
                text={todo.text}
                number={idx + 1}
                deleteTodo={deleteTodo}
                id={todo.id}
              />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};
