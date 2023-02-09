import './App.css';
import React, { useState } from 'react';
import Working from './components/Working';
import Done from './components/Done';
import Input from './components/Input';

const App = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [todo, setTodo] = useState([
    { id: 0, title: '0', content: '0', isDone: false },
    { id: 1, title: '1', content: '1', isDone: false },
    { id: 2, title: '2', content: '2', isDone: false },
  ]);
  const [done, setDone] = useState([
    { id: 3, title: '3', content: '3', isDone: true },
    { id: 4, title: '4', content: '4', isDone: true },
  ]);

  return (
    <div>
      <div className="topContainer">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <Input
        setTitle={setTitle}
        setTodo={setTodo}
        todo={todo}
        title={title}
        content={content}
        setContent={setContent}
      />
      <div className="largelargebox">
        {' '}
        큰큰박스
        <h2 className="Workingbox">Working..🔥</h2>
        <div className="largeBox">
          {todo.map((item, index) => (
            <Working
              key={item.id}
              item={item}
              setTodo={setTodo}
              setDone={setDone}
              done={done}
              todo={todo}
            />
          ))}
        </div>
        <h2 className="Workingbox">done..🔥</h2>
        <div className="largeBox">
          {done.map((item, index) => (
            <Done
              key={index}
              item={item}
              done={done}
              setDone={setDone}
              todo={todo}
              setTodo={setTodo}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
