window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const childId = params.get('id');
  const childName = params.get('name');

  // Fill fields if URL has them
  if (childId) document.getElementById('studentId').value = decodeURIComponent(childId);
  if (childName) document.getElementById('childName').value = decodeURIComponent(childName);
});

function sendData() {
  const studentId = document.getElementById('studentId').value.trim();
  const childName = document.getElementById('childName').value.trim();
  const status = document.querySelector('input[name="status"]:checked')?.value;
  const meal = document.getElementById('meal').value;
  const notes = document.getElementById('notes').value.trim();

  // Basic validation
  if (!childName) {
    alert("Please enter the child's name.");
    return;
  }
  if (!status) {
    alert("Please select a status (Check-in or Check-out).");
    return;
  }
  if (!meal) {
    alert("Please select a meal.");
    return;
  }

  // Summary of submitted data
  const summary = `
 Child Daily Status Submitted:
-------------------------------
 Student ID: ${studentId || 'N/A'}
 Child Name: ${childName}
 Status: ${status}
🍽 Meal: ${meal}
 Notes: ${notes || 'None'}
`;

  alert(summary);

}
