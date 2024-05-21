const body = document.querySelector('body'); 
const table = document.createElement('table');
const tbody = document.createElement('tbody');
const tr = document.createElement('tr');
const td = document.createElement('td');
const th = document.createElement('th');
const childTable = document.createElement('table');
const childTbody = document.createElement('tbody');
const tbodyChildren = childTbody.children;

table.setAttribute('border', '0');
table.setAttribute('cellspacing', '1');
table.setAttribute('cellpadding', '2');
td.setAttribute('valign', 'top');
body.appendChild(table);

table.appendChild(tbody);
tbody.appendChild(tr);
tr.appendChild(td);

childTable.setAttribute('border', '1');
childTable.setAttribute('cellspacing', '0');
childTable.setAttribute('cellpadding', '4');

td.appendChild(childTable);
childTable.appendChild(childTbody);

for (let index = 0; index < 10; index++) {
  const tr = document.createElement('tr');

  childTbody.appendChild(tr);

  for (let jindex = 0; jindex < 10; jindex++) {
    const th = document.createElement('th');
    const td = document.createElement('td');
    th.textContent = jindex === 0 && index === 0 ? '' : jindex;
    td.textContent = jindex * index; 
  
    if (tbodyChildren[index].firstChild) {
      tbodyChildren[index].firstChild.textContent = index === 0 ? '' : index;
    }

    if (index === 0) {
      tr.appendChild(th);

      continue;
    }
    
    if (jindex === 0) {
      tr.appendChild(th);
    }

    if (jindex >= 1) {
      tr.appendChild(td);
    }
    
  }
}