function save_cliente() {

    var camposOk = true;

    var cliente = {
        'NOME': $('#nome').val(),
        'CPF': $('#cpf').val(),
        'TELEFONE': $('#telefone').val(),
        'EMAIL': $('#email').val(),
        'ENDEREÇO': $('#endereço').val(),
        'NUMERO': $('#numero').val(),
        'COMPLEMENTO': $('#complemento').val(),
        'CEP': $('#cep').val(),
        'CIDADE': $('#cidade').val(),
        'BAIRRO': $('#bairro').val(),
        'ESTADO': $('#estado').val()
    }
    console.log(cliente);



    $("#form input").each(function () {
        if ($(this).val() == "") {
            camposOk = false;

        }
    });
    if (camposOk) {

        var clientes = localStorage.getItem('clientes');
        console.log(clientes);
        if (clientes == null) {
            clientes = [];
        } else {
            clientes = JSON.parse(clientes)
        }

        clientes.push(cliente);
        localStorage.setItem('clientes', JSON.stringify(clientes));
        carrega_clientes();
        $('#myModal').modal('hide')
    } else {
        alert("Por favor preencha todos os campos do formulário!")
    }



}

function save_produto() {

    var camposOk = true;

    var produto = {
        'CODIGO': $('#codigo').val(),
        'PRODUTO': $('#produto').val(),
        'PRECO': $('#preco').val(),
        'QUANTIDADE': $('#quantidade').val()
    }
    console.log(produto);

    $("#form input").each(function () {
        if ($(this).val() == "") {
            camposOk = false;
        }
    });
    if (camposOk) {
        var produtos = localStorage.getItem('produtos');
        if (produtos == null) {
            produtos = [];
        } else {
            produtos = JSON.parse(produtos)
        }

        produtos.push(produto);
        localStorage.setItem('produtos', JSON.stringify(produtos));
        carrega_produtos();
        $('#myModal').modal('hide')
    } else {
        alert("Por favor preencha todos os campos do formulário!")
    }

}

function carrega_clientes() {
    var clientes = localStorage.getItem('clientes');
    var html = '';
    if (clientes != null) {
        clientes = JSON.parse(clientes);
        for (let i = 0; i < clientes.length; i++) {
            html += '<tr>';
            html += '<td>' + clientes[i].NOME + '</td>';
            html += '<td>' + clientes[i].CPF + '</td>';
            html += '<td>' + clientes[i].EMAIL + '</td>';
            html += '<td> <button class="btn btn-info" onclick="ver_clientes(' + i + ')"> Visualizar </button> </td>';
            html += '</tr>';
        }
        $('#dados-clientes').html(html);
    }


}
function ver_clientes(indice) {
    $('#myModal').modal();
    console.log(indice);
    var clientes = localStorage.getItem('clientes');
    clientes = JSON.parse(clientes);
    $('#nome').val(clientes[indice].NOME);
    $('#nome').prop('readonly', true);

    $('#cpf').val(clientes[indice].CPF);
    $('#cpf').prop('readonly', true);

    $('#telefone').val(clientes[indice].TELEFONE);
    $('#telefone').prop('readonly', true);

    $('#email').val(clientes[indice].EMAIL);
    $('#email').prop('readonly', true);

    $('#endereço').val(clientes[indice].ENDEREÇO);
    $('#endereço').prop('readonly', true);

    $('#numero').val(clientes[indice].NUMERO);
    $('#numero').prop('readonly', true);

    $('#complemento').val(clientes[indice].COMPLEMENTO);
    $('#complemento').prop('readonly', true);

    $('#cep').val(clientes[indice].CEP);
    $('#cep').prop('readonly', true);

    $('#cidade').val(clientes[indice].CIDADE);
    $('#cidade').prop('readonly', true);

    $('#bairro').val(clientes[indice].BAIRRO);
    $('#bairro').prop('readonly', true);

    $('#estado').val(clientes[indice].ESTADO);
    $('#estado').prop('readonly', true);


    $('#btn_cadastrar').hide();
}

function novo_cliente() {
    $('#myModal').modal();
    $('#nome').val("");
    $('#nome').prop('readonly', false);

    $('#cpf').val("");
    $('#cpf').prop('readonly', false);

    $('#telefone').val("");
    $('#telefone').prop('readonly', false);

    $('#email').val("");
    $('#email').prop('readonly', false);

    $('#endereço').val("");
    $('#endereço').prop('readonly', false);

    $('#numero').val("");
    $('#numero').prop('readonly', false);

    $('#complemento').val("");
    $('#complemento').prop('readonly', false);

    $('#cep').val("");
    $('#cep').prop('readonly', false);

    $('#cidade').val("");
    $('#cidade').prop('readonly', false);

    $('#bairro').val("");
    $('#bairro').prop('readonly', false);

    $('#estado').val("");
    $('#estado').prop('readonly', false);

    $('#btn_cadastrar').show();
}

function carrega_produtos() {
    var produtos = localStorage.getItem('produtos');
    var html = '';
    if (produtos != null) {
        produtos = JSON.parse(produtos);
        for (let i = 0; i < produtos.length; i++) {
            html += '<tr>';
            html += '<td>' + produtos[i].CODIGO + '</td>';
            html += '<td>' + produtos[i].PRODUTO + '</td>';
            html += '<td>' + produtos[i].PRECO + '</td>';
            html += '<td>' + produtos[i].QUANTIDADE + '</td>';

            html += '<td> <button class="btn btn-info" onclick="ver_produtos(' + i + ')"> Visualizar </button> </td>';
            html += '</tr>';
        }
        $('#dados-produtos').html(html);
    }
}
function ver_produtos(indice) {
    $('#myModal').modal();
    console.log(indice);
    var produtos = localStorage.getItem('produtos');
    produtos = JSON.parse(produtos);
    $('#codigo').val(produtos[indice].CODIGO);
    $('#codigo').prop('readonly', true);

    $('#produto').val(produtos[indice].PRODUTO);
    $('#produto').prop('readonly', true);

    $('#preco').val(produtos[indice].PRECO);
    $('#preco').prop('readonly', true);

    $('#quantidade').val(produtos[indice].QUANTIDADE);
    $('#quantidade').prop('readonly', true);

    $('#btn_cadastrar').hide();

}
function novo_produto() {
    $('#myModal').modal();
    $('#codigo').val("");
    $('#codigo').prop('readonly', false);

    $('#produto').val("");
    $('#produto').prop('readonly', false);

    $('#preco').val("");
    $('#preco').prop('readonly', false);

    $('#quantidade').val("");
    $('#quantidade').prop('readonly', false);

    $('#btn_cadastrar').show();
}



