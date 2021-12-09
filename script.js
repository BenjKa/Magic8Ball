
const eightBallResponses = 
[/*positive answers*/"It is certain.", "It is decidedly so.", "Without a doubt.", 
"Yes definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", 
"Outlook good.", "Yes.", "Signs point to yes.", 
/*non-committal answers*/"Reply hazy, try again.", "Ask again later.", 
"Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", 
/*negative answers*/"Don't count on it.", "My reply is no.", "My sources say no.",
"Outlook not so good.", "Very doubtful."];

const submitButton = document.getElementById('submitButton');
const userInput = document.getElementById('userSubmit')


submitButton.onclick = () => {
    if (userInput.value.includes("?")) {
        response();
    } else {
        document.getElementById('qResponse').innerHTML = "I don't know what you're trying to ask...\nPerhaps add a question mark [?]"
    }
    
}
userInput.onfocus = () => { 
    document.getElementById('qResponse').innerHTML = '...';
}

function response() {
    document.getElementById('qResponse').innerHTML = eightBallResponses[Math.floor(Math.random() * eightBallResponses.length)];
}




