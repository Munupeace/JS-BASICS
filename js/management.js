const menuItems = document.getElementById('myDropdown');
const barsIcon = document.getElementById('bars-icon');
const showDropdown = document.getElementById('clicked')

barsIcon.onclick = () =>{
menuItems.classList.toggle('show')

}

document.getElementById('closeDropdown').addEventListener('click', function() {
  const dropdown = document.getElementById('myDropdown');
  dropdown.classList.remove('show');
});

