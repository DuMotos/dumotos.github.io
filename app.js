const form=document.querySelector('#searchForm');
const input=document.querySelector('#search');
const category=document.querySelector('#category');
const results=document.querySelector('#resultados');
const resultGrid=document.querySelector('#resultGrid');
const clearResults=document.querySelector('#clearResults');

const demo=[
 ['Shopee','R$ 137,90','Melhor preço demonstrativo'],
 ['Mercado Livre','R$ 159,90','Frete grátis demonstrativo'],
 ['Amazon','R$ 149,90','Oferta demonstrativa']
];

function runSearch(term,cat){
 const label=term||cat||'sua busca';
 resultGrid.innerHTML=demo.map((x,i)=>`<article class="result-card"><p>${x[0]} ${i===0?'• melhor preço':''}</p><h3>${label}</h3><div class="price">${x[1]}</div><p>${x[2]} · Integração com lojas reais será adicionada na próxima etapa.</p></article>`).join('');
 results.hidden=false;
 results.scrollIntoView({behavior:'smooth'});
}

form.addEventListener('submit',e=>{
 e.preventDefault();
 const term=input.value.trim(),cat=category.value;
 if(!term&&!cat){input.focus();input.placeholder='Digite o produto que você procura...';return}
 runSearch(term,cat);
});

document.querySelectorAll('.popular button').forEach(b=>b.addEventListener('click',()=>{
 input.value=b.textContent.trim(); category.value=''; runSearch(input.value,'');
}));

document.querySelectorAll('.category-grid button').forEach(b=>b.addEventListener('click',()=>{
 category.value=b.dataset.category||''; input.value=''; runSearch('',category.value);
}));

clearResults.addEventListener('click',()=>{
 results.hidden=true; resultGrid.innerHTML=''; location.hash='inicio';
});
