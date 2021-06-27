import React, { Fragment, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.min.css';


const ShowNotice = () => {
  const [notices, setNotices] = useState([]);
  const [date, setDate] = useState("");

  const getNotices = async () => {
    try {
      const response = await fetch(`http://localhost:5000/notices`)
      const notices = await response.json()
      console.log(notices);
      setNotices(notices);
    } catch (err) {
      console.error(err.message);
    }
  }
  
  const getByDate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/notice/${date}`)
      const notices = await response.json()
      console.log(notices);
      setNotices(notices);
    } catch (err) {
      console.error(err.message);
    }
    
  }
  useEffect(() => {
    getNotices();
  }, [])

  useEffect(() => {
    getByDate();
  }, [date])

  return <Fragment>
    <div className="container">
      <h2>Show Notices</h2>
      <Form inline > 
            Search By Date:
            <FormControl type="date"
              placeholder="Search by Expiry Date"
              className="mr-sm-2" value={date}
              onChange={e => setDate(e.target.value)} />
      </Form>
      <div>
      {notices.map(notice => (
      <div className="card" key={notice.id}>
        <h5 className="card-header">{ notice.noticePoster }</h5>
        <div className="card-body">
          <h5 className="card-title">For Hostel: { notice.hostelName }</h5>
          <p className="card-text">{ notice.noticeText }</p>
          <p className="card-text">Expires on: { notice.expiryDate }</p>
        </div>
      </div> ))}
      </div>
      {/* Not Implemented */}
      
      {/* {noticeList} */}
    </div>
  </Fragment>
}

export default ShowNotice;