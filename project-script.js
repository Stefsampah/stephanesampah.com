// Project Page Script
// This script handles the logic for project pages, including:
// - Setting up project data
// - Managing links (live site vs GitHub)
// - Updating page content dynamically

function initializeProjectPage(projectData) {
    // Update page title
    if (projectData.title) {
        document.title = `${projectData.title} | Stéphane Sampah`;
        
        // Update project title
        const titleElement = document.getElementById('project-title');
        if (titleElement) {
            titleElement.textContent = projectData.title;
        }
    }

    // Update subtitle
    if (projectData.subtitle) {
        const subtitleElement = document.getElementById('project-subtitle');
        if (subtitleElement) {
            subtitleElement.textContent = projectData.subtitle;
        }
    }

    // Update overview content
    if (projectData.overview) {
        const overviewElement = document.getElementById('project-overview-content');
        if (overviewElement) {
            overviewElement.innerHTML = projectData.overview;
        }
    }

    // Update tools
    if (projectData.tools && Array.isArray(projectData.tools)) {
        const toolsElement = document.getElementById('project-tools');
        if (toolsElement) {
            toolsElement.innerHTML = '';
            projectData.tools.forEach(tool => {
                const toolItem = document.createElement('span');
                toolItem.className = 'tool-item';
                toolItem.textContent = tool;
                toolsElement.appendChild(toolItem);
            });
        }
    }

    // Determine which URL to use for project links
    // Priority: liveUrl > githubUrl
    const projectUrl = projectData.liveUrl && projectData.liveUrl.trim() !== '' 
        ? projectData.liveUrl 
        : (projectData.githubUrl || '#');

    // Update project link in header
    const projectLinkHeader = document.getElementById('project-link');
    if (projectLinkHeader) {
        projectLinkHeader.href = projectUrl;
        // Update text based on URL type
        if (projectData.liveUrl && projectData.liveUrl.trim() !== '') {
            projectLinkHeader.setAttribute('data-translate', 'project.seeLive');
            if (typeof t === 'function') {
                projectLinkHeader.textContent = t('project.seeLive');
            } else {
                projectLinkHeader.textContent = 'See Live';
            }
        } else {
            projectLinkHeader.setAttribute('data-translate', 'project.viewOnGithub');
            if (typeof t === 'function') {
                projectLinkHeader.textContent = t('project.viewOnGithub');
            } else {
                projectLinkHeader.textContent = 'View on GitHub';
            }
        }
    }

    // Update "See Live" link
    const seeLiveLink = document.getElementById('see-live-link');
    if (seeLiveLink) {
        seeLiveLink.href = projectUrl;
        
        // Update text and styling based on URL type
        if (projectData.liveUrl && projectData.liveUrl.trim() !== '') {
            seeLiveLink.setAttribute('data-translate', 'project.seeLive');
            seeLiveLink.classList.remove('btn-secondary');
            seeLiveLink.classList.add('btn-primary');
        } else {
            seeLiveLink.setAttribute('data-translate', 'project.viewOnGithub');
            seeLiveLink.classList.remove('btn-primary');
            seeLiveLink.classList.add('btn-secondary');
        }
        
        // Apply translation if available
        if (typeof t === 'function') {
            const translateKey = projectData.liveUrl && projectData.liveUrl.trim() !== '' 
                ? 'project.seeLive' 
                : 'project.viewOnGithub';
            seeLiveLink.textContent = t(translateKey);
        }
    }

    // Update image placeholder if image URL is provided
    if (projectData.imageUrl) {
        const imagePlaceholder = document.getElementById('project-image-placeholder');
        if (imagePlaceholder) {
            imagePlaceholder.style.backgroundImage = `url(${projectData.imageUrl})`;
            imagePlaceholder.style.backgroundSize = 'cover';
            imagePlaceholder.style.backgroundPosition = 'center';
            imagePlaceholder.textContent = '';
        }
    }
}

// Auto-initialize if projectData is defined in the page
document.addEventListener('DOMContentLoaded', () => {
    // Check if projectData is defined in the page
    if (typeof projectData !== 'undefined') {
        initializeProjectPage(projectData);
    }
});

