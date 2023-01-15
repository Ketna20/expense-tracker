import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {

  const [filteredYear, setFileredYear] = useState('2022');
  const filterChangeHandler = selectedYear => {
    setFileredYear(selectedYear);
  }
  
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler} />
        
        {filteredExpenses.length === 0 ? <p>No expense found.</p> : filteredExpenses.map((expense) => (
          <ExpenseItem 
              key = {expense.id}
              title = {expense.title}
              amount = {expense.amount}
              date = {expense.date}
          />
        ))};

      </Card>
    </div>
  );

}

export default Expenses;