import React from "react";

function ModalView01() {
  console.log();
  return (
    <div>
      <div className="modalWrap">
        <div className="modal">
          <button className="close" onClick={onclick}>
            닫기
          </button>

          <div className="modalBody">
            <h3>{viewListData.title}</h3>
            <p>{viewListData.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
  // {(조건문)? true : false}
}

export default ModalView01;
