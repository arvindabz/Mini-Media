/**
 * Created by arvin on 02-04-2017.
 */
import React, { PropTypes } from 'react';
import FileUploader from '../file-uploader/FileUploader';
import profileImage from '../../images/arv.jpg';


const PostCreationDialog = ({onTextChange, onClickAddPost, onFileUpload}) => {
  return (
    <div className="col-lg-4 col-lg-offset-4">
      <div className="postAdd">
        <img className="postProfilePic" src={profileImage} />

        <div className="form-group postTextArea">
          <div className="form-group">
            <textarea className="form-control" rows={8} onChange={onTextChange} placeholder="What's up?"></textarea>
          </div>
        </div>

        <button className="btn btn-info postAddBtn" onClick={onClickAddPost}>
          Add
        </button>

        <FileUploader onFileUpload={onFileUpload}/>
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
