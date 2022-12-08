var databarang = ["Buku Tulis", "Pensil", "Spidol"];

function showbarang() {
  var listbarang = document.getElementById("list-barang");

  // Clear list barang
  listbarang.innerHTML = "";

  //cetak swmua barang
  for (let i = 0; i < databarang.length; i++) {
    var btnedit = "<a href='#' onclick='editbarang(" + i + ")'>Edit</a>";
    var btnhapus = "<a href='#' onclick='deletebarang(" + i + ")'>Hapus</a>";

    listbarang.innerHTML +=
      "<li>" + databarang[i] + " [" + btnedit + " | " + btnhapus + "]</li>";
  }
}

function addbarang() {
  var input = document.querySelector("input[name=barang]");
  databarang.push(input.value);
  showbarang();
}

function editbarang(id) {
  var newbarang = prompt("Nama Baru", databarang[id]);
  databarang[id] = newbarang;
  showbarang();
}

function deletebarang(id) {
  databarang.splice(id, 1);
  showbarang();
}
showbarang();
