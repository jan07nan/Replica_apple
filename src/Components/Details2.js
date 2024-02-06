import React from "react";

function Details2(props) {
  let { Name, Quote, Desc, img, color, bg,margin,width } = props;
  return (
    <div>
      <div>
        <div style={{ backgroundColor: bg, color: color,marginLeft:margin,width:width }}>
          <img className="img" src={img} />
          <h1 className="font1">{Name}</h1>
          <p className="font2">{Quote}</p>
          <p className="font3">{Desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Details2;
