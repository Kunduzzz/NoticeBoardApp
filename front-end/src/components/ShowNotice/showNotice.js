import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class ShowNotices extends Component {

  constructor(){
    super();
    this.state = {
      notices: [],
    }
  }
  
  async componentDidMount(){
    await axios.get('http://localhost:5000/notices')
    .then(response => {
      console.log(response);
      this.setState({notices: response.data.notice})
    })
    .catch(err => console.log(err))
  }

  render(){
    const { notices } = this.state;
    const noticeList = notices.length ? (
      notices.map(notice => {
        return (
          <div className="card" key={notice.id}>
            <h5 className="card-header">{ notice.noticePoster }</h5>
            <div className="card-body">
              <h5 className="card-title">For Hostel: { notice.hostelName }</h5>
              <p className="card-text">{ notice.noticeText }</p>
              <p className="card-text">Expires on: { notice.expiryDate }</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center"> No Notices </div>
    )

    return (
      <div className="container">
        <h2>Show Notices</h2>
        {/* Not Implemented */}
        <Form inline > 
          <FormControl type="date" placeholder="Search by Expiry Date" className="mr-sm-2" />
          <Button variant="info" >Search</Button>
        </Form>
        {noticeList}
      </div>
    )
  }
}

export default ShowNotices;