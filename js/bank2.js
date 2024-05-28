function showDropdown(){
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(e) {
    if (!e.target.matches('#clicked')) {
    var myDropdown = document.getElementById("myDropdown");   
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.add('show');
      }else{
        myDropdown.classList.remove('show')
      }
    }
  }