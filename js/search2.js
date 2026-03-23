function search2() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("mySearch2");
    filter = input.value.toUpperCase();
    table = document.getElementById("users_2");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
           
        }
    }
}
function forget() {
    document.getElementById('forget').style.display = 'block';
    document.getElementById('popup').style.marginTop = '140px';
}
function close() {
    document.getElementById('forget').style.display = 'none';
}