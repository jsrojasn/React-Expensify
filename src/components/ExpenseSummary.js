import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses"
import selectExpensesTotal from "../selectors/expenses-total"
import numeral from "numeral"
import { Link } from "react-router-dom";

const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    const expensesWord = expensesCount===1 ? "expense":"expenses"
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expensesWord} totalling <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
    

}


const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses) 
    }
}
export default connect(mapStateToProps)(ExpensesSummary)