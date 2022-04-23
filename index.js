var quiz = [
    {
    question :"1. Which of these best describes an array?",
    a:" A data structure that shows a hierarchical behavior",
    b: "Container of objects of similar types",
    c: "Arrays are immutable once initialised",
    d: "Array is not a data structure",
     ans:"ans2"
    },
    {
    
    question :"2. How do you initialize an array in C?",
    a:" int arr[3] = (1,2,3);",
    b: "int arr(3) = {1,2,3};",
    c: "int arr[3] = {1,2,3};",
    d: "int arr(3) = (1,2,3);",
    ans:"ans3"
    },
    {
    question :"3. How do you instantiate an array in Java?",
    a: "int arr[] = new int(3);",
    b: "int arr[];",
    c: "int arr[] = new int[3];",
    d: "int arr() = new int(3);",
     ans:"ans3"
    },
    {
    question :"4. Which of the following is the correct way to declare a multidimensional array in Java?",
    a: "int[] arr;",
    b: "int arr[[]];",
    c: "int[][]arr;",
    d:" int[[]] arr;",
    ans:"ans3"
    },



    {
        question :"7. When does the ArrayIndexOutOfBoundsException occur?",
        a: "Compile-time",
        b: "Run-time",
        c:" Not an error",
        d:" Not an exception at all",
        ans:"ans2"
        },
        {
        
        question :" 8. Which of the following concepts make extensive use of arrays?",
        a:" Binary trees",
        b: "Scheduling of processes",
        c: "Caching",
        d:" Spatial locality",
        ans:"ans4"
        },
        {
        
        question :"9. What are the advantages of arrays?",
        a: "Objects of mixed data types can be stored",
        b: "Elements in an array cannot be sorted",
        c: "Index of first element of an array is 1",
        d: "Easier to store elements of same data type",
        ans:"ans4"
        },
        {
        
        question :"10.What are the disadvantages of arrays?",
        a:" Data structure like queue or stack cannot be implemented",
        b: "There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size",
        c: "Index value of an array can be negative",
        d: "Elements are sequentially accessed",
        ans:"ans2"
        }
        
        
        ]
    
        var question = document.querySelector(".question");
        var option1 = document.querySelector("#option1");
        var option2 = document.querySelector("#option2")
        var option3 = document.querySelector("#option3")
        var option4 = document.querySelector("#option4")
        
        var submit = document.querySelector("#submit");
        var answers = document.querySelectorAll(".answer")
        
        var showScore = document.querySelector("#showScore")
        
        
        
        var questionCount = 0;
        var score = 0;
        const loadQuestions = () => {
            let questionList = quiz[questionCount];
            question.innerHTML = questionList.question;
            option1.innerHTML = questionList.a;
            option2.innerHTML = questionList.b;
            option3.innerHTML = questionList.c;
            option4.innerHTML = questionList.d;
        }
        
        loadQuestions();
        
        const getCheckedAnswer = () => {
            let answer;
            answers.forEach(( curAnsEle) =>{
                if(curAnsEle.checked){
                    answer = curAnsEle.id;
                     
                }
            } )
            return answer;
        
        }
        
        
        
        
        
        submit.addEventListener("click",() =>{
            const checkedAnswer = getCheckedAnswer();
            
            if(checkedAnswer === quiz[questionCount].ans){
                score++;
            }
                                                                                     
            questionCount++;
            if(questionCount < quiz.length){
                loadQuestions()               
            }
            else{
                showScore.innerHTML =  " you have scored" + " " + score + " /" + quiz.length;
                document.querySelector("#showScore").style.display = "block";
                
            }
        })    