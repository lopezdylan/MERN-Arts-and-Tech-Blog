import React, { useState } from 'react'
// Importing react-quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  console.log(value);
  return (
    <div className='write-post'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editor-container">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        {/* Publish */}
        <div className="item">
          <h2>Publish</h2>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility </b> Public
          </span>
          <input type="file"  name="" id="file" style={{display:"none"}}/>
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        {/* Category */}
        <div className="item">
          <h2>Category</h2>
          <div className="category">
            <input type="radio" name='category' value="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="category">
            <input type="radio" name='category' value="science" />
            <label htmlFor="art">Science</label>
          </div>
          <div className="category">
            <input type="radio" name='category' value="technology" />
            <label htmlFor="art">Technology</label>
          </div>
          <div className="category">
            <input type="radio" name='category' value="cinema" />
            <label htmlFor="art">Cinema</label>
          </div>
          <div className="category">
            <input type="radio" name='category' value="Design" />
            <label htmlFor="art">Design</label>
          </div>
          <div className="category">
            <input type="radio" name='category' value="food" />
            <label htmlFor="art">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write