const Done = ({ item, todo, setTodo, done, setDone }) => {
  const doneDel = (id) => {
    setDone(done.filter((item) => item.id !== id));
  };
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
    <div key={item.id} className="componentStyle">
      <div className="boxTitle">{item.title}</div>
      <h6 className="boxContent">{item.content}</h6>
      <button onClick={() => doneDel(item.id)} className="deleteButton">
        삭제하기
      </button>
      &nbsp;
      <button onClick={() => clickfalseButtonHandler(item)} className="completeButton">
        done추가
      </button>
    </div>
  );
};
export default Done;
