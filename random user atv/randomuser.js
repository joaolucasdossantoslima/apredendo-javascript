const url = 'https://randomuser.me/api/?results=10'

async function fetchUser(){
    const response = await fetch(url)
    const data = await response.json()
    const user = data.resultss

    let tagUl = document.getElementById('lista-usuarios')
    let cards=''
    for(let i = 0; i < user.length; i++){
    let users = user[i];
    cards +=`
    <div class="card">
    <img src="${user.picture.large}">
    <div class="card-details">
    <p><strong>Nome:</strong>
    `

}

}
fetchUser()
