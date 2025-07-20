# Site Platform

Plataforma Node.js simples para servir conteúdo dinâmico com base no subdomínio do request.

### Objetivo

Permitir que múltiplos subdomínios apontem para um único IP (servidor EasyPanel), utilizando Traefik para roteamento e emissão de SSL automática. A aplicação identifica o `host` do cabeçalho e exibe conteúdo correspondente.

### Como usar

1. Aponte o subdomínio (ex: `ultrak9pro.trendle.shop`) para o IP do servidor.
2. Crie o app no EasyPanel com este repositório.
3. Configure Traefik para lidar com os subdomínios e certificados SSL (labels ou UI).
4. O conteúdo exibido depende do subdomínio.

### Requisitos

- EasyPanel com Traefik
- Docker
- Node.js (v20)
