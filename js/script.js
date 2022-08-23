window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    
    let voteChoices = document.getElementById("vote");
    voteChoices.setAttribute("class", "hidden");
    let under18Message = document.getElementById("under-18");
    under18Message.setAttribute("class", "hidden");

    const age = parseInt(document.querySelector("input#age").value);
    if (age >= 18) {
      voteChoices.removeAttribute("class");
    }
    else {
      under18Message.removeAttribute("class");
    };
  };
};