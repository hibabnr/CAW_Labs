import React, { createContext, useState, useContext } from "react";

const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (transaction) => {
        setTransactions((prevTransactions) => {
            const newId = prevTransactions.length > 0
                ? prevTransactions[prevTransactions.length - 1].id + 1
                : 1;
            const newTransaction = { ...transaction, id: newId };
            return [...prevTransactions, newTransaction];
        });
    };

    const deleteTransaction = (id) => {
        setTransactions((prevTransactions) =>
            prevTransactions.filter((transaction) => transaction.id !== id)
        );
    };

    const editTransaction = (id, updatedTransaction) => {
        setTransactions((prevTransactions) =>
            prevTransactions.map((transaction) =>
                transaction.id === id ? { ...transaction, ...updatedTransaction } : transaction
            )
        );
    };

    return (
        <TransactionsContext.Provider
            value={{ transactions, addTransaction, deleteTransaction, editTransaction }}
        >
            {children}
        </TransactionsContext.Provider>
    );
};

export const useTransactions = () => useContext(TransactionsContext);
