window.onload = initAll;

function initAll() {
  document.getElementById("redirectId").onclick = redirectTo();
}

function redirectTo() {
  window.location = "../../html/temp_h5/sample_canvas.html";
  return false;
}
