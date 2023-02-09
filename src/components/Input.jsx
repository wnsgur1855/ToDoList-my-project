const Input = ({ title, content, handleContentChange, handleTitleChange, handleAdd }) => {
  return (
    <div className="title">
      제목
      <input value={title} onChange={handleTitleChange} className="inputter" type="text" /> &nbsp;
      내용
      <input value={content} onChange={handleContentChange} className="inputter" type="text" />
      <button onClick={handleAdd} className="Buttonman">
        추가
      </button>
    </div>
  );
};

export default Input;
