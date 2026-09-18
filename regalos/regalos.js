// Listas para marcar con puntaje y botón de imprimir/guardar PDF
(() => {
  document.querySelectorAll('[data-checklist]').forEach(list => {
    const boxes = [...list.querySelectorAll('input[type="checkbox"]')];
    const out = document.getElementById(list.dataset.checklist);
    const msg = document.getElementById(list.dataset.checklist + '-msg');
    const levels = JSON.parse(list.dataset.levels || '[]');
    const update = () => {
      const n = boxes.filter(b => b.checked).length;
      if (out) out.textContent = n + '/' + boxes.length;
      if (msg && levels.length) {
        const lvl = levels.find(l => n >= l.min);
        if (lvl) msg.textContent = lvl.text;
      }
    };
    boxes.forEach(b => b.addEventListener('change', update));
    update();
  });
  document.querySelectorAll('[data-print]').forEach(b => b.addEventListener('click', () => window.print()));
})();
