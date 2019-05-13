import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail author="Sam" timeAgo="Today at 1:00PM" postText="Nice post!" avatar={faker.image.avatar()} />
      <CommentDetail author="Bob" timeAgo="Today at 2:00PM" postText="I like your taste!" avatar={faker.image.avatar()} />
      <CommentDetail author="Janet" timeAgo="Today at 3:00PM" postText="Good, but strange." avatar={faker.image.avatar()} />
      <CommentDetail author="Norbert" timeAgo="Today at 4:00PM" postText="I approve, good sir!" avatar={faker.image.avatar()} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))