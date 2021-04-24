const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function addAnswer(answerText, qIdx) {
    let a = document.querySelector(".answerBox");
    let answer = document.createElement('Button');
    a.appendChild(answer);
    answer.innerHTML = answerText;
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');
    answer.addEventListener('click', () => {
        let children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++){
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
            for (let i = 0; i < children.length; i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        },450)
    })


}

function goNext(qIdx) {
    let q = document.querySelector(".qBox");
    q.innerHTML = qnaList[qIdx].q;

    for (let i = 0; i < qnaList[qIdx].a.length; i++){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx);
    }
}

function begin() {
    console.dir(main.style.WebkitAnimation);
    console.dir(qna);
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s"
        qna.style.animation = "fadeIn 1s"
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        }, 400);
    },400);
    goNext(0);
    
    // main.style.display = "none";
    // qna.style.display = "block";
}