window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 60) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
});