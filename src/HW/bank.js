import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Deposit, takeout, allout } from './exchange'


export function Bank() {
    const bank_money = useSelector((state) => state.change.money)

    const [moneychange, setMoneyChange] = useState()

    const dispatch = useDispatch()
    return (
        <div>
            <p />存取金額
            <input value={moneychange}
                onChange={e => setMoneyChange(e.target.value)}
            />
            <br></br>
            <div>
                <button
                    onClick={() => dispatch(Deposit(Number(moneychange)))}>
                    存入
                </button>
                <button
                    onClick={() => dispatch(takeout(Number(moneychange)))}>
                    取出
                </button>
                <button
                    onClick={() => dispatch(allout(Number(moneychange)))}>
                    全部取出
                </button>
            </div>
            <br></br>
            <div>
                <p />存錢筒內有<span>{bank_money}</span>元
            </div>
        </div>
    );
}