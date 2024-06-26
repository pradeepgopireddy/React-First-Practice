import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.expense.date}/>
                <div className='expense-item__description'>
                    <h2>{props.expense.title}</h2>
                    <div className='expense-item__price'>Rs.{props.expense.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;