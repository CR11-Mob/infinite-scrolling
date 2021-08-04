import "./App.css";
import Text from "./components/Text";
import TakeComments from "./components/TakeComments";
import ShowComments from "./components/ShowComments";

import { useState, useEffect, useRef, useContext } from "react";
const comments = [
  { name: "EveryBody", comment: "Oi, teme!" },
  { name: "NoBody", comment: "Hey, this is my first comment in here." },
  { name: "SomeBody", comment: "Hey, this is not my first comment in here." },
];
function App() {
  const [userComment, setUserComment] = useState([]);

  useEffect(() => {
    console.log("User Comment:", userComment);
  }, [userComment]);

  const listInnerRef = useRef();

  const onScroll = () => {
    // console.log("onscroll");
    if (listInnerRef.current) {
      // console.log(listInnerRef.current);
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        // TO SOMETHING HERE
        console.log("Reached bottom");

        let userCommentCopy = [...userComment];

        setUserComment(userCommentCopy.concat(comments));
      }
    }
  };
  return (
    <div
      className="container"
      onScroll={() => onScroll()}
      ref={listInnerRef}
      style={{ overflow: "scroll", height: "100vh" }}
    >
      <main className="main-content">
        <div className="article-section">
          <div className="img-container">
            <img src="logo512.png" alt="article" height="50%" width="50%" />
          </div>
          <div className="text-area">
            <Text />
          </div>
        </div>
        <div className="comment-section">
          <div className="comments-counter-div">
            <span className="comment-counter">{`${userComment.length} Comments`}</span>
          </div>
          <div className="new-comment-input">
            <TakeComments
              userComment={userComment}
              setUserComment={setUserComment}
            />
          </div>
          <div className="comments-area">
            <ShowComments userComment={userComment} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
