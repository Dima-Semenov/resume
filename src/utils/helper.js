export const scrollActive = () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    const currentNavLink = document.querySelector(`a[href*=${sectionId}]`);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      currentNavLink.parentElement.classList.remove('text-white0.5');
      currentNavLink.parentElement.classList.add('tablet:!scale-[1.4]');
    } else {
      currentNavLink.parentElement.classList.add('text-white0.5');
      currentNavLink.parentElement.classList.remove('tablet:!scale-[1.4]');
    }
  });
};

export const initialAnimationHover = ({ allProject }) => {
  allProject.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      allProject.forEach((item2) => {
        if (item2 !== item) {
          item2.classList.add('not-active');
        }
      });
    });

    item.addEventListener('mouseleave', () => {
      allProject.forEach((item2) => {
        item2.classList.remove('not-active');
      });
    });
  });
};
