// The Window Scroller: You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.

function smoothScrollToTop(){
  let button = document.body.querySelector(".container2").button;
  button = addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

smoothScrollToTop()

