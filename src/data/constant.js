// Array of section data
const sections = [
  {
    title: "Dalí",
    quote: '"Surrealism is destructive, but it destroys only what it considers to be shackles limiting our vision."',
    date: "09-15-20",
    imageUrl: "./src/assets/salvador-dali-fmPortrait.jpg",
    imageId: "img-1",
    descId: "desc-1",
    altText: "Salvadro Dalí FM Portrait"
  },
  {
    title: "Einstein",
    quote: '"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."',
    date: "07-10-20",
    imageUrl: "./src/assets/albert-einstein-fmPortrait.jpg",
    imageId: "img-2",
    descId: "desc-2",
    altText: "Albert Einstein FM Portrait"
  },
  {
    title: "Joker",
    quote: '"I used to think that my life was a tragedy, but now I realize, it’s a comedy."',
    date: "06-05-20",
    imageUrl: "./src/assets/joker-fmPortrait.jpg",
    imageId: "img-3",
    descId: "desc-3",
    altText: "Joker FM Portrait"
  },
  {
    title: "Mercury",
    quote: '"The most important thing is to live a fabulous life. As long as it’s fabulous, I don’t care how long it is."',
    date: "05-25-20",
    imageUrl: "./src/assets/mercury-fmPortrait.jpg",
    imageId: "img-4",
    descId: "desc-4",
    altText: "Mercury FM Portrait"
  },
  {
    title: "Stan",
    quote: '"The only advice anybody can give is if you wanna be a writer, keep writing. And read all you can, read everything."',
    date: "05-10-20",
    imageUrl: "./src/assets/stan-lee-fmPortrait.jpg",
    imageId: "img-5",
    descId: "desc-5",
    altText: "Stan Lee FM Portrait"
  },
  {
    title: "Logan",
    quote: '"Nature made me a freak. Man made me a weapon. And God made it last too long."',
    date: "04-30-20",
    imageUrl: "./src/assets/logan-fmPortrait.jpg",
    imageId: "img-6",
    descId: "desc-6",
    altText: "Logan FM Portrait"
  },
  {
    title: "Jackie",
    quote: '"I’m not afraid of dying. I’m afraid of not trying."',
    date: "04-25-20",
    imageUrl: "./src/assets/jackie-fmPortrait.jpg",
    imageId: "img-7",
    descId: "desc-7",
    altText: "Jackie FM Portrait"
  },
  {
    title: "RDJ",
    quote: '"Sometimes you gotta run before you can walk."',
    date: "04-18-20",
    imageUrl: "./src/assets/rdj-fmPortrait.jpg",
    imageId: "img-8",
    descId: "desc-8",
    altText: "RDJ FM Portrait"
  },
  {
    title: "Freeman",
    quote: '"I can say that life is good to me. Has been and is good. So I think my task is to be good to it. So how do you be good to life? You live it."',
    date: "04-14-20",
    imageUrl: "./src/assets/freeman-fmPortrait.jpg",
    imageId: "img-9",
    descId: "desc-9",
    altText: "Freeman FM Portrait"
  },
  {
    title: "Schwarzenegger",
    quote: '"The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it, as long as you really believe 100 percent."',
    date: "04-09-20",
    imageUrl: "./src/assets/schwarzenegger-fmPortrait.jpg",
    imageId: "img-10",
    descId: "desc-10",
    altText: "Schwarzenegger FM Portrait"
  },
  {
    title: "Ledger",
    quote: '"You see, in their last moments, people show you who they really are."',
    date: "04-01-20",
    imageUrl: "./src/assets/ledger-fmPortrait.jpg",
    imageId: "img-11",
    descId: "desc-11",
    altText: "Ledger FM Portrait"
  },
  {
    title: "David",
    quote: '"Every block of stone has a statue inside it and it is the task of the sculptor to discover it."',
    date: "03-21-20",
    imageUrl: "./src/assets/michaelangelo-fmPortrait.jpg",
    imageId: "img-12",
    descId: "desc-12",
    altText: "David FM Portrait"
  },
];

// Function to create a section HTML
const createSectionHTML = ({ title, quote, date, imageUrl, imageId, descId, altText }) => `
  <section class="h-screen flex items-center justify-center bg-neutral-900 dark:bg-zinc-200 z-50">
    <div class="flex lg:flex-row flex-col lg:items-start items-center w-full max-w-[60rem] lg:gap-12 gap-6 p-6 z-20">
      <img src="${imageUrl}" alt="${altText}" id="${imageId}"
        class="skewElem grayscale rounded-md lg:w-[450px] w-[350px] lg:h-[600px] h-[500px]" />
      <div class="flex flex-col gap-3" id="${descId}">
        <h1 class="lg:text-3xl text-xl leading-none">${title}</h1>
        <p class="lg:text-sm text-xs border-l border-zinc-600 pl-4 italic">${quote}</p>
        <p class="italic">${date}</p>
      </div>
    </div>
  </section>
`;

// Insert the sections into the DOM
const contentSections = document.getElementById('content-sections');
sections.forEach(section => {
  contentSections.innerHTML += createSectionHTML(section);
});
