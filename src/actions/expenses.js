import uuid from "uuid";
import dataBase from "../firebase/firebase"


//ADD-Expense
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
})

export const startAddExpense = (expenseData={})=>{
    return (dispatch)=>{
        const { description = "", note = "", amount = 0, createdAt = 0} = expenseData;
        const expense = {description,note, amount, createdAt}
        dataBase.ref("expenses").push(expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}
export const removeExpense = (expense) => ({
    type: "REMOVE_EXPENSE",
    id: expense.id
})
export const startRemoveExpense = (expenseData)=>{
    return (dispatch)=>{
        const id=expenseData.id
        return dataBase.ref(`expenses/${id}`).remove().then((ref)=>{
            dispatch(removeExpense({
                id
            }))
        })
    }
}
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})
export const startEditExpense = (id, updates)=>{
    return (dispatch)=>{
        dataBase.ref(`expenses/${id}`).update(updates).then(()=>{
            dispatch(editExpense(id, updates))
        })
    }
}

export const setExpenses =(expenses)=>({
    type: "SET_EXPENSES",
    expenses
})



export const startSetExpenses = ()=>{
    return (dispatch)=>{
        return dataBase.ref("expenses")
        .once("value")
        .then((snapshot)=>{
            const expenses = []
            snapshot.forEach((childSnapshot) => {
                 expenses.push({
                     id: childSnapshot.key,
                     ...childSnapshot.val()
                 })
             });
            dispatch(setExpenses(expenses))
        })
    }
}