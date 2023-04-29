const speakersName = document.querySelectorAll('.speakers-name');
const speakersCountry = document.querySelectorAll('.speakers-country');
const speakersDescription = document.querySelectorAll('.speakers-description');
const speakersBgImage = document.querySelectorAll('.img-transparent-bkgrnd');
const speakersImage = document.querySelectorAll('.speakers-images');
const dh = document.getElementById('dh');
const more = document.getElementById('more');
const button = document.getElementById('moreBtn');
let isMoreVisible = false;
button.addEventListener('click', () => {
  isMoreVisible = !isMoreVisible;
  if (isMoreVisible) {
    more.style.display = 'block';
    button.innerText = 'Show less';
  } else {
    more.style.display = 'none';
    button.innerText = 'Show More';
  }
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
    description: 'Best in C+ .qualified  with math',
    bgImage: 'image/speaker-back.png',
    image: 'image/speaker5.jpg',
  },
  {
    name: 'Godfrey Retu',
    country: 'Cairo, Egypt',
    description: 'Pure java. 10 years of experience.',
    bgImage: 'image/speaker-back.png',
    image: 'image/speaker6.jpg',
  },
  {
    name: 'Nathaniel kivu',
    country: 'Levu, Ethiopia',
    description: 'Best in C . Staff member. Html and css.',
    bgImage: 'image/speaker-back.png',
    image: 'image/speaker5.jpg',
  },
  {
    name: 'Edwin Nzou',
    country: 'Kigali, Rwanda',
    description: 'Best in HTML. 8 years of experience.',
    bgImage: 'image/speaker-back.png',
    image: 'image/baba.webp',
  },
  {
    name: 'John Miracle',
    country: 'Washington America',
    description: 'Best in python language experience',
    bgImage: 'image/speaker-back.png',
    image: 'image/wanindu.webp',
  },
];

for (let i = 0; i < speakersName.length; i += 1) {
  speakersName[i].innerHTML = speakersInfo[i].name;
  speakersCountry[i].innerHTML = speakersInfo[i].country;
  speakersDescription[i].innerHTML = speakersInfo[i].description;
  speakersBgImage[i].src = speakersInfo[i].bgImage;
  speakersImage[i].src = speakersInfo[i].image;
}

const mobileMenu = document.querySelector('#about-mobile-menu');
window.addEventListener('click', (e) => {
  if (e.target.id === 'mobile' || e.target.id === 'aboutmobile') {
    dh.style.left = '0';
    mobileMenu.style.left = '0';
  } else if (e.target.id === 'close' || e.target.id === 'aboutclose') {
    dh.style.left = '100%';
    mobileMenu.style.left = '100%';
  }
});