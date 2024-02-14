import DiaryItem from "./DiaryItem";

const DiaryList = ({ onEdit, onRemove, dairyList }) => {
  return (
    <div className="DiaryList">
      <h2>Diary List</h2>
      <h4>{dairyList.length} Diaries</h4>
      <div>
        {dairyList.map((it) => (
          <DiaryItem key={it.id} {...it} onEdit={onEdit} onDelete={onRemove} />
          // 리스트는 고유키값을 받아와야함, 혹시 고유키가 없다면 인덱스로.. 벗
          // 인덱스는 수정,삭제 작업을 통해 바뀌니깐 안하는편이 좋음
          // <div key={it.id}>
          //   <div>author : {it.author}</div>
          //   <div>content : {it.content}</div>
          //   <div>emotion : {it.emotion}</div>
          //   <div>created_date(ms) : {it.created_date}</div>
          // </div>
        ))}
      </div>
    </div>
  );
};

// undefined경우, 에러방지를 위해 기본값 설정
DiaryList.defaultProps = {
  dairyList: [],
};

export default DiaryList;
