import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import {  FaEdit, FaFileCsv, FaTrash } from "react-icons/fa";
import { mkConfig, generateCsv, download } from 'export-to-csv'; 


import './TransactionList.css'
import { useTransactions } from "../../TransactionsContext";





export const TransactionList = () => {

    const { transactions,deleteTransaction,editTransaction } = useTransactions(); 
    const [editData, setEditData] = useState({}); 

    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [filterDate, setFilterDate] = useState(''); 
    const [filteredTransactions, setFilteredTransactions] = useState(transactions);

    useEffect(() => {
        if (filterDate) {
            const filtered = transactions.filter(transaction => {
                return transaction.date.startsWith(filterDate); 
            });
            setFilteredTransactions(filtered);
        } else {
            setFilteredTransactions(transactions); 
        }
    }, [filterDate, transactions]); 


    const columns = [

        {
            name : 'Name',
            selector : row => row.transactionName,
            headerClassName: 'table-header',

        },
        {
            name : 'Amount',
            selector : row => (<span 
                className={row.type === 'Income' ? 'amount-income' : 'amount-expense'}
            >
                {row.type === 'Income' ? `+${row.amount}` : `-${row.amount}`}
            </span>
        ),
            headerClassName: 'table-header',


        },
        {
            name : 'Category',
            selector : row => row.category,
            headerClassName: 'table-header',


        },
        {
            name : 'Date',
            selector : row => row.date,
            headerClassName: 'table-header',


        },
        {
            name : 'Notes',
            selector : row => row.notes,
            headerClassName: 'table-header',


        },
        {
            name : 'Actions',
            cell: (row) => (
                <div className="icon-container">
                   <FaEdit className="icon edit" onClick={() => handleEdit(row)} />
                   <FaTrash className="icon delete" onClick={() => handleDelete(row.id)} />
                </div>
              ),
              headerClassName: 'table-header',

            

        },
        
    ];
    const customStyles = {
       
       
        headCells: {
            style: {
                
                fontWeight: "bold",
                color: "black",
                fontSize:'15px',
                paddingLeft: '15px', 
                paddingRight: '15px',
            },
        },
       
    };

   
        
     
    
    const handleEdit = (row) => {
        setEditData({ ...row }); 
        setIsModalOpen(true); 
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        editTransaction(editData.id, editData); 
        setIsModalOpen(false); 
    };

    const handleModalClose = () => {
        setIsModalOpen(false); 
    };
    
      const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this transaction?")) {
            deleteTransaction(id);
        }
    };
      const csvConfig = mkConfig({
        fieldSeparator: ',',
        decimalSeparator: '.',
        useKeysAsHeaders: true,
      });

      const handleExportData = () => {
        const csv = generateCsv(csvConfig)(transactions);
        download(csvConfig)(csv);
      };
    
    return (
        <div>
     <h1>Transaction List</h1>
     
    <div className="container-N">
    <div className="header">
            <input type="date" className="inputN"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}></input>
        <FaFileCsv className="export-icon" onClick={handleExportData}></FaFileCsv>
        </div> 
        <DataTable  className="table"
        columns={columns} 
        data ={filteredTransactions} 
        persistTableHead 
        noDataComponent={null} 
        fixedHeader
        customStyles={customStyles}
        />   

 {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Edit Transaction</h2>
                        </div>
                        <form onSubmit={handleEditSubmit}>
                            <label>Transaction Name</label>
                            <input
                                type="text"
                                value={editData.transactionName}
                                onChange={(e) =>
                                    setEditData({ ...editData, transactionName: e.target.value })
                                }
                                required
                            />
                            <label>Amount</label>
                            <input
                                type="number"
                                value={editData.amount}
                                onChange={(e) =>
                                    setEditData({ ...editData, amount: e.target.value })
                                }
                                required
                            />
                            <label>Category</label>
                            
                            <select name="category" type="text"
                                value={editData.category}
                                onChange={(e) =>
                                    setEditData({ ...editData, category: e.target.value })
                                }
                                required> 
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
                            <label>Date</label>
                            <input
                                type="datetime-local"
                                value={editData.date}
                                onChange={(e) =>
                                    setEditData({ ...editData, date: e.target.value })
                                }
                                required
                            />
                            <label>Notes</label>
                            <input
                            type="text"
                                value={editData.notes}
                                onChange={(e) =>
                                    setEditData({ ...editData, notes: e.target.value })
                                }
                            />
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="cancel-btn"
                                    onClick={handleModalClose}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="save-btn">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
        </div>

    );
};