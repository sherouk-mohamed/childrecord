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
  };
    if (status) {
    data.status = status;
    data.statusTime = currentTime;
  }

  if (meal) {
    data.meal = meal;
    data.mealTime = currentTime;
  }
  
 console.log("Data to be sent:", data);

  alert(" Data submitted successfully!");

  document.getElementById("statusForm").reset();
}
