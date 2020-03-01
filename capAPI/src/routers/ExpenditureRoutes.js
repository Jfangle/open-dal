const express = require('express')
const TestExpenditures = require('../models/Expenditures')
const router = new express.Router()

// router.post('/users', async (req, res) => {
//     const user = new User(req.body)

//     try {
//         await user.save()
//         res.status(201).send(user)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })



// Fetches all employees from the database
//router.get('/employees', async (req, res) => {
//    try {
//        const employees = await Employee.find({ EXPENDITURES_PAYEE: payee, EXPENDITURES_TRANS_AMOUNT: transactionAmount, EXPENDITURES_TRANSACTION_NUMBER: transactionNumber, EXPENDITURES_PO_NUMBER: POnumber, EXPENDITURES_CHECK_NUMBER: checkNumber, EXPENDITURES_AGENCY: agency, EXPENDITURES_FUNDING_SOURCE: fundingSource})
//        res.send(employees)
//    } catch (e) {
//        res.status(500).send()
// }
//})


// Takes in data sent to the API from user, conducts a search in the database based on parameteres given by the user, returns the searched expenditure if it is found, if there is an error, catches the error and sends it back 
//router.get('/Expenditures', async (req, res) => {
//    expenditureX = new expenditure(res.body)

//    let keys = Object.keys(req.body)
//    var payee = req.body[keys[0]]
//    var transactionAmount = req.body[keys[1]]
//    var transactionNumber = req.body[keys[2]]
//    var POnumber = req.body[keys[3]]
//    var checkNumber = req.body[keys[4]]
//    var agency = req.body[keys[5]]
//    var fundingSource = req.body[keys[6]]

//    try {
//        const employees = await Employee.find({  })
//        res.send(employees)
//    } catch (e) {
//        res.status(500).send()
//    }


//})

router.get('/Expenditures', async (req, res) => {
     try {
         const expenditures = await TestExpenditures.find({})
         res.send(expenditures)
     } catch (e) {
         res.status(500).send()
  }
 })


// //Fetches employees from the database based on ID
//  router.get('/employees/:id', async (req, res) => {
//      const _id = req.params.id

//     try {
//         const employee = await Employee.findById(_id)
//          if (!employee) {
//             return res.status(404).send()
//          }

//          res.send(employee)
//    } catch (e) {
//          res.status(500).send()
//      }
//  })



// // router.patch('/users/:id', async (req, res) => {
// //     const updates = Object.keys(req.body)
// //     const allowedUpdates = ['name', 'email', 'password', 'age']
// //     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

// //     if (!isValidOperation) {
// //         return res.status(400).send({ error: 'Invalid updates!' })
// //     }

// //     try {
// //         const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

// //         if (!user) {
// //             return res.status(404).send()
// //         }

// //         res.send(user)
// //     } catch (e) {
// //         res.status(400).send(e)
// //     }
// // })

// // router.delete('/users/:id', async (req, res) => {
// //     try {
// //         const user = await User.findByIdAndDelete(req.params.id)

// //         if (!user) {
// //             return res.status(404).send()
// //         }

// //         res.send(user)
// //     } catch (e) {
// //         res.status(500).send()
// //     }
// // })

module.exports = router