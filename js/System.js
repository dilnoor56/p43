class System{

    constructor(){}

    authenticate(actualCode,enteredCode){

        textSize(50);
        fill("black");
        text(code,300,300)
        console.log(actualCode)
        console.log(enteredCode)
        //add code to return true if correct answer entered.
        if(actualCode===enteredCode){
            return true
        }
        else{
            return false
        }
    }

}