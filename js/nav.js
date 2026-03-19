document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    const btn = document.querySelector('.mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    if (btn && sidebar) {
        btn.addEventListener('click', () => sidebar.classList.toggle('open'));
        sidebar.addEventListener('click', e => {
            if (e.target.tagName === 'A') sidebar.classList.remove('open');
        });
    }

    // Sidebar active state
    const path = location.pathname.replace(/\/$/, '').split('/').pop() || 'index';
    document.querySelectorAll('.sidebar a').forEach(a => {
        const href = a.getAttribute('href').replace(/\/$/, '').replace('.html', '').split('/').pop() || 'index';
        if (href === path || href === path.replace('.html', '')) {
            a.classList.add('active');
        }
    });

    // Header nav active state
    document.querySelectorAll('.site-header nav a').forEach(a => {
        const href = a.getAttribute('href').replace('.html', '').split('/').pop() || 'index';
        if (href === path || href === path.replace('.html', '')) {
            a.classList.add('active');
        }
    });

    // Copy-to-clipboard for code blocks
    document.querySelectorAll('pre code').forEach(block => {
        const pre = block.parentElement;
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copy';
        copyBtn.addEventListener('click', () => {
            const text = block.textContent;
            navigator.clipboard.writeText(text).then(() => {
                copyBtn.textContent = 'Copied';
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                    copyBtn.classList.remove('copied');
                }, 1500);
            });
        });
        pre.appendChild(copyBtn);
    });
});
