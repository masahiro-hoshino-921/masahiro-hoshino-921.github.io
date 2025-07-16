// publications.js - Publications functionality (BibTeX-based)

// Publications data in BibTeX format
const publicationsDataBibTeX = [
    `@misc{hoshino2025stabilizer,
    title = {Stabilizer R{\\'e}nyi Entropy Encodes Fusion Rules of Topological Defects and Boundaries},
    author = {Hoshino, Masahiro and Ashida, Yuto},
    year = {2025},
    number = {arXiv:2507.10656},
    eprint = {2507.10656},
    primaryclass = {quant-ph},
    publisher = {arXiv},
    doi = {10.48550/arXiv.2507.10656},
    archiveprefix = {arXiv},
    pdf = {https://arxiv.org/pdf/2507.10656}
}`,
    `@misc{hoshino2025stabilizer,
    title = {Stabilizer R{\\'e}nyi Entropy and Conformal Field Theory},
    author = {Hoshino, Masahiro and Oshikawa, Masaki and Ashida, Yuto},
    year = {2025},
    number = {arXiv:2503.13599},
    eprint = {2503.13599},
    primaryclass = {quant-ph},
    publisher = {arXiv},
    doi = {10.48550/arXiv.2503.13599},
    archiveprefix = {arXiv},
    pdf = {https://arxiv.org/pdf/2503.13599.pdf}
}`,
    `@article{hoshino2025entanglement,
    title = {Entanglement swapping in critical quantum spin chains},
    author = {Hoshino, Masahiro and Oshikawa, Masaki and Ashida, Yuto},
    year = {2025},
    journal = {Physical Review B},
    volume = {111},
    number = {15},
    pages = {155143},
    publisher = {American Physical Society},
    doi = {10.1103/PhysRevB.111.155143},
    pdf = {https://journals.aps.org/prb/pdf/10.1103/PhysRevB.111.155143}
}`,
    `@article{hoshino2023geometric,
    title={Geometric speed limit for acceleration by natural selection in evolutionary processes},
    author={Hoshino, Masahiro and Nagayama, Ryuna and Yoshimura, Kohei and Yamagishi, Jumpei F and Ito, Sosuke},
    journal={Physical Review Research},
    volume={5},
    number={2},
    pages={023127},
    year={2023},
    publisher={APS},
    doi = {10.1103/PhysRevResearch.5.023127}
    pdf = {https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.5.023127}
}`
];

