
import React from "react";

import './App.css';
import { Navbar } from './components/Navbar';

import { Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { AddTransaction } from './components/pages/AddTransaction';
import { TransactionList } from './components/pages/TransactionList';
import { Reports } from './components/pages/Reports';
import { TransactionsProvider } from "./TransactionsContext";




function App() {
  
  return (
    <div className="App">
      <Navbar />
      <TransactionsProvider>
      <Routes>
       <Route path='/' element= {<Home/>} />
       <Route path='/add_transaction' element= {<AddTransaction/>} />
       <Route path='/transaction_list' element= {<TransactionList />} />
       <Route path='/reports' element= {<Reports/>} />

      </Routes>
      </TransactionsProvider>
    </div>
  );
}

export default App;
