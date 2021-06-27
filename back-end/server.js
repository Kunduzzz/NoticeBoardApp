const express = require('express');
const cors = require('cors');
const path = require('path');

// Database
const db = require('./config/database');
const Notice = require('./models/Notices');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error:' +err))

const app = express();
app.use(cors());
app.use(express.json());


// Post Notices
app.post("/notice",async(req,res)=>{
  let { noticePoster, noticeText, expiryDate, hostelName } = req.body;

    // Insert into table
    Notice.create({
        noticePoster,
        noticeText,
        expiryDate,
        hostelName
    })
    .then(notice => res.redirect('/notices'))
    .catch(err => console.log(err));
  })

  // Get All Notices
app.get("/notices",async(req,res)=>{
  try {
      const notice = await Notice.findAll()

      return res.json(notice)

  } catch (error) {
      console.log(`Error`,error.message)
      return res.status(500).json({err:error.message})
  }   
})

  // Get All Notices by Date (Not Implemented)
app.get("/notice/:date",async(req,res)=>{
  try {
      const {date} = req.params;
      const notice = await Notice.findAll({
          where:{
              expiryDate:date
          }
      })
      return res.json(notice)
  } catch (error) {
      console.log(`Error`,error.message)
      return res.status(500).json({err:error.message})
  }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));