const menuItems = document.getElementById('myDropdown');
const barsIcon = document.getElementById('bars-icon');
const showDropdown = document.getElementById('clicked')

barsIcon.onclick = () =>{
menuItems.classList.toggle('show')

}
// function showDropdown(){
//     document.getElementById("myDropdown").classList.toggle("show");
//     console.log('I was clicked');
// }
// window.onclick = function(e) {
//     if (!e.target.matches('#clicked')) {
//     var myDropdown = document.getElementById("myDropdown");
//     console.log(myDropdown);   
//       if (myDropdown.classList.contains('show')) {
//         myDropdown.classList.add('show');
//       }else{
//         myDropdown.classList.remove('show')
//       }
//     }
//   }