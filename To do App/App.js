let Values=[];
function renderList() {
    const inputElement=document.querySelector('.input-box');
    const Value=inputElement.value;
    Values.push(Value);
    renderHtml();
}
function renderHtml() {
    let Lists='';
    for (i=0;i<Values.length;i++) {
        const list=Values[i];
        Lists+=`<p>${list}
         <input type="date">
         <button onclick="Values.splice(${i},2) 
         renderList();">Delete List</button>
         </p>
        `;
        document.querySelector('.value').innerHTML=Lists;
    }
}
