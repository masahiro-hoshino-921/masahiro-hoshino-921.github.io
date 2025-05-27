// presentations.js - Presentations functionality

// Presentations data
const presentationsData = [
    {
        type: "workshop",
        title: "Stabilizer Rényi Entropy and Conformal Field Theory",
        authors: "Masahiro Hoshino, Masaki Oshikawa, Yuto Ashida",
        venue: "SQAI-NCTS Workshop on Quantum Technologies and Machine Learning",
        location: "National Taiwan University, Taipei, Taiwan",
        date: "2025-8-25",
        format: "",
        status: "upcoming",
        abstract: "Along with entanglement, the nonstabilizerness (or magic) of quantum systems has been recognized as a crucial resource for achieving quantum computational advantage. The stabilizer Rényi entropy (SRE) has recently been established as a computationally tractable measure of nonstabilizerness, with numerical studies revealing universal behavior of the SRE in critical quantum spin chains. In this work, we unveil the origin of this universality through boundary conformal field theory calculations of the SRE. Our analysis demonstrates that the SRE of the entire system contains a universal constant term linked to the g-factor of  the boundary condition imposed by Bell-state measurements, while the mutual SRE exhibits universal logarithmic scaling with a coefficient determined by the scaling dimension of a boundary operator. These findings establish a field-theoretical framework for understanding the universal features of nonstabilizerness in quantum many-body systems.",
        slides: "",
        video: "",
        poster: ""
    },
    {
        type: "domesticconference",
        title: "スタビライザーエントロピーと共形場理論",
        authors: "星野真宏, 押川正毅, 蘆田祐人",
        venue: "第70回物性若手夏の学校",
        location: "滋賀",
        date: "2025-7-29",
        format: "poster",
        status: "upcoming",
        abstract: "",
        slides: "",
        video: "",
        poster: ""
    },
    {
        type: "workshop",
        title: "Stabilizer Rényi Entropy and Conformal Field Theory",
        authors: "Masahiro Hoshino, Masaki Oshikawa, Yuto Ashida",
        venue: "The 4th young researchers' workshop of the Extreme Universe Collaboration",
        location: "Aichi, Japan",
        date: "2025-6-30",
        format: "oral",
        status: "upcoming",
        abstract: "Along with entanglement, the nonstabilizerness (or magic) of quantum systems has been recognized as a crucial resource for achieving quantum computational advantage. The stabilizer Rényi entropy (SRE) has recently been established as a computationally tractable measure of nonstabilizerness, with numerical studies revealing universal behavior of the SRE in critical quantum spin chains. In this work, we unveil the origin of this universality through boundary conformal field theory calculations of the SRE. Our analysis demonstrates that the SRE of the entire system contains a universal constant term linked to the g-factor of  the boundary condition imposed by Bell-state measurements, while the mutual SRE exhibits universal logarithmic scaling with a coefficient determined by the scaling dimension of a boundary operator. These findings establish a field-theoretical framework for understanding the universal features of nonstabilizerness in quantum many-body systems.",
        slides: "",
        video: "",
        poster: ""
    },
    {
        type: "seminar",
        title: "Quantum resources in critical quantum spin chains",
        authors: "Masahiro Hoshino, Masaki Oshikawa, Yuto Ashida",
        venue: "Elementary Particle Theory group seminar",
        location: "Kyushu university, Japan",
        date: "2025-5-22",
        format: "oral",
        status: "completed",
        abstract: "",
        slides: "",
        video: "",
        poster: ""
    },
    {
        type: "seminar",
        title: "Quantum resources in critical quantum spin chains",
        authors: "Masahiro Hoshino, Masaki Oshikawa, Yuto Ashida",
        venue: "Watanabe group seminar",
        location: "Tokyo, Japan",
        date: "2025-5-12",
        format: "oral",
        status: "completed",
        abstract: "",
        slides: "",
        video: "",
        poster: ""
    },
    {
        type: "internationalconference",
        title: "Entanglement swapping in critical quantum spin chains",
        authors: "Masahiro Hoshino, Masaki Oshikawa, Yuto Ashida",
        venue: "APS Global Physics Summit",
        location: "Anaheim, USA",
        date: "2025-3-20",
        format: "oral",
        status: "completed",
        abstract: "",
        slides: "",
        video: "",
        poster: ""
    },
    {
        type: "internationalconference",
        title: "Entanglement swapping in critical quantum spin chains",
        authors: "Masahiro Hoshino, Masaki Oshikawa, Yuto Ashida",
        venue: "FoPM International Symposium",
        location: "Tokyo, Japan",
        date: "2025-2-18",
        format: "poster",
        status: "completed",
        abstract: "",
        slides: "",
        video: "",
        poster: ""
    },
    {
        type: "seminar",
        title: "Entanglement swapping in critical quantum spin chains",
        authors: "Masahiro Hoshino, Masaki Oshikawa, Yuto Ashida",
        venue: "Fundamental physics seminar",
        location: "Tokyo, Japan",
        date: "2024-12-16",
        format: "oral",
        status: "completed",
        abstract: "",
        slides: "",
        video: "",
        poster: ""
    },
    {
        type: "seminar",
        title: "Entanglement swapping in critical quantum spin chains",
        authors: "Masahiro Hoshino, Masaki Oshikawa, Yuto Ashida",
        venue: "Ito group seminar",
        location: "Tokyo, Japan",
        date: "2024-9-26",
        format: "oral",
        status: "completed",
        abstract: "",
        slides: "",
        video: "",
        poster: ""
    },
    {
        type: "domesticconference",
        title: "量子スピン鎖におけるエンタングルメントスワッピング",
        authors: "星野真宏, 押川正毅, 蘆田祐人",
        venue: "日本物理学会第79回年次大会",
        location: "北海道",
        date: "2024-9-16",
        format: "oral",
        status: "completed",
        abstract: "",
        slides: "",
        video: "",
        poster: ""
    },
    {
        type: "workshop",
        title: "Entanglement swapping in critical quantum spin chains",
        authors: "Masahiro Hoshino, Masaki Oshikawa, Yuto Ashida",
        venue: "The 3rd yound researchers' workshop of the Extreme Universe Collaboration",
        location: "Otaru, Japan",
        date: "2024-9-12",
        format: "poster",
        status: "completed",
        abstract: "",
        slides: "",
        video: "",
        poster: ""
    },
    {
        type: "domesticconference",
        title: "量子スピン鎖におけるエンタングルメントスワッピング",
        authors: "星野真宏, 押川正毅, 蘆田祐人",
        venue: "第69回物性若手夏の学校",
        location: "愛知",
        date: "2024-8-2",
        format: "poster",
        status: "completed",
        abstract: "",
        slides: "",
        video: "",
        poster: ""
    },
    {
        type: "domesticconference",
        title: "量子スピン鎖におけるエンタングルメントスワッピング",
        authors: "星野真宏, 押川正毅, 蘆田祐人",
        venue: "第69回物性若手夏の学校",
        location: "愛知",
        date: "2024-8-2",
        format: "oral",
        status: "completed",
        abstract: "",
        slides: "",
        video: "",
        poster: ""
    },
    {
        type: "domesticconference",
        title: "Population dynamicsにおける速度制限",
        authors: "星野真宏, 吉村耕平, 山岸純平, 伊藤創祐, 永山龍那",
        venue: "日本物理学会 第77回年次大会",
        location: "オンライン",
        date: "2022-3-17",
        format: "oral", // oral, poster
        status: "completed", // upcoming, completed
        abstract: "",
        slides: "", // URL to slides if available
        video: "", // URL to video if available
        poster: "" // URL to poster if available
    }
];

