document.addEventListener('DOMContentLoaded', function () {
  const alertBtn = document.getElementById('alertBtn');
  const getStarted = document.getElementById('getStartedBtn');

  if (alertBtn) {
    alertBtn.addEventListener('click', () => {
      // simple demo alert using Bootstrap classes
      const el = document.createElement('div');
      el.className = 'alert alert-light alert-dismissible fade show';
      el.role = 'alert';
      el.innerHTML = '<strong>Nice!</strong> This is a demo alert. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
      document.body.prepend(el);
      setTimeout(() => {
        try { el.classList.remove('show'); } catch (e) {}
      }, 5000);
    });
  }

  if (getStarted) {
    getStarted.addEventListener('click', (e) => {
      e.preventDefault();
      const features = document.getElementById('features');
      if (features) features.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
