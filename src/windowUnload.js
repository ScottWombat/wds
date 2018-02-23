window.onbeforeunload = function() {
  localStorage.removeItem('customerInfo');
  return '';
};