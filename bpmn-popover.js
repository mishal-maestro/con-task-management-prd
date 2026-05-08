// BPMN Click Popover Module
// Click any task / gateway / event → see shape name, BPMN type, role, and 2-3 examples.
// Singleton popover: clicking another shape replaces it; click outside or Esc closes.

(function () {
  let activePopover = null;
  let activeShape = null;

  function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = String(s == null ? '' : s);
    return div.innerHTML;
  }

  function close() {
    if (activePopover) {
      activePopover.remove();
      activePopover = null;
    }
    if (activeShape) {
      activeShape.classList.remove('bpmn-shape-active');
      activeShape = null;
    }
  }

  function render(shape, info) {
    close();

    const pop = document.createElement('div');
    pop.className = 'bpmn-popover';
    pop.innerHTML = `
      <div class="bpmn-popover-header">
        <div>
          <div class="bpmn-popover-name">${escapeHtml(info.name)}</div>
          <div class="bpmn-popover-type">${escapeHtml(info.type)}</div>
        </div>
        <button class="bpmn-popover-close" aria-label="Close">&times;</button>
      </div>
      <div class="bpmn-popover-role">${escapeHtml(info.role)}</div>
      <div class="bpmn-popover-examples-label">Examples</div>
      <ul class="bpmn-popover-examples">
        ${(info.examples || []).map((e) => `<li>${escapeHtml(e)}</li>`).join('')}
      </ul>
      <div class="bpmn-popover-arrow below"></div>
    `;
    document.body.appendChild(pop);

    // Measure shape position relative to document.
    const rect = shape.getBoundingClientRect();
    const shapeLeft = rect.left + window.scrollX;
    const shapeTop = rect.top + window.scrollY;
    const shapeBottom = rect.bottom + window.scrollY;
    const shapeCenterX = shapeLeft + rect.width / 2;

    // Decide above vs below based on viewport space.
    const popHeight = pop.offsetHeight;
    const popWidth = pop.offsetWidth;
    const spaceBelowViewport = window.innerHeight - rect.bottom;
    const spaceAboveViewport = rect.top;
    const placeAbove =
      spaceBelowViewport < popHeight + 24 && spaceAboveViewport > popHeight + 24;

    let popLeft = shapeCenterX - popWidth / 2;
    let popTop;
    const arrow = pop.querySelector('.bpmn-popover-arrow');
    if (placeAbove) {
      popTop = shapeTop - popHeight - 12;
      arrow.className = 'bpmn-popover-arrow above';
    } else {
      popTop = shapeBottom + 12;
      arrow.className = 'bpmn-popover-arrow below';
    }

    // Clamp horizontally to viewport, keeping arrow pointed at the shape.
    const margin = 12;
    const minLeft = window.scrollX + margin;
    const maxLeft = window.scrollX + window.innerWidth - popWidth - margin;
    if (popLeft < minLeft) popLeft = minLeft;
    if (popLeft > maxLeft) popLeft = maxLeft;

    pop.style.left = popLeft + 'px';
    pop.style.top = popTop + 'px';

    const arrowOffset = shapeCenterX - popLeft - 8;
    arrow.style.left =
      Math.max(14, Math.min(popWidth - 24, arrowOffset)) + 'px';

    pop.querySelector('.bpmn-popover-close').addEventListener('click', (ev) => {
      ev.stopPropagation();
      close();
    });

    shape.classList.add('bpmn-shape-active');
    activePopover = pop;
    activeShape = shape;
  }

  // Delegated click — opens or replaces popover.
  document.addEventListener('click', (e) => {
    const shape = e.target.closest(
      '.task, .gateway, .event-start, .event-end, .event-intermediate'
    );

    if (shape && shape.id) {
      const info = (window.BPMN_SHAPE_INFO || {})[shape.id];
      if (info) {
        e.stopPropagation();
        render(shape, info);
        return;
      }
    }

    // Click outside any popover → close
    if (activePopover && !e.target.closest('.bpmn-popover')) {
      close();
    }
  });

  // Esc closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  // Close on scroll inside the embedded BPMN scroll container
  // (popover is anchored to the shape's current screen position).
  document.addEventListener(
    'scroll',
    (e) => {
      if (!activePopover) return;
      // Only close if the scroll happened in or above the pool-scroll container,
      // OR on the document itself. (window scroll always arrives at document.)
      if (
        e.target === document ||
        (e.target instanceof Element && e.target.closest('.pool-scroll'))
      ) {
        close();
      }
    },
    { capture: true, passive: true }
  );
})();
