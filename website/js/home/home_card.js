// This code reads the contents of upcoming_activities.json and previous_activities.json
// and creates four activity cards in home.html
Promise.all([
  fetch('https://linhtetlwin.github.io/nyp_ux_design/website/json/upcoming_activities.json').then(res => res.json()),
  fetch('https://linhtetlwin.github.io/nyp_ux_design/website/json/recent_activities.json').then(res => res.json())
])
.then(([activities1, activities2]) => {
  const allActivities = [...activities1, ...activities2]; // Combine both arrays
  const row = document.getElementById('activity-row');

  allActivities.slice(0, 4).forEach(activity => {
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
})
.catch(error => console.error('Error loading activities:', error));
