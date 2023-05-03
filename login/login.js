const loginForm = document.getElementById("form-login");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  //   ambil value dari username dan password
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  //   prosess get data
  try {
    const response = await fetch(
      "https://64508d33a3221969114c7374.mockapi.io/users"
    );
    const users = await response.json();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      alert("Login Berhasil!");
    } else {
      alert("Username atau password salah!");
    }
  } catch (error) {
    console.error("Error : ", error);
    alert("Terjadi kesalahan pada server. Silahkan coba lagi nanti!");
  }
});
