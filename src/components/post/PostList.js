import React, {PropTypes} from  'react';

const PostList = ({posts}) => {
  return (
    <div className="col-lg-8 col-lg-offset-2">
      {posts.map(post =>
        <div className="container-fluid jumbotron">
          {post.text}
        </div>
      )}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
