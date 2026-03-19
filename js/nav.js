document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    if (btn && sidebar) {
        btn.addEventListener('click', () => sidebar.classList.toggle('open'));
        sidebar.addEventListener('click', e => {
            if (e.target.tagName === 'A') sidebar.classList.remove('open');
        });
    }

    const path = location.pathname.replace(/\/$/, '').split('/').pop() || 'index';
    document.querySelectorAll('.sidebar a').forEach(a => {
        const href = a.getAttribute('href').replace(/\/$/, '').replace('.html', '').split('/').pop() || 'index';
        if (href === path || href === path.replace('.html', '')) {
            a.classList.add('active');
        }
    });

    document.querySelectorAll('.site-header nav a').forEach(a => {
        const href = a.getAttribute('href').replace('.html', '').split('/').pop() || 'index';
        if (href === path || href === path.replace('.html', '')) {
            a.classList.add('active');
        }
    });
});
