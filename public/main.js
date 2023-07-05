const app = document.getElementById('app')

fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => getData(data))



const getData = (data) => {
    data.map(users => {
        return card(users)
    })
}
const card = (users) => {
    console.log(users)

    app.innerHTML += `<div class='card'>
                      <img src=${users.avatar_url} alt= User ${users.login} />
                      <p><spam>Login:</spam> ${users.login}</p>
                      <p><spam>Url:</spam> ${users.url}</p>
                          
                          </div>`

}