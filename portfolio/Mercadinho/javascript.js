const listaProdutos = [];

function validaForm(){
	let validaCod = document.forms["cadastrar"]["codigo"].value;
	let validaProd = document.forms["cadastrar"]["produto"].value;
	let validaMarc = document.forms["cadastrar"]["marca"].value;
	let validaPrec = document.forms["cadastrar"]["preco"].value;

	if (validaCod == ""){
		alert("O código deve ser preenchido!");
		return false;
	}
	if (validaProd == ""){
		alert("O nome do produto deve ser preenchido!");
		return false;
	}
	if (validaMarc == ""){
		alert("A marca deve ser preenchida!");
		return false;
	}
	if (validaPrec == ""){
		alert("O preço deve ser preenchido!");
		return false;
	}else{

        let produto = {
            codigo: validaCod,
            produto: validaProd,
            marca: validaMarc,
            preco: validaPrec
        }
    
        listaProdutos.push(produto);
        return insere(listaProdutos);
    }

}

function insere(produtos){
	let html = ""
   
    for(let i = 0; i < produtos.length; i++){
		html += `
		<tr>
		<th scope="row">${produtos[i].codigo}</th>
		<td>${produtos[i].produto}</td>
		<td>${produtos[i].marca}</td>
		<td>R$ ${produtos[i].preco}</td>
		</tr>
		`;
    }

	let inserir = window.document.getElementById("inserirTabela");
	inserir.innerHTML = html
};