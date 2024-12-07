const GITHUB_USERNAME = 'OfficialEseosa';

async function fetchGitHubProjects() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
        const repos = await response.json();

        const projectsContainer = document.getElementById('github-projects');
        repos.forEach(repo => {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'project';
            projectDiv.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description available.'}</p>
                <p>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;
            projectsContainer.appendChild(projectDiv);
        });
    } catch (error) {
        console.error("Error fetching GitHub projects:", error);
    }
}

fetchGitHubProjects();
