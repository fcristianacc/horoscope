import React, { useEffect, useState } from "react";
import "./Header.css";

function Header(props) {
  const [clicked, setClicked] = useState(false);
  const [newElement, setNewElement] = useState(null);
  
  //const [list, setList] = useState(["a", "b", "c"]);

  /*   useEffect(() => {
    if (clicked) {
      setList(["a", "b", "c", "d"]);
    } else {
      setList(["1", "2", "3", "4"]);
    }
  }, [clicked]); */

  useEffect(() => {
    if (clicked) {
      setNewElement(<div className="message">Welcome to this Page!</div>);
    } else {
      setNewElement("");
    }
  }, [clicked]);

  return (
    <>
      <header
        className="title-container"
        id="title-container"
        onClick={() => setClicked(!clicked)}
      >
        <div className={clicked ? "title-text" : "title-text-clicked"}>
          <span
            id="title"
            className={props.tururu ? "header-green" : "header-purple"}
          >
            {props.children}
          </span>
        </div>
      </header>
      {/* {clicked && <div>olarilokeka</div>}
      {clicked ? <div>blabla</div> : ""} */}
      {newElement}
      {/*       <div>
        {list.map((element) => (
          <p>{element}</p>
        ))}
      </div> */}
    </>
  );
}

export default Header;
