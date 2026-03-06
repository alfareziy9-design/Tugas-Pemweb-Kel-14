document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector(".form");
  const nama = document.getElementById("nama");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  form.addEventListener("submit", function(e){

    const namaValue = nama.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    // ini REGEX utk validasi
    const namaRegex = /^[A-Za-z']+(\s[A-Za-z']+)*$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(!namaRegex.test(namaValue)){
      alert("Nama lengkap hanya boleh berisi huruf dan tanda petik satu (').");
      nama.focus();
      e.preventDefault();
      return;
    }

    if(!passwordRegex.test(passwordValue)){
      alert("Password minimal 8 karakter dan harus mengandung huruf serta angka.");
      password.focus();
      e.preventDefault();
      return;
    }

    if(passwordValue !== confirmPasswordValue){
      alert("Konfirmasi password tidak sama.");
      confirmPassword.focus();
      e.preventDefault();
      return;
    }

  });


});
