import { useEffect, useState } from "react";
import './App.css';

export default function App() {
    let [advice, setAdvice] = useState("");
    let [count, setCount] = useState(0);

    async function getAdvice() {
        let res = await fetch("https://api.adviceslip.com/advice");
        let data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c) => c+1);
    }

    useEffect(() => {
        getAdvice();
    }, []);

    return (
        <div className="container">
            <h1>{advice}</h1>
            <button className="get-advice-button original-button" onClick={getAdvice}>Get Advice</button>
            <Message count={count} />
        </div>
    );
}


function Message(props) {
    return (
        <p className="count-message">You read <stong>{props.count}</stong> advices.</p>
    )
}

