1) ANDARE SU IMPOSTAZIONI della REPO DI GITHUB => SCHEDA PAGINE => scegliere menu SOURCE => Selezionare GITHUB ACTIONS (beta)
2) CREARE FILE .gitlab-ci.yml
3) CREARE CARTELLE .GITHUB / WORKFLOWS (sottocartella di .github)
4) DENTRO WORKFLOWS CERARE FILE deploy.yml
5) VERIFICARE NEL FILE deploy.yml che in "branches: [nome-branch]" SIA RIPORTATO IL CORRETTO BRANCH DAL QUALE FARE IL DEPLOY
6) IN VITE.CONFIG.JS INSERIRE base: '/<nome-repo>/'
7) PUSHARE E VERIFICARE PUBBLICAZIONE SU https://nomeGitHub.github.io/nome-repo
