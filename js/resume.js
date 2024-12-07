const ONEDRIVE_EMBED_URL = 'https://1drv.ms/w/s!AlcNpYgh9AdRgdlRVFR5dKKR_DImKw?embed=1&em=2';

async function embedResume() {
    try {
        const resumeFrame = document.createElement('iframe');
        resumeFrame.src = ONEDRIVE_EMBED_URL;
        resumeFrame.style.width = '100%';
        resumeFrame.style.height = '600px';
        resumeFrame.style.border = 'none';

        const resumeSection = document.getElementById('resume');
        resumeSection.innerHTML = ''; // Clear previous content
        resumeSection.appendChild(resumeFrame);
    } catch (error) {
        console.error("Error embedding the resume:", error);
    }
}

document.addEventListener('DOMContentLoaded', embedResume);

