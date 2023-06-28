
let storySubmit = document.getElementById("submit-story");

function submitRel() {
    alert("We'll review your post and add it to our website soon.");
    // window.location.origin ;
    document.location.href = "index.html";
    return false; 
}

function submitHelp() {
    alert("Thank You for writing to us. Our volunteers will reach out to you soon.");
    document.location.href = "index.html";
    return false; 
}

function submitVolunteer() {
    alert("Welcome to the team. We're glad to have you with us.");
    document.location.href = "index.html";
    
}


const stories = document.querySelectorAll('.story');

stories.forEach(story => {
    const value = story.querySelector('.inner');

    story.addEventListener('click', () => {
        value.classList.toggle('active');
    })
})