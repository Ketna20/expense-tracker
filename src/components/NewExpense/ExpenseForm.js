import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEneteredTitle] = useState('');
    const [enteredAmount, setEneteredAmount] = useState('');
    const [enteredDate, setEneteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEneteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEneteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEneteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            tite: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEneteredTitle('');
        setEneteredAmount('');
        setEneteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2020-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>);
};

export default ExpenseForm;
