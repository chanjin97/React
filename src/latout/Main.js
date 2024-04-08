import React from "react";

function Main({ vData }) {
  return (
    <div>
      <div className="visual d-flex">mainVisual</div>

      <div className="container">
        <ul className="proList">
          {vData.slice(0, 4).map((item) => {
            return (
              <>
                <li>
                  <a href={`./pro/${item.id}`}>
                    <img src={`./image/${item.img}`} alt="" />
                    {item.title}
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Main;
