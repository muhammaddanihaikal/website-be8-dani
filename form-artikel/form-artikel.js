const form = document.getElementById("form-artikel");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const judul = document.getElementById("judul").value;
  const gambar = document.getElementById("gambar").files[0];
  const artikel = document.getElementById("artikel").value;

  // validasi: judul atau artikel tidak diisi
  if (judul === "" || artikel === "") {
    alert("Judul atau artikel harus diisi");
    return;
  }

  // validasi: jika gambar diisi
  if (gambar !== undefined) {
    const imgbbApiKey = "5e275c77460cfdfc98be3fa11f546308";
    const formData = new FormData();
    formData.append("image", gambar);
    formData.append("key", imgbbApiKey);

    try {
      const responseImgbb = await fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        body: formData,
      });

      const imgbbData = await responseImgbb.json();

      const data = {
        judul,
        gambar: imgbbData.data.url,
        artikel,
      };

      const response = await fetch(
        "https://64508d33a3221969114c7374.mockapi.io/artikel",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      alert("Berhasil menambahkan artikel!");
    } catch (error) {
      console.error(error);
      alert("Artikel gagal ditambahkan!");
    }
    // validasi: jika gambar tidak diisi
  } else {
    const data = {
      judul,
      artikel,
    };

    try {
      const response = await fetch(
        "https://64508d33a3221969114c7374.mockapi.io/artikel",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      alert("Berhasil menambahkan artikel!");
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan artikel!");
    }
  }
});
