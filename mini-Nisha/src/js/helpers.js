export const AJAX = async function (url) {
  try {
    const res = await fetch(url);

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const mobileNav = function () {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const sidenav = document.querySelector(".sidenav");
  hamburgerIcon.addEventListener("click", () => {
    sidenav.classList.toggle("mobilenav");
  });
};
