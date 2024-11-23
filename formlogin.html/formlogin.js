function login() {
    // Define predefined username and password
    const correctUsername = "user";
    const correctPassword = "123";

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the input matches the predefined values
   if (username === correctUsername && password === correctPassword) {
    alert("berhasil")
    } else {
    alert("gagal");
    }

}