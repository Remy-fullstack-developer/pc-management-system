function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("users");
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

function showPopup(){
    document.getElementById('icon1').style.display='block';
    document.getElementById('icon2').style.display='none';
    document.getElementById('profile').style.display='block';
    document.getElementById('profile').style.marginLeft='70%';
    document.getElementById('profile').style.transition='0.6s';
}
function HidePopup(){
    document.getElementById('icon1').style.display='none';
    document.getElementById('icon2').style.display='block';
    document.getElementById('profile').style.display='none';
    document.getElementById('profile').style.marginLeft='100%';
    document.getElementById('profile').style.transition='0.6s'
}
