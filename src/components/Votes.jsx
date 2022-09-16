import React, { useState } from "react";

const VoteHandler = () => {
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);
    const [counterC, setCounterC] = useState(0);
    const [counterD, setCounterD] = useState(0);

    return (
        <div className="voteButtons">
            <button onClick={() => { setCounterA(counterA + 1) }}>Vote</button>
            <div>VoteA: {counterA}</div>
            <button onClick={() => { setCounterB(counterB + 1) }}>Vote</button>
            <div>VoteB: {counterB}</div>
            <button onClick={() => { setCounterC(counterC + 1) }}>Vote</button>
            <div>VoteC: {counterC}</div>
            <button onClick={() => { setCounterD(counterD + 1) }}>Vote</button>
            <div>VoteD: {counterD}</div>
        </div>
    );
};

export default VoteHandler;