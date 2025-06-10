// presentations.js - Enhanced Presentations functionality with filtering and sorting

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
        format: "oral",
        status: "completed",
        abstract: "",
        slides: "",
        video: "",
        poster: ""
    }
];

// Current filter and sort state
let currentFilters = {
    type: 'all',
    status: 'all',
    format: 'all'
};

let currentSort = {
    field: 'date',
    order: 'desc'
};

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
        internationalconference: { label: 'International Conference', color: '#8B5CF6' },
        domesticconference: { label: 'Domestic Conference', color: '#16A085' },
        seminar: { label: 'Seminar', color: '#17A2B8' },
        workshop: { label: 'Workshop', color: '#F39C12' },
        invited: { label: 'Invited Talk', color: '#6B7280' }
    };
    
    return types[type] || types.internationalconference;
}

// Get status badge
function getStatusBadge(status) {
    const statuses = {
        upcoming: { label: 'Upcoming', color: '#4A90E2', bg: 'rgba(74, 144, 226, 0.1)' },
        completed: { label: 'Completed', color: '#718096', bg: 'rgba(113, 128, 150, 0.1)' }
    };
    
    const statusInfo = statuses[status] || statuses.completed;
    
    return `<span style="
        display: inline-block;
        padding: 0.25rem 0.75rem;
        font-size: 0.75rem;
        font-weight: 600;
        color: ${statusInfo.color};
        background: ${statusInfo.bg};
        border-radius: 16px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-left: 0.75rem;
    ">${statusInfo.label}</span>`;
}

// Filter and sort presentations
function filterAndSortPresentations() {
    let filtered = [...presentationsData];
    
    // Apply filters
    if (currentFilters.type !== 'all') {
        filtered = filtered.filter(p => p.type === currentFilters.type);
    }
    
    if (currentFilters.status !== 'all') {
        filtered = filtered.filter(p => p.status === currentFilters.status);
    }
    
    if (currentFilters.format !== 'all') {
        filtered = filtered.filter(p => p.format === currentFilters.format);
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
        let aValue, bValue;
        
        switch (currentSort.field) {
            case 'date':
                aValue = new Date(a.date);
                bValue = new Date(b.date);
                break;
            case 'type':
                aValue = a.type;
                bValue = b.type;
                break;
            case 'status':
                aValue = a.status;
                bValue = b.status;
                break;
            case 'title':
                aValue = a.title.toLowerCase();
                bValue = b.title.toLowerCase();
                break;
            default:
                aValue = new Date(a.date);
                bValue = new Date(b.date);
        }
        
        if (aValue < bValue) return currentSort.order === 'asc' ? -1 : 1;
        if (aValue > bValue) return currentSort.order === 'asc' ? 1 : -1;
        return 0;
    });
    
    return filtered;
}

