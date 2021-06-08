const URL = "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11";
let courses = fetch(URL).then(responce => {
    return responce.json();
}).then(data => {
    return data;
}).catch(err => console.error(err));
courses.then(data => {
    console.log(data);
    let ths =['ccy','base_ccy','buy','sale'];

    let table = document.createElement("table");
    table.setAttribute("class", "table table-hover");
    let tr = document.createElement("tr");
    ths.forEach(element => {
        let th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.innerHTML = element;
        tr.appendChild(th);
    });

    let thead = document.createElement("thead");
    thead.appendChild(tr);

    let tbody = document.createElement("tbody");

    data.forEach(person => {
        let tr = document.createElement("tr");
        tr.setAttribute("class", "table-info");

        let ccy = document.createElement("td");
        let base_ccy = document.createElement("td");
        let buy = document.createElement("td");
        let sale = document.createElement("td");

        ccy.innerHTML = person.ccy;
        base_ccy.innerHTML = person.base_ccy;
        buy.innerHTML = person.buy;
        sale.innerHTML = person.sale;

        tr.appendChild(ccy);
        tr.appendChild(base_ccy);
        tr.appendChild(buy);
        tr.appendChild(sale);

        tbody.appendChild(tr);
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    root.appendChild(table);
})