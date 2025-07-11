import RecommendSubject from "./RecommendSubject";

function Vote () {
    const subjects = [
        {id:'01',title:'미적분'},
        {id:'02',title:'확률과 통계'},
        {id:'03',title:'언어와 매체'},
    ];

    return (
        <div>
            {subjects.map((subject) => (
                <div key={subject.id}>
                    <RecommendSubject subject={subject}/>
                </div>
            ))}
        </div>
    )

}

export default Vote;
