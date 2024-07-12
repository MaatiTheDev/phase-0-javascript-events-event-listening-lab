function addingEventListener() {
  const actionBtn = document.getElementById("button");

  function showNotification() {
    alert("Button activated!");
  }

  // add event listener
  actionBtn.addEventListener("click", showNotification);
}

// setting event listener
addingEventListener();
