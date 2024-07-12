  import listaDeEstados from './estados.js';


  let tagUl = document.getElementById('lista-estados');

 for(let i = 0; i < listaDeEstados.length; i++){
   let estado = listaDeEstados[i];
   tagUl.innerHTML += "<li id='item"+i+"'> Estado: " + estado.nome + "<br>, Região: "+ estado.regiao.nome + "<br></li>"

  }
  for(let i=0; i< listaDeEstados.length; i++){

     
   let tagLi = document.getElementById('item'+i)

   tagLi.addEventListener('click',function(){
    alert('clicou na ul')
   })
  }


