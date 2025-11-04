
    const btns = document.querySelectorAll('.btn');
    const views = {empleado: document.getElementById('empleadoView'), practicante: document.getElementById('practicanteView')};
    btns.forEach(b=>b.addEventListener('click',()=>{
      btns.forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      const v = b.dataset.view;
      for(const k in views) views[k].style.display = (k===v)?'block':'none';
    }));
    
    
    // placeholder links (update to your real profiles) - con comprobación
  const gh = document.getElementById('githubLink');
  if (gh) gh.href = 'https://github.com/BELICUS';
  const ln = document.getElementById('linkedinLink');
  if (ln) ln.href = 'https://www.linkedin.com/in/dylan-nu%C3%B1ez-0513ba139/';

