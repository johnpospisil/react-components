import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Today at 1:00PM"
          postText={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Today at 2:00PM"
          postText={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Today at 3:00PM"
          postText={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Today at 4:00PM"
          postText={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <h2>The ApprovaCard can now be re-used for other purposes!</h2>
      <ApprovalCard>Are you sure you want to do that?</ApprovalCard>

      <ApprovalCard>
        <div>
          <h4>Alert!</h4>
          This action is undoable. Are you sure you want to continue?
        </div>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
