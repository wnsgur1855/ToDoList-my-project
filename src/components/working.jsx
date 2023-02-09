const Working = ({ item, todoDel, clickDoneButtonHandler, clickCount, count }) => {
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
      <button onClick={clickCount}>누르지마셔요</button>
      <div>{count}</div>
    </div>
  );
};
export default Working;
