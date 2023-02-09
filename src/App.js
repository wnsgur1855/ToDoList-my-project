import React from 'react';
import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Working from './components/working';
import Done from './components/Done';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [todo, setTodo] = useState([
    { id: 1, title: '나는', content: '헤헤' },
    { id: 2, title: '바보', content: '나는' },
    { id: 3, title: '헤헤', content: '바보' },
  ]);
  const [done, setDone] = useState([]);
  const [count, setCount] = useState(0);

  //title
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  //content
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  //content title 추가
  const handleAdd = () => {
    setTodo([...todo, { id: todo.length + 1, title: title, content: content }]);
    alert('추가');
  };
  //Working삭제
  const todoDel = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  //working을 done으로 보냄
  const clickDoneButtonHandler = (item) => {
    const find = todo.filter((value) => value.id !== item.id);
    setTodo(find);
    setDone([
      ...done,
      {
        id: item.id,
        title: item.title,
        content: item.content,
        isDone: !item.done,
      },
    ]);
    console.log(item, find);
    alert('완료');
  };
  //count
  const clickCount = () => {
    setCount((count) => (count == 30 ? (count = 0) : count + 1));
  };

  //done삭제
  const doneDel = (id) => {
    setDone(done.filter((item) => item.id !== id));
  };
  //done을 working으로 보냄
  const clickfalseButtonHandler = (item) => {
    const find = done.filter((value) => value.id !== item.id);
    setDone(find);
    setTodo([
      ...todo,
      {
        id: item.id,
        title: item.title,
        content: item.content,
        isDone: !item.done,
      },
    ]);
    alert('완료');
  };

  return (
    <div>
      <div className="topContainer">
        <strong className="texttex">My Todo List</strong>
        <strong className="texttex">React</strong>
      </div>
      <Input
        content={content}
        title={title}
        handleContentChange={handleContentChange}
        handleTitleChange={handleTitleChange}
        handleAdd={handleAdd}
      />
      <div className="largelargebox">
        <h2 className="Workingbox">Working..🔥</h2>
        <div className="largeBox">
          {todo.map((item, index) => (
            <Working
              key={item.id}
              item={item}
              todoDel={todoDel}
              clickDoneButtonHandler={clickDoneButtonHandler}
              clickCount={clickCount}
              count={count}
            />
          ))}
        </div>
        <h2 className="Workingbox">done..🔥</h2>
        <div className="largeBox">
          {done.map((item) => (
            <Done
              key={item.id}
              item={item}
              doneDel={doneDel}
              clickfalseButtonHandler={clickfalseButtonHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
