import React, { Component } from "react";
import Comment from "./Comment"

class CommentList extends Component {
  render() {
    let comments = [
      { username: "Jerry", content: "Hello" },
      { username: "Tomy", content: "World" },
      { username: "Lucy", content: "Good" }
    ];


    return <div>
        {comments.map((comment,i)=>{return <Comment comment={comment} key={i}/>})}
    </div>;
  }
}

export default CommentList;
