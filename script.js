window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name');
  const id = params.get('id');

  if (name) document.getElementById('childName').value = decodeURIComponent(name);
  if (id) document.getElementById('studentId').value = decodeURIComponent(id);
});

function sendData() {
  const studentId = document.getElementById('studentId').value;
  const childName = document.getElementById('childName').value;
  const status = document.querySelector('input[name="status"]:checked')?.value || '';
  const meal = document.getElementById('meal').value;
  const notes = document.getElementById('notes').value;

  const summary = `
    ✅ Submitted:
    -------------------------
    ID: ${studentId}
    Name: ${childName}
    Status: ${status}
    Meal: ${meal}
    Notes: ${notes || 'None'}
  `;

  alert(summary);
}
