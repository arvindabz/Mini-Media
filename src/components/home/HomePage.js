import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../../actions/homeActions';
import PostList from '../post/PostList';
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
    var img = $('#postimg').attr('src');
    var tb = $("#postTB").val();

    if (!$.trim($("#postTB").val()) && !$('#postimg').attr('src')) {
      alert('Empty');
      return;
    }
    $('#postTB').val('');

    this.state.post.guid = this.props.posts.length;
    this.props.actions.createPost(this.state.post);

    // Reset current post since it is added to the list of posts
    this.state.post.imgUrl = '';
    this.state.post.guid = '';
    this.state.post.text = '';
    
    $("#postimg").hide();
    $("#postimg").attr('src', '');
    $("#addPostBtn").unbind("click", this.onClickAddPost);
    $("#addPostBtn").prop('disabled', true);
  }

  onFileUpload(input) {
    if (input.target.files && input.target.files[0]) {
      var reader = new FileReader();
      let self = this;
      var sender = input;
      reader.onload = function (e) {
        const post = self.state.post;
        const path = e.target.result;
        post.imgUrl = path;

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
      $("#my-file-selector")[0].value = '';
      $("#postimg").show();
      $("#addPostBtn").prop('disabled', false);

      $("#addPostBtn").click(this.onClickAddPost);
    }
  }

  postRow(post, index) {
    return <div key={index}>{post.text}</div>;
  }

  render() {
    if (this.props.posts.length == 0) {
      return (
        <div>
          <img id="postimg" />
          {this.getPostCreationDialogBox()}
        </div>
      );
    }

    return (
      <div>
        <img id="postimg" />
        {this.getPostCreationDialogBox()}
        <PostList posts={this.props.posts} />
      </div>
    );

  }

  getPostCreationDialogBox() {
    let style = {
      'display': 'none'
    }
    
    return (
      <div className="col-lg-4 col-lg-offset-4">
        <div className="postAdd">
          <img className="postProfilePic" src={profileImage} />

          <div className="form-group postTextArea">
            <div className="form-group">
              <textarea id="postTB" className="form-control" rows={8} onChange={this.addPostTextChanging} placeholder="What's up?"></textarea>
            </div>
          </div>
        </div>

        <div className="postButtons">
          <button id='addPostBtn' disabled='true' className="btn btn-info postCreationAddBtn">
            Add
          </button>

          <div className="fileUpload" >
            <label className="btn btn-info" for="my-file-selector">
              <input
                id="my-file-selector"
                type="file"
                accept="image/*"
                style={style}
                onChange={this.onFileUpload} />
              Upload File
          </label>
            <span className='label label-info' id="upload-file-info"></span>
          </div>
        </div>
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
