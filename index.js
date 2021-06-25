// Photo movement animation
let isDesktop = window.matchMedia("(min-width: 77rem)");

function MouseMoveAnimation(isDesktop) {
  if (!isDesktop.matches) return;

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
}

function HeroTimeline() {
  let Title = CSSRulePlugin.getRule(".title::after");
  let MainParagraph = CSSRulePlugin.getRule(".MainParagraph::after");
  let HeroTl = gsap.timeline({ defaults: { duration: 2 } });

  HeroTl.from(".MainContent", {
    y: -50,
    opacity: 0,
    ease: "Power1.easeOut",
  })
    .to(
      [Title, MainParagraph],
      {
        cssRule: {
          scaleY: 0,
        },
        duration: 1.8,
        ease: "Power1.easeOut",
      },
      "<"
    )
    .from(
      ".Break",
      {
        opacity: 0,
        ease: "Power1.easeOut",
      },
      "<"
    );
}

HeroTimeline();
MouseMoveAnimation(isDesktop);
isDesktop.addListener(MouseMoveAnimation);
