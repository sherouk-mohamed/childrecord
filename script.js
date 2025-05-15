window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const childName = params.get("child");
  const studentId = params.get("studentId");

  if (childName) {
    document.getElementById("childName").value = decodeURIComponent(childName);
  }
    if (studentId) {
    document.getElementById("studentId").value = decodeURIComponent(studentId); 
  }
});

function sendData() {
  const studentId = document.getElementById("studentId").value.trim();
  const name = document.getElementById("childName").value.trim();
  const status = document.querySelector("input[name='status']:checked")?.value || "";
  const meal = document.getElementById("meal").value;
  const notes = document.getElementById("notes").value.trim();
  const currentTime = new Date().toLocaleString();
  
if (!studentId ||!name || (!status && meal === "")) {
    alert("Please enter the child's name and select at least a status or a meal.");
    return;
  }

  const data = {
   studentId,
    name,
    notes,
    overallTimestamp: currentTime
    checkIn: "",
    checkOut: "",
    breakfast: "",
    lunch: "",
    snack: ""
  };
  if (status === "Check-in") {
    data.checkIn = currentTime;
  } else if (status === "Check-out") {
    data.checkOut = currentTime;
  }

  if (meal === "Breakfast") {
    data.breakfast = currentTime;
  } else if (meal === "Lunch") {
    data.lunch = currentTime;
  } else if (meal === "Snack") {
    data.snack = currentTime;
  }
  
 console.log("Data to be sent:", data);
  
  fetch("https://script.google.com/macros/s/AKfycby0KFP1lgwOJAonCu-gVeRzSl10fxvdeY-5vd9tvJlpZGflokmvwZmDigHXAcJ7308b/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  

  alert(" Data submitted successfully!");

  document.getElementById("statusForm").reset();
}
