const filter = () => {
   const menu = document.querySelector('.portfolio-menu'),
         wrapper = document.querySelector('.portfolio-wrapper'),
         no = document.querySelector('.portfolio-no');


   menu.children.forEach(btn => btn.addEventListener('click', (e) =>  {
      menu.children.forEach(rem => rem.classList.remove('active'));
      // btn.classList.remove('active');
      
      no.classList.add('animated');
      no.classList.remove('fadeIn');
      no.style.display = 'none';

      const target = e.target,
            targetClassName = target.classList.value;
      

      wrapper.children.forEach(item => {
         item.classList.add('animated');
         item.classList.remove('fadeIn');
         item.style.display = 'none';

         if (item.classList.contains(targetClassName)) {
            target.classList.add('active');
            item.style.display = 'block';
            item.classList.add('fadeIn');
         } else {
            target.classList.add('active');
            no.classList.add('fadeIn');
            no.style.display = 'block';
         }

      });

   }));

};

export default filter;