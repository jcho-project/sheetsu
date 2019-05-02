let listHeader = document.querySelector(".list table thead");
let listBody = document.querySelector(".list table tbody");

function successFunc(data) {
  console.log(data);
  let tr = document.createElement("tr");

  for (let j = 0; j < data.length; j++) {
    let td = document.createElement("td");

    td.append(data[j].name);
    tr.append(td);
  };

  listBody.append(tr);

  listHeader.innerHTML = `<th>Name</th><th>Score</th>`;
}

Sheetsu.read(
  "https://sheetsu.com/apis/v1.0su/76ed2a1b91b5",
  {},
  successFunc
);

