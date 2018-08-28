import uuid from "uuid";
import dataBase from "../firebase/firebase"


//ADD-Expense
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
})

export const startAddExpense = (expenseData={})=>{
    return (dispatch, getState)=>{
        const uid = getState().auth.uid
        const { description = "", note = "", amount = 0, createdAt = 0} = expenseData;
        const expense = {description,note, amount, createdAt}
        dataBase.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
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
    return (dispatch, getState)=>{
        const uid = getState().auth.uid
        const id=expenseData.id
        return dataBase.ref(`users/${uid}/expenses/${id}`).remove().then((ref)=>{
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
    return (dispatch,getState)=>{
        const uid = getState().auth.uid
        dataBase.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
            dispatch(editExpense(id, updates))
        })
    }
}

export const setExpenses =(expenses)=>({
    type: "SET_EXPENSES",
    expenses
})



export const startSetExpenses = ()=>{
    return (dispatch, getState)=>{
        const uid=getState().auth.uid
        return dataBase.ref(`users/${uid}/expenses`)
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