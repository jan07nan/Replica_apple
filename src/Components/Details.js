import React from "react";

function Details(props) {
  let { Name, Quote, Desc, img ,color,bg,width,margin,margintop} = props;
  return (
    <div>
      <div style={{backgroundColor:bg,color:color,width:width,marginLeft:margin,marginTop:margintop}}>  
          <h1 className="font1">{Name}</h1>
          <p className="font2">{Quote}</p>
          <p className="font3">{Desc}</p>
          <img className="img" src={img} />
      </div>
    </div>
  );
}

export default Details;
