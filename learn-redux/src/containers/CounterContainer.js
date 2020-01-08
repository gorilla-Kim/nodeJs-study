import React from 'react';
import Counter from '../components/Counter';
// 상태를 조회할때 사용하는 함수 useSelector, dispatch 하는 함수 useDispatch
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';


function CounterContainer(){
    const { number, diff } = useSelector(state =>({
        number: state.counter.number, 
        diff: state.counter.diff
    }));
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return(
        <Counter 
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;