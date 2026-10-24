# Talentsy Nexus

Plataforma estática de webdramas verticais da Talentsy Nexus, criada com Next.js App Router, TypeScript e Tailwind CSS. O tema escuro e o acento verde-lima conectam a experiência de entretenimento à identidade tecnológica da marca. Os vídeos são placeholders visuais em CSS; não há backend nem pagamentos.

## Requisitos

- Node.js 20.9 ou superior
- npm

## Executar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Para validar a versão de produção:

```bash
npm run build
npx serve out
```

O build exporta o site estático para `out/`.

## Deploy na Vercel

1. Importe o repositório no painel da Vercel.
2. Use o preset **Next.js** e mantenha o comando de build `npm run build`.
3. Publique. O projeto usa `output: "export"` e não precisa de variáveis de ambiente nem backend.

## Rotas

- `/` — destaques, Em alta e Novidades.
- `/feed` — feed vertical com scroll snap e episódios demonstrativos.
- `/series/[slug]` — sinopse, metadados e lista de episódios.
- `/sobre` — empresa, serviços, fundador e formulário com validação local.

## Conteúdo e personalização

O conteúdo de demonstração está em `lib/content.ts`: seis séries com oito episódios cada, perfis/configurações mockados e os dados de estreia. Todos os vídeos e capas são formas/gradientes CSS, sem imagens externas. Para usar vídeo real, substitua o placeholder no componente `components/player/episode-player.tsx` e integre os arquivos de legenda sincronizados.

O formulário não envia dados. A integração deve ser feita no `TODO` em `components/sections/contact-form.tsx`. As moedas e o desbloqueio premium são apenas simulações locais.

## Pontos para confirmar/preencher

- `[PREENCHER: cidade/país da sede]` e `[PREENCHER: e-mail de contato]` na página Sobre.
- Textos finais, classificação indicativa, gêneros e disponibilidade das séries.
- Duração, vídeos, legendas, direitos de distribuição e identidade visual final de cada produção.
- Regras definitivas de acesso grátis/Premium e saldo promocional de moedas.
- URL/canonical e imagem Open Graph oficiais após definição do domínio e dos materiais de marca.
- Endpoint ou serviço de envio para o formulário quando houver backend.

## Acessibilidade e SEO

Há navegação por teclado com foco visível, controles com rótulos acessíveis, legendas textuais demonstrativas, contraste escuro com acento claro e respeito a `prefers-reduced-motion`. As páginas têm metadados em português e Open Graph. Ajuste os textos e a arte Open Graph com as informações oficiais antes de publicar.
