// login script File
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("login-modal");
  const loginBtn = document.querySelector(".login-btn");
  const closeBtn = document.querySelector(".close-btn");

  if (loginBtn && modal && closeBtn) {
    loginBtn.onclick = () => modal.style.display = "block";

    closeBtn.onclick = () => modal.style.display = "none";

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
});



function closeAuthPopup() {
	const popup = document.getElementById('auth-popup');
	popup.style.display = 'none';
}

// Close if clicking outside the container
// document.addEventListener('click', function (e) {
// 	const popup = document.getElementById('auth-popup');
// 	const container = document.getElementById('container');
// 	if (popup.style.display === 'flex' && !container.contains(e.target) && !e.target.closest('.ghost')) {
// 		closeAuthPopup();
// 	}
// });
