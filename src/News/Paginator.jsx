import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Paginator = ({ pages, next, previous }) => {
  const links = [];
  for (let i = 1; i <= pages; i++) {
    links.push(i);
  }
  return (
    <div className="pageRow">
      {previous ? <Link to={`/newsList/${previous}`} style={{textDecoration:"none", color:"#fafafa", backgroundColor:"#1d1d1d", borderRadius:"20px"}}>Previous</Link> : ""}
      {links.length != 0
        ? links.map((item, index) => (
            <Link key={index} to={`/newsList/${item}`} style={{textDecoration:"none", color:"rgb(47,47,47)"}}>
              {item}
            </Link>
          ))
        : ""}
      {next ? <Link to={`/newsList/${next}`} style={{textDecoration:"none", color:"#fafafa", backgroundColor:"#1d1d1d", borderRadius:"20px"}}>Next</Link> : ""}
    </div>
  );
};

export default observer(Paginator);
