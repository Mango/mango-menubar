function $(selector) {
  return document.querySelector(selector);
}
var form = $('#form');
function handleResponse(err, data) {
  if (err) { return err; }
  document.write(data.uid);
}
form.addEventListener('submit', function(eve) {
  eve.preventDefault();
  var cardInfo = {
    'number': $('#card').value,
    'type': $('#type').value,
    'holdername': $('#holdername').value,
    'exp_month': $('#month').value,
    'exp_year': $('#year').value,
    'ccv': $('#ccv').value
  };
  Mango.setPublicKey($('#key').value);
  Mango.token.create(cardInfo, handleResponse);
});