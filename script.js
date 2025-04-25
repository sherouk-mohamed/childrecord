window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const childName = params.get("child");

  if (childName) {
    document.getElementById("childName").value = decodeURIComponent(childName);
  }
});

function sendData() {
  const name = document.getElementById("childName").value.trim();
  const status = document.querySelector("input[name='status']:checked")?.value || "";
  const meal = document.getElementById("meal").value;
  const notes = document.getElementById("notes").value.trim();

if (!name || (!status && meal === "none")) {
    alert("Please enter the child's name and select at least a status or a meal.");
    return;
  }
    // Example payload for Google Sheets or backend
  const data = {
    name,
    status,
    meal: meal !== "none" ? meal : "",
    notes,
    timestamp: new Date().toLocaleString()
  };
  
 console.log("Data to be sent:", data);

  alert(" Data submitted successfully!");

  document.getElementById("statusForm").reset();
}
