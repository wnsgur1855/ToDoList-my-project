const Done = ({ item, done, setDone, todo, setTodo, index }) => {
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
  console.log(todo, done);
  return (
    <div key={index} className="componentStyle">
      <div className="boxTitle">{item.title}</div>
      <h6 className="boxContent">{item.content}</h6>
      <button onClick={() => doneDel(item.id)} className="deleteButton">
        삭제하기
      </button>
      &nbsp;
      <button onClick={() => clickfalseButtonHandler(item)} className="completeButton">
        취소
      </button>
    </div>
  );
};
export default Done;
