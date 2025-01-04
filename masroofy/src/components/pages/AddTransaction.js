import React, { useState } from "react";

import  "./TransactionList.js";


import "./AddTransaction.css";
import { useNavigate } from "react-router-dom";
import { useTransactions } from "../../TransactionsContext";


export const AddTransaction = () => {
    const [Data,setData] = useState({
        transactionName:'',
        amount:'',
        date:'',
        category: 'Other',
        type: 'Expense' ,
        notes:'',

    })
    const navigate = useNavigate(); 
    const { addTransaction } = useTransactions();


    const handleSubmit=(e)=>{

        e.preventDefault();
        console.log(Data); 
        addTransaction(Data); 
        navigate('/transaction_list')


    }
    return (
    <div className="container">
        <h1>Add a transaction</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="transactionName" >Transaction Name</label>
            <input type="text" onChange={(e) => setData({...Data,transactionName: e.target.value})} required value={Data.transactionName}/>
            <label htmlFor="amount">Amount</label>
            <input type="number" onChange={(e) => setData({...Data,amount: e.target.value})} required value={Data.amount}/>
            <label htmlFor="date"> Date</label>
            <input type="datetime-local" onChange={(e) => setData({...Data,date: e.target.value})} required value={Data.date}/>
            <label htmlFor="category">Category</label>
            <select name="category" onChange={(e) => setData({...Data,category: e.target.value})} required value={Data.category}> 
              <option value="Groceries">Groceries</option>
              <option value="Transportation">Transportation</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Housing">Housing</option>
              <option value="Utilities">Utilities</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Shopping">Shopping</option>
              <option value="Salary">Salary</option>
              <option value="Investment">Investment</option>
              <option value="Other">Other</option>
            </select>

            <label htmlFor="type">Transaction Type</label>
            <div className="flex space-x-2 mt-2">
                    <button
                        type="button"
                        className={`button ${Data.type === 'Income' ? 'income-button' : 'default-button'}`}
                        onClick={() => setData({ ...Data, type: 'Income' })}
                    >
                        Income
                    </button>
                    <button
                        type="button"
                        className={`button ${Data.type === 'Expense' ? 'expense-button' : 'default-button'}`}
                        onClick={() => setData({ ...Data, type: 'Expense' })}
                    >
                        Expense
                    </button>
                </div>


            
            <label htmlFor="notes"> Notes (Optional) </label>
            <textarea onChange={(e) => setData({...Data,notes: e.target.value})} value={Data.notes}/>

            <button type="submit" >
                Add transaction
            </button>
        </form>
        
    </div>
    )
} 