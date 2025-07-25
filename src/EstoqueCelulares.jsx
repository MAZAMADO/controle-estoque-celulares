import React from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card } from './components/ui/card';

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
          <Button>Cadastrar</Button>
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
