const seeMore = document.querySelector('.seemore');
const seeArtist = document.querySelector('.artist-section');
const artsitSection = document.querySelector('.artist-container');

seeMore.addEventListener(('click'), () => {
  seeArtist.classList.toggle('setoff');
});

const artistContainer = [
  {
    name: 'Mic Monsta',
    title: 'Main artist',
    description: 'Answering the call of nostalgia and in a bid to bridge the gap between the new-school sound & Makossa (which is the leading sound of the older generation) gave birth to ‘Local Lokito’ a Nkotti Francois sample.',
    Image: 'Images/Musician/main-atrist.jpg',
  },
  {
    name: 'Kitz',
    title: '3th Artist',
    description: 'Trap Rapper/Songwriter from Bamenda, Cameroon. Currently signed to B.D.A GANG MUSIC TRAP STAR! VOICE OF THE STREETS! CAMEROON!',
    Image: 'Images/Musician/kitz.jpg',
  },
  {
    name: 'Skidi boy',
    title: '2nd Artist',
    description: 'Rapper Skidi Boy Releases a conscious new ballad titled – A Di Call. The versatile rapper raps about the challenges he faces as an artist and the efforts he is putting in to realize his dreams..',
    Image: 'Images/Musician/SKIDI-BOY.jpg',
  },
  {
    name: 'D’slyk',
    title: '1st artist',
    description: 'music video by D’slyk performing “Bollo” Produced by Legendary souls and Directed by Twin Directors of L.D media @2021 Leprince Record’s.Inc PLEASENOTE.',
    Image: 'Images/Musician/dslyk.jpg',
  },
  {
    name: 'Dj Fazolletti',
    title: 'Main Dj',
    description: 'Retrouvez les meilleurs HITS Camerounais de 2018 à 2020 dans un Mashup comme vous les aimez.',
    Image: 'Images/Musician/dj-artist.jpg',
  },
];

artistContainer.forEach((cardArtist) => {
  const content = ` 
    <div class="artist">
    <div>
     <img class="image-artist" src="${cardArtist.Image}">
    </div>
    <div class="cards">
     <h1>${cardArtist.name}</h1>
        <h2>${cardArtist.title}</h2>

        <p class="demo-text">${cardArtist.description}</p>
    </div>
            </div>
    `;
  artsitSection.innerHTML += content;
});