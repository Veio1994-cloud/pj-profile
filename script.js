function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /*if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }*/

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./img/avatar-light.png")
  } else {
    // set tiver sem mode, manter a imagem nornml
    img.setAttribute("src", "./img/avatar.png")
  }

}