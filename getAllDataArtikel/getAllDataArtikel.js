async function fetchData() {
  try {
    const response = await fetch(
      "https://64508d33a3221969114c7374.mockapi.io/artikel"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}

function tampilkanData(data) {
  const daftarArtikel = document.getElementById("daftar-artikel");
  data.forEach((item) => {
    const judul = item.judul;
    const gambar = item.gambar;
    const artikel = item.artikel;

    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    h2.textContent = judul;
    const img = document.createElement("img");
    img.src = gambar;
    const p = document.createElement("p");
    p.textContent = artikel;

    li.appendChild(h2);
    li.appendChild(img);
    li.appendChild(p);

    daftarArtikel.appendChild(li);
  });
}

(async function () {
  const data = await fetchData();
  tampilkanData(data);
})();
