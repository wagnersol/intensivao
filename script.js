const botaoAddNota = document.getElementById('adicionar')
botaoAddNota.addEventListener('click', () => adicionarNota())
//console.log('fui clicado')

  const listaDeTextos =        JSON.parse(localStorage.getItem('textosSalvos'))

   if(listaDeTextos){
   for (textoRecuperado of listaDeTextos){
  adicionarNota(textoRecuperado)
  }
   }
       function salvarNotas() {
    const listaDeNotas = document.querySelectorAll('textarea')
    
    const listaDeTextos = []

    for (nota of listaDeNotas){
      const texto = nota.value
      listaDeTextos.push(texto)
    }
  
    localStorage.setItem('textosSalvos', JSON.stringify(listaDeTextos))
  }

  function adicionarNota(texto =''){
  const nota = document.createElement('div')
  nota.classList.add("nota")

  
  nota.innerHTML =  `
   <div class="cabecalho">
   <button class="editar">🖊</button>
  <button class="apagar">🗑</button>
   </div>
  <div class="area-nota">
  <p class="area-futura-nota esconde"></p>
  <textarea class="texto-nota"></textarea>
 </div>

`

   const textoPrincipal = nota.querySelector('.texto-nota')
    
    
    if (texto !== ''){
     textoNota.value = texto
    }
    
      
   const areaFuturaNota = nota.querySelector('.area-futura-nota')
   const botaoEditar = nota.querySelector('.editar')
    
   botaoEditar.addEventListener('click', () => {
    if (textoPrincipal.value !== '') {
      areaFuturaNota.innerHTML = textoPrincipal.value
      textoPrincipal.classList.toggle('esconde')
      areaFuturaNota.classList.toggle('esconde')
    } else {
      console.log('nota vazia, nao preciso salva-la')
    }
     salvarNotas()
  })
     const botaoApagar = nota.querySelector('.apagar')
    botaoApagar.addEventListener('click',() => {
      console.log('botao de apagar foi clicado')
    nota.remove()
      
      salvarNotas()
     
  })

   const area = nota.querySelector('.texto-nota')
   area.addEventListener('click',() => {
    console.log('botao de apagar foi clicado')
  // nota.remove()
      
     // salvarNotas()
     
  })

document.body.appendChild(nota)
    salvarNotas()
    }

