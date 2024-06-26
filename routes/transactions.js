const { addUser } = require('../controllers/createUser')
const { deleteExpense, addExpense, getExpense } = require('../controllers/expense')
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income')

const router=require('express').Router()

router.post('/add-income',addIncome)
.post('/add-user',addUser)
.get('/get-income',getIncomes)
.delete('/delete-income/:id',deleteIncome)
.post('/add-expense',addExpense)
.get('/get-expense',getExpense)
.delete('/delete-expense/:id',deleteExpense)


module.exports=router