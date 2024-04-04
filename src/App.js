import React, { useState } from "react";
import "./assets/css/style.scss";

function App() {
  let [viewData, setViewData] = useState([]);
  let [textData, setTextData] = useState("");

  function clickListener() {
    let copy = [...viewData];
    copy.push(textData);
    setViewData(copy);
    setTextData(""); // input value 제거
  }
  function textDataChange(event) {
    console.log(event.target.value);
    setTextData(event.target.value);
  }
  return (
    <div>
      {viewData}
      <div>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          onChange={textDataChange}
          value={textData}
        />
        {/* <input type="text" id="name" onChange={함수}/>
        <input type="text" id="name" onChange={()=>{함수()}}/>
        <input type="text" id="name" onChange={()=>{setTextData("변경할것")}}/> */}
      </div>
      <div>
        <button onClick={clickListener}>입력</button>
      </div>
    </div>
  );
}

export default App;
