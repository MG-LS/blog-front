import React, { useState } from "react";

const Comments = () => {

    const [comt, setComt] = useState("");

  return (
    <div>
      <div className="comt">
        <input
          type="text"
          value={comt}
          onChange={(e) => setComt(e.target.value)}
        />
        <button className="buti">Добавить</button>
        <div>{/* <NewsComt /> */}</div>
      </div>
    </div>
  );
};

export default Comments;
