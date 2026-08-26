export function openImageSearch(name) {
  window.open(`https://www.google.com/search?q=${encodeURIComponent(name + ' exercise')}&udm=2`, '_blank', 'noopener');
}
