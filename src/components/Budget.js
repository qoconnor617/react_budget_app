import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost)
    }, 0)

    const handleBudgetChange = (event) => {
        if (event.target.value > 20000){
            alert('Must not exceed 20000')
            return;
        }

        console.log(totalExpenses)

        if (event.target.value < totalExpenses){
            alert('You cannot reduce the budget value llower than the spending')
            return;
        }

        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency + '' + budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;