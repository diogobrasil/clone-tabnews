//a função definida aqui pode ser acessada
//pela rota http://.../api/v1/status
function status(request, response) {
  response.status(200).json({ Mensagem: "Está tudo certo!" });
}

export default status;
