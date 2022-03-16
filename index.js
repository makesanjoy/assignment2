function showInput() { 
    const letter = document.getElementById("user_letter").value  //this will get the letter
    const index =  document.getElementById("user_input").value.indexOf(letter)+1; //this will get the index of letter +1 so that we can put in slice function
    const sentence =  document.getElementById("user_input").value; //this will get the sentence that we have entered
    const findLetter = sentence.search(letter);  //this will search the letter we have entered on sentence

   
   
   
    if(findLetter===-1){
        document.getElementById('display').innerHTML = "The letter does not exist in the sentence";
    }else{
        document.getElementById('display').innerHTML =  document.getElementById("user_input").value.slice(index); 

    }
    
} 
function refreshPage(){
    window.location.reload();
} 

