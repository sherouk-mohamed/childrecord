function sendData() {
    const name = document.getElementById("childName").value.trim();
    const status = document.querySelector("input[name='status']:checked")?.value || "";
    const meal = document.getElementById("meal").value;
    const notes = document.getElementById("notes").value.trim();
  
    if (!name || (!status && !meal)) {
      alert("Please enter child's name and at least a status or a meal.");
      return;
    }
  
    // Example payload for Google Sheets or backend
    const data = {
      name,
      status,
      meal,
      notes,
      timestamp: new Date().toLocaleString()
    };
  
    console.log("Data to be sent:", data);
  
    // Send to Google Sheets API or custom backend here
    // For now we just simulate success
    alert("Data submitted successfully!");
  
    // Reset form
    document.getElementById("statusForm").reset();
  }
  