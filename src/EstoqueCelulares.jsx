import React from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card } from './components/ui/card';
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
};

export default function EstoqueCelulares() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sistema de Controle de Estoque e Vendas</h1>

      <Card>
        <div className="p-4 grid gap-2">
          <h2 className="text-lg font-semibold">Cadastrar Aparelho</h2>
          <Input placeholder="Aparelho" />
          <Input placeholder="Valor de Custo" />
          <Input placeholder="Valor de Venda" />
          <Input placeholder="IMEI" />
          <Input placeholder="Número de Série" />
          <Input placeholder="CDO" />
          <Input placeholder="Fornecedor" />
          <Input placeholder="Data de Compra" />
          <Button onClick={handleCadastrar}>Cadastrar</Button>

        </div>
      </Card>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Estoque Atual</h2>
        {/* Aqui futuramente entra a tabela/lista de celulares */}
        <p>Ainda sem registros</p>
      </div>
    </div>
  );
}
