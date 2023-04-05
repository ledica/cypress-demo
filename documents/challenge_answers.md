# TC1: Teste de carga e estresse de upload de arquivos

Objetivo: Testar a capacidade da plataforma da Avenue de lidar com múltiplos uploads de arquivos por diferentes usuários e verificar se há uma resposta adequada caso um arquivo com extensão inválida seja enviado.

Cenário: Simular a ação de múltiplos usuários realizando upload de arquivos com diferentes tamanhos e extensões, como comprovantes de residência e fotografias de documentos de identidade, durante a criação de conta na plataforma da Avenue. Verificar se a validação de extensão de arquivo ocorre em todas as camadas da aplicação e se a plataforma é capaz de lidar com o aumento de tráfego sem afetar o desempenho. Mapear possíveis gargalos e falhas de disponibilidade dos serviços durante as operações de validação dos arquivos.

### Passos:
    1. Acessar a página de criação de conta da plataforma
    2. Inserir os documentos de comprovante de residência e fotografia de documento de identidade
    3. Realizar upload de diferentes tamanhos e extensões de arquivo
    4. Verificar se a validação de extensão de arquivo ocorre em todas as camadas da aplicação
    5. Verificar se a plataforma é capaz de lidar com o aumento de tráfego durante as operações de upload de arquivos
    6. Mapear possíveis gargalos e falhas de disponibilidade dos serviços durante as operações de validação dos arquivos

### Resultados Esperados:
    • A plataforma deve ser capaz de lidar com múltiplos uploads de arquivos com diferentes tamanhos e extensões sem afetar o desempenho
    • A validação de extensão de arquivo deve ocorrer em todas as camadas da aplicação
    • Caso um arquivo com extensão inválida seja enviado, a plataforma deve apresentar uma resposta adequada ao usuário
    • Não deve haver gargalos ou falhas de disponibilidade dos serviços durante as operações de validação dos arquivos

### Justificativa: 
Este teste é importante para garantir que a plataforma da Avenue seja capaz de lidar com a demanda de múltiplos uploads de arquivos realizados por diferentes usuários, durante a criação de conta. Além disso, é fundamental que a validação de extensão de arquivo ocorra em todas as camadas da aplicação, para prevenir possíveis problemas de segurança ou integridade dos dados. Por fim, o teste também visa identificar possíveis gargalos e falhas de disponibilidade dos serviços durante as operações de validação dos arquivos, garantindo uma melhor experiência do usuário na plataforma.

# TC2 - Teste de Usabilidade do Menu "Explore o Mercado"

Objetivo: Verificar a usabilidade do menu "Explore o Mercado" e a funcionalidade de exibição dos ativos disponíveis em cada categoria.

Cenário: O usuário acessa o menu "Explore o Mercado" na plataforma da Avenue. O usuário verifica se as categorias de investimento estão corretas e se as descrições dos tipos de investimento são claras e precisas.

### Passos:
    1. Acessar o menu "Explore o Mercado".
    2. Verificar se as categorias de investimento estão corretas e se cada card possui um botão "Ver Ativos".
    3. Clicar em "Ver Ativos" de uma das categorias.
    4. Verificar se a plataforma padrão de listagem de opções de investimento é exibida corretamente.
    5. Verificar se é possível filtrar e classificar os ativos de acordo com as preferências do usuário.
    6. Verificar se a plataforma permite a visualização de informações relevantes sobre os ativos, como preços, gráficos de desempenho, dados de análise fundamental e técnica, entre outros.
    7. Verificar se a plataforma permite a seleção e compra de ativos com facilidade e rapidez.

### Resultados Esperados:
    • As categorias de investimento devem estar corretas e descritas de forma clara e precisa.
    • Todos os cards devem ter um botão "Ver Ativos" funcional.
    • A plataforma padrão de listagem de opções de investimento deve ser exibida corretamente e com todas as funcionalidades esperadas.
    • O usuário deve ser capaz de filtrar e classificar os ativos de acordo com as suas preferências.
    • As informações relevantes sobre os ativos devem ser exibidas de forma clara e organizada.
    • A plataforma deve permitir a seleção e compra de ativos com facilidade e rapidez.
    • A experiência do usuário deve ser positiva e satisfatória, com poucos erros ou problemas de usabilidade.

### Justificativa: 
O menu "Explore o Mercado" é uma das principais funcionalidades da plataforma da Avenue e é uma das principais maneiras pelas quais os usuários podem encontrar novas oportunidades de investimento. É essencial garantir que a usabilidade deste menu seja adequada e que os ativos sejam exibidos corretamente em cada categoria para que os usuários possam tomar decisões de investimento informadas. Além disso, uma experiência positiva do usuário aumenta a probabilidade de o usuário continuar utilizando a plataforma e recomendá-la a outros investidores.

# TC3: Teste de Resistência a Falhas por Injeção de SQL

Objetivo: O objetivo deste teste é identificar possíveis vulnerabilidades de segurança na plataforma em relação a ataques de injeção de SQL.
Cenário: O cenário de teste consiste em simular um ataque de injeção de SQL nos formulários de login e cadastro de usuário da plataforma. Para realizar este teste, será necessário usar uma ferramenta de teste de penetração para enviar uma sequência de comandos SQL maliciosos como entrada dos campos de login e/ou cadastro de usuário.

### Passos:
    1. Identificar os pontos de entrada vulneráveis no formulário de login e/ou cadastro de usuário da plataforma.
    2. Selecionar uma ferramenta de teste de penetração, como OWASP ZAP ou SQLMap.
    3. Configurar a ferramenta selecionada para enviar sequências de comandos SQL maliciosos como entrada nos campos de login e/ou cadastro de usuário.
    4. Executar o teste de injeção de SQL nos formulários selecionados.
    5. Verificar se a plataforma é capaz de resistir ao ataque de injeção de SQL e se as defesas da plataforma são ativadas, impedindo a injeção de SQL.

### Resultados Esperados:
    Os resultados esperados deste teste são:
    • Identificação de quaisquer vulnerabilidades de segurança na plataforma em relação à injeção de SQL.
    • Confirmação de que a plataforma está protegida contra a injeção de SQL.
    • Registro de quaisquer falhas ou erros que ocorram durante o teste.

### Justificativa:  
A segurança é uma das principais preocupações em qualquer plataforma de investimento, especialmente quando se trata de dados financeiros e informações pessoais dos usuários. A realização deste teste de resistência a falhas de injeção de SQL ajudará a garantir que a plataforma esteja protegida contra possíveis ataques maliciosos, garantindo a segurança dos dados dos usuários. Além disso, a detecção e correção de quaisquer vulnerabilidades de segurança ajudará a manter a reputação da empresa como uma plataforma confiável e segura para investimentos.