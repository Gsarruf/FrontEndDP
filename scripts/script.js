function menu(pagina) {
  $('#conteudo').animate({ opacity: 0, marginLeft: "-50px" }, 200, () => {
    $("#conteudo").load("../components/" + pagina + ".html", () => {
      $('#conteudo').css({ marginLeft: "50px" }).animate({ opacity: 1, marginLeft: "0px" }, 200);
    });
  });
}
