import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    increment, decrement, increment2, decrement2
    , incrementByAmount, decrementByAmount
    , subcrementByAmount, mulcrementByAmount, threemul
} from "./counter1Slice";

import { changeByH1 } from './stringSlice';
import { add } from './addSlice';
import { mul } from './mulSlice';
import { sub } from './subSlice';
import { dev } from './devSlice';

import { useState } from 'react';

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const stri = useSelector((state) => state.str.value)
    const addv = useSelector((state) => state.counter_add.value1)
    const mulv = useSelector((state) => state.counter_mul.value2)
    const subv = useSelector((state) => state.counter_sub.value3)
    const devv = useSelector((state) => state.counter_dev.value4)

    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState('2')

    const [change_h1, setChange_h1] = useState("")

    const [multiplier, setMultiplier] = useState();
    const [multiplicand, setMultiplicand] = useState();
    const [multiplithird, setMultiplithird] = useState();

    const [addend, setaddend] = useState();
    const [summand, setsummand] = useState();

    const [mulend, setmulend] = useState();
    const [muland, setmuland] = useState();

    const [subend, setsubend] = useState();
    const [suband, setsuband] = useState();

    const [devend, setdevend] = useState();
    const [devand, setdevand] = useState();
    return (
        <div>
            <div>
                <button aria-label="Incrment value"
                    onClick={() => dispatch(increment())}
                >
                    Incrment
                </button>
                <span>{count}</span>
                <button aria-label="Decrment value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrment
                </button>
            </div>
            <hr />
            <div>
                <button aria-label="Incrment value"
                    onClick={() => dispatch(increment2())}
                >
                    Incrment2
                </button>
                <button aria-label="Decrment value"
                    onClick={() => dispatch(decrement2())}
                >
                    Decrment2
                </button>
            </div>
            <hr />
            <div>
                <input aria-label="set Increment Amount"
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
                >
                    Add Amount
                </button>
                <button onClick={() => dispatch(subcrementByAmount(Number(incrementAmount) || 0))}
                >
                    sub Amount
                </button>
                <button onClick={() => dispatch(mulcrementByAmount(Number(incrementAmount) || 0))}
                >
                    mul Amount
                </button>
                <button onClick={() => dispatch(decrementByAmount(Number(incrementAmount) || 0))}
                >
                    de Amount
                </button>
            </div>
            <hr />
            <div>
                <h1 />{stri}
                <input aria-label="set Change_h1"
                    onChange={e => setChange_h1(e.target.value)}
                />
                <button onClick={() => dispatch(changeByH1(String(change_h1)))}
                >
                    Change_h1
                </button>
            </div>
            <hr />
            <div>
                <input value={multiplier}
                    onChange={e => setMultiplier(e.target.value)}
                />
                *
                <input value={multiplicand}
                    onChange={e => setMultiplicand(e.target.value)}
                />
                *
                <input value={multiplithird}
                    onChange={e => setMultiplithird(e.target.value)}
                />
                ={count}
                <br></br>
                <button
                    onClick={() => dispatch(threemul({ "multiplier": multiplier, "multiplicand": multiplicand, "multiplithird": multiplithird }))}
                >
                    送出
                </button>
            </div>
            <hr />
            <div>
                <input value={addend}
                    onChange={e => setaddend(e.target.value)}
                />
                +
                <input value={summand}
                    onChange={e => setsummand(e.target.value)}
                />
                =
                <span>{addv}</span>
                <br></br>
                <button
                    onClick={() => dispatch(add({ "addend": addend, "summand": summand }))}>
                    相加
                </button>
            </div>
            <hr />
            <div>
                <input value={muland}
                    onChange={e => setmuland(e.target.value)}
                />
                *
                <input value={mulend}
                    onChange={e => setmulend(e.target.value)}
                />
                =
                <span>{mulv}</span>
                <br></br>
                <button
                    onClick={() => dispatch(mul({ "muland": muland, "mulend": mulend }))}>
                    相乘
                </button>
            </div>
            <hr />
            <div>
                <input value={suband}
                    onChange={e => setsuband(e.target.value)}
                />
                -
                <input value={subend}
                    onChange={e => setsubend(e.target.value)}
                />
                =
                <span>{subv}</span>
                <br></br>
                <button
                    onClick={() => dispatch(sub({ "suband": suband, "subend": subend }))}>
                    相減
                </button>
            </div>
            <hr />
            <div>
                <input value={devand}
                    onChange={e => setdevand(e.target.value)}
                />
                /
                <input value={devend}
                    onChange={e => setdevend(e.target.value)}
                />
                =
                <span>{devv}</span>
                <br></br>
                <button
                    onClick={() => dispatch(dev({ "devand": devand, "devend": devend }))}>
                    相除
                </button>
            </div>
            <hr />
        </div >


    )

}