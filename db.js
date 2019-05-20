let listHeader = document.querySelector(".table thead");
let listBody = document.querySelector(".table tbody");

function successFunc(data) {
  console.log(data);

  for (let i = 0; i < data.length; i++) {

    let tr = document.createElement("tr");

    Object.keys(data[i]).forEach((value) => {
      let td = document.createElement("td");

      td.append(data[i][value]);

      tr.append(td);

      listBody.append(tr);
    });
  };

  for (let property in data[0]) {
    let th = document.createElement("th");

    th.append(property);
    listHeader.append(th);
  }

}

Sheetsu.read(
  "https://sheetsu.com/apis/v1.0su/76ed2a1b91b5",
  {},
  successFunc
);

