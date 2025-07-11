import jstat from "jstat";

function Calculator ({ mean, std }) {
    const min=0;    //시험점수가 0부터 100까지
    const max=100;

    const phi = (x) => jstat.normal.cdf(x,0,1);
    const inversePhi = (p) => jstat.normal.inv(p,0,1);

    const firstRating=0.96;
    const secondRating=0.89;
    const thirdRating=0.77;

    const alpha=(min-mean)/std;
    const beta=(max-mean)/std;

    const clamp = (val) => Math.max(0,Math.min(1,val));

    const Z=phi(beta)-phi(alpha);

    const adjustFirst = clamp(phi(alpha)+firstRating*Z);
    const adjustSecond = clamp(phi(alpha)+secondRating*Z);
    const adjustThird = clamp(phi(alpha)+thirdRating*Z);

    const firstZ = inversePhi(adjustFirst,0,1);
    const secondZ = inversePhi(adjustSecond,0,1);
    const thirdZ = inversePhi(adjustThird,0,1);

    const firstScore = mean+firstZ*std;
    const secondScore = mean+secondZ*std;
    const thirdScore = mean+thirdZ*std;

    if (!mean || !std || isNaN(mean) || isNaN(std) || std === 0) {
        return <p>유효한 평균과 표준편차를 입력하세요</p>
    }


    return (
        <div>
            <p>1등급: {firstScore.toFixed(2)}</p>
            <p>2등급: {secondScore.toFixed(2)}</p>
            <p>3등급: {thirdScore.toFixed(2)}</p>
        </div>
    )

}

export default Calculator;