import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; // arquivo de config Firebase

const handleCadastrar = async () => {
  try {
    await addDoc(collection(db, "celulares"), {
      aparelho,
      valorCusto,
      valorVenda,
      imei,
      numeroSerie,
      cdo,
      cidade,
      fornecedor,
      dataCompra,
    });
    alert("Celular cadastrado com sucesso!");
    limparCampos(); // limpa os inputs
  } catch (e) {
    console.error("Erro ao cadastrar:", e);
    alert("Erro ao cadastrar celular");
  }
  <Button onClick={handleCadastrar}>Cadastrar</Button>

};
