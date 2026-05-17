import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from "./Sort";
import db from "../../db.json";

function AccountContainer() {
  const [transactions,setTransactions] = useState(db.transactions)
  const [search,setSearch] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/transactions")
    .then(r=>r.json())
    .then(data=>{
      if (Array.isArray(data)) setTransactions(data)
    })
    .catch(()=>{})
  },[])

  function postTransaction(newTransaction){
    fetch('http://localhost:6001/transactions',{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
    .then(r=>r.json())
    .then(data=>setTransactions((transactions)=>[...transactions,data]))
    .catch(()=>setTransactions((transactions)=>[...transactions,newTransaction]))
  }
  
  // Sort function here
  function onSort(sortBy){
    
  }

  const displayedTransactions = transactions.filter((transaction) =>
    (transaction.description || transaction.title || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <div>
      <Search setSearch={setSearch}/>
      <AddTransactionForm postTransaction={postTransaction}/>
      <Sort onSort={onSort}/>
      <TransactionsList transactions={displayedTransactions} />
    </div>
  );
}

export default AccountContainer;
