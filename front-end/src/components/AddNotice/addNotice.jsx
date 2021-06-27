import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import './addNotice.css';

class AddNotices extends Component {

    constructor(){
        super();
        this.state = {
          noticePoster: '',
          noticeText: '',
          expiryDate: '',
          hostelName: '',
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        axios.post('http://localhost:5000/notice', this.state)
    }
    
  render(){
    const { noticePoster, noticeText, expiryDate, hostelName } = this.state;
    return (
      <div className="container">
        <h2>Add Notices</h2>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="noticePoster">Notice Poster <br/></label>
              <input 
                type="text"
                name="noticePoster"
                id="noticePoster"
                value={noticePoster}
                className="form-control"
                placeholder="Your Notice Heading"
                maxLength="255"
                required
                onChange={this.changeHandler} />
          </div>
          <div className="form-group">
          <label htmlFor="hostelName">For Hostel <br/></label>
            <select 
              name="hostelName"
              id="hostelName"
              value={hostelName}
              className="form-control"
              placeholder="Select Hostels"
              onChange={this.changeHandler}>
                <option value="H1">H1</option>
                <option value="H2">H2</option>
                <option value="H3">H3</option>
                <option value="H4">H4</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expires On <br/></label>
            <input 
              type="date"
              name="expiryDate"
              id="expiryDate"
              value={expiryDate}
              className="form-control"
              placeholder="Notice Expires on"
              required
              onChange={this.changeHandler} />
          </div>
          <div className="form-group">
            <label htmlFor="noticeText">Notice Description <br/></label>
            <textarea
              name="noticeText"
              id="noticeText"
              value={noticeText}
              className="form-control"
              placeholder="Provide Notice Body"
              rows="10"
              required
              onChange={this.changeHandler} ></textarea>
          </div>
          <button type="submit" value="Add Notice" className="btn btn-primary btn-lg">Add Notice</button>
        </form>
      </div>
    );
  }
}

export default AddNotices;