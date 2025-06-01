document.addEventListener('DOMContentLoaded', () => {
  for (const link of document.querySelectorAll('.video-link')) {
    link.onclick = e => {
      e.preventDefault();
      const id = link.dataset.ytId;
      link.outerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" allowfullscreen loading="lazy" width="100%" height="200"></iframe>`;
    };
  }
});