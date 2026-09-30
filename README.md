<div align="center">

# 💋 HotLovers

### Plataforma de Assinatura de Conteúdo Adulto Premium

**Assinaturas · Packs · Gorjetas · Chat ao Vivo · Afiliados · Multi-papel**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.3-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Prisma](https://img.shields.io/badge/Prisma-6.19-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io)

[![JWT](https://img.shields.io/badge/Auth-JWT_+_bcrypt-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io)
[![Nodemailer](https://img.shields.io/badge/Email-Nodemailer_/_SMTP-30B980?style=for-the-badge&logo=maildotru&logoColor=white)](https://nodemailer.com)
[![Licença](https://img.shields.io/badge/Uso-Privado_/_Proprietário-red?style=for-the-badge)](#licença)

</div>

---

## 📋 Índice

- [🎯 Visão Geral](#-visão-geral)
- [🛠️ Stack Tecnológica](#-stack-tecnológica)
- [🏗️ Arquitetura](#-arquitetura)
- [👥 Papéis e Permissões](#-papéis-e-permissões)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [📊 Modelo de Dados](#-modelo-de-dados)
- [🧩 Módulos e Portais](#-módulos-e-portais)
- [🔌 APIs](#-apis)
- [🎨 Design System](#-design-system)
- [📈 Status de Implementação](#-status-de-implementação)
- [💻 Desenvolvimento Local](#-desenvolvimento-local)
- [🚀 Deploy](#-deploy)
- [⚠️ Atenção — Pendências Técnicas](#-atenção--pendências-técnicas)
- [🗺️ Roadmap Sugerido](#-roadmap-sugerido)
- [🔒 Segurança](#-segurança)
- [📚 Convenções](#-convenções)
- [🔗 Links](#-links)

---

## 🎯 Visão Geral

**HotLovers** é uma plataforma completa de assinatura de conteúdo adulto (estilo OnlyFans / Privacy), construída em **Next.js 16 + React 19 + TypeScript + Prisma**. Ela contempla o ecossistema inteiro do mercado:

- **assinantes** que compram assinaturas, packs, gorjetas e conversam por chat;
- **modelos/criadoras** que gerenciam conteúdo, assinantes, ganhos, planos, saques e campanhas de impulsionamento;
- **afiliados** que divulgam a plataforma (ou modelos específicas) e recebem comissão por conversão;
- **administradores** que controlam todo o negócio: usuários, assinaturas, comissões, pagamentos, relatórios, integrações e configurações.

### Números do Projeto

| Métrica | Valor |
|---|---:|
| Arquivos TypeScript / TSX | **294** |
| Linhas de código (src/) | **34.425** |
| Páginas (Next.js App Router) | **75** |
| Componentes React | **195** |
| Rotas de API | **10** |
| Áreas / portais distintos | **4** (admin, modelo, assinante, afiliado) |
| Modelos de banco (Prisma) | **20** |
| Enums de domínio | **7** |
| Rotas públicas de marketing | **22** |
| Idiomas suportados (i18n) | **3** (PT / EN / ES) |

### Principais Capacidades

| Capacidade | Descrição |
|---|---|
| 🔐 **Autenticação multi-papel** | Login unificado que resolve o usuário em 3 tabelas (`admins`, `modelos`, `assinantes`) e redireciona para o portal correto. |
| 💳 **Assinaturas e Planos** | Planos de plataforma e planos individuais por modelo, com duração, benefícios e status (`ATIVA`, `CANCELADA`, `SUSPENSA`, `VENCIDA`). |
| 📦 **Packs de Conteúdo** | Pacotes de fotos/vídeos com capa, preço, limite de vendas e controle de estoque (`vendidos` / `limite`). |
| 💸 **Gorjetas (Doações)** | Envio de gorjetas diretas para uma modelo com mensagem opcional. |
| 💬 **Chat ao Vivo** | Conversas modelo ↔ assinante, com histórico de mensagens e marcação de leitura. |
| ❤️ **Avaliações** | Nota de 1 a 5 + comentário, uma por par assinante/modelo. |
| 🤝 **Sistema de Afiliados** | Código único, percentual de comissão, cliques, conversões e ganhos acumulados. |
| 💰 **Financeiro** | Registro de ganhos com split automático (valor bruto, comissão da plataforma, líquido para a modelo). |
| 📣 **Comunicação** | Templates de e-mail/WhatsApp e disparos (agendados, enviados, falhados). |
| 📊 **Analytics e Relatórios** | Dashboards de receita, funil de conversão, top performers e saúde do sistema. |
| 🌗 **Tema claro/escuro** | Tema claro branco/vermelho e tema escuro "estilo Netflix" (preto puro), com detecção do sistema. |
| 🌎 **Multi-idioma** | Contexto de idioma com dicionários PT/EN/ES. |
| 📱 **Responsivo** | Layouts com header/footer dedicados para desktop e mobile, sidebar retrátil. |

---

## 🛠️ Stack Tecnológica

### Frontend

| Tecnologia | Versão | Uso no projeto |
|---|---|---|
| **Next.js** | 16.1.1 | App Router, rotas, layouts, rotas de API |
| **React** | 19.2.3 | Biblioteca de UI |
| **TypeScript** | 5.9 | Tipagem estática em todo o código |
| **Tailwind CSS** | 4.1 | Estilização utilitária (`@import "tailwindcss"` + `@theme`) |
| **tw-animate-css** | 1.4 | Animações CSS |
| **Framer Motion** | 12.25 | Animações e transições |
| **Lucide React** | 0.544 | Biblioteca de ícones padrão do projeto |
| **React Icons** | 5.5 | Ícones auxiliares (marcas, `FaCrown`, `FaFire`) |
| **next-themes** | 0.4 | Motor de tema claro/escuro |
| **Radix UI** | — | Primitivos acessíveis (dialog, dropdown, select, tabs, switch, avatar, toast) |
| **shadcn/ui** | style `new-york` | Base dos componentes em `src/components/ui` |
| **React Hook Form + Zod** | 7.70 / 4.3 | Formulários e validação de schemas |
| **TanStack React Query** | 5.90 | Cache e data-fetching no cliente |
| **react-hot-toast** | 2.6 | Notificações |
| **Axios** | 1.13 | Cliente HTTP |

### Backend / Dados

| Tecnologia | Versão | Uso no projeto |
|---|---|---|
| **Route Handlers (Next.js)** | — | API REST em `src/app/api/**/route.ts` |
| **Prisma ORM** | 6.19 | Modelagem e acesso a dados |
| **bcryptjs** | 3.0 | Hash de senhas (rounds configuráveis, padrão 12) |
| **jsonwebtoken** | 9.0 | Geração/validação de JWT |
| **Nodemailer** | 7.0 | Envio de e-mail transacional via SMTP |

### Infraestrutura e Serviços

| Serviço | Onde aparece | Observação |
|---|---|---|
| **PostgreSQL (Neon)** | `DATABASE_URL` no `.env` | Banco serverless planejado para produção |
| **SQLite** | `prisma/dev.db` | Banco de desenvolvimento versionado no repositório |
| **SMTP Hostinger** | `SMTP_*` | Envio de e-mails (`smtp@hotlovers.online`) |
| **Redis** | `REDIS_URL` | Previsto para sessões (ainda não utilizado) |
| **Unsplash** | `next.config.ts > images.domains` | Imagens de demonstração |
| **Vercel** | histórico de commits | Alvo de deploy original |

---

## 🏗️ Arquitetura

### Fluxo de Requisição

```
┌────────────────────────────────────────────────────────────────────────────┐
│                             NAVEGADOR (cliente)                            │
│  Páginas públicas · /admin/* · /modelo/* · /assinante/* · /afiliado/*      │
└─────────────────────────────────┬──────────────────────────────────────────┘
                                  │  HTTP
                                  ▼
┌────────────────────────────────────────────────────────────────────────────┐
│                      Next.js 16 — App Router (SSR/RSC)                     │
│                                                                            │
│   src/middleware.ts  ──►  Guarda de rota                                   │
│      • /admin/*  /modelo/*  /assinante/*                                   │
│      • verifica o cookie httpOnly "auth_token"                             │
│      • ausente  ➜  redirect 302  /login                                    │
│                                                                            │
│   src/app/**/page.tsx  ──►  Casca fina ("wrapper")                         │
│      • importa o componente de conteúdo real                               │
│      • monta o layout da área (AdminLayout / ModeloLayout / Topbar)        │
│                                                                            │
│   src/components/**  ──►  UI (client components, "use client")             │
└─────────────────────────────────┬──────────────────────────────────────────┘
                                  │  fetch()
                                  ▼
┌────────────────────────────────────────────────────────────────────────────┐
│                        Route Handlers  (src/app/api)                       │
│   /api/auth/*      login · logout · me · register · forgot · reset         │
│   /api/modelos     catálogo público de modelos aprovadas                   │
│   /api/admin/*     afiliados · analytics · modelos                         │
└─────────────────────────────────┬──────────────────────────────────────────┘
                                  │  Prisma Client
                                  ▼
┌────────────────────────────────────────────────────────────────────────────┐
│                                   DADOS                                    │
│   prisma/schema.prisma  →  20 modelos · 7 enums                            │
│   SQLite (dev)  ── ou ──  PostgreSQL / Neon (produção)                     │
└────────────────────────────────────────────────────────────────────────────┘
```

### Camadas do Código

| Camada | Localização | Responsabilidade |
|---|---|---|
| **Guarda de rota** | `src/middleware.ts` | Bloqueia áreas restritas sem cookie de sessão |
| **Páginas** | `src/app/**/page.tsx` | Rotas, metadata e composição de layout |
| **Layouts** | `src/app/*/layout.tsx` + `src/components/*/‑layout.tsx` | Topbar, sidebar e área de conteúdo |
| **Componentes de área** | `src/components/{admin,modelo,assinante,afiliado}/` | Telas completas de cada portal |
| **Componentes públicos** | `src/components/pages/`, `header/`, `footer/`, `chat/` | Site institucional |
| **UI base** | `src/components/ui/` | Avatar, Badge, Botão, Card, Input, Modal |
| **Contextos** | `src/contexts/` | Idioma, tema e estado da sidebar |
| **Hooks** | `src/hooks/useAuth.ts` | Sessão no cliente |
| **Bibliotecas** | `src/lib/` | `auth.ts`, `prisma.ts`, `database.ts`, `email.ts`, `utils.ts` |
| **APIs** | `src/app/api/**/route.ts` | Endpoints REST |
| **Dados estáticos** | `src/data/blog-posts.ts` | Conteúdo do blog |

### Fluxo de Login

```
POST /api/auth/login  { email, password, remember }
        │
        ├─► 1. busca o e-mail em admins        → tipo = "admin"
        ├─► 2. senão, busca em modelos         → tipo = "modelo"
        ├─► 3. senão, busca em assinantes      → tipo = "assinante"
        │        └─ se existir registro em afiliados → tipo = "afiliado"
        │
        ├─► bcrypt.compare(senha, hash)
        ├─► gera o token e grava o cookie httpOnly "auth_token"
        │     (secure em produção · sameSite lax · 24 h, ou 7 dias com "lembrar")
        │
        └─► resposta { success, user, redirectTo }
                  /admin/dashboard   |   /modelo/dashboard
                  /afiliado/dashboard |  /assinante/dashboard
```

---

## 👥 Papéis e Permissões

O sistema possui **4 portais independentes**, cada um com a própria sidebar/topbar e conjunto de telas.

| Papel | Tabela | Área | Acesso |
|---|---|---|---|
| 👑 **Admin** | `admins` | `/admin/*` | Controle total da plataforma: usuários, financeiro, conteúdo, integrações, relatórios |
| 💃 **Modelo** | `modelos` | `/modelo/*` | Conteúdo, assinantes, chat, gorjetas, ganhos, planos, saques, impulsionamento, afiliados |
| 🧑 **Assinante** | `assinantes` | `/assinante/*` | Explorar modelos, assinar, comprar packs, chat, gorjetas, favoritos, downloads |
| 🤝 **Afiliado** | `afiliados` | `/afiliado/*` | Links, comissões, saques, estatísticas, referidos |
| 🌐 **Visitante** | — | rotas públicas | Home, modelos, hot videos, blog, políticas, cadastro e login |

> **Nota:** o papel **afiliado** não é uma tabela própria — é um `assinante` que possui registro vinculado em `afiliados` (`Assinante.afiliacao`). O login detecta isso automaticamente e redireciona para `/afiliado/dashboard`.

### Menu do portal Admin

```
Principal      → Dashboard · Analytics
Negócios       → Assinaturas · Afiliados
Usuários       → Modelos · Assinantes
Financeiro     → Minhas Comissões · Pagamentos
Sistema        → Chat · Integrações · Relatórios · Configurações
```

### Menu do portal Modelo

```
Dashboard      → Dashboard
Conteúdo       → Fotos · Vídeos · Packs
Relacionamento → Chat ao Vivo · Assinantes · Gorjetas
Financeiro     → Saques · Planos
Marketing      → Impulsionar · Afiliados
Conta          → Perfil
```

### Menu do portal Assinante

```
Modelos · Fotos · Vídeos · Packs · Chat ao Vivo · Gorjetas
Favoritos · Compras · Explorar
```

### Menu do portal Afiliado

```
Visão Geral · Links Compartilhados · Comissões · Saques
Estatísticas · Histórico · Referidos · Configurações
```

---

## 📂 Estrutura do Projeto

```
hotlovers/
├── prisma/
│   ├── schema.prisma          # 20 modelos + 7 enums (fonte da verdade do domínio)
│   ├── seed.ts                # Seed: admin, 2 assinantes, 10 modelos,
│   │                          # 2 planos, 3 packs, conteúdos e gorjetas
│   ├── create-afiliado.ts     # Script auxiliar para criar um afiliado de teste
│   └── dev.db                 # Banco SQLite de desenvolvimento (versionado)
│
├── public/                    # Ícones (favicon.svg/.ico/apple-touch-icon.png),
│   │                          # SVGs padrão do Next e imagens de demonstração
│
├── scripts/
│   ├── apply-dark-mode.sh     # Aplica variantes dark: nos componentes do admin
│   ├── fix-dark-all.sh        # Corrige classes dark: duplicadas
│   └── generate-favicons.sh   # Gera os favicons a partir do SVG
│
├── src/
│   ├── app/                                     ── ROTAS (App Router)
│   │   ├── layout.tsx                           Layout raiz: fonte Inter, metadata, ThemeProvider
│   │   ├── globals.css                          Tokens de design (tema claro + escuro)
│   │   ├── page.tsx                             HOME pública
│   │   │
│   │   ├── admin/             (14 rotas)        👑 Painel administrativo
│   │   ├── modelo/            (15 rotas)        💃 Painel da criadora
│   │   ├── assinante/         (15 rotas)        🧑 Painel do assinante (+ layout.tsx)
│   │   ├── afiliado/          (9 rotas)         🤝 Painel do afiliado (+ layout.tsx)
│   │   │
│   │   ├── api/               (10 endpoints)    ── BACKEND
│   │   │   ├── auth/          login · logout · me · register · forgot-password · reset-password
│   │   │   ├── modelos/       catálogo público
│   │   │   └── admin/         afiliados · analytics · modelos
│   │   │
│   │   ├── modelos/           catálogo público + [id] detalhe
│   │   ├── modelos-hot/       vitrine premium ("Plano Black")
│   │   ├── hot-videos/        galeria de vídeos + [id]
│   │   ├── blog/              listagem + [slug]
│   │   ├── login/ · cadastro/ · recuperar-senha/
│   │   ├── sobre/ · atendimento/ · duvidas-frequentes/
│   │   └── termos/ · privacidade/ · cookies/ · politicas-*/
│   │
│   ├── components/                              ── UI (195 arquivos)
│   │   ├── admin/          63 arquivos  (dashboard, charts, tables, sidebar, topbar)
│   │   ├── modelo/         56 arquivos  (conteúdo, chat, saques, impulsionar, perfil)
│   │   ├── assinante/      22 arquivos  (dashboard, explorar, filtros, grid/lista)
│   │   ├── afiliado/       15 arquivos  (conteúdo de cada tela + sidebar/topbar)
│   │   ├── pages/          13 arquivos  (hero, carrossel, seções, cards, galeria)
│   │   ├── ui/              6 arquivos  (avatar, badge, botao, card, input, modal)
│   │   └── header/ · footer/ · chat/ · cookies/ …
│   │
│   ├── contexts/            language-context · sidebar-context · theme-context
│   ├── hooks/               useAuth
│   ├── data/                blog-posts.ts
│   ├── lib/                 auth · database · email · prisma · utils
│   └── middleware.ts        Guarda de rotas restritas
│
├── next.config.ts           Configuração do Next (imagens, TS, ESLint)
├── tailwind.config.ts       Configuração legada (o Tailwind v4 usa globals.css)
├── components.json          Registro shadcn/ui (style new-york, ícones lucide)
├── tsconfig.json            TS estrito + alias "@/*" → "./src/*"
├── eslint.config.mjs        ESLint flat config (next/core-web-vitals + next/typescript)
└── package.json             Scripts e dependências
```

**Padrão de arquitetura modular:** cada rota é uma casca fina que apenas monta o layout e o componente de conteúdo.

```tsx
// src/app/modelo/dashboard/page.tsx  — exemplo do padrão adotado
import { ModeloLayout } from "../../../components/modelo/modelo-layout";
import { ModeloDashboardContent } from "../../../components/modelo/dashboard/dashboard-content";

export default function ModeloDashboardPage() {
  return (
    <ModeloLayout>
      <ModeloDashboardContent />
    </ModeloLayout>
  );
}
```

---

## 📊 Modelo de Dados

Fonte da verdade: [`prisma/schema.prisma`](prisma/schema.prisma) — **20 modelos**, **7 enums**, 581 linhas.

### 🔐 Usuários e Autenticação

| Modelo | Tabela | Descrição |
|---|---|---|
| `Admin` | `admins` | Administradores da plataforma. O campo `permissoes` (JSON) define o que cada um pode acessar. |
| `Modelo` | `modelos` | Criadora de conteúdo. Guarda dados pessoais (CPF, RG), endereço completo, links de redes sociais, **dados bancários/PIX**, status de aprovação, verificação, preço mensal e `percentualPlataforma` (padrão 20%). |
| `Assinante` | `assinantes` | Usuário consumidor. Dados de perfil, endereço opcional e flags `ativo` / `verificado` / `premium`. |

### 💳 Planos e Assinaturas

| Modelo | Tabela | Descrição |
|---|---|---|
| `Plano` | `planos` | Plano de assinatura. `tipo` = `PLATAFORMA` (acesso geral) ou `MODELO_INDIVIDUAL` (vinculado a uma modelo). Benefícios: `acessoTotalConteudo`, `limiteMensagens`, `downloadPacks`, `suporteVip`. |
| `Assinatura` | `assinaturas` | Vínculo assinante ↔ plano (↔ modelo opcional). Status, datas, valor e campos de integração de pagamento (`stripeSubscriptionId`). |

### 📦 Packs e Conteúdo

| Modelo | Tabela | Descrição |
|---|---|---|
| `Pack` | `packs` | Pacote vendável de uma modelo: título, descrição, preço, capa, destaque e controle de estoque (`limitado`, `limite`, `vendidos`). |
| `ConteudoPack` | `conteudo_packs` | Itens do pack (`foto` ou `video`) com URL, título e ordem de exibição. |
| `CompraPack` | `compra_packs` | Compra de um pack por um assinante, com status de pagamento. |
| `Conteudo` | `conteudos` | Conteúdo avulso da modelo (`foto`, `video`, `live`) com thumbnail, flags `premium`/`gratuito`, tags e métricas de `visualizacoes` e `curtidas`. |

### 💸 Monetização

| Modelo | Tabela | Descrição |
|---|---|---|
| `Doacao` | `doacoes` | Gorjeta enviada por um assinante a uma modelo, com mensagem e status de pagamento. |
| `Ganho` | `ganhos` | Lançamento financeiro com split: `valor` bruto, `comissao` (plataforma) e `liquido` (modelo). Origem: assinatura, pack, doação ou afiliado. |

### 🤝 Afiliados

| Modelo | Tabela | Descrição |
|---|---|---|
| `Afiliado` | `afiliados` | Código único + percentual de comissão e estatísticas acumuladas (`totalCliques`, `totalConversoes`, `totalGanho`). Vinculado a um assinante. |
| `GrupoAfiliado` | `grupo_afiliados` | Vínculo entre afiliado e modelo com percentual de comissão específico. |
| `ConversaoAfiliado` | `conversao_afiliados` | Registro de conversão (assinatura, pack ou doação) com `valor` e `comissao`. |

### 💬 Relacionamento

| Modelo | Tabela | Descrição |
|---|---|---|
| `Mensagem` | `mensagens` | Mensagem de chat entre remetente, modelo e assinante, com flag `lida`. |
| `Avaliacao` | `avaliacoes` | Nota de 1 a 5 + comentário. Único por par (`assinanteId`, `modeloId`). |

### 📣 Comunicação e Plataforma

| Modelo | Tabela | Descrição |
|---|---|---|
| `Template` | `templates` | Template de `EMAIL` ou `WHATSAPP`, com assunto, conteúdo e variáveis (JSON). |
| `Disparo` | `disparos` | Campanha de envio: destinatários (JSON), agendamento, status (`AGENDADO`/`ENVIADO`/`FALHADO`) e contadores de enviados/falhados. |
| `Banner` | `banners` | Banner promocional com imagem, link, posição (`hero`, `lateral`, `footer`) e ordem. |
| `ConfiguracaoSistema` | `configuracao_sistema` | Chave/valor de configuração global da plataforma. |

### Enums

| Enum | Valores |
|---|---|
| `TipoUsuario` | `ADMIN` · `MODELO` · `ASSINANTE` |
| `StatusAssinatura` | `ATIVA` · `CANCELADA` · `SUSPENSA` · `VENCIDA` |
| `StatusPagamento` | `PENDENTE` · `APROVADO` · `REJEITADO` · `CANCELADO` |
| `TipoPlano` | `PLATAFORMA` · `MODELO_INDIVIDUAL` |
| `StatusModelo` | `PENDENTE_APROVACAO` · `APROVADA` · `REJEITADA` · `SUSPENSA` |
| `TipoTemplate` | `EMAIL` · `WHATSAPP` |
| `StatusDisparo` | `AGENDADO` · `ENVIADO` · `FALHADO` |

### Relacionamentos Principais

```
      Admin ──1:N──► Banner · Template · Disparo · ConfiguracaoSistema

    Modelo ──1:N──► Plano (individual) · Pack · Assinatura · Doacao
        │           GrupoAfiliado · Avaliacao · Conteudo · Mensagem · Ganho
        │
        └──1:N──► ConteudoPack ──N:1──► Pack ──1:N──► CompraPack

  Assinante ──1:N──► Assinatura · Doacao · CompraPack · Avaliacao · Mensagem
        │
        └──1:1──► Afiliado ──1:N──► ConversaoAfiliado
                      │
                      └──1:N──► GrupoAfiliado ──N:1──► Modelo

                        Plano ──1:N──► Assinatura ◄──N:1── Assinante
```

### Dados de Seed (`prisma/dev.db`)

| Tabela | Registros |
|---|---:|
| `admins` | 1 |
| `modelos` | 10 |
| `assinantes` | 3 |
| `afiliados` | 1 |
| `planos` | 2 |
| `packs` | 3 |
| `conteudo_packs` | 5 |
| `conteudos` | 3 |
| `compra_packs` | 3 |
| `doacoes` | 4 |

---

## 🧩 Módulos e Portais

### 🌐 Site Público (22 rotas)

| Rota | Conteúdo |
|---|---|
| `/` | Home: hero, carrossel de modelos, seções de destaque, CTA de newsletter, banner de cookies e chat flutuante |
| `/modelos` | Catálogo público com carrosséis por categoria (consome `/api/modelos`) |
| `/modelos/[id]` | Perfil da modelo: hero, galeria, packs, vídeos e estatísticas |
| `/modelos-hot` | Vitrine premium ("Plano Black", destaque 4K) |
| `/hot-videos` e `/hot-videos/[id]` | Galeria e player de vídeos (4K UHD, lives, métricas) |
| `/blog` e `/blog/[slug]` | Blog com posts completos, autor, tags, curtidas e compartilhamento |
| `/login` | Login com detecção de papel e redirecionamento automático |
| `/cadastro` | Registro (assinante ou modelo) com validação de 18+ e aceite dos termos |
| `/recuperar-senha` | Recuperação de senha em etapas |
| `/sobre` · `/atendimento` · `/duvidas-frequentes` | Institucional, suporte 24/7 e FAQ |
| `/termos` · `/termos-condicoes` · `/privacidade` · `/politicas-privacidade` · `/politicas-assinantes` · `/politicas-modelos` · `/cookies` | Documentos legais |

### 👑 Portal Admin (14 telas)

| Tela | Descrição |
|---|---|
| `dashboard` | Cards de estatísticas, gráfico de receita, atividade recente, top modelos, quick actions e saúde do sistema |
| `analytics` | Métricas em tempo real, funil de conversão, analytics de cliques e receita, top performers |
| `assinaturas` | Tabela de assinaturas, comparativo de planos e fluxo de receita |
| `assinantes` | Tabela com filtros, estatísticas e visão geral de planos |
| `modelos` | Tabela com filtros e estatísticas de aprovação/receita |
| `afiliados` | Tabela, estatísticas, gráfico de comissões e top afiliados |
| `comissoes` | Comissões da plataforma por origem (assinaturas, gorjetas, packs, fotos, vídeos) |
| `pagamentos` | Pagamentos por tipo, gráficos e métodos |
| `chat-ao-vivo` | Sidebar de conversas + área de chat |
| `integracoes` | Cards de gateways de pagamento, redes sociais, analytics, e-mail e APIs |
| `relatorios` | Relatórios com gráficos e estatísticas |
| `configuracoes` | Cards de configuração geral, comissões, pagamentos, e-mail e API |

### 💃 Portal Modelo (15 telas)

Dashboard · Visão Geral · Fotos · Vídeos · Packs · Chat ao Vivo · Assinantes · Gorjetas · Saques · Planos · Impulsionar (campanhas ativas + cards) · Afiliados · Perfil (dados, fotos, redes, privacidade) · Receitas · Configurações

### 🧑 Portal Assinante (15 telas)

Dashboard (categorias, modelos em destaque, recomendadas, trending) · Explorar (filtros, grid, lista) · Fotos · Vídeos · Packs · Chat ao Vivo · Gorjetas · Favoritos · Compras · Assinaturas · Minha Assinatura · Pagamentos · Downloads · Perfil · Meu Perfil

### 🤝 Portal Afiliado (9 telas)

Dashboard · Links Compartilhados · Comissões · Saques · Estatísticas · Histórico · Referidos · Perfil · Configurações

---

## 🔌 APIs

Todas as rotas ficam em `src/app/api/` e usam os **Route Handlers** do Next.js.

### 🔐 Autenticação — `/api/auth`

| Método | Endpoint | Descrição | Estado |
|---|---|---|---|
| `POST` | `/api/auth/login` | Autentica em admin/modelo/assinante, aplica bcrypt, grava o cookie `auth_token` e devolve `redirectTo` | ✅ Funcional |
| `POST` | `/api/auth/logout` | Remove os cookies `auth_token` e `refresh_token` | ✅ Funcional |
| `GET` | `/api/auth/me` | Sessão atual | ⚠️ Retorna usuário mockado |
| `POST` | `/api/auth/register` | Cadastro com validações (e-mail, senha ≥ 8, 18+, termos) | ⚠️ Valida, mas não persiste |
| `POST` | `/api/auth/forgot-password` | Solicita recuperação (resposta genérica anti-enumeração) | ⚠️ Não envia e-mail |
| `POST` | `/api/auth/reset-password` | Redefine senha com token | ⚠️ Não persiste |

**Exemplo — login**

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@hotlovers.com","password":"admin123456","remember":true}'
```

```json
{
  "success": true,
  "message": "Login realizado com sucesso!",
  "user": { "id": "cm…", "nome": "Super Admin", "email": "admin@hotlovers.com", "foto": null, "tipo": "admin" },
  "redirectTo": "/admin/dashboard"
}
```

### 🌐 Catálogo Público

| Método | Endpoint | Descrição | Estado |
|---|---|---|---|
| `GET` | `/api/modelos` | Lista modelos com `status = APROVADA` e `ativo = true`. Parâmetros: `?destaque=true` e `?limit=N` | ✅ Funcional (Prisma + banco) |

### 🛡️ Admin — `/api/admin`

| Método | Endpoint | Descrição | Estado |
|---|---|---|---|
| `GET` | `/api/admin/analytics` | Overview, top modelos, receita diária e métricas de conversão | ⚠️ Dados simulados |
| `GET` | `/api/admin/modelos` | Lista de modelos + estatísticas | ⚠️ Dados simulados |
| `POST` | `/api/admin/modelos` | Criar modelo | ⚠️ Stub |
| `PUT` | `/api/admin/modelos` | Aprovar/rejeitar em lote | ⚠️ Stub |
| `GET` | `/api/admin/afiliados` | Afiliados, stats, top performers e comissões | ⚠️ Dados simulados |
| `POST` | `/api/admin/afiliados` | Criar afiliado | ⚠️ Stub |
| `PUT` | `/api/admin/afiliados` | Atualizar status em lote | ⚠️ Stub |

> ⚠️ **Importante para quem for dar manutenção:** apenas `/api/auth/login`, `/api/auth/logout` e `/api/modelos` acessam o banco de verdade. Os endpoints administrativos retornam **dados simulados** (`afiliadosSimulados`, `modelosSimulados`, `analyticsData`) e precisam ser conectados ao Prisma.

---

## 🎨 Design System

### Paleta de Marca

| Token | Valor | Uso |
|---|---|---|
| `--hotlovers-red` (claro) | `#CC0000` | Vermelho puro forte — marca |
| `--hotlovers-red-light` | `#FF3333` | Estados de hover/ênfase |
| `--hotlovers-red-dark` | `#990000` | Profundidade |
| `--hotlovers-pink` | `#FF0033` | Acento rosa-avermelhado |
| `hotlovers-red` (Tailwind) | `#E53E3E` | Classe utilitária `text-hotlovers-red` |
| Gradiente de marca | `linear-gradient(135deg, #E53E3E → #FF6B6B)` | Classe `bg-hotlovers-gradient` |
| Escuro | `#000000` + `#EF4444` | Estilo "Netflix": preto puro e vermelho vibrante |

### Tokens Semânticos

Os componentes usam apenas tokens (`bg-background`, `text-foreground`, `bg-card`, `border-border`, `text-muted-foreground`, `bg-primary`), garantindo que o tema claro/escuro funcione automaticamente.

```
:root  →  fundo branco #FFFFFF · texto slate-900 · bordas suaves · vermelho puro
.dark  →  fundo preto #000000 · cards #171717 · bordas #404040 · vermelho red-500
```

### Componentes UI Base (`src/components/ui/`)

`Avatar` · `Badge` · `Botao` · `Card` · `Input` · `Modal` — baseados em Radix UI + shadcn/ui (style `new-york`), com ícones sempre em **Lucide**.

### Convenções Visuais

- **Layouts largos:** containers `max-w-[1440px]` ou largura total com `px-6 lg:px-16`.
- **Cantos arredondados:** `rounded-xl` (cards internos) e `rounded-2xl/3xl` (blocos grandes).
- **Tipografia:** fonte **Inter**, carregada via `next/font/google`.
- **Sem gradientes arco-íris:** apenas o gradiente vermelho da marca.
- **Dark mode por classe**, com atributo `class` no `<html>` (next-themes) e `storageKey: "hotlovers-theme"`.
- **Idioma:** dicionário próprio com PT / EN / ES via `LanguageContext`.

---

## 📈 Status de Implementação

Documentação honesta do que já existe, do que é interface sem backend e do que falta.

### ✅ Pronto

- Estrutura completa de rotas (75 páginas) e navegação dos 4 portais
- Design system com tema claro/escuro, tokens, responsividade e i18n
- Schema Prisma fechado com 20 modelos e 7 enums
- Seed com dados realistas (10 modelos, planos, packs, gorjetas, compras e afiliado)
- Login funcional com bcrypt, cookie httpOnly e redirecionamento por papel
- Middleware de proteção das áreas restritas
- `/api/modelos` lendo o banco via Prisma
- 33 páginas com conteúdo real (institucional, blog, hot videos, cadastro, login e políticas)
- 12 telas administrativas completas com gráficos, tabelas e filtros
- Serviço de e-mail (Nodemailer + SMTP Hostinger) implementado como biblioteca

### ⚠️ Interface pronta, backend pendente

- `/api/auth/me` retorna usuário mockado (o `useAuth` do cliente depende dele)
- `/api/auth/register` valida tudo mas não grava no banco
- `/api/auth/forgot-password` e `/api/auth/reset-password` não enviam e-mail nem alteram a senha
- Endpoints `/api/admin/*` devolvem dados simulados
- Dashboards de admin/modelo/assinante/afiliado exibem dados estáticos nos componentes

### ❌ Ainda não implementado

- Reset de senha real (tokens em tabela própria — há `TODO` em `src/lib/database.ts`)
- Gateways de pagamento (Stripe aparece apenas como campo no schema)
- Upload de arquivos (fotos/vídeos das modelos)
- Chat em tempo real (sem WebSocket/Socket.io)
- Sessões em Redis (`REDIS_URL` está no `.env`, mas não é usado)
- Disparos de e-mail/WhatsApp em massa (`Template` e `Disparo` existem só no schema)
- 39 sub-rotas anunciadas na sidebar do admin (ex.: `/admin/assinaturas/active`) ainda não têm página
- Testes automatizados, CI/CD e Docker

### 🧱 Dívida Técnica Conhecida

| Item | Detalhe |
|---|---|
| `next.config.ts` | `ignoreBuildErrors: true` e `ignoreDuringBuilds: true` — o build passa mesmo com erros de TypeScript e ESLint |
| `tailwind.config.ts` | Arquivo legado do Tailwind v3; o projeto usa Tailwind v4 (`@theme` no `globals.css`). O plugin `tailwindcss-animate` citado ali **não está instalado** (usa-se `tw-animate-css`) |
| Dois lockfiles | `pnpm-lock.yaml` e `package-lock.json` versionados juntos — padronizar em um gerenciador |
| Dois motores de tema | `next-themes` no layout raiz **e** um `theme-context.tsx` próprio |
| Componentes duplicados | `footer` / `footer-mobile` / `footer-simples` / `footer/mobile`, `cookies` / `cookies-banner`, `chat-flutuante` / `chat/flutuante` |
| `src/lib/database.ts` | A camada `DatabaseService` concorre com o uso direto de `prisma` nas APIs — vários métodos são `TODO` |
| Dados de demonstração | Imagens do Unsplash e nomes fictícios espalhados pelos componentes |

---

## 💻 Desenvolvimento Local

### Pré-requisitos

| Requisito | Versão |
|---|---|
| Node.js | 20+ (recomendado 22 LTS) |
| pnpm | 9+ (ou npm/yarn — veja a ressalva dos lockfiles) |
| SQLite | Embutido via Prisma (nada a instalar) |

### 1. Clonar e instalar

```bash
git clone https://github.com/WBianchi/hotlovers.git
cd hotlovers
pnpm install          # o postinstall já executa `prisma generate`
```

### 2. Configurar variáveis de ambiente

```bash
cp .env.example .env
```

| Variável | Descrição | Exemplo |
|---|---|---|
| `DATABASE_URL` | Conexão do banco | `file:./dev.db` (SQLite) ou `postgresql://…neon.tech/neondb?sslmode=require` |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | Servidor SMTP | `smtp.hostinger.com` · `587` · `false` |
| `SMTP_USER` / `SMTP_PASS` | Credenciais do SMTP | `smtp@hotlovers.online` |
| `FROM_EMAIL` / `FROM_NAME` | Remetente padrão | `noreply@hotlovers.online` · `HotLovers` |
| `JWT_SECRET` / `JWT_REFRESH_SECRET` | Segredos de assinatura dos tokens | string longa e aleatória |
| `JWT_EXPIRES_IN` / `JWT_REFRESH_EXPIRES_IN` | Validade dos tokens | `24h` · `7d` |
| `BCRYPT_ROUNDS` | Custo do hash de senha | `12` |
| `APP_ENV` / `APP_NAME` / `APP_URL` | Configuração da aplicação | `development` · `HotLovers` · `http://localhost:3000` |
| `REDIS_URL` | Sessões (previsto) | `redis://localhost:6379` |
| `RESET_PASSWORD_URL` | Base do link de recuperação | `http://localhost:3000/recuperar-senha` |

> 🔐 **Nunca suba segredos reais para o repositório.** Veja a seção [⚠️ Atenção](#-atenção--pendências-técnicas).

### 3. Preparar o banco

```bash
pnpm db:push       # prisma db push — cria/atualiza as tabelas
pnpm db:seed       # popula com dados de demonstração
```

> **Regra do projeto:** usar sempre `prisma db push` + `prisma generate`. **Não** usar `prisma migrate` — o fluxo adotado é o push direto do schema.

### 4. Rodar

```bash
pnpm dev           # http://localhost:3000
```

### Scripts Disponíveis

| Script | Comando | O que faz |
|---|---|---|
| `pnpm dev` | `next dev` | Servidor de desenvolvimento |
| `pnpm build` | `prisma generate && next build` | Gera o client Prisma e compila para produção |
| `pnpm start` | `next start` | Sobe o build de produção |
| `pnpm lint` | `eslint` | Análise estática |
| `pnpm db:generate` | `prisma generate` | Regenera o Prisma Client |
| `pnpm db:push` | `prisma db push` | Aplica o schema ao banco |
| `pnpm db:seed` | `tsx prisma/seed.ts` | Popula o banco |
| `postinstall` | `prisma generate` | Roda automaticamente após a instalação |

### Credenciais de Teste (criadas pelo seed)

| Papel | E-mail | Senha | Redireciona para |
|---|---|---|---|
| 👑 Admin | `admin@hotlovers.com` | `admin123456` | `/admin/dashboard` |
| 💃 Modelo | `lari@hotlovers.com` | `modelo123` | `/modelo/dashboard` |
| 💃 Modelo | `amanda@hotlovers.com` | `modelo123` | `/modelo/dashboard` |
| 🧑 Assinante | `joao@email.com` | `123456` | `/assinante/dashboard` |
| 🤝 Afiliado | `carlos@afiliado.com` | `afiliado123` | `/afiliado/dashboard` (via `prisma/create-afiliado.ts`) |

> ⚠️ Senhas fracas e de domínio público — **trocar antes de qualquer ambiente real**.

### Scripts Auxiliares (`scripts/`)

```bash
bash scripts/apply-dark-mode.sh      # aplica variantes dark: nos componentes do admin
bash scripts/fix-dark-all.sh         # corrige classes dark: duplicadas
bash scripts/generate-favicons.sh    # regenera os favicons a partir do SVG
```

---

## 🚀 Deploy

A aplicação é um projeto Next.js padrão e foi preparada para a **Vercel** (histórico de commits: *"feat: projeto pronto para deploy vercel"*).

### Passo a passo (Vercel)

1. Importe o repositório na Vercel (`New Project → GitHub → WBianchi/hotlovers`).
2. Configure as **Environment Variables** com todas as chaves da tabela de `.env`, apontando `DATABASE_URL` para o Postgres (Neon).
3. O build roda `prisma generate && next build` automaticamente.
4. **Ajuste obrigatório:** `prisma/schema.prisma` está com `provider = "sqlite"`. Para produção em Postgres, troque para:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

5. Após o primeiro deploy, aplique o schema e o seed no banco de produção:

```bash
pnpm dlx prisma db push     # ou execute localmente com a DATABASE_URL de produção
pnpm db:seed                # ⚠️ o seed APAGA todos os dados antes de inserir
```

> ⚠️ **O `seed.ts` executa `deleteMany()` em todas as tabelas.** Nunca rode o seed em produção com dados reais.

### Alternativa: VPS

```bash
git clone https://github.com/WBianchi/hotlovers.git
cd hotlovers && pnpm install
cp .env.example .env && nano .env
pnpm db:push && pnpm build
pnpm start                       # ou via PM2: pm2 start "pnpm start" --name hotlovers
```

Sugestão: proxy reverso com Nginx apontando para a porta 3000 e certificado via Certbot.

---

## ⚠️ Atenção — Pendências Técnicas

Pontos que **precisam ser resolvidos antes de ir para produção**, em ordem de prioridade.

| # | Problema | Impacto | Como resolver |
|---|---|---|---|
| 🔴 1 | **`.env` está versionado no Git** (contém `SMTP_PASS`, `JWT_SECRET`, `JWT_REFRESH_SECRET`, `DATABASE_URL`) | Segredos expostos publicamente no GitHub | Remover do índice (`git rm --cached .env`), manter apenas `.env.example`, **rotacionar todas as credenciais** e adicionar `.env` ao `.gitignore` |
| 🔴 2 | **`prisma/dev.db` está versionado** (banco com usuários e senhas hasheadas do seed) | Vazamento de estrutura e dados de teste | Adicionar ao `.gitignore` e remover do índice |
| 🔴 3 | **O provider do Prisma é `sqlite`, mas a `DATABASE_URL` aponta para Neon Postgres** | `prisma db push` / `generate` falham e a aplicação não conecta | Definir o provider conforme o ambiente (SQLite local / PostgreSQL em produção) |
| 🟠 4 | **`ignoreBuildErrors` e `ignoreDuringBuilds` estão ligados** | Erros de tipo e lint passam silenciosamente para produção | Corrigir os erros e desativar as duas flags |
| 🟠 5 | **O token de sessão é um JSON em base64, não um JWT** (`login/route.ts` usa `Buffer.from(...).toString('base64')`) | Cookie previsível, sem assinatura e fácil de forjar; `AuthService.verifyToken` não é usado no fluxo | Assinar com `AuthService.generateToken()` e validar no middleware |
| 🟠 6 | **O middleware valida apenas a *presença* do cookie** | Qualquer cookie com o nome `auth_token` dá acesso às áreas restritas | Validar assinatura/expiração e o papel do usuário |
| 🟠 7 | **`/api/auth/me` retorna usuário mockado** | O `useAuth` informa um usuário que pode não ser o real | Ler o cookie, validar o token e buscar o usuário no banco |
| 🟡 8 | **Senhas de seed fracas e públicas** | Acesso indevido em ambientes que usarem o seed | Trocar as senhas e exigir política mínima (o `isValidPassword` já sugere ≥ 8 com número) |
| 🟡 9 | **O registro não persiste** (`/api/auth/register` apenas valida) | Nenhum usuário novo é criado pela interface | Implementar a criação com `DatabaseService.createUser` + hash bcrypt |
| 🟡 10 | **A recuperação de senha é simulada** | Quem esquece a senha não consegue entrar | Criar tabela de tokens, enviar e-mail via `EmailService` e validar no `reset-password` |
| 🟡 11 | **Sem rate limit** nos endpoints de autenticação | Vulnerável a força bruta | Adicionar rate limiting (o Redis já está previsto no `.env`) |
| 🟡 12 | **`console.log` com dados de debug** em `auth.ts` e no middleware | Ruído em produção e vazamento de payload | Remover os logs de debug |
| ⚪ 13 | **Sem testes, CI/CD ou Docker** | Regressões passam despercebidas | Adicionar Vitest/Playwright e um workflow no GitHub Actions |

---

## 🗺️ Roadmap Sugerido

### Fase 1 — Fundação (segurança e dados)
- [ ] Rotacionar segredos e remover `.env` e `dev.db` do Git
- [ ] Corrigir o provider do Prisma (SQLite local / Postgres produção)
- [ ] Implementar JWT real + validação completa no middleware
- [ ] Implementar `/api/auth/me`, `register`, `forgot-password` e `reset-password`
- [ ] Desligar `ignoreBuildErrors` / `ignoreDuringBuilds`

### Fase 2 — Backend do negócio
- [ ] CRUDs reais de modelos, assinantes, afiliados e planos (substituir os mocks)
- [ ] Assinaturas e packs: criação, renovação, cancelamento e histórico
- [ ] Split financeiro automático (`Ganho`) e solicitações de saque
- [ ] Upload de fotos/vídeos (storage) e entrega de conteúdo protegida

### Fase 3 — Experiência
- [ ] Chat em tempo real (WebSocket) substituindo os dados estáticos
- [ ] Checkout integrado (gateway de pagamento + webhooks)
- [ ] Sessões em Redis e rate limiting
- [ ] Painel de analytics com dados reais
- [ ] Disparos de e-mail e WhatsApp (templates já modelados)

### Fase 4 — Qualidade
- [ ] Testes unitários e E2E + pipeline de CI
- [ ] Dockerfile e docker-compose para desenvolvimento
- [ ] Unificar lockfiles, remover o `tailwind.config.ts` legado e consolidar componentes duplicados
- [ ] Auditoria de acessibilidade e performance (Lighthouse)

---

## 🔒 Segurança

### Já implementado

| Prática | Onde |
|---|---|
| Hash de senhas com **bcrypt** (rounds configuráveis) | `src/lib/auth.ts`, `login/route.ts`, `seed.ts` |
| Cookie **httpOnly** + `sameSite: lax` + `secure` em produção | `login/route.ts` |
| Validação de e-mail e senha (mín. 8 caracteres) | `login`, `register`, `reset-password` |
| Validação de idade **18+** no cadastro | `register/route.ts`, `AuthService.isValidAge` |
| Resposta genérica em `forgot-password` (evita enumerar contas) | `forgot-password/route.ts` |
| Guarda de rota por middleware para as áreas restritas | `src/middleware.ts` |
| Aceite obrigatório dos termos no cadastro | `register/route.ts` |
| `.env.example` documentando as chaves sem segredos reais | raiz do projeto |

### Requer atenção

| Ponto | Ver [⚠️ Pendências](#-atenção--pendências-técnicas) |
|---|---|
| Segredos versionados (`.env`) e banco de dev versionado (`dev.db`) | itens 1 e 2 |
| Token de sessão não assinado (base64 em vez de JWT) | item 5 |
| O middleware não valida o token, apenas a existência do cookie | item 6 |
| Ausência de rate limiting nas rotas de autenticação | item 11 |
| Logs de debug com payload do token | item 12 |
| Conteúdo adulto: exige verificação de idade, moderação e conformidade legal (LGPD) | — |

---

## 📚 Convenções

### Código
- **Idioma do domínio em português:** nomes de campos, modelos e mensagens (`nome`, `assinaturas`, `criadoEm`, `Ganho`).
- **TypeScript estrito** (`strict: true`) com alias de importação `@/*` → `./src/*` (as páginas em `src/app` usam caminhos relativos).
- **`"use client"` explícito** na maioria dos componentes de interface, que são client components.
- **Providers e contexto** isolados em `src/contexts`; hooks em `src/hooks`.
- **Componentes de UI genéricos** ficam em `src/components/ui`; componentes de negócio ficam na pasta da sua área.
- **Ícones sempre em Lucide** — nunca emojis na interface.

### Banco de dados
- **`prisma db push` sempre; `prisma migrate` nunca.**
- Nomes de tabela em `snake_case` plural via `@@map` (`admins`, `conteudo_packs`, `configuracao_sistema`).
- IDs `cuid()` em todos os modelos, com `criadoEm` / `atualizadoEm` para auditoria.

### Nomenclatura de arquivos
- Rotas em português e kebab-case: `/modelos-hot`, `/chat-ao-vivo`, `/duvidas-frequentes`.
- Componentes de área seguem `nome-da-tela-content.tsx`, `nome-da-tela-header.tsx`, `nome-da-tela-stats.tsx`.
- Pastas organizadas com `index.tsx` quando representam um bloco único.

### Git
- Branch principal: `main`.
- Mensagens semânticas em português: `feat:`, `fix:`, `docs:`.

---

## 🔗 Links

| Recurso | URL |
|---|---|
| 📦 Repositório | https://github.com/WBianchi/hotlovers |
| 🌐 Produção | *a definir* |
| 📧 Contato SMTP | `smtp@hotlovers.online` |

---

## Licença

Projeto **privado e proprietário**. Todos os direitos reservados. Não é permitido uso, cópia, modificação ou distribuição sem autorização expressa do titular.

---

<div align="center">

### HotLovers 💋

**Plataforma de assinatura de conteúdo adulto premium — Next.js 16 · React 19 · Prisma**

Documentação gerada a partir da análise completa do código-fonte (294 arquivos TS/TSX · 34.425 linhas · 75 rotas · 20 modelos de dados).

</div>
