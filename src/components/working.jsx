const Working = ({ item, setTodo, todo, setDone, done, children }) => {
  const todoDel = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
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
  return (
    <div className="componentStyle">
      <div className="boxTitle">{item.title}</div>
      <h6 className="boxContent">{item.content}</h6>
      <button onClick={() => todoDel(item.id)} className="deleteButton">
        삭제하기
      </button>
      &nbsp;
      <button onClick={() => clickDoneButtonHandler(item)} className="completeButton">
        추가
      </button>
    </div>
  );
};

export default Working;
