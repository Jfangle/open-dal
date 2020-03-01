const mongoose = require('mongoose')

const TestExpenditures = mongoose.model('TestExpenditures', {
    EXPENDITURES_DATE: {
        type: String,
        required: true
       
    },
    EXPENDITURES_SEQ: {
        type: Number,
        required: true
    
    },
    EXPENDITURES_PAYEE: {
        type: String,
        required: true
    },
    EXPENDITURES_CATEGORY: {
        type: String,
        required: true
       
    },
    EXPENDITURES_AGENCY: {
        type: String,
        required: true       
    },
    EXPENDITURES_FUNDING_SOURCE: {
        type: String,
        required: true       
    },
    EXPENDITURES_TRANSACTION_NUMBER: {
        type: Number,
        required: true       
    },
    EXPENDITURES_PO_NUMBER: {
        type: String,
        required: true       
    },
    EXPENDITURES_CHECK_NUMBER: {
        type: Number,
        required: true       
    },
    EXPENDITURES_CANCEL_IND: {
        type: String,
        required: true       
    },
    EXPENDITURES_TRANS_AMOUNT: {
        type: Number,
        required: true       
    },

})

module.exports = TestExpenditures