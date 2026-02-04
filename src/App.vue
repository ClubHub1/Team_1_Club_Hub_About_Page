<template>
  <div class="about-page">
    <!-- Page Header -->
    <h1 class="title">About Our Team</h1>

    <!-- Project Description Section -->
    <section class="project-section">
      <h2 class="section-title project-title">About the Project</h2>
      <p class="project-description">
        Club Hub is a centralized platform designed to help students discover,
        join, and manage campus clubs more easily. Our goal is to simplify
        communication between clubs and members while providing a clean,
        user-friendly experience for everyone involved.
      </p>
    </section>

    <!-- Team Section -->
    <h2 class="section-title project-title">Meet the Team</h2>

    <div class="team-grid">
      <div
        v-for="member in teamMembers"
        :key="member.name"
        class="team-card"
      >
        <h3 class="name">{{ member.name }}</h3>
        <p class="role">{{ member.role }}</p>
        <p class="bio">{{ member.bio }}</p>
      </div>
    </div>

    <!-- References Section -->
    <section class="references-section">
      <h2 class="section-title">References</h2>
      <ul class="references-list">
        <li>
          Vue.js Documentation —
          <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
            https://vuejs.org/
          </a>
        </li>
        <li>
          MDN Web Docs —
          <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">
            https://developer.mozilla.org/
          </a>
        </li>
        <li>
          Vite Documentation —
          <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
            https://vitejs.dev/
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      teamMembers: [
        {
          name: "Person One",
          role: "Frontend Developer",
          bio: "Focuses on UI/UX and building clean, responsive interfaces."
        },
        {
          name: "Person Two",
          role: "Backend Developer",
          bio: "Handles APIs, databases, and server-side logic."
        },
        {
          name: "Person Three",
          role: "Project Manager",
          bio: "Coordinates the team and keeps the project on track."
        },
        {
          name: "Person Four",
          role: "Designer",
          bio: "Creates visuals, branding, and layout designs."
        },
        {
          name: "Person Five",
          role: "Full Stack Developer",
          bio: "Works across frontend and backend to integrate features."
        }
      ]
    };
  }
};
</script>

<style scoped>
.about-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

/* Shared section title */
.section-title {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #111827; /* dark text for visibility */
}

/* Project Section */
.project-section {
  background: #f9fafb;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
}

.project-title {
  color: #1f2933; /* ensures heading is visible */
}

.project-description {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #444;
}

/* Team Section */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.team-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.name {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.role {
  font-weight: 600;
  color: #4f46e5;
  margin-bottom: 0.5rem;
}

.bio {
  font-size: 0.95rem;
  color: #555;
}

/* References Section */
.references-section {
  background: #f3f4f6;
  border-radius: 12px;
  padding: 2rem;
}

.references-list {
  list-style: none;
  padding: 0;
}

.references-list li {
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.references-list a {
  color: #2563eb;
  text-decoration: none;
}

.references-list a:hover {
  text-decoration: underline;
}
</style>
