import React, { useEffect, useState } from "react";

import "./Home.css";
import { useTransactions } from "../../TransactionsContext";

export const Home = () => {
    const {transactions } = useTransactions();
    const [totalIncome,setTotalIncome] = useState(0);
    const [totalExpenses,setTotalExpenses] = useState(0);

    useEffect(() => {
        if (transactions && Array.isArray(transactions)) {
            const income = transactions.filter(transaction => transaction.type === 'Income')
                .reduce((acc, transaction) => acc + Number(transaction.amount), 0);

            const expenses = transactions.filter(transaction => transaction.type === 'Expense')
                .reduce((acc, transaction) => acc + Number(transaction.amount), 0);

            setTotalIncome(income);
            setTotalExpenses(expenses);
        }
    }, [transactions]);

    const Balance = totalIncome - totalExpenses;

    return (
        <div>
            <h1>Welcome to masroofy</h1>
            <h4>An app to truck your budget</h4>
            <div className="cards">
                <div className="card">
                    <h3>Total income </h3>
                    <p className="income">{totalIncome} DZD</p>
                </div>
                <div className="card">
                    <h3>Total Expenses</h3>
                    <p className="expense">{totalExpenses} DZD</p>
                </div>
                <div className="card">
                    <h3>Balance</h3>
                    <p className={`balance ${Balance >= 0 ? 'positive' : 'negative'}`}>{Balance} DZD</p>
                </div>
                

            </div>
        </div>

    )
}