// Format author names for display (same as publications)
function formatPresentationAuthors(authorString) {
    if (!authorString) return '';
    
    try {
        // Split authors by comma or "and"
        const authors = authorString.split(/,| and /).map(author => author.trim());
        
        // Make "Masahiro Hoshino" bold
        return authors.map(author => {
            if (author.includes('Masahiro Hoshino')) {
                return author.replace('Masahiro Hoshino', '<strong>Masahiro Hoshino</strong>');
            }
            if (author.includes('星野真宏')) {
                return author.replace('星野真宏', '<strong>星野真宏</strong>');
            }
            return author;
        }).join(', ');
    } catch (error) {
        console.warn('Error formatting authors:', error);
        return authorString || '';
    }
}

// Format date for display
function formatPresentationDate(dateString) {
    if (!dateString) return '';
    
    try {
        const date = new Date(dateString);
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return date.toLocaleDateString('en-US', options);
    } catch (error) {
        console.warn('Error formatting date:', error);
        return dateString;
    }
}

// Get presentation type icon
function getPresentationTypeIcon(type) {
    const icons = {
        internationalconference: `<svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V14h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-1.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
            <circle cx="13" cy="3" r="2" fill="currentColor" opacity="0.7"/>
        </svg>`,
        domesticconference: `<svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V14h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-1.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
            <path d="M12 2h3v1h-3z" opacity="0.7"/>
            <path d="M12 4h3v1h-3z" opacity="0.7"/>
            <path d="M12 6h2v1h-2z" opacity="0.7"/>
        </svg>`,
        seminar: `<svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
        </svg>`,
        poster: `<svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
            <path d="M4.5 4h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zM4.5 6h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zM4.5 8h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zM4.5 10h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z"/>
        </svg>`,
        workshop: `<svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002A.274.274 0 0 1 15 13H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
        </svg>`,
        invited: `<svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 7.5 8zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
        </svg>`
    };
    
    return icons[type] || icons.internationalconference;
}

// Get presentation type label with color
function getPresentationTypeLabel(type) {
    const types = {
        internationalconference: { label: 'International Conference', color: '#E9545D' },
        domesticconference: { label: 'Domestic Conference', color: '#D63384' },
        seminar: { label: 'Seminar', color: '#17a2b8' },
        poster: { label: 'Poster', color: '#28a745' },
        workshop: { label: 'Workshop', color: '#ffc107' },
        invited: { label: 'Invited Talk', color: '#6f42c1' }
    };
    
    return types[type] || types.internationalconference;
}

// Get status badge
function getStatusBadge(status) {
    const statuses = {
        upcoming: { label: 'Upcoming', color: '#17a2b8', bg: 'rgba(23, 162, 184, 0.1)' },
        completed: { label: 'Completed', color: '#28a745', bg: 'rgba(40, 167, 69, 0.1)' }
    };
    
    const statusInfo = statuses[status] || statuses.completed;
    
    return `<span style="
        display: inline-block;
        padding: 0.2rem 0.5rem;
        font-size: 0.7rem;
        font-weight: 600;
        color: ${statusInfo.color};
        background: ${statusInfo.bg};
        border-radius: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-left: 0.5rem;
    ">${statusInfo.label}</span>`;
}

// Generate presentations HTML
function generatePresentationsHTML() {
    const presentationsContainer = document.getElementById('presentations-list');
    if (!presentationsContainer) {
        console.warn('Presentations container not found');
        return;
    }
    
    let html = '';
    
    // Sort presentations by date (newest first)
    const sortedPresentations = [...presentationsData].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    
    sortedPresentations.forEach((presentation, index) => {
        try {
            const authors = formatPresentationAuthors(presentation.authors);
            const formattedDate = formatPresentationDate(presentation.date);
            const typeIcon = getPresentationTypeIcon(presentation.type);
            const typeInfo = getPresentationTypeLabel(presentation.type);
            const statusBadge = getStatusBadge(presentation.status);
            
            // Generate buttons based on available materials
            let buttons = [];
            
            if (presentation.slides && presentation.slides !== '#') {
                buttons.push(`<a href="${presentation.slides}" class="pub-btn" target="_blank" rel="noopener">Slides</a>`);
            } else if (presentation.slides === '#') {
                buttons.push(`<a href="#" class="pub-btn" target="_blank" rel="noopener">Slides</a>`);
            }
            
            if (presentation.poster && presentation.poster !== '#') {
                buttons.push(`<a href="${presentation.poster}" class="pub-btn" target="_blank" rel="noopener">Poster</a>`);
            } else if (presentation.poster === '#') {
                buttons.push(`<a href="#" class="pub-btn" target="_blank" rel="noopener">Poster</a>`);
            }
            
            if (presentation.video && presentation.video !== '#') {
                buttons.push(`<a href="${presentation.video}" class="pub-btn video-btn" target="_blank" rel="noopener">Video</a>`);
            }
            
            if (presentation.abstract) {
                buttons.push(`<button class="pub-btn" onclick="openAbstract(${index})">Abstract</button>`);
            }
            
            const buttonsHtml = buttons.length > 0 ? buttons.join('\n                        ') : '';
            
            html += `
                <div class="publication-item presentation-item">
                    <div class="publication-icon" style="color: ${typeInfo.color};">
                        ${typeIcon}
                    </div>
                    <div class="publication-content">
                        <div class="publication-main">
                            <div class="presentation-header" style="display: flex; align-items: center; margin-bottom: 0.3rem;">
                                <span class="presentation-type" style="color: ${typeInfo.color}; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.5px;">
                                    ${typeInfo.label}
                                </span>
                                ${statusBadge}
                            </div>
                            <div class="publication-title" style="margin: 0 0 0.3rem 0; line-height: 1.3;">${presentation.title}</div>
                            <div class="publication-authors" style="margin-bottom: 0.2rem; font-size: 0.9rem;">${authors}</div>
                            <div class="presentation-details" style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; color: #666; font-size: 0.85rem;">
                                <span>${presentation.venue}${presentation.location ? `, ${presentation.location}` : ''}</span>
                                <span>•</span>
                                <span>${formattedDate}</span>
                                ${presentation.format ? `<span>•</span><span>${presentation.format.charAt(0).toUpperCase() + presentation.format.slice(1)}</span>` : ''}
                            </div>
                        </div>
                        ${buttonsHtml ? `<div class="publication-buttons" style="margin-top: 0.8rem;">${buttonsHtml}</div>` : ''}
                    </div>
                </div>
            `;
        } catch (error) {
            console.warn('Error processing presentation:', error);
        }
    });
    
    presentationsContainer.innerHTML = html;
}

// Open abstract modal
function openAbstract(index) {
    const presentation = presentationsData[index];
    
    // Create modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(3px);
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        border-radius: 12px;
        padding: 2rem;
        max-width: 700px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        position: relative;
    `;
    
    const typeInfo = getPresentationTypeLabel(presentation.type);
    
    modalContent.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem;">
            <div>
                <div style="color: ${typeInfo.color}; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.5rem;">
                    ${typeInfo.label} Abstract
                </div>
                <h2 style="color: #333; font-size: 1.3rem; margin: 0; line-height: 1.4;">${presentation.title}</h2>
            </div>
            <button id="closeModal" style="
                background: none;
                border: none;
                font-size: 1.5rem;
                color: #999;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                flex-shrink: 0;
                margin-left: 1rem;
            " onmouseover="this.style.background='#f5f5f5'" onmouseout="this.style.background='none'">×</button>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <div style="color: #666; font-size: 0.9rem; margin-bottom: 0.5rem;">
                ${presentation.venue} ${presentation.location ? `, ${presentation.location}` : ''}
            </div>
            <div style="color: #666; font-size: 0.9rem;">
                ${formatPresentationDate(presentation.date)}
            </div>
        </div>
        <div style="background: #f8f9fa; border-radius: 8px; padding: 1.5rem; line-height: 1.6; color: #333;">
            ${presentation.abstract}
        </div>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Add event listeners
    const closeModal = () => {
        modal.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
        }, 300);
    };
    
    // Close modal events
    document.getElementById('closeModal').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Animate modal in
    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.9)';
    setTimeout(() => {
        modal.style.transition = 'all 0.3s ease';
        modal.style.opacity = '1';
        modal.style.transform = 'scale(1)';
    }, 10);
}

// Initialize presentations when this script loads
document.addEventListener('DOMContentLoaded', function() {
    // Generate presentations immediately
    try {
        generatePresentationsHTML();
        console.log('Presentations generated successfully');
    } catch (error) {
        console.error('Error initializing presentations:', error);
    }
});