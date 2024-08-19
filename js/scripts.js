document.getElementById('directors').addEventListener('change', function () {
  const numberOfDirectors = parseInt(this.value);
  const directorsInfoDiv = document.getElementById('directors-info');
  directorsInfoDiv.innerHTML = '';

  for (let i = 1; i <= numberOfDirectors; i++) {
      const directorDiv = document.createElement('div');
      directorDiv.className = 'director-group';

      directorDiv.innerHTML = `
          <h3>Director ${i}</h3>
          <div class="form-group">
              <label for="director-name-${i}">Director ${i} Name</label>
              <input type="text" id="director-name-${i}" name="director-name-${i}" required>
          </div>
          <div class="form-group">
              <label for="director-id-${i}">Director ${i} ID Number</label>
              <input type="text" id="director-id-${i}" name="director-id-${i}" required>
          </div>
          <div class="form-group">
              <label for="director-address-${i}">Director ${i} Address</label>
              <input type="text" id="director-address-${i}" name="director-address-${i}" required>
          </div>
          <div class="form-group">
              <label for="director-id-scan-${i}">Scan and Upload Director ${i} ID</label>
              <input type="file" id="director-id-scan-${i}" name="director-id-scan-${i}" accept=".jpg,.jpeg,.png,.pdf" onchange="populateDirectorDetails(${i})">
          </div>
      `;

      directorsInfoDiv.appendChild(directorDiv);
  }
});

function populateDirectorDetails(directorIndex) {
  const fileInput = document.getElementById(`director-id-scan-${directorIndex}`);
  const file = fileInput.files[0];

  if (file) {
      // Implement OCR (Optical Character Recognition) or another ID scanning service here
      // For now, this function is a placeholder

      // Example: populate the fields with dummy data (replace with actual implementation)
      document.getElementById(`director-name-${directorIndex}`).value = "Scanned Name";
      document.getElementById(`director-id-${directorIndex}`).value = "1234567890123";
      document.getElementById(`director-address-${directorIndex}`).value = "123 Scanned Street, Scantown";
  }
}
