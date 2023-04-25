const speakersName = document.querySelectorAll('.speakers-name');
const speakersCountry = document.querySelectorAll('.speakers-country');
const speakersDescription = document.querySelectorAll('.speakers-description');
const speakersBgImage = document.querySelectorAll('.img-transparent-bkgrnd');
const speakersImage = document.querySelectorAll('.speakers-images');
const morebtn = document.querySelector('#moreBtn');
const speakercontainerfordesktop = document.querySelectorAll('.speakers-info-container ul');

morebtn.addEventListener('click', () => {
  speakercontainerfordesktop.forEach((item) => {
    item.classList.remove('display-none');
  });
});
const speakersInfo = [
  {
    name: 'John Duke',
    country: 'Somerset, England',
    description: 'John, chair of the institution',
    bgImage: 'image/speaker-back.png',
    image: 'image/speaker1.jpg',
  },
  {
    name: 'Babar Azam',
    country: 'Nairobi, Kenya',
    description: 'Babar azam is believed to introduce javascript',
    bgImage: 'image/speaker-back.png',
    image: 'image/speaker5.jpg',
  },
  {
    name: 'Babar Azam',
    country: 'Nairobi, Kenya',
    description: 'Babar azam is believed to introduce javascript',
    bgImage: 'image/speaker-back.png',
    image: 'image/speaker5.jpg',
  },
  {
    name: 'Babar Azam',
    country: 'Nairobi, Kenya',
    description: 'Babar azam is believed to introduce javascript',
    bgImage: 'image/speaker-back.png',
    image: 'image/speaker5.jpg',
  },
  {
    name: 'Babar Azam',
    country: 'Nairobi, Kenya',
    description: 'Babar azam is believed to introduce javascript',
    bgImage: 'image/speaker-back.png',
    image: 'image/speaker5.jpg',
  },
  {
    name: 'Babar Azam',
    country: 'Nairobi, Kenya',
    description: 'Babar azam is believed to introduce javascript',
    bgImage: 'image/speaker-back.png',
    image: 'image/speaker5.jpg',
  },
];

for (let i = 0; i < speakersName.length; i += 1) {
  speakersName[i].innerHTML = speakersInfo[i].name;
  speakersCountry[i].innerHTML = speakersInfo[i].country;
  speakersDescription[i].innerHTML = speakersInfo[i].description;
  speakersBgImage[i].src = speakersInfo[i].bgImage;
  speakersImage[i].src = speakersInfo[i].image;
}

const mobileMenu = document.querySelector('.mobile');
mobileMenu.addEventListener('click', () => {
  document.querySelector('.intro-part').style.display = 'none';
  mobileMenu.classList.add('mobile-menu-appear');
});


