import React, {useState} from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        
        props.onAddExpense(expenseData);
        setIsOpen(false);
    };

    const cancelExpenseHandler = () => {
        setIsOpen(false);
    }
    const openExpenseFormHandler = () => {
        setIsOpen(true);
    }

    return (
        <div className="new-expense">
            {isOpen ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpense={cancelExpenseHandler}  />
            : <button onClick={openExpenseFormHandler}>Add New Expense</button>
            }
        </div>
    )
}

export default NewExpense;