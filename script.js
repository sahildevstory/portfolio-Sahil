// Initialize GSAP and SplitText
gsap.registerPlugin(SplitText);

// Split the text into individual characters
const splitText = new SplitText(".loader h2", { type: "chars" });
const chars = splitText.chars;

// Apply GSAP animations to each character
gsap.from(chars, {
    opacity: 0,
    scale: 0.5,
    rotation: 180,
    stagger: 0.1, // Stagger the animation for each character
    duration: 1,
    ease: "power1.out"
});

// Add hover and click animations
document.querySelector(".loader").addEventListener("mouseover", () => {
    gsap.to(chars, { scale: 1.5, color: "#ff5733", duration: 0.3 });
});

document.querySelector(".loader").addEventListener("mouseout", () => {
    gsap.to(chars, { scale: 1, color: "#7059e2", duration: 0.3 });
});

document.querySelector(".loader").addEventListener("click", () => {
    gsap.to(chars, { rotation: 360, scale: 1.2, duration: 0.5 });
});
