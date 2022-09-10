const question = document.querySelector('#question');
const answers = document.querySelector('#answerbox');
const numberQuestion = document.querySelector('#questionnumber');
const quizContainer = document.querySelector('#quizcontainer');
const scoreContainer = document.querySelector('#scorecontainer');
const letter = ['A', 'B', 'C', 'D'];
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
                'answer': 'is - are',
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
        // question 6
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
        // question 7
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
        // question 8
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
        // question 9
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
        // question 10
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
    

]
   

function startEasyQuiz(){

    createEasyQuestion(0)
}

function createEasyQuestion(i){
    //limpar botões
    const oldButtons = answers.querySelectorAll('button');
    oldButtons.forEach(function(btn){
        btn.remove();
    }); 
    //proxima pergunta
}

startEasyQuiz()
