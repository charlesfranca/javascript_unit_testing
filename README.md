# Requisitos

É necessário que você tenha o node e bower instalados.

# Intruções

Caso não tenha o node instalado você pode acessar o site "https://nodejs.org/en/download/" e baixar a versão para o seu sistema operacional.
Depois é só baixar o projeto, abrir a pasta principal pelo promp de comando e rodar os comandos npm install e bower install para instalar as dependências necessárias.

No caso de estar usando o chrome para fazer seus testes, saiba que ele bloqueia chamadas de ajax para arquivos usando o protocolo file///.
Por isso você tera que inicia-lo pelo prompt de comando.

Primeiro feche todas as instancias do google e tenha certeza de que não há nenhum processo dele ativo.

Depois, se estiver usando o windows, abra o CMD, abra o caminho onde o chrome esta instalado(geralmente na pasta arquivos de programas x86/Google/Chrome/Application/) e rode o seguinte comando "chrome.exe --allow-file-access-from-files".
Se estiver usando o MAC rode o comando "open /Applications/Google\ Chrome.app/ --args --allow-file-access-from-files".

Caso contrario o chrome ira falhar na chamada loadFixtures() da biblioteca jasmine-jquery.
