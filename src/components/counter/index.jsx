import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCounter, getCounter, resetCounter} from "../../store/reducers/counter/actions";
import {CounterBlock, CounterText, CounterWrapper} from "./components";
import {CustomButton} from "../../ui/index"

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const addCountHandler = (n) => {
        dispatch(addCounter(n))
    }

    const getCountHandler = (n) => {
        dispatch(getCounter(n))
    }

    const resetCountHandler = () => {
        dispatch(resetCounter())
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