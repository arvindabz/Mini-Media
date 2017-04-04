import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../../actions/homeActions';
import PostList from '../post/PostList';
import PostCreationDialog from '../post/PostCreationDialog';


class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      post: {
        text: ''
      },
      imgUrl: ''
    };

    this.addPostTextChanging = this.addPostTextChanging.bind(this);
    this.onClickAddPost = this.onClickAddPost.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
  }

  addPostTextChanging (event) {
    const post = this.state.post;
    post.text  = event.target.value;
    this.setState({
      post: post
    });
  }

  onClickAddPost() {
    this.props.actions.createPost(this.state.post);
  }

  onFileUpload(input) {
    if (input.target.files && input.target.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#blah')
          .attr('src', e.target.result)
          .width(150)
          .height(200);
      };

      reader.readAsDataURL(input.target.files[0]);
    }


  }

  sayhi(){
    alert('Hi');
  }

  postRow(post, index) {
    return <div key={index}>{post.text}</div>;
  }

  render() {
    return (
      <div>
        <img id="blah" />
        <PostCreationDialog onTextChange={this.addPostTextChanging} onClickAddPost={this.onClickAddPost} onFileUpload={this.onFileUpload}/>

        <PostList posts={this.props.posts}/>
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  };
}

/**
 * What actions are available in our components
 * */
function mapDispatchToProps (dispatch) {
  return {
    // createPost: post => dispatch(homeActions.createPost(post))
    actions: bindActionCreators(homeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
