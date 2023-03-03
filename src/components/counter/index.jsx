import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {CounterBlock, CounterText, CounterWrapper} from "./components";
import {CustomButton} from "../../ui/index"
import { decrement, increment, reset } from '../../reduxToolkit/toolkitReducer';

const Counter = () => {
    // const count = useSelector(state => state.counter.count);
    const count = useSelector(state => state.toolkitCount.count);
    const dispatch = useDispatch();

    const addCountHandler = (n) => {
        dispatch(increment(n))
    }

    const getCountHandler = (n) => {
        dispatch(decrement(n))
    }

    const resetCountHandler = () => {
        dispatch(reset())
    }

    return (
        <CounterWrapper>
            <CounterBlock>
                <CounterText>{count}</CounterText>
                <CustomButton onClick={() => addCountHandler(Number(prompt()))} variant='contained'
                              margin='0 5px 10px'>ADD</CustomButton>
                <CustomButton onClick={() => getCountHandler(Number(prompt()))} variant='contained'
                              margin='0 5px 10px'>GET</CustomButton>
                <CustomButton onClick={resetCountHandler} variant='contained' margin='0 5px 10px'>RESET</CustomButton>
            </CounterBlock>
        </CounterWrapper>
    );
};

export default Counter;