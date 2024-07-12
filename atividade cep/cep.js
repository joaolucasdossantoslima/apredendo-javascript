


async function fetchCep(){
    const response = await fetch(`https://viacep.com.br/ws/${document.getElementById("cep-input").value}/json/`)
    const data = await response.json()
    
    let info =`
            <div class="informs">
            <p>Rua:${data.logradouro}</p>
            <p>Bairro:${data.bairro}</p>
            <p>Cidade:${data.localidade}</p>
            <p>Estado:${data.uf}</p>
            </div>
    `
    let divCard = document.getElementById("card")

    divCard.innerHTML = info


}
