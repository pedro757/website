// Photo movement animation
let Photo = document.querySelector(".Photo");
let PhotoData = document.querySelector(".PhotoData");
let cursorPhoto = {
  x: 0,
  y: 0,
};
let cursorPhotoData = {
  x: 0,
  y: 0,
};

document.addEventListener("mousemove", (event) => {
  cursorPhoto.x = -event.clientX * 0.025;
  cursorPhoto.y = -event.clientY * 0.025;
  cursorPhotoData.x = -event.clientX * 0.03 * 1.4;
  cursorPhotoData.y = -event.clientY * 0.03 * 1.5;

  Photo.style.transform = `translate(${cursorPhoto.x}px, ${cursorPhoto.y}px)`;
  PhotoData.style.transform = `translate(${cursorPhotoData.x}px, ${cursorPhotoData.y}px)`;
});
