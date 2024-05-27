var num = document.getElementById("num")
        var res = document.getElementById("res")
        var score = document.getElementById("score")
        var randnum = Math.floor(Math.random()*10)+1
        var totalscore = 10
        var count = 0
        function check(){
            var enternum = num.value
            if(randnum == enternum){
                count += 1
                score.textContent = "correct guess"+count
                console.log("Your guess right.")
                res.textContent = "Your guess right."
            }
            else{
                totalscore -= 1
                score.textContent = "Score" + totalscore
               console.log("Your guess is wrong") 
               res.textContent = "Your guess is Wrong."
            }

        }