// Generate filter and sort controls
function generateControlsHTML() {
    return `
        <div style="
            background: white;
            border-radius: 16px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 4px 24px rgba(74, 144, 226, 0.08);
            border: 1px solid rgba(74, 144, 226, 0.06);
        ">
            <!-- Main Controls Container -->
            <div style="
                display: grid;
                grid-template-columns: auto 1fr auto;
                gap: 2rem;
                align-items: start;
            " class="controls-desktop">
                <!-- Sort Controls (Left) -->
                <div style="min-width: 200px;">
                    <label style="
                        display: block;
                        font-size: 0.8rem;
                        font-weight: 600;
                        color: #4A90E2;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        margin-bottom: 0.5rem;
                    ">Sort by</label>
                    <div style="display: flex; gap: 0.5rem;">
                        <select id="sortField" style="
                            flex: 1;
                            padding: 0.6rem 0.8rem;
                            border: 2px solid #E2E8F0;
                            border-radius: 10px;
                            background: white;
                            color: #4A5568;
                            font-size: 0.85rem;
                            font-weight: 500;
                            transition: all 0.3s ease;
                            cursor: pointer;
                        ">
                            <option value="date">Date</option>
                            <option value="type">Type</option>
                            <option value="status">Status</option>
                            <option value="title">Title</option>
                        </select>
                        <button id="sortOrder" style="
                            padding: 0.6rem;
                            border: 2px solid #4A90E2;
                            border-radius: 10px;
                            background: white;
                            color: #4A90E2;
                            cursor: pointer;
                            transition: all 0.3s ease;
                            font-weight: 500;
                            min-width: 45px;
                            font-size: 0.9rem;
                        " title="Toggle sort order">
                            ${currentSort.order === 'desc' ? '↓' : '↑'}
                        </button>
                    </div>
                </div>

                <!-- Filter Controls (Center) -->
                <div style="
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
                    gap: 1.2rem;
                ">
                    <!-- Filter by Type -->
                    <div>
                        <label style="
                            display: block;
                            font-size: 0.8rem;
                            font-weight: 600;
                            color: #4A90E2;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            margin-bottom: 0.5rem;
                        ">Type</label>
                        <select id="filterType" style="
                            width: 100%;
                            padding: 0.6rem 0.8rem;
                            border: 2px solid #E2E8F0;
                            border-radius: 10px;
                            background: white;
                            color: #4A5568;
                            font-size: 0.85rem;
                            font-weight: 500;
                            transition: all 0.3s ease;
                            cursor: pointer;
                        ">
                            <option value="all">All Types</option>
                            <option value="internationalconference">International</option>
                            <option value="domesticconference">Domestic</option>
                            <option value="seminar">Seminar</option>
                            <option value="workshop">Workshop</option>
                            <option value="invited">Invited</option>
                        </select>
                    </div>

                    <!-- Filter by Status -->
                    <div>
                        <label style="
                            display: block;
                            font-size: 0.8rem;
                            font-weight: 600;
                            color: #4A90E2;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            margin-bottom: 0.5rem;
                        ">Status</label>
                        <select id="filterStatus" style="
                            width: 100%;
                            padding: 0.6rem 0.8rem;
                            border: 2px solid #E2E8F0;
                            border-radius: 10px;
                            background: white;
                            color: #4A5568;
                            font-size: 0.85rem;
                            font-weight: 500;
                            transition: all 0.3s ease;
                            cursor: pointer;
                        ">
                            <option value="all">All Status</option>
                            <option value="upcoming">Upcoming</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

                    <!-- Filter by Format -->
                    <div>
                        <label style="
                            display: block;
                            font-size: 0.8rem;
                            font-weight: 600;
                            color: #4A90E2;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            margin-bottom: 0.5rem;
                        ">Format</label>
                        <select id="filterFormat" style="
                            width: 100%;
                            padding: 0.6rem 0.8rem;
                            border: 2px solid #E2E8F0;
                            border-radius: 10px;
                            background: white;
                            color: #4A5568;
                            font-size: 0.85rem;
                            font-weight: 500;
                            transition: all 0.3s ease;
                            cursor: pointer;
                        ">
                            <option value="all">All Formats</option>
                            <option value="oral">Oral</option>
                            <option value="poster">Poster</option>
                        </select>
                    </div>
                </div>

                <!-- Reset Button (Right) -->
                <div style="min-width: 120px;">
                    <label style="
                        display: block;
                        font-size: 0.8rem;
                        font-weight: 600;
                        color: transparent;
                        margin-bottom: 0.5rem;
                    ">Reset</label>
                    <button id="resetFilters" style="
                        width: 100%;
                        padding: 0.6rem 1rem;
                        background: linear-gradient(135deg, #4A90E2 0%, #6B73FF 100%);
                        color: white;
                        border: none;
                        border-radius: 10px;
                        font-size: 0.8rem;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    ">
                        Reset
                    </button>
                </div>
            </div>

            <!-- Mobile Layout -->
            <div style="display: none;" class="controls-mobile">
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                    margin-bottom: 1rem;
                ">
                    <!-- Sort Controls -->
                    <div>
                        <label style="
                            display: block;
                            font-size: 0.8rem;
                            font-weight: 600;
                            color: #4A90E2;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            margin-bottom: 0.5rem;
                        ">Sort</label>
                        <div style="display: flex; gap: 0.5rem;">
                            <select id="sortField-mobile" style="
                                flex: 1;
                                padding: 0.6rem 0.8rem;
                                border: 2px solid #E2E8F0;
                                border-radius: 10px;
                                background: white;
                                color: #4A5568;
                                font-size: 0.85rem;
                                font-weight: 500;
                                transition: all 0.3s ease;
                                cursor: pointer;
                            ">
                                <option value="date">Date</option>
                                <option value="type">Type</option>
                                <option value="status">Status</option>
                                <option value="title">Title</option>
                            </select>
                            <button id="sortOrder-mobile" style="
                                padding: 0.6rem;
                                border: 2px solid #4A90E2;
                                border-radius: 10px;
                                background: white;
                                color: #4A90E2;
                                cursor: pointer;
                                transition: all 0.3s ease;
                                font-weight: 500;
                                min-width: 45px;
                            " title="Toggle sort order">
                                ${currentSort.order === 'desc' ? '↓' : '↑'}
                            </button>
                        </div>
                    </div>

                    <!-- Reset Button -->
                    <div>
                        <label style="
                            display: block;
                            font-size: 0.8rem;
                            font-weight: 600;
                            color: transparent;
                            margin-bottom: 0.5rem;
                        ">Reset</label>
                        <button id="resetFilters-mobile" style="
                            width: 100%;
                            padding: 0.6rem 1rem;
                            background: linear-gradient(135deg, #4A90E2 0%, #6B73FF 100%);
                            color: white;
                            border: none;
                            border-radius: 10px;
                            font-size: 0.8rem;
                            font-weight: 600;
                            text-transform: uppercase;
                            letter-spacing: 0.5px;
                            cursor: pointer;
                            transition: all 0.3s ease;
                        ">
                            Reset
                        </button>
                    </div>
                </div>

                <!-- Filter Controls -->
                <div style="
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                    gap: 1rem;
                ">
                    <div>
                        <label style="
                            display: block;
                            font-size: 0.8rem;
                            font-weight: 600;
                            color: #4A90E2;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            margin-bottom: 0.5rem;
                        ">Type</label>
                        <select id="filterType-mobile" style="
                            width: 100%;
                            padding: 0.6rem 0.8rem;
                            border: 2px solid #E2E8F0;
                            border-radius: 10px;
                            background: white;
                            color: #4A5568;
                            font-size: 0.85rem;
                            font-weight: 500;
                            transition: all 0.3s ease;
                            cursor: pointer;
                        ">
                            <option value="all">All Types</option>
                            <option value="internationalconference">International</option>
                            <option value="domesticconference">Domestic</option>
                            <option value="seminar">Seminar</option>
                            <option value="workshop">Workshop</option>
                            <option value="invited">Invited</option>
                        </select>
                    </div>

                    <div>
                        <label style="
                            display: block;
                            font-size: 0.8rem;
                            font-weight: 600;
                            color: #4A90E2;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            margin-bottom: 0.5rem;
                        ">Status</label>
                        <select id="filterStatus-mobile" style="
                            width: 100%;
                            padding: 0.6rem 0.8rem;
                            border: 2px solid #E2E8F0;
                            border-radius: 10px;
                            background: white;
                            color: #4A5568;
                            font-size: 0.85rem;
                            font-weight: 500;
                            transition: all 0.3s ease;
                            cursor: pointer;
                        ">
                            <option value="all">All Status</option>
                            <option value="upcoming">Upcoming</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

                    <div>
                        <label style="
                            display: block;
                            font-size: 0.8rem;
                            font-weight: 600;
                            color: #4A90E2;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            margin-bottom: 0.5rem;
                        ">Format</label>
                        <select id="filterFormat-mobile" style="
                            width: 100%;
                            padding: 0.6rem 0.8rem;
                            border: 2px solid #E2E8F0;
                            border-radius: 10px;
                            background: white;
                            color: #4A5568;
                            font-size: 0.85rem;
                            font-weight: 500;
                            transition: all 0.3s ease;
                            cursor: pointer;
                        ">
                            <option value="all">All Formats</option>
                            <option value="oral">Oral</option>
                            <option value="poster">Poster</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Results Counter -->
            <div id="resultsCounter" style="
                margin-top: 1.5rem;
                padding-top: 1.5rem;
                border-top: 1px solid #E2E8F0;
                font-size: 0.9rem;
                color: #718096;
                text-align: center;
            "></div>

            <!-- Responsive CSS -->
            <style>
                @media (max-width: 768px) {
                    .controls-desktop { display: none !important; }
                    .controls-mobile { display: block !important; }
                }
                @media (min-width: 769px) {
                    .controls-desktop { display: grid !important; }
                    .controls-mobile { display: none !important; }
                }
            </style>
        </div>
    `;
}

// Generate presentations HTML
function generatePresentationsHTML() {
    const presentationsContainer = document.getElementById('presentations-list');
    if (!presentationsContainer) {
        console.warn('Presentations container not found');
        return;
    }
    
    // Generate controls
    const controlsHTML = generateControlsHTML();
    
    // Get filtered and sorted presentations
    const filteredPresentations = filterAndSortPresentations();
    
    let html = controlsHTML;
    
    // Generate presentation items
    const presentationsListHTML = filteredPresentations.map((presentation, index) => {
        try {
            const authors = formatPresentationAuthors(presentation.authors);
            const formattedDate = formatPresentationDate(presentation.date);
            const typeIcon = getPresentationTypeIcon(presentation.type);
            const typeInfo = getPresentationTypeLabel(presentation.type);
            const statusBadge = getStatusBadge(presentation.status);
            
            // Find original index for abstract modal
            const originalIndex = presentationsData.findIndex(p => 
                p.title === presentation.title && 
                p.date === presentation.date && 
                p.venue === presentation.venue
            );
            
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
                buttons.push(`<button class="pub-btn" onclick="openAbstract(${originalIndex})">Abstract</button>`);
            }
            
            const buttonsHtml = buttons.length > 0 ? buttons.join('\n                        ') : '';
            
            return `
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
                            <div class="presentation-details" style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; color: #718096; font-size: 0.85rem;">
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
            return '';
        }
    }).join('');
    
    html += `<div class="presentations-list-content">${presentationsListHTML}</div>`;
    
    presentationsContainer.innerHTML = html;
    
    // Update results counter
    updateResultsCounter(filteredPresentations.length);
    
    // Add event listeners
    addControlEventListeners();
}

// Update results counter
function updateResultsCounter(count) {
    const counter = document.getElementById('resultsCounter');
    if (counter) {
        const total = presentationsData.length;
        counter.textContent = `Showing ${count} of ${total} presentations`;
    }
}

// Add event listeners for controls
function addControlEventListeners() {
    // Helper function to add listeners to both desktop and mobile elements
    function addListenersToBoth(desktopId, mobileId, eventType, handler) {
        const desktopElement = document.getElementById(desktopId);
        const mobileElement = document.getElementById(mobileId);
        
        if (desktopElement) {
            desktopElement.addEventListener(eventType, handler);
        }
        if (mobileElement) {
            mobileElement.addEventListener(eventType, handler);
        }
    }
    
    // Helper function to set values for both desktop and mobile elements
    function setValueForBoth(desktopId, mobileId, value) {
        const desktopElement = document.getElementById(desktopId);
        const mobileElement = document.getElementById(mobileId);
        
        if (desktopElement) {
            desktopElement.value = value;
        }
        if (mobileElement) {
            mobileElement.value = value;
        }
    }
    
    // Sort field change
    setValueForBoth('sortField', 'sortField-mobile', currentSort.field);
    addListenersToBoth('sortField', 'sortField-mobile', 'change', (e) => {
        currentSort.field = e.target.value;
        generatePresentationsHTML();
    });
    
    // Sort order toggle
    addListenersToBoth('sortOrder', 'sortOrder-mobile', 'click', () => {
        currentSort.order = currentSort.order === 'desc' ? 'asc' : 'desc';
        generatePresentationsHTML();
    });
    
    // Filter type
    setValueForBoth('filterType', 'filterType-mobile', currentFilters.type);
    addListenersToBoth('filterType', 'filterType-mobile', 'change', (e) => {
        currentFilters.type = e.target.value;
        generatePresentationsHTML();
    });
    
    // Filter status
    setValueForBoth('filterStatus', 'filterStatus-mobile', currentFilters.status);
    addListenersToBoth('filterStatus', 'filterStatus-mobile', 'change', (e) => {
        currentFilters.status = e.target.value;
        generatePresentationsHTML();
    });
    
    // Filter format
    setValueForBoth('filterFormat', 'filterFormat-mobile', currentFilters.format);
    addListenersToBoth('filterFormat', 'filterFormat-mobile', 'change', (e) => {
        currentFilters.format = e.target.value;
        generatePresentationsHTML();
    });
    
    // Reset filters
    addListenersToBoth('resetFilters', 'resetFilters-mobile', 'click', () => {
        currentFilters = { type: 'all', status: 'all', format: 'all' };
        currentSort = { field: 'date', order: 'desc' };
        generatePresentationsHTML();
    });
    
    // Add hover effects for select elements
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.addEventListener('mouseenter', () => {
            select.style.borderColor = '#4A90E2';
        });
        select.addEventListener('mouseleave', () => {
            select.style.borderColor = '#E2E8F0';
        });
        select.addEventListener('focus', () => {
            select.style.borderColor = '#4A90E2';
            select.style.boxShadow = '0 0 0 3px rgba(74, 144, 226, 0.1)';
        });
        select.addEventListener('blur', () => {
            select.style.borderColor = '#E2E8F0';
            select.style.boxShadow = 'none';
        });
    });
    
    // Add hover effects for buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.id === 'sortOrder' || button.id === 'sortOrder-mobile') {
            button.addEventListener('mouseenter', () => {
                button.style.backgroundColor = '#4A90E2';
                button.style.color = 'white';
            });
            button.addEventListener('mouseleave', () => {
                button.style.backgroundColor = 'white';
                button.style.color = '#4A90E2';
            });
        } else if (button.id === 'resetFilters' || button.id === 'resetFilters-mobile') {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-2px)';
                button.style.boxShadow = '0 6px 16px rgba(74, 144, 226, 0.25)';
            });
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0)';
                button.style.boxShadow = 'none';
            });
        }
    });
}

// Open abstract modal (unchanged)
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
        border-radius: 16px;
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
                <h2 style="color: #2D3748; font-size: 1.3rem; margin: 0; line-height: 1.4;">${presentation.title}</h2>
            </div>
            <button id="closeModal" style="
                background: none;
                border: none;
                font-size: 1.5rem;
                color: #A0AEC0;
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
            " onmouseover="this.style.background='#F7FAFC'; this.style.color='#4A5568';" onmouseout="this.style.background='none'; this.style.color='#A0AEC0';">×</button>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <div style="color: #718096; font-size: 0.9rem; margin-bottom: 0.5rem;">
                ${presentation.venue} ${presentation.location ? `, ${presentation.location}` : ''}
            </div>
            <div style="color: #718096; font-size: 0.9rem;">
                ${formatPresentationDate(presentation.date)}
            </div>
        </div>
        <div style="background: #F7FAFC; border-radius: 12px; padding: 1.5rem; line-height: 1.7; color: #4A5568;">
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
        console.log('Enhanced presentations with filtering generated successfully');
    } catch (error) {
        console.error('Error initializing enhanced presentations:', error);
    }
});