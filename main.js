function awMan() {
  document.getElementById('awman').innerHTML = 'AWWW MANNNN';
  document.getElementById('creeperImage').src = "media/creeper.png"
  document.getElementById('creeper').style.marginTop = '82px';
  document.getElementById('awman').style.marginTop = '300px';
  //window.open('https://www.youtube.com/watch?v=cPJUBQd-PNM');
  setTimeout(awMan2, 1500);
}

function awMan2() {
  window.open('https://www.youtube.com/watch?v=cPJUBQd-PNM');
  document.getElementById('awman').innerHTML = '';
  document.getElementById('creeperImage').src = "";
  document.getElementById('creeper').style.marginTop = '400px';
  document.getElementById('awman').style.marginTop = '0px';
}

document.getElementById('creeper').addEventListener('click', awMan);