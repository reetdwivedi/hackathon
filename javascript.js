var quiz = [
    {
    
question :"     1 - Which of the following is true about variable naming conventions in JavaScript?",

            
            a:"You should not use any of the JavaScript reserved keyword as variable name.",

            
            b: "      JavaScript variable names should not start with a numeral (0-9).   " ,
            c: "      Both of the above.",
            d: "      None of the above. ",
             ans:"   ans3 "
            },




    {
        question :" 2   Which of the following is the correct syntax to redirect a url using JavaScript?               ",
        a:" document.location='http://www.newlocation.com'; ",
        b: "    browser.location='http://www.newlocation.com';    ",
        c: "    navigator.location='http://www.newlocation.com   ",
        d: "    window.location='http://www.newlocation.com        ",
         ans:"     ans4  "
        },

        {
            question :" 3  Which of the following type of variable takes precedence over other if names are same?                ",
            a:" global variable",
            b: "    local variable               ",
            c: "     Both of the above.               ",
            d: "     none of the above             ",
             ans:"    ans2     "
            },



            {
                question :"  4   Which built-in method sorts the elements of an array?               ",
                a:"changeOrder(order) ",
                b: "   order()                 ",
                c: "   sort()                ",
                d: "   None of the above.                 ",
                 ans:"   ans3     "
                },
{
                    question :"   5 - Which of the following function of String object returns the character at the specified index?                ",
                    a:" charAt()",
                    b: "  - charCodeAt()                 ",
                    c: "  concat()                 ",
                    d: "    indexOf()                 ",
                     ans:"     ans1   "
                    },



                    {
                        question :"  6   Which of the following function of String object extracts a section of a string and returns a new string?               ",
                        a:" slice() ",
                        b: "   split()   ",
                        c: "  replace()    ",
                        d: "    search()   ",
                         ans:"   ans1  "
                        },

                        {
                            question :"  7   Which of the following function of String object creates a string to blink as if it were in a <blink> tag?               ",
                            a:"  anchor()",
                            b: "   big()                 ",
                            c: "   blink()                ",
                            d: "    italics()                ",
                             ans:"   ans3       "
                            },
    
                            {
                                question :"8  Which of the following function of String object causes a string to be displayed as a superscript, as if it were in a <sup> tag?                  ",
                                a:" sup()",
                                b: " small()                  ",
                                c: "   strike()                ",
                                d: "  sub()                  ",
                                 ans:"   ans1    "
                                },
        








                                {
                                    question :"9  Which of the following function of Array object joins all elements of an array into a string?                 ",
                                    a:" concat() ",
                                    b: "  join()                 ",
                                    c: "   pop()                 ",
                                    d: "    map()                 ",
                                     ans:"   ans2       "
                                    },
            


                                    {
                                        question :"   10     Which of the following function of Array object returns a string representing the array and its elements?            ",
                                        a:" toSource()",
                                        b: "   sort()                ",
                                        c: "     splice()              ",
                                        d: "     toString()                ",
                                         ans:"   ans4      "
                                        },

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