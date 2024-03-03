const ExpenseSchema=require("../models/expense")

//router.post('/add-expense',addExpense) function called in transaction.js
exports.addExpense=async (req,res)=>{
    const {title,amount,category,description,date}=req.body

    const income=ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })
        // console.log(income)
        // console.log(title)
        // console.log(amount)
        // console.log(category)

    try{
        //validations
        if(!title||!category||!description||!date){
            return res.status(400).json({"message":"All fields are required"})
        }
        if(amount<=0||!amount==='number'){
            return res.status(400).json({"message":"Amount must be a positive number"})
        }
        await income.save()
        res.status(200).json({"message":"Expense added"})

    }catch(error){
        res.status(500).json({"message":"Server Error"})
    }
}
exports.getExpense=async(req,res)=>{
    try{
        const incomes=await ExpenseSchema.find().sort({createdAt:-1})
        res.status(200).json(incomes)
    }
    catch (error) {
        res.status(500).json({"message":"Server Error"})
        console.log(error)
    }
}
exports.deleteExpense=async(req,res)=>{
    const {id}=req.params;
    try{
        await ExpenseSchema.findByIdAndDelete(id)
        res.status(200).json({"message":"Expense deleted"})

    }
    catch(error){
        res.status(500).json({"message":"Server Error"})
        console.log(error)

    }

    // IncomeSchema.findByIdAndDelete(id).then((income)=>{
    //     res.status(200).json({"message":"Income deleted"})
    // }).catch((err)=>{
    //     res.status(500).json({"message":"Server Error"})
    // })
}

