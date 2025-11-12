(function() {
  // Create script element
  const s = document.createElement('script');
  s.async = true;
  s.defer = true;
  s.setAttribute('data-website-id', '47353d73-a336-47fd-b46c-2a33318b445e');
  s.src = 'https://prod-umami.liv-latveria.com/hosted/imamu.js';

  // Insert into head
  const head = document.getElementsByTagName('head')[0] || document.documentElement;
  head.insertBefore(s, head.firstChild);
})();