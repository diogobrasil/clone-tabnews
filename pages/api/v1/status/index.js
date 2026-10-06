//a função definida aqui pode ser acessada
//pela rota http://.../api/v1/status
import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({ Mensagem: "Está tudo certo!" });
}

export default status;
