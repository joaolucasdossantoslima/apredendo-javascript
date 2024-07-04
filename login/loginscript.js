

let emailsReg = ['jl@gmail.com','choro@gmail.com','livre@gmail.com','ganklixo@gmail.com','skibidi@gmail.com']
let senhasReg = ['12345','67890','33333','80221','37773']

let emailLogin = document.getElementById(email)
let senhaLogin = document.getElementById(senha)


let emailLoginIndex = emailLogin.indexOf(emailsReg)
let senhaLoginIndex = senhaLogin.indexOf(senhasReg)

let login = emailLoginIndex==senhaLoginIndex

function Verificarlogin(){
    for(i=0;i==0;) {
        if(login){ document.getElementById(verificação).textContent=UsuarioLogado
            break
        }
        else {
            document.getElementById(verificação).textContent=Credenciaisinvalidas
        }
    }
   
}