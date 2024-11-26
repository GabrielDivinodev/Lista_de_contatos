const FORMULARIO_CONTATOS = document.querySelector('#formulario-contatos')
const TELEFONE_CONTATO = document.querySelector('#telefone-contato')

let linhas = ''
let total = 0

FORMULARIO_CONTATOS.addEventListener('submit', function(eventoSubmit){
    eventoSubmit.preventDefault()

    removeCaracteres()
    atualiza_tabela()
    totalContatos()
})

function atualiza_tabela(){
    const NOME_CONTATO = document.querySelector('#nome-contato')

    if(linhas.includes(TELEFONE_CONTATO.value)){
        alert('Esse contato já foi adicionado!')
    }
    else{
        let novaLinha = '<tr>'
        novaLinha += '<td>'
        novaLinha += `${NOME_CONTATO.value}`
        novaLinha += '</td>'
        novaLinha += '<td>'
        novaLinha += `${TELEFONE_CONTATO.value}`
        novaLinha += '</td>'
        novaLinha += '</tr>'

        linhas += novaLinha
    
        document.querySelector('tbody').innerHTML = linhas
        total += 1
    }

    NOME_CONTATO.value = ''
    TELEFONE_CONTATO.value = ''
}

function removeCaracteres(){
    const LIMPA_CARACTERES = TELEFONE_CONTATO.value.replace(/[+-., ]/g, '')
    TELEFONE_CONTATO.value = LIMPA_CARACTERES
}

function totalContatos(){
    document.querySelector('#total-quantidade').innerHTML = total
}