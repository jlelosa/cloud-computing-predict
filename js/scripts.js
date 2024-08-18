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
              <label for="director-email-${i}">Director ${i} Email</label>
              <input type="email" id="director-email-${i}" name="director-email-${i}" required>
          </div>
          <div class="form-group">
              <label for="director-phone-${i}">Director ${i} Phone Number</label>
              <input type="tel" id="director-phone-${i}" name="director-phone-${i}" required>
          </div>
      `;

      directorsInfoDiv.appendChild(directorDiv);
  }
});
