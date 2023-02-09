const Input = ({ setTitle, setContent, setTodo, todo, title, content }) => {
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleAdd = () => {
    setTodo([...todo, { id: todo.length + 1, title: title, content: content, isDone: false }]);
    alert('추가');
  };

  return (
    <div className="title">
      제목 &nbsp;
      <input value={title} onChange={handleTitleChange} className="inputter" type="text" /> &nbsp;
      내용 &nbsp;
      <input value={content} onChange={handleContentChange} className="inputter" type="text" />{' '}
      &nbsp;
      <button onClick={handleAdd} className="Buttonman">
        추가
      </button>
    </div>
  );
};

export default Input;
