import React from 'react';
import { useState } from 'react';
import './App.css';
import Working from './components/working';
import Done from './components/Done';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);

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

  return (
    <div>
      <div className="topContainer">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className="title">
        제목 &nbsp;
        <input value={title} onChange={handleTitleChange} className="inputter" type="text" /> &nbsp;
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
