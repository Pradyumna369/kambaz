import React from 'react';
import HelloRedux from './HelloRedux';
import CounterRedux from './CounterReducer';
import AddReducer from './AddReducer';

export default function ReduxExamples() {
  return (
    <div>
        <h1>Redux examples</h1>
        <HelloRedux/>
        <CounterRedux />
        <AddReducer/>
    </div>
  )
}
