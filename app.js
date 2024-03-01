const section1 = document.getElementById('seperator1');
const section2 = document.getElementById('seperator2');

for (let i = 0; i < 675; i++) {
  const newImg1 = document.createElement('img');
  newImg1.src = 'images/hr-img.png';
  section1.appendChild(newImg1);
  const newImg2 = document.createElement('img');
  newImg2.src = 'images/hr-img.png';
  section2.appendChild(newImg2);
}
