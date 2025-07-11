import {useState,useEffect} from 'react';

function RecommendSubject ({subject}) {
    const [count,setCount]=useState({good:0, bad:0});

    const total = count.good + count.bad;
    const goodRatio = total === 0 ? 50 : (count.good / total) * 100;

    const handleCount = (choice) => {
        const upDated = {
            ...count,
            [choice]: count[choice] + 1

        };
        setCount(upDated);
        localStorage.setItem(`recommend-${subject.title}`,JSON.stringify(upDated));
    }

    useEffect(() => {
        const saveCount = JSON.parse(localStorage.getItem(`recommend-${subject.title}`)) || {good:0, bad:0};
        setCount(saveCount);
    }, [subject]);

    return (
        <div>
            <h2>{subject.title}</h2>
            <button onClick={() => handleCount("good")}>추천:{count.good}</button>
            <button onClick={() => handleCount("bad")}>비추천:{count.bad}</button>
        </div>
    )

}

export default RecommendSubject;
