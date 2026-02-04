<template>
  <!-- Page Header -->
  <h1 class="title">About Our Team</h1>

  <!-- Project Description Section -->
  <section class="project-section">
    <h2 class="section-title">About the Project</h2>
    <p class="project-description">
      TOOK THE ABSTRACT FROM OUR LAST PA. WILL DEFINETLY NEED WORK
      Our webpage ClubHub will be a tool that can help and assist club officers on 
      campus with organizational duties and management by addressing the lack of 
      an effective, centralized webpage for officers and leaders of on campus clubs 
      and organizations, aiming to provide success through efficient leadership. 
      We intend to satisfy these needs by designing an accessible UI and frontend, 
      streamlined functions and information storage for essential club information 
      such as finances, supplemental forms, contacts, and events, and the continued 
      improvement of a backend API to allow for seamless communication between the 
      database and frontend. This document will go more over about the project, its 
      significance, changes, and impacts, along with how responsibilities and 
      risks are monitored and managed throughout the team. 
    </p>
  </section>

  <!-- Team Section -->
  <h2 class="section-title dark-section-title">Meet the Team</h2>

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
    </ul>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      teamMembers: [
        {
          name: "Arwen Antes",
          role: "ddf",
          bio: "xyz"
        },
        {
          name: "Aween Ali",
          role: "ffd",
          bio: "123"
        },
        {
          name: "Daxton Johnson",
          role: "ssa",
          bio: "abc"
        },
        {
          name: "Dominic Palmieri",
          role: "Backend/Public Build Developer",
          bio: "Ensures backend operations and public build processes."
        },
        {
          name: "Bill Doherty",
          role: "External Advisor",
          bio: "ILL LEAVE THIS UP TO YOU GUYS BC IVE NEVER MET HIM"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Page background */
.about-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  text-align: center;
  background: #1f1f1f;
  color: #f9fafb;
  border-radius: 12px;
}

/* Main title */
.title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
}

/* Section titles (default for light sections) */
.section-title {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #111827;
}

/* Section title on dark background */
.dark-section-title {
  color: #f9fafb;
}

/* Project Section */
.project-section {
  background: #ffffff;
  border-radius: 14px;
  padding: 2rem;
  margin-bottom: 3rem;
}

.project-description {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #374151;
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
  border-radius: 14px;
  padding: 1.5rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.name {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: #111827;
}

.role {
  font-weight: 600;
  color: #4f46e5;
  margin-bottom: 0.5rem;
}

.bio {
  font-size: 0.95rem;
  color: #374151;
}

/* References Section */
.references-section {
  background: #ffffff;
  border-radius: 14px;
  padding: 2rem;
}

.references-list {
  list-style: none;
  padding: 0;
}

.references-list li {
  margin: 0.5rem 0;
  font-size: 0.95rem;
  color: #111827;
}

.references-list a {
  color: #2563eb;
  text-decoration: none;
}

.references-list a:hover {
  text-decoration: underline;
}
</style>
