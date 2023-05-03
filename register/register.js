// ambil element form
const formRegistrasi = document.getElementById("form-registrasi");

// event pada button Daftar
formRegistrasi.addEventListener("submit", async (event) => {
  // agar web ga reload saat event dijalankan
  event.preventDefault();

  // ambil value dari inputan
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const retypePassword = document.getElementById("retype-password").value;

  // validasi : password tidak sama
  if (password !== retypePassword) {
    alert("Password tidak sesuai!");
    return;
  }

  // value dari url tujuan dan data yang akan dikirim
  const url = "https://64508d33a3221969114c7374.mockapi.io/users";
  const data = {
    username: username,
    password: password,
  };

  // proses post data
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    console.log(responseData);
    alert("Registrasi Berhasil!");
  } catch (error) {
    alert("Registrasi Gagal!");
    console.error(error);
  }
});
