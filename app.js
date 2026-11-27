//get the html elements
const form = 
document.getElementById("helpform");
const issue =
document.getElementById("issue");
const message =
document.getElementById("message");
console.log(issue);
//check the issue while the user is typing
issue.addEventListener("input",function(){
    const text = issue.value.trim();
    if(text.length<10){
        const missing = 10 - text.length;
        message.textContent =
        "Please add" +message+ "more characters.";
    }
    else{
        message.textContent 
        "Your issue description is long enough.";
        }
});
//check when the form is submitted
form.addEventListener("submit",function(event){
    event.preventDefault();
    const text =issue.value.trim();
    if(text.length<10){
        message.textContent=
        "Submission has failed. Please write atleast ten characters.";
    }
    else{
        message.style.color="green";
        message.textContent="Your issue has been submitted successfully";
    }
    form.reset();
})