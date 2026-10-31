(function () {
  // Mobile menu: a real button, keyboard accessible. Without JavaScript the nav simply stays visible.
  var btn = document.getElementById('lab-nav-btn'), nav = document.getElementById('lab-nav');
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (btn && nav) {
    btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { setMenu(false); btn.focus(); }
    });
    window.addEventListener('resize', function () { if (window.innerWidth > 820) setMenu(false); });
  }

  // Photo viewer on the Gallery page: tiles open a full-size view. Esc closes, arrow keys move.
  var lb = document.getElementById('lab-lightbox');
  if (!lb) return;
  var lbImg = document.getElementById('lab-lb-img');
  var tiles = [].slice.call(document.querySelectorAll('a[data-zoom]')), cur = 0;
  function showTile(i) {
    cur = (i + tiles.length) % tiles.length;
    var im = tiles[cur].querySelector('img');
    lbImg.src = tiles[cur].getAttribute('data-full') || im.src;
    lbImg.alt = im.alt;
  }
  document.addEventListener('click', function (e) {
    var z = e.target.closest('a[data-zoom]');
    if (z) { e.preventDefault(); showTile(tiles.indexOf(z)); lb.showModal(); return; }
    var b = e.target.closest('[data-lb]');
    if (b) { var d = b.dataset.lb; if (d === 'close') lb.close(); else showTile(cur + (d === 'next' ? 1 : -1)); return; }
    if (e.target === lb) lb.close();
  });
  lb.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); showTile(cur + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); showTile(cur - 1); }
  });
})();
