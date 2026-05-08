// nav.js -- Sidebar navigation for Conductor Task Management prototype

function initNav() {
  const root = document.getElementById('nav-root');
  if (!root) return;

  const currentPage = window.CURRENT_PAGE || 'index';

  const navHtml = `
    <aside id="sidebar" class="fixed left-0 top-0 h-full w-[260px] bg-slate-900 border-r border-slate-800 flex flex-col z-50 transition-transform duration-300 lg:translate-x-0 -translate-x-full">
      <!-- Header -->
      <div class="p-5 border-b border-slate-800">
        <h1 class="text-slate-100 font-semibold text-base">${PAGE_DATA.title}</h1>
        <p class="text-slate-500 text-xs mt-0.5 font-mono">${PAGE_DATA.version}</p>
      </div>

      <!-- Nav Links -->
      <nav class="flex-1 py-3 overflow-y-auto">
        ${NAV_CONFIG.map(item => {
          const active = currentPage === item.id;
          const sectionLabel = item.section || '';
          return `
            <a href="${item.href}"
               class="flex items-center gap-3 px-5 py-2.5 text-sm transition-colors ${active
                 ? 'text-slate-100 bg-slate-800/50 border-l-2 border-orange-500'
                 : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 border-l-2 border-transparent'}">
              <span class="font-mono text-[11px] text-slate-500 ${active ? 'text-orange-500' : ''} w-12 flex-shrink-0">${sectionLabel}</span>
              <span>${item.label}</span>
            </a>
          `;
        }).join('')}
      </nav>

      <!-- External Link -->
      <div class="p-4 border-t border-slate-800">
        <a href="${PAGE_DATA.notionUrl}" target="_blank" class="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          Notion outline (source of truth)
        </a>
      </div>
    </aside>

    <!-- Mobile hamburger -->
    <button id="nav-toggle" class="lg:hidden fixed top-4 left-4 z-[60] p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-slate-100 transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>

    <!-- Mobile overlay -->
    <div id="nav-overlay" class="lg:hidden fixed inset-0 bg-black/50 z-40 hidden"></div>
  `;

  root.innerHTML = navHtml;

  // Mobile toggle
  const toggle = document.getElementById('nav-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('nav-overlay');

  if (toggle && sidebar && overlay) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
      overlay.classList.toggle('hidden');
    });
    overlay.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
      overlay.classList.add('hidden');
    });
  }
}

// Auto-init when DOM ready
document.addEventListener('DOMContentLoaded', initNav);
