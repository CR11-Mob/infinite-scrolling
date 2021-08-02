import { useState } from "react";

export default function TakeComments(props) {
  const [comment, setComment] = useState({ name: "", comment: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("name:", name);
    console.log("value:", value);
    setComment({
      ...comment,
      [name]: value,
    });
  };
  return (
    <>
      <div className="user-name">
        <label>Name</label>
        <input
          name="name"
          value={comment.name}
          placeholder="Enter Your Name"
          onChange={handleInputChange}
        />
      </div>
      <div className="user-comment">
        <label>comment</label>
        <div>
          <textarea
            name="comment"
            value={comment.comment}
            rows="5"
            placeholder="Your comments go here"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <button
            onClick={() => {
              if (comment.name === "" && comment.comment === "") {
                alert("You havn't write anything yet!");
                return;
              } else if (comment.name === "") {
                let name = "Anonymous Person";
                setComment((comment.name = name));
              }
              let copyUserComment = [...props.userComment];
              copyUserComment.push(comment);
              props.setUserComment(copyUserComment);
              setComment({ name: "", comment: "" });
            }}
          >
            submit
          </button>
        </div>
      </div>
    </>
  );
}
