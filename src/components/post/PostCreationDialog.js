/**
 * Created by arvin on 02-04-2017.
 */
import React, { PropTypes } from 'react';
import profileImage from '../../images/arv.jpg';


const PostCreationDialog = ({onTextChange, onClickAddPost, onFileUpload}) => {
  let style = {
    'display': 'none'
  }
  return (
    <div className="col-lg-4 col-lg-offset-4">
      <div className="postAdd">
        <img className="postProfilePic" src={profileImage} />

        <div className="form-group postTextArea">
          <div className="form-group">
            <textarea className="form-control" rows={8} onChange={onTextChange} placeholder="What's up?"></textarea>
          </div>
        </div>
      </div>

      <div className="postButtons">
        <button className="btn btn-info postCreationAddBtn" onClick={onClickAddPost}>
          Add
        </button>

        <div className="fileUpload" >
          <label className="btn btn-info" for="my-file-selector">
            <input
              id="my-file-selector"
              type="file"
              accept="image/*"
              style={style}
              onChange={onFileUpload} />
            Upload File
          </label>
          <span className='label label-info' id="upload-file-info"></span>
        </div>
      </div>
    </div>
  );
};

PostCreationDialog.propTypes = {
  onTextChange: React.PropTypes.func.isRequired,
  onClickAddPost: React.PropTypes.func.isRequired,
  onFileUpload: React.PropTypes.func.isRequired
}

export default PostCreationDialog;
