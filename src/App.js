import React from 'react';
import { useState } from 'react';
import './App.css';
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
  const [done, setDone] = useState([
    { id: 1, title: '나는', content: '헤헤' },
    { id: 2, title: '바보', content: '나는' },
    { id: 3, title: '헤헤', content: '바보' },
  ]);
  const [count, setCount] = useState(0);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleAdd = () => {
    setTodo([...todo, { id: todo.length + 1, title: title, content: content }]);
    alert('추가');
  };
  const clickCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div className="topContainer">
        <span className="texttex">My Todo List</span>
        <strong className="texttex">React</strong>
      </div>
      <div className="title">
        제목 &nbsp;
        <input value={title} onChange={handleTitleChange} className="inputter" type="text" /> &nbsp;
        <button onClick={clickCount}>누르지마셔요</button>
        내용 &nbsp;
        <input
          value={content}
          onChange={handleContentChange}
          className="inputter"
          type="text"
        />{' '}
        &nbsp;
        <button onClick={handleAdd} className="Buttonman">
          추가
        </button>
      </div>
      <div className="largelargebox">
        {' '}
        <h2 className="Workingbox">Working..🔥</h2>
        <div className="largeBox">
          {todo.map((item, index) => (
            <Working
              key={item.id}
              item={item}
              todo={todo}
              setTodo={setTodo}
              done={done}
              setDone={setDone}
              count={count}
              setCount={setCount}
              title={title}
              content={content}
            />
          ))}
        </div>
        <h2 className="Workingbox">done..🔥</h2>
        <div className="largeBox">
          {done.map((item) => (
            <Done
              key={item.id}
              item={item}
              todo={todo}
              setTodo={setTodo}
              done={done}
              setDone={setDone}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
