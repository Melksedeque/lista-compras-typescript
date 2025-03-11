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
const salvarItens = (itens: Item[]): void => {
  localStorage.setItem("itens", JSON.stringify(itens));
};

// Adicionando um novo item
const adicionarItem = (nome: string) => {
  const itens = carregarItens();
  const novoItem: Item = {
    id: new Date().toISOString(),
    nome,
  };
  itens.push(novoItem);
  salvarItens(itens);
};

// Removendo um item pelo ID
const removerItem = (id: string) => {
  const itens = carregarItens();
  const itensAtualizados = itens.filter((item) => item.id !== id);
  salvarItens(itensAtualizados);
};

// Editando um item pelo ID
const editarItem = (id: string, novoNome: string) => {
  const itens = carregarItens();
  const item = itens.find((item) => item.id === id);
  if (item) {
    item.nome = novoNome;
    salvarItens(itens);
  }
};
