// This code reads the contents of previous_activities.json and creates previous activity cards in events.html

fetch('../json/previous_activities.json')
  .then(response => response.json())
  .then(activities => {
    const row = document.getElementById('recent-event-cards');
    activities.forEach(activity => {
      const card = document.createElement('div');
      card.className = 'card-parent';
      card.innerHTML = `
        <a href="${activity.link}">
          <div class="card">
            <div class="card-image">
              <img src="${activity.image}" class="card-img-top" alt="${activity.title}" aria-hidden="true">
            </div>
            <div class="card-body d-flex row">
              <h1>${activity.title}</h1>
              <h2>${activity.date}</h2>
              <p class="card-text">${activity.description}</p>
            </div>
          </div>
        </a>
      `;
      row.appendChild(card);
    });
  });