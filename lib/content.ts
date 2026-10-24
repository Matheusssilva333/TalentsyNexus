export type Episode = {
  id: string;
  number: number;
  title: string;
  synopsis: string;
  caption: string;
  duration: string;
  isPremium: boolean;
  coins: number;
};

export type Series = {
  id: string;
  slug: string;
  title: string;
  genre: string;
  synopsis: string;
  tagline: string;
  badge: "Grátis" | "Premium";
  episodes: Episode[];
  colors: [string, string];
  symbol: string;
  featured?: boolean;
};

const episodeTitles: Record<string, string[]> = {
  "o-protocolo-nexus": [
    "A falha impossível", "O turno da noite", "Sinais no sistema", "Uma decisão de milhões",
    "O algoritmo mentiu?", "A linha parada", "O código-fonte", "A última atualização",
  ],
  "entre-dois-mundos": [
    "A mensagem errada", "Duas vidas", "O encontro", "Tudo em silêncio",
    "Uma escolha", "O segredo dela", "A carta", "A verdade que faltava",
  ],
  "ultima-ordem": [
    "Ordem de partida", "Ponto cego", "Sem sinal", "A testemunha",
    "Rota de fuga", "O informante", "Jogo duplo", "Último recurso",
  ],
  "herdeiros-do-amanha": [
    "O testamento", "A nova CEO", "A sala de conselho", "Promessas antigas",
    "A votação", "O rival", "A aliança", "Um novo legado",
  ],
  "arquivo-zero": [
    "Registro apagado", "A sala lacrada", "Vozes no arquivo", "O nome proibido",
    "Memória recuperada", "O pesquisador", "A origem", "Arquivo zero",
  ],
  "segundo-ato": [
    "Recomeçar", "Palco vazio", "A audição", "A protagonista",
    "Entre cenas", "O contrato", "A estreia", "Segundo ato",
  ],
};

const descriptions = [
  "Uma descoberta inesperada muda o rumo de tudo. Mas alguém já sabe mais do que deveria.",
  "Uma decisão tomada em segundos aproxima aliados e coloca uma verdade em risco.",
  "Quando as peças finalmente se encaixam, surge uma pergunta que ninguém queria fazer.",
  "O passado volta à tona e transforma uma simples missão em um jogo de confiança.",
  "No momento decisivo, uma nova pista muda completamente o que parecia certo.",
  "O relógio não para. Para seguir em frente, será preciso revelar o que ficou escondido.",
  "Uma conversa interrompida deixa claro que nada foi coincidência.",
  "A resposta está diante deles — mas o próximo passo pode mudar tudo.",
];

function createEpisodes(seriesId: string): Episode[] {
  return episodeTitles[seriesId].map((title, index) => ({
    id: `${seriesId}-ep-${index + 1}`,
    number: index + 1,
    title,
    synopsis: descriptions[index],
    caption:
      index === 0
        ? "Às vezes, uma pequena falha revela uma grande história."
        : "O que você faria se a próxima escolha mudasse tudo?",
    duration: `${index % 2 === 0 ? "01" : "02"}:${String(15 + index * 3).padStart(2, "0")}`,
    isPremium: index > 2 && index % 2 === 1,
    coins: 20,
  }));
}

export const series: Series[] = [
  {
    id: "o-protocolo-nexus",
    slug: "o-protocolo-nexus",
    title: "O Protocolo Nexus",
    genre: "Suspense • Tecnologia",
    synopsis:
      "Quando uma engenheira encontra uma falha impossível na linha de produção, ela tem apenas uma noite para provar que o sistema inteligente está escondendo algo — antes que a fábrica pare para sempre.",
    tagline: "Toda grande mudança começa com uma falha.",
    badge: "Grátis",
    episodes: createEpisodes("o-protocolo-nexus"),
    colors: ["#163f48", "#b7ff59"],
    symbol: "N",
    featured: true,
  },
  {
    id: "entre-dois-mundos",
    slug: "entre-dois-mundos",
    title: "Entre Dois Mundos",
    genre: "Romance • Drama",
    synopsis:
      "Uma conversa enviada para o número errado conecta duas pessoas em fases opostas da vida. A cada mensagem, a distância entre os mundos diminui.",
    tagline: "Às vezes, o acaso sabe o caminho.",
    badge: "Grátis",
    episodes: createEpisodes("entre-dois-mundos"),
    colors: ["#462953", "#eb88b9"],
    symbol: "♡",
  },
  {
    id: "ultima-ordem",
    slug: "ultima-ordem",
    title: "Última Ordem",
    genre: "Ação • Mistério",
    synopsis:
      "Uma analista recebe uma ordem que não deveria existir. Para descobrir quem está por trás dela, terá de desconfiar de todos — inclusive da própria equipe.",
    tagline: "Nem toda ordem merece ser cumprida.",
    badge: "Premium",
    episodes: createEpisodes("ultima-ordem"),
    colors: ["#47231f", "#ff9a58"],
    symbol: "!",
  },
  {
    id: "herdeiros-do-amanha",
    slug: "herdeiros-do-amanha",
    title: "Herdeiros do Amanhã",
    genre: "Drama • Negócios",
    synopsis:
      "Após uma inesperada mudança de liderança, uma jovem executiva precisa conquistar a confiança de uma empresa que acredita que o futuro já está decidido.",
    tagline: "O futuro não se herda. Se constrói.",
    badge: "Grátis",
    episodes: createEpisodes("herdeiros-do-amanha"),
    colors: ["#28365a", "#8db3ff"],
    symbol: "H",
  },
  {
    id: "arquivo-zero",
    slug: "arquivo-zero",
    title: "Arquivo Zero",
    genre: "Ficção • Suspense",
    synopsis:
      "Um arquivo apagado há décadas reaparece em um laboratório. Seu conteúdo pode explicar um mistério antigo — ou iniciar um novo.",
    tagline: "O que foi apagado ainda deixa rastros.",
    badge: "Premium",
    episodes: createEpisodes("arquivo-zero"),
    colors: ["#283936", "#87d6c2"],
    symbol: "0",
  },
  {
    id: "segundo-ato",
    slug: "segundo-ato",
    title: "Segundo Ato",
    genre: "Drama • Superação",
    synopsis:
      "Depois de anos longe dos palcos, uma atriz decide começar de novo. Mas voltar a atuar é a parte fácil; o difícil é encarar a história que deixou para trás.",
    tagline: "Toda história merece um novo começo.",
    badge: "Grátis",
    episodes: createEpisodes("segundo-ato"),
    colors: ["#563a26", "#ffc66b"],
    symbol: "Ⅱ",
  },
];

export const featuredSeries = series.find((item) => item.featured) ?? series[0];
export const trendingSeries = [series[0], series[1], series[2], series[3]];
export const newSeries = [series[4], series[5], series[1], series[3]];

export const mockUser = {
  name: "Visitante",
  coins: 60,
  avatarLabel: "V",
};

export const appSettings = {
  brand: "Talentsy Nexus",
  tagline: "Histórias que conectam. Tecnologia que transforma.",
  defaultLanguage: "pt-BR",
  theme: "dark",
};
