// Array of section data
const sections = [
  {
    title: "Lorem Ipsum",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2022",
    imageUrl: "https://placehold.co/450x600",
    imageId: "img-1",
    descId: "desc-1",
    altText: "Lorem ipsum"
  },
  {
    title: "Lorem Ipsum",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2022",
    imageUrl: "https://placehold.co/450x600",
    imageId: "img-2",
    descId: "desc-2",
    altText: "Lorem ipsum"
  },
  {
    title: "Lorem Ipsum",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2022",
    imageUrl: "https://placehold.co/450x600",
    imageId: "img-3",
    descId: "desc-3",
    altText: "Lorem ipsum"
  },
  {
    title: "Lorem Ipsum",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2022",
    imageUrl: "https://placehold.co/450x600",
    imageId: "img-4",
    descId: "desc-4",
    altText: "Lorem ipsum"
  }
];

// Function to create a section HTML
const createSectionHTML = ({ title, quote, date, imageUrl, imageId, descId, altText }) => `
  <section class="h-screen flex items-center justify-center">
    <div class="flex lg:flex-row flex-col lg:items-start items-center w-full max-w-[60rem] lg:gap-12 gap-3 p-6">
      <img src="${imageUrl}" alt="${altText}" id="${imageId}"
        class="skewElem rounded-md lg:w-[450px] w-[350px] lg:h-[600px] h-[500px]" />
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
