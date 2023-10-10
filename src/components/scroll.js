import { useEffect } from 'react';
import $ from 'jquery';

function ScrollToSection() {
  useEffect(() => {
    $('a.nav-link').on('click', function (event) {
      const target = $($(this).attr('href'));
      if (target.length) {
        event.preventDefault();
        const navbarHeight = $('#navbar').outerHeight();
        const targetPosition = target.offset().top - navbarHeight;

        $('html, body').animate(
          {
            scrollTop: targetPosition +"20px",
          },
          100
        );
      }
    });
  }, []);

  return null;
}

export default ScrollToSection;
