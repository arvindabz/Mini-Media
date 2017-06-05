import React, { PropTypes } from 'react';

const PostList = ({ posts }) => {
  function getImage(post) {
    if (post.imgUrl && post.imgUrl.length > 0) {
      return (
        <img src={post.imgUrl} className="postListImg" />
      );
    }
  }

  return (
    <div className="col-lg-8 col-lg-offset-3">
      {posts.map(post =>
        <div key={post.guid} className="jumbotron">
          {getImage(post)}
          <div key={post.guid} className="quote">
            {post.text}
          </div>
        </div>
      )}
    </div>
  );
};

PostList.propTypes = {
  posts: React.PropTypes.array.isRequired
};

export default PostList;
