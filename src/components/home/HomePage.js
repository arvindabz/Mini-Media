import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../../actions/homeActions';
import PostList from '../post/PostList';
import PostCreationDialog from '../post/PostCreationDialog';
import profileImage from '../../images/arv.jpg';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      post: {
        text: '',
        imgUrl: '',
        guid: ''
      }

    };

    this.addPostTextChanging = this.addPostTextChanging.bind(this);
    this.onClickAddPost = this.onClickAddPost.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
  }

  addPostTextChanging(event) {
    const post = this.state.post;
    post.text = event.target.value;
    this.setState({
      post: post
    });
  }

  onClickAddPost() {
    $('#postTB').val('');
    this.props.actions.createPost(this.state.post);
  }

  onFileUpload(input) {
    if (input.target.files && input.target.files[0]) {
      var reader = new FileReader();

      let self = this;
      var sender = input;
      reader.onload = function (e) {
        const post = self.state.post;
        const guid = self.getGuid();
        const path = e.target.result;
        post.imgUrl = path;
        post.guid = guid;
        self.setState(
          {
            post: post
          }
        );
        $('#postimg')
          .attr('src', path)
          .width(150)
          .height(200);
      };
      reader.readAsDataURL(input.target.files[0]);
    }
  }

  postRow(post, index) {
    return <div key={index}>{post.text}</div>;
  }

  getGuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4() + Date.now();
  }

  getPostCreationDialog() {
    let style = {
      'display': 'none'
    }
    return (
      <div className="col-lg-6 col-lg-offset-3">
        <div className="postAdd">
          <img className="postProfilePic" src={profileImage}/>

          <div className="form-group postTextArea">
            <div className="form-group">
              <textarea
                id="postTB"
                className="form-control" rows={8}
                onChange={this.addPostTextChanging}
                placeholder="What's up?"
              >
              </textarea>
            </div>
          </div>
        </div>

        <div className="postButtons">
          <button className="btn btn-info postCreationAddBtn" onClick={this.onClickAddPost}>
            Add
          </button>

          <div className="fileUpload">
            <label className="btn btn-info" for="my-file-selector">
              <input
                id="my-file-selector"
                type="file"
                accept="image/*"
                style={style}
                onChange={this.onFileUpload}/>
              Upload File
            </label>
            <span className='label label-info' id="upload-file-info"></span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.posts.length == 0) {
      return (
        <div>
          <img id="postimg"/>
          <PostCreationDialog onTextChange={this.addPostTextChanging} onClickAddPost={this.onClickAddPost}
                              onFileUpload={this.onFileUpload}/>
        </div>
      );
    }

    const guid = this.getGuid();
    return (
      <div>
        {this.getPostCreationDialog()}
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
function mapDispatchToProps(dispatch) {
  return {
    // createPost: post => dispatch(homeActions.createPost(post))
    actions: bindActionCreators(homeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
