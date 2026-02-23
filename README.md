# HWApp

Aplicativo mobile em React Native que consome uma API com dados criptografados em AES-256-GCM, realiza a descriptografia no dispositivo e exibe uma lista de 50 contatos com suporte offline.

## Arquitetura

O app segue uma arquitetura unidirecional em camadas:

    Config/Axios -> Service -> Hooks -> Screen/index -> Screen/Layout -> Components

- **Config**: Instancia global do Axios com baseURL, timeout e headers
- **Service**: Funcoes de chamada HTTP individuais
- **Hooks**: Orquestracao de dados (fetch + decrypt + cache) via TanStack Query
- **Screen/index**: Logica de negocio e gerenciamento de estado
- **Screen/Layout**: Componente 100% visual, recebe tudo via props
- **Components**: Componentes reutilizaveis com separacao JSX/styles

## Decisoes Tecnicas

| Tecnologia                      | Justificativa                                                                 |
| ------------------------------- | ----------------------------------------------------------------------------- |
| TanStack Query                  | Gerenciamento de estado server-side sem cache local (gcTime: 0, staleTime: 0) |
| react-native-quick-crypto       | Descriptografia AES-256-GCM nativa via JSI (performatica)                     |
| react-native-keychain           | Armazenamento temporario seguro da secret key durante descriptografia         |
| react-native-mmkv               | Storage offline ultra-rapido via JSI para cache de dados descriptografados    |
| @react-native-community/netinfo | Deteccao de conectividade para fluxo online/offline                           |
| Axios                           | HTTP client com interceptors, timeout e tipagem forte                         |
| React Navigation                | Navegacao nativa com transicoes suaves                                        |
| Path Aliases (@)                | Imports absolutos para melhor legibilidade e manutencao                       |

## Setup

1. Instalar dependencias:

```bash
npm install
```

2. Instalar pods (iOS):

```bash
cd ios && pod install && cd ..
```

3. Configurar variaveis de ambiente:

```bash
cp .env.example .env
```

4. Executar o app:

```bash
# iOS
npx expo run:ios

# Android
npx expo run:android
```

## Variaveis de Ambiente

Copie `.env.example` para `.env`:

| Variavel                 | Descricao                               |
| ------------------------ | --------------------------------------- |
| EXPO_PUBLIC_API_BASE_URL | URL base da API de dados criptografados |

## Testes

Testes unitarios cobrem a logica de descriptografia AES-256-GCM:

```bash
npx jest --verbose
```

Cenarios testados:

- Descriptografia com dados validos retorna User[] correto
- IV invalido lanca erro
- authTag corrompido lanca erro
- secretKey incorreta lanca erro
- Dados vazios/malformados lancam erro
- Estrutura JSON correta apos descriptografia
- Limpeza do Keychain mesmo em caso de erro

## Estrutura de Pastas

    src/
    ├── components/         # Componentes reutilizaveis (JSX + styles separados)
    │   ├── UserCard/
    │   ├── SkeletonLoader/
    │   ├── EmptyState/
    │   ├── ErrorState/
    │   └── SyncButton/
    ├── hooks/              # Custom hooks (fetch + decrypt + cache)
    │   ├── useUsersHook.ts
    │   └── useDecryptHook.ts
    ├── screens/            # Telas (index = logica, Layout = visual)
    │   ├── Home/
    │   └── Details/
    ├── services/api/       # Chamadas HTTP individuais
    ├── config/             # Axios instance + theme constants
    ├── types/              # Interfaces TypeScript compartilhadas
    └── navigation/         # React Navigation stack