// LaTeX to Unicode conversion
function convertLatexToUnicode(text) {
    if (!text) return text;
    
    // LaTeX accent commands mapping
    const latexToUnicode = {
        // Acute accents
        "{\\'a}": "á", "{\\'A}": "Á",
        "{\\'e}": "é", "{\\'E}": "É", 
        "{\\'i}": "í", "{\\'I}": "Í",
        "{\\'o}": "ó", "{\\'O}": "Ó",
        "{\\'u}": "ú", "{\\'U}": "Ú",
        "{\\'y}": "ý", "{\\'Y}": "Ý",
        "{\\'c}": "ć", "{\\'C}": "Ć",
        "{\\'n}": "ń", "{\\'N}": "Ń",
        "{\\'s}": "ś", "{\\'S}": "Ś",
        "{\\'z}": "ź", "{\\'Z}": "Ź",
        
        // Grave accents
        "{\\`a}": "à", "{\\`A}": "À",
        "{\\`e}": "è", "{\\`E}": "È",
        "{\\`i}": "ì", "{\\`I}": "Ì", 
        "{\\`o}": "ò", "{\\`O}": "Ò",
        "{\\`u}": "ù", "{\\`U}": "Ù",
        
        // Circumflex accents
        "{\\^a}": "â", "{\\^A}": "Â",
        "{\\^e}": "ê", "{\\^E}": "Ê",
        "{\\^i}": "î", "{\\^I}": "Î",
        "{\\^o}": "ô", "{\\^O}": "Ô", 
        "{\\^u}": "û", "{\\^U}": "Û",
        
        // Diaeresis/umlaut
        '{\\"a}': "ä", '{\\"A}': "Ä",
        '{\\"e}': "ë", '{\\"E}': "Ë",
        '{\\"i}': "ï", '{\\"I}': "Ï",
        '{\\"o}': "ö", '{\\"O}': "Ö",
        '{\\"u}': "ü", '{\\"U}': "Ü",
        '{\\"y}': "ÿ", '{\\"Y}': "Ÿ",
        
        // Tilde
        "{\\~a}": "ã", "{\\~A}": "Ã",
        "{\\~n}": "ñ", "{\\~N}": "Ñ",
        "{\\~o}": "õ", "{\\~O}": "Õ",
        
        // Cedilla
        "{\\c{c}}": "ç", "{\\c{C}}": "Ç",
        
        // Other special characters
        "{\\aa}": "å", "{\\AA}": "Å",
        "{\\ae}": "æ", "{\\AE}": "Æ",
        "{\\o}": "ø", "{\\O}": "Ø",
        "{\\ss}": "ß",
        "{\\l}": "ł", "{\\L}": "Ł",
        
        // Alternative formats (without outer braces)
        "\\'a": "á", "\\'A": "Á",
        "\\'e": "é", "\\'E": "É",
        "\\'i": "í", "\\'I": "Í", 
        "\\'o": "ó", "\\'O": "Ó",
        "\\'u": "ú", "\\'U": "Ú",
        "\\`a": "à", "\\`A": "À",
        "\\`e": "è", "\\`E": "È",
        "\\`i": "ì", "\\`I": "Ì",
        "\\`o": "ò", "\\`O": "Ò",
        "\\`u": "ù", "\\`U": "Ù",
        "\\^a": "â", "\\^A": "Â",
        "\\^e": "ê", "\\^E": "Ê",
        "\\^i": "î", "\\^I": "Î",
        "\\^o": "ô", "\\^O": "Ô",
        "\\^u": "û", "\\^U": "Û",
        '\\"a': "ä", '\\"A': "Ä",
        '\\"e': "ë", '\\"E': "Ë",
        '\\"i': "ï", '\\"I': "Ï",
        '\\"o': "ö", '\\"O': "Ö",
        '\\"u': "ü", '\\"U': "Ü",
        "\\~a": "ã", "\\~A": "Ã",
        "\\~n": "ñ", "\\~N": "Ñ",
        "\\~o": "õ", "\\~O": "Õ",
        "\\c{c}": "ç", "\\c{C}": "Ç",
        "\\aa": "å", "\\AA": "Å",
        "\\ae": "æ", "\\AE": "Æ",
        "\\o": "ø", "\\O": "Ø",
        "\\ss": "ß",
        "\\l": "ł", "\\L": "Ł"
    };
    
    let result = text;
    
    // Sort by length (longest first) to avoid partial matches
    const sortedKeys = Object.keys(latexToUnicode).sort((a, b) => b.length - a.length);
    
    for (const latexCmd of sortedKeys) {
        const regex = new RegExp(latexCmd.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        result = result.replace(regex, latexToUnicode[latexCmd]);
    }
    
    return result;
}

// BibTeX parser
function parseBibTeX(bibtexString) {
    const entry = {};
    
    try {
        // Extract entry type and key
        const typeMatch = bibtexString.match(/@(\w+)\{([^,]+),/);
        if (typeMatch) {
            entry.type = typeMatch[1];
            entry.key = typeMatch[2];
        }
        
        // Extract fields - improved regex to handle nested braces better
        const fieldRegex = /(\w+)\s*=\s*\{([^{}]*(?:\{[^}]*\}[^{}]*)*)\}/g;
        let match;
        
        while ((match = fieldRegex.exec(bibtexString)) !== null) {
            const fieldName = match[1].toLowerCase();
            let fieldValue = match[2].trim();
            
            // Clean up field value
            fieldValue = fieldValue.replace(/\s+/g, ' ').trim();
            
            // Convert LaTeX strings to Unicode
            fieldValue = convertLatexToUnicode(fieldValue);
            
            entry[fieldName] = fieldValue;
        }
    } catch (error) {
        console.warn('Error parsing BibTeX entry:', error);
    }
    
    return entry;
}

// Format author names for display
function formatAuthors(authorString) {
    if (!authorString) return '';
    
    try {
        // Split authors by "and"
        const authors = authorString.split(' and ').map(author => {
            // Handle "Last, First" format
            if (author.includes(',')) {
                const parts = author.split(',').map(p => p.trim());
                return `${parts[1]} ${parts[0]}`;
            }
            return author.trim();
        });
        
        // Make "Masahiro Hoshino" bold
        return authors.map(author => {
            if (author.includes('Masahiro Hoshino')) {
                return author.replace('Masahiro Hoshino', '<strong>Masahiro Hoshino</strong>');
            }
            return author;
        }).join(', ');
    } catch (error) {
        console.warn('Error formatting authors:', error);
        return authorString || '';
    }
}

// Format journal/publication information
function formatJournal(entry) {
    let journal = '';
    let details = [];
    
    try {
        // Handle different entry types
        if (entry.type === 'misc' && (entry.eprint || entry.archiveprefix === 'arXiv' || entry.publisher === 'arXiv')) {
            // This is an arXiv preprint
            if (entry.number && entry.number.includes('arXiv:')) {
                journal = entry.number; // e.g., "arXiv:2503.13599"
            } else if (entry.eprint) {
                journal = `arXiv:${entry.eprint}`; // e.g., "arXiv:2503.13599"
            } else {
                journal = 'arXiv preprint';
            }
            
            // Add primary class if available
            if (entry.primaryclass) {
                details.push(`[${entry.primaryclass}]`);
            }
            
            // Add year
            if (entry.year) {
                details.push(`(${entry.year})`);
            }
            
            if (details.length > 0) {
                journal += ` ${details.join(' ')}`;
            }
            
        } else if (entry.type === 'misc') {
            // Other misc entries
            if (entry.publisher) {
                journal = entry.publisher;
            } else if (entry.howpublished) {
                journal = entry.howpublished;
            } else {
                journal = 'Miscellaneous';
            }
            
            if (entry.year) {
                journal += ` (${entry.year})`;
            }
            
        } else {
            // Regular journal articles
            journal = entry.journal || '';
            
            if (entry.volume) details.push(`<strong>${entry.volume}</strong>`);
            if (entry.number) details.push(`(${entry.number})`);  // Changed from 'issue' to 'number'
            if (entry.pages) details.push(entry.pages);
            
            if (details.length > 0) {
                journal += ` ${details.join(', ')}`;
            }
            
            if (entry.year) {
                journal += ` (${entry.year})`;
            }
            
            if (entry.note) {
                journal += `. ${entry.note}`;
            }
        }
    } catch (error) {
        console.warn('Error formatting journal:', error);
        journal = entry.journal || 'Unknown Journal';
        if (entry.year) {
            journal += ` (${entry.year})`;
        }
    }
    
    return journal;
}

// Generate publication HTML
function generatePublicationsHTML() {
    const publicationsContainer = document.getElementById('publications-list');
    if (!publicationsContainer) {
        console.warn('Publications container not found');
        return;
    }
    
    let html = '';
    
    publicationsDataBibTeX.forEach((bibtexString, index) => {
        try {
            const entry = parseBibTeX(bibtexString);
            const authors = formatAuthors(entry.author);
            const journal = formatJournal(entry);
            
            // Generate buttons based on entry type and available fields
            let buttons = [];
            
            // PDF button
            if (entry.pdf && entry.pdf !== '#') {
                buttons.push(`<a href="${entry.pdf}" class="pub-btn" target="_blank" rel="noopener">PDF</a>`);
            } else {
                buttons.push(`<a href="#" class="pub-btn" target="_blank" rel="noopener">PDF</a>`);
            }
            
            // Cite button (always available)
            buttons.push(`<button class="pub-btn" onclick="openCitation(${index})">Cite</button>`);
            
            // DOI button
            if (entry.doi) {
                buttons.push(`<a href="https://doi.org/${entry.doi}" class="pub-btn" target="_blank" rel="noopener">DOI</a>`);
            }
            
            // URL button (if available and not already covered by arXiv)
            if (entry.url && !(entry.type === 'misc' && entry.eprint)) {
                buttons.push(`<a href="${entry.url}" class="pub-btn video-btn" target="_blank" rel="noopener">URL</a>`);
            }
            
            const buttonsHtml = buttons.join('\n                        ');
            
            html += `
                <div class="publication-item">
                    <div class="publication-icon">
                        <svg viewBox="0 0 16 16" fill="currentColor">
                            <path d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
                            <path d="M4.5 4h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zM4.5 6h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zM4.5 8h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zM4.5 10h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z"/>
                        </svg>
                    </div>
                    <div class="publication-content">
                        <div class="publication-main">
                            <div class="publication-authors">${authors}</div>
                            <div class="publication-title">${entry.title || ''}</div>
                            <div class="publication-journal">${journal}</div>
                        </div>
                        <div class="publication-buttons">
                            ${buttonsHtml}
                        </div>
                    </div>
                </div>
            `;
        } catch (error) {
            console.warn('Error processing publication:', error);
        }
    });
    
    publicationsContainer.innerHTML = html;
}

// Citation function - shows original BibTeX
function openCitation(index) {
    const bibtex = publicationsDataBibTeX[index];
    
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
    
    modalContent.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <h2 style="color: #333; font-size: 1.5rem; margin: 0;">Cite</h2>
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
            " onmouseover="this.style.background='#f5f5f5'" onmouseout="this.style.background='none'">×</button>
        </div>
        <div style="background: #f8f9fa; border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem; font-family: 'Courier New', monospace; font-size: 0.85rem; line-height: 1.4; overflow-x: auto;">
            <pre id="bibtexContent" style="margin: 0; white-space: pre-wrap;">${bibtex}</pre>
        </div>
        <div style="display: flex; gap: 1rem; justify-content: flex-end;">
            <button id="copyBtn" style="
                background: #E9545D;
                color: white;
                border: none;
                padding: 0.75rem 1.5rem;
                border-radius: 25px;
                cursor: pointer;
                font-size: 0.9rem;
                font-weight: 500;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            ">
                📋 Copy
            </button>
            <button id="downloadBtn" style="
                background: #17a2b8;
                color: white;
                border: none;
                padding: 0.75rem 1.5rem;
                border-radius: 25px;
                cursor: pointer;
                font-size: 0.9rem;
                font-weight: 500;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            ">
                ⬇️ Download
            </button>
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
    
    // Copy button
    document.getElementById('copyBtn').addEventListener('click', () => {
        navigator.clipboard.writeText(bibtex).then(() => {
            const message = (typeof currentLanguage !== 'undefined' && currentLanguage === 'ja') 
                ? 'BibTeX引用がクリップボードにコピーされました！' 
                : 'BibTeX citation copied to clipboard!';
            showNotification(message);
            closeModal();
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = bibtex;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showNotification('BibTeX citation copied!');
            closeModal();
        });
    });
    
    // Download button
    document.getElementById('downloadBtn').addEventListener('click', () => {
        const entry = parseBibTeX(bibtex);
        const blob = new Blob([bibtex], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${entry.key || 'citation'}.bib`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        closeModal();
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

// Notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #E9545D;
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        box-shadow: 0 4px 20px rgba(233, 84, 93, 0.3);
        z-index: 1000;
        font-size: 14px;
        font-weight: 500;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Initialize publications when this script loads
document.addEventListener('DOMContentLoaded', function() {
    // Generate publications immediately
    try {
        generatePublicationsHTML();
        console.log('Publications generated successfully');
    } catch (error) {
        console.error('Error initializing publications:', error);
    }
});