function myFunction() {
  var input, filter, row, item, h4, i, txtValue;
  input = document.getElementById('search-item');
  filter = input.value.toUpperCase();
  row = document.getElementById("product-list");
  item = row.getElementsByTagName('div');

  for (i = 0; i < item.length; i++) {
    h4 = item[i].getElementsByTagName("h4")[0];
    txtValue = h4.textContent || h4.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}
