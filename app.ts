interface Item {
  id: string;
  nome: string;
}

const formularioItem = document.getElementById(
  "formularioItem"
) as HTMLFormElement;
const listaItens = document.getElementById("listaItens") as HTMLUListElement;
const inputItem = document.getElementById("item") as HTMLInputElement;

// Carregando itens do localStorage
const carregarItens = (): Item[] => {
  const itens = localStorage.getItem("itens");
  return itens ? JSON.parse(itens) : [];
};

// Salvando itens no localStorage
const salvarItens = (itens: Item[]) => {
  localStorage.setItem("itens", JSON.stringify(itens));
};
