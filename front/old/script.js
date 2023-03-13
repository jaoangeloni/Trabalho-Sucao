const uri = 'http://localhost:3000/suco';
const corpo = document.querySelector('#corpo')
const cadastro = document.querySelector('#cadastro');

fetch(uri + '/listar', { method: 'GET' })
    .then(resp => resp.json())
    .then(resp => montarTabela(resp))
    .catch(err => console.error(err));

cadastro.addEventListener('submit', e => {
    e.preventDefault();

    const body = {
        "id": cadastro.id.value,
        "nome": cadastro.nome.value,
        "descricao": cadastro.descricao.value,
        "valor": cadastro.valor.value,
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    options.body = JSON.stringify(body)

    fetch(uri + '/criar', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201) window.location.reload()
            else alert('Erro ao enviar dados')
        })
})

function montarTabela(vetor) {
    vetor.forEach(e => {
        let linha = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        let col4 = document.createElement('td')
        let col5 = document.createElement('td')
        let del = document.createElement('button')
        del.setAttribute('onclick', `excluirItem('${e.id}')`)
        col1.innerHTML = e.id
        col2.innerHTML = e.nome
        col3.innerHTML = e.descricao
        col4.innerHTML = `R$${e.valor}`
        col5.appendChild(del)
        linha.appendChild(col1)
        linha.appendChild(col2)
        linha.appendChild(col3)
        linha.appendChild(col4)
        linha.appendChild(col5)
        corpo.appendChild(linha)
    });
}

function excluirItem(i) {
    if (confirm('Excluir item?'))
        fetch(uri + '/excluir/' + i, { method: 'DELETE' })
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 204) window.location.reload()
                else alert('Erro ao excluir')
            })
}