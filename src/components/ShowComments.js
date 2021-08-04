export default function ShowComments(props) {
  return props.userComment.map((item, index) => (
    <div key={`newComment${index}`} className="comment">
      <div>
        <b>Name:</b>
        {`    ${item.name}`}
      </div>
      <div>
        <b>Comment: </b>
        {`${item.comment}`}
      </div>
    </div>
  ));
}
