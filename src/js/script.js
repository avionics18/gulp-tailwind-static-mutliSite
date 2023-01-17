const carouselImages = ["https://www.usafa.edu/app/uploads/211007-F-NH566-1002.jpg", "https://d21gd0ap5v1ndt.cloudfront.net/web04/tabor/images/team_shots/2020_21_tabor_men_basketball.jpg?1eceb5cbc1cb1cffab02681d89c5a696424c76ce", "https://careerkarma.com/blog/wp-content/uploads/2022/08/Yale-University-Cost-Tuition-Fees-Financial-Aid-and-More.jpg"];

const heroArea = document.getElementById("hero-area");

// Carousel Logic
let i = 0;
setInterval(() => {
  if (i == carouselImages.length) i = 0;
  heroArea.style.backgroundImage = `url(${carouselImages[i]})`;
  i++;
  console.log(carouselImages[i]);
}, 5000);