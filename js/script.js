const links = document.querySelectorAll('.header-menu a');

function aivarLink(link){
 const url = window.location.href;
 const href = link.href;

 if(url.includes(href)){
  link.classList.add("ativo");
 }
}

links.forEach(aivarLink);