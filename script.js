javascript: (function () {
  var table = document.getElementsByTagName("table");
  var max = parseFloat(table[0].rows[1].cells[3].innerHTML);
  var dataMax = table[0].rows[1].cells[2].innerHTML;
  for (var i = 1; i < table[0].rows.length; i++) {
    var maxI = parseFloat(table[0].rows[i].cells[3].innerHTML);
    if (max < maxI) {
      max = maxI;
      dataMax = table[0].rows[i].cells[2].innerHTML;
    }
  }
  alert("Date " + dataMax + "  - maximal temperature: " + max + " deg");
})();
