const Done = ({ item, doneDel, clickfalseButtonHandler }) => {
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
