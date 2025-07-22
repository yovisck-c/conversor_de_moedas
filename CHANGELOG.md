# 📦 CHANGELOG – Conversor de Moedas

Todas as mudanças e melhorias realizadas neste projeto são listadas abaixo em ordem cronológica reversa.

----------

## [v1.0.0] – 2025-07-19
### Adicionado
- Estrutura inicial do projeto com HTML, CSS e JS
- Campo para digitar valor
- Seletores de moeda de origem e destino
- Botão "Converter" para acionar a função de conversão
- Consumo de API pública `open.er-api.com` para taxa de câmbio em tempo real
- Layout responsivo e visual limpo

----------

## [v1.1.0] – 2025-07-19
### Adicionado
- Botão 🔁 para inverter moedas com ícone Font Awesome (`fa-right-left`)
- Estilização do botão como botão circular moderno
- Organização dos elementos com Flexbox (`.currency-row`)
- Correção do comportamento de inversão automática (remoção da conversão automática)

----------

## [v1.2.0] – 2025-07-20
### Adicionado
- Implementação do modo escuro (🌙/☀️) com alternância via botão
- Atualização visual para todos os componentes no tema escuro
- Botão com ícone e troca de texto dinâmica (Modo Claro/Escuro)
- Publicação no GitHub Pages!

----------

## [v1.3.0] – 2025-07-21
### Adicionado
- Nova estrutura de pastas (assets/, scripts/, styles/) para melhor organização do projeto
- Imagem de capa do projeto adicionada para uso no README.md
- Atualização do README.md com visual melhorado e instruções de uso
- Exibição do horário da taxa de câmbio com base na API
- Botão "Atualizar taxa" para forçar nova requisição da taxa de câmbio
- Design ajustado do modo escuro/claro (visualmente mais refinado)
- Adição de escrita informando qual versão utilizada (e data de atualização)

### Alterado
- Código do script.js refatorado para separar responsabilidades
- style.css atualizado com melhorias de espaçamento, legibilidade e acessibilidade
- Caminhos atualizados no index.html conforme nova organização

### Corrigido
- Correção no comportamento do botão de inverter moedas (antes ele convertia automaticamente)
- Problema de acentuação e termos duplicados em imagens de capa

----------

## [v1.3.1] – 2025-07-21
### Corrigido
- O botão "Modo Escuro" agora alterna corretamente entre "🌙 Modo Escuro" e "☀️ Modo Claro"
- Corrigido o erro de carregamento do script causado por caminho incorreto e MIME Type inválido

### Alterado
- Script atualizado para garantir que toda lógica roda após `DOMContentLoaded`, evitando erros de elementos nulos

----------

👤 Autor: Maria Clara Piromali Guarizo 
🔗 GitHub: [@yovisck-c](https://github.com/yovisck-c)  
🌍 [GitHub Page](https://yovisck-c.github.io/conversor_de_moedas)
