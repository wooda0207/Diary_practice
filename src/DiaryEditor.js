import React, { useEffect, useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  // dom요소 접근
  const authorInput = useRef();
  const contentInput = useRef();

  //   동작, 자료형이 같으니깐 하나로 묶어서 사용할거임!
  //   const [author, setAuthor] = useState("");
  //   const [content, setContent] = useState("");
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  // 이벤트 핸들러도 하나로 합쳐줄거임!
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert("success");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>Today Diary</h2>
      <div>
        {/* 한줄입력 */}
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          //   onChange={(e) => {
          //     setState({
          //       //위치중요,스프레드를 변경하고자하는 값의 밑에서 써버리면 변경된후 다시 전에 값이 덮어져버림
          //       ...state,
          //       author: e.target.value,
          //       //content: state.content,
          //     });
          //   }}
          onChange={handleChangeState}
        />
      </div>
      {/* 여러줄입력 */}
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          //   onChange={(e) => {
          //     setState({
          //       ...state,
          //       content: e.target.value,
          //       // author: state.author,
          //     });
          //   }}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>Diary Save</button>
      </div>
    </div>
  );
};

//컴포넌트 최적화
export default React.memo(DiaryEditor);
