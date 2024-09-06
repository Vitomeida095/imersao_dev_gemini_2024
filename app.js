function pesquisar (){
    
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;

  if (!campoPesquisa) {
section.innerHTML = "<p> Digite algo no campo! :) </p>"
    return
  }
campoPesquisa = campoPesquisa.toLowerCase()
    let resultados = "";
    let titulo = "";
    let estilo = "";
    
    for(let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        estilo = dado.estilo.toLocaleLowerCase()

        if (titulo.includes(campoPesquisa) || estilo.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado"> 
                    <h2>
                        <a href="#" target="_blank" >${dado.titulo} </a>
                
                        </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="descricao-meta">${dado.estilo}</p>
                    <a href=${dado.link} target ="_blank"> Acesse o Site do Game </a>
                </div>
                `;
            }
    }
if (!resultados){
    resultados = "<p> Que pena, nada foi encontrado! :( </p>"
}
        
       
    
    section.innerHTML = resultados;

}








