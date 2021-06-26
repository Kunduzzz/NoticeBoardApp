const {Sequelize, DataTypes} = require('sequelize');
const db = require('../config/database')

const Notice = db.define('notice',{
    noticePoster: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    noticeText: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    expiryDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    hostelName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Notice;