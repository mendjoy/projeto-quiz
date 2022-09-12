const question = document.querySelector('#question'); 
const answerBox = document.querySelector('#answerbox'); 
const quizContainer = document.querySelector('#quizcontainer'); 
const scoreContainer = document.querySelector('#scoretela'); 
const letters = ['A', 'B', 'C', 'D'];
let points = 0;
let actualQuestion =0;

const easyQuestions = [
    {
        //question 1 
        'question': 'I _____ Brazilian and I live in São Paulo',
        'answers': [
            {
                'answer': 'is',
                'correct': false //true or false A
            },
            {
                'answer': 'are',
                'correct': false //true or false B  
            },
            {
                'answer': 'am',
                'correct': true //true or false C
            },
            {
                'answer': 'have',
                'correct': false ,//true or false D
            }, 
        ]
    },
    {
        //question 2 
        'question': 'I have a cat. That cat is___.',
        'answers': [
            {
                'answer': 'yours',
                'correct': false //true or false A
            },
            {
                'answer': 'mine',
                'correct': true //true or false B  
            },
            {
                'answer': 'hers',
                'correct': false //true or false C
            },
            {
                'answer': 'its',
                'correct': false//true or false D
            }, 
        ]
    }, 
    {
        // question 3 
        'question': 'My mother ___ making a party and Jessica and Tom _____ invited to join.',
        'answers': [
            {
                'answer': 'is - are',
                'correct': true //true or false A
            },
            {
                'answer': 'is - is',
                'correct': false //true or false B  
            },
            {
                'answer': 'are - are',
                'correct': false //true or false C
            },
            {
                'answer': 'are - is',
                'correct': false//true or false D
            }, 
        ]
    },
    {
        // question 4
        'question': 'Today the weather is great, but last week it ____ awful.',
        'answers': [
            {
                'answer': 'were',
                'correct': false //true or false A
            },
            {
                'answer': 'will be',
                'correct': false //true or false B  
            },
            {
                'answer': 'has be',
                'correct': false //true or false C
            },
            {
                'answer': 'was',
                'correct': true//true or false D
            }, 
        ]
    }, 
    {
        // question 5
        'question': `What's the plural of “man“?.`,
        'answers': [
            {
                'answer': 'mans',
                'correct': false //true or false A
            },
            {
                'answer': 'men',
                'correct': true //true or false B  
            },
            {
                'answer': 'mains',
                'correct': false //true or false C
            },
            {
                'answer': 'means',
                'correct': false//true or false D
            }, 
        ]
    }, 
    {
        // question 6
        'question': "Which’s the first letter of the alphabet?",
        'answers': [
            {
                'answer': 'C',
                'correct': false //true or false A
            },
            {
                'answer': 'Z',
                'correct': false //true or false B  
            },
            {
                'answer': 'A',
                'correct': true //true or false C
            },
            {
                'answer': 'P',
                'correct': false//true or false D
            }, 
        ]
    }, 
    {
        // question 7
        'question': 'What do we say to people between about 6 a.m and 12 p.m?.',
        'answers': [
            {
                'answer': 'Good morning!',
                'correct': true //true or false A
            },
            {
                'answer': 'Good afternon!',
                'correct': false //true or false B  
            },
            {
                'answer': 'Good evening!',
                'correct': false //true or false C
            },
            {
                'answer': 'Good night!',
                'correct': false//true or false D
            }, 
        ]
    }, 
    {
        // question 8
        'question': `What's the plural of “a”?.`,
        'answers': [
            {
                'answer': 'Any',
                'correct': false //true or false A
            },
            {
                'answer': 'as',
                'correct': false //true or false B  
            },
            {
                'answer': 'some',
                'correct': true //true or false C
            },
            {
                'answer': 'its',
                'correct': false//true or false D
            }, 
        ]
    },
    {
        // question 9
        'question': "What's the negative of “he speaks“?.",
        'answers': [
            {
                'answer': 'he speaks a lot',
                'correct': false //true or false A
            },
            {
                'answer':'he not speaks',
                'correct': false //true or false B  
            },
            {
                'answer': 'he do not speak',
                'correct': false //true or false C
            },
            {
                'answer': `he doesn't speak`,
                'correct': true//true or false D
            }, 
        ]
    },  
    {
        // question 10
        'question':`what's the negative of "can"?.`,
        'answers': [
            {
                'answer': 'cannot',
                'correct': true //true or false A
            },
            {
                'answer': 'cants not',
                'correct': false //true or false B  
            },
            {
                'answer': 'not can',
                'correct': false //true or false C
            },
            {
                'answer': "can's not",
                'correct': false//true or false D
            }, 
        ]
    }, 
    

]
   
//iniciar o jogo
function startEasyQuiz(){

    createEasyQuestion(0)
}

function createEasyQuestion(i){

    //limpa a questão para poder inserir uma nova
    const  oldButtons = answerBox.querySelectorAll('button');
    oldButtons.forEach(function(btn){
        btn.remove();
    });

    //alterar texto da pergunta
     const questionText = question.querySelector('#questiontext');
     const questionNumber = question.querySelector('#questionnumber');

     questionText.textContent = easyQuestions[i].question; //verificar 
     questionNumber.textContent =  i + 1;

     //exibir alternativas
     easyQuestions[i].answers.forEach(function(answer, i){ //verificar

        const answerTemplate = document.querySelector('.answer-template').cloneNode(true);
        
         const letterbtn = answerTemplate.querySelector('.btnletter');
         const answerText = answerTemplate.querySelector('.questionanswer');

         letterbtn.textContent = letters[i];
         answerText.textContent = answer['answer'];

         answerTemplate.setAttribute('correctanswer', answer['correct']);

         //removendo hide  e template class

         answerTemplate.classList.remove('hide');
         answerTemplate.classList.remove('answer-template');

         //inserindo alternativas
         answerBox.appendChild(answerTemplate);

         //evento de clique nos botoes
         answerTemplate.addEventListener('click', function(){
            checkAnswer(this)
         });
     });

     //incrementando numero da questão
     actualQuestion++; 
};

//checando alternativa

function checkAnswer(btn){
    console.log(btn);

    const buttons = answerBox.querySelectorAll('button');
    buttons.forEach(function(button){
        if(button.getAttribute('correctanswer') === 'true'){
            button.classList.add('correctanswer');
        //checar se usuario acertou a pergunta
            if (btn === button){
                points++;
            }
        } else{
            button.classList.add('wronganswer')

        }
    });

    //mostrar a proxima pegunta

    nextQuestion()
}; 

function nextQuestion(){
    //timer
    setTimeout(function(){
        //verificar se ainda há perguntas
        if(actualQuestion >= easyQuestions.length){
            showSucccessMessage();
            return;
        }; 
        createEasyQuestion(actualQuestion); 
    }, 700);
}
//tela final
function showSucccessMessage(){

    hideOrShowQuiz(); 

    //trocar os dados da tela final 
    const score = ((points / easyQuestions.length) * 100).toFixed(1);

    const displayScore = document.querySelector('#displayscore span')
    displayScore.textContent = score.toString();
    //alterar o numero 
    const correctAnwers = document.querySelector('#correctanswer');

    correctAnwers.textContent= points;

    //alterar total de perguntas
    const totalQuestions = document.querySelector('#questionsAll');
    totalQuestions.textContent = easyQuestions.length;

};

 function hideOrShowQuiz(){
    quizContainer.classList.toggle('hide');
    scoreContainer.classList.toggle('hide');
 }; 

 //reiniciar quiz
 const restartBtn = document.querySelector('#restart');

 restartBtn.addEventListener('click', function(){
    //zerar o jogo
    actualQuestion = 0;
    points = 0;
    hideOrShowQuiz();
    startEasyQuiz();
 })


startEasyQuiz()
