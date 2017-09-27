function substitute() {
    var myValue = document.getElementById('myTextBox').value;
        if (myValue.length == 0) {
            alert('Please, I must know!');
            return;
        }
        var myMessage = document.getElementById('message');
          myMessage.innerHTML = myValue + "!" + " It's nice to meet you.";
}

function substitute2() {
    var myValue2 = document.getElementById('myTextBox2').value;
        if (myValue2 == "happy") {
           document.getElementById("message2").innerHTML = "Yes! If you are happy, I am happy!";
       }
        else if (myValue2 == "sad") {
           document.getElementById("message2").innerHTML = "Do you need a shoulder to cry on?";
       }
        else if (myValue2 == "angry") {
           document.getElementById("message2").innerHTML = "Who do you need me to fight?"; 
        }
        else if (myValue2 == "nervous") {
            document.getElementById("message2").innerHTML = "Ya.  Me too.  Good thing I wore deoderant."
        }
        else {
            document.getElementById("message2").innerHTML = "I understand.  Sometimes I don't really know how I am feeling either.";
        }
      
}

function substitute3() {
    var myValue3 = document.getElementById('myTextBox3').value;
        if (myValue3 == "bad") {
           document.getElementById("message3").innerHTML = "Rawr....";
       }
        else if (myValue3 == "funny") {
           document.getElementById("message3").innerHTML = "Why don't cannibals eat clowns? Because they taste funny!";  
       }
        else if (myValue3 == "sweet") {
           document.getElementById("message3").innerHTML = "If a star fell from the sky every time I thought about you, then tonight the sky would be empty."; 
        }
    
        else if (myValue3 == "smart") {
           document.getElementById("message3").innerHTML = "Einstein said, 'Pure mathematics is, in its way, the poetry of logical ideas.'";
        }
        else {
            document.getElementById("message3").innerHTML = "It's ok if you don't know. I like different types, myself.";
        }
      
}

function substitute4(){
    var myValue4 = document.getElementById('myTextBox4').value;
        if (myValue4 == "yes") {
            document.getElementById("poetry").innerHTML = "Ok! This one is for you... Whoppers sitting on my plate.  Aroma so sweet.  The thrill of eating. " ;
        }
        else if (myValue4 == "no"){
            document.getElementById("poetry").innerHTML = "Oh! Alright.  I respect your aversion to poetry..."
        }
        else{
            document.getElementById("poetry").innerHTML = "Hmmm....ok.  Next question?"
        }
    
}

function substitute5(){
    var myValue5 = document.getElementById('myTextBox5').value;
        if (myValue5 == "story1"){
            document.getElementById("stories").innerHTML = "Once I won a hot dog eating competition. Yep.  50 hot dogs in 10 minutes.";
        }
        else if (myValue5 == "story2"){
            document.getElementById("stories").innerHTML = "The katzenklavier was a musical instrument made of cats.";
        }
        else{
            document.getElementById("stories").innerHTML = "A female clam can produce 100,000 to over a million eggs at a time.";
        }
}

function substitute6(){
    var myValue6 = document.getElementById('myTextBox6').value;
        if (myValue6 == "story1"){
            document.getElementById("answer").innerHTML = "That's right!  I mean...computers can't eat hot dogs, duh.";
        }
        else if (myValue6 == "story2"){
            document.getElementById("answer").innerHTML = "This is actually true. It  consisted of a row of caged cats with different voice pitches, who could be 'played' by a keyboardist driving nails into their tails. I guess PETA wasn't around back then.";
        }
        else{
            document.getElementById("answer").innerHTML = "True story.  Imagine the daycare expenses...";
        }
}

function substitute7(){
    var myValue7 = document.getElementById('myTextBox7').value;
        if (myValue7 == 33){
            document.getElementById("answer1").innerHTML = "Right!  Attractive AND smart!  I'm impressed!";
        }
        else{
            document.getElementById("answer1").innerHTML = "No, but try again!";
        }        
        
}

function substitute8(){
    var myValue8 = document.getElementById('myTextBox8').value;
        if (myValue8 == 1){
            document.getElementById("answer2").innerHTML = "Yes!  Only I was going to the mall!";
        }
        else if (myValue8 == "one"){
            document.getElementById("answer2").innerHTML = "Yes!  Only I was going to the mall!";
        }
    
        else{
            document.getElementById("answer2").innerHTML = "No, let's think about this...";
        }        
}

function substitute9(){
    var myValue9 = document.getElementById('myTextBox9').value;
        if (myValue9 == "yes") {
            document.getElementById("response").innerHTML = "Whew!  I'm so glad.  I thought maybe I was coming off as annoying." ;
        }
        else if (myValue9 == "no"){
            document.getElementById("response").innerHTML = "Oh well.  I guess it is better we figure this out now BEFORE we have kids.";
        }
        else{
            document.getElementById("response").innerHTML = "Cat got your tongue? Where did that saying come from anyway?";
        }
}



function substitute10() {
    var myValue10 = document.getElementById('myTextBox10').value;
        if (myValue10 == "appletini") {
           document.getElementById("message2").innerHTML = "Yes! If you are happy, I am happy!";
       }
        else if (myValue10 == "whiskey") {
           document.getElementById("message2").innerHTML = "Do you need a shoulder to cry on?";
       }
        else if (myValue10 == "tequila") {
           document.getElementById("message2").innerHTML = "Who do you need me to fight?"; 
        }
        else if (myValue10 == "beer") {
            document.getElementById("beer").style.visibility = "show";
        }
        else {
            document.getElementById("water").style.visibility = "show";
        }
}

