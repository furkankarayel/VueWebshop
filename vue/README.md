Der Webshop kann per "quasar dev" oder "quasar build" in der CMD kompiliert werden. 
Die erste Variante stellt die Developer Umgebung zusammen und erstellt auch 
einen Webserver der die Seite lokal auf einem Port veröffentlicht.

-quasar build:
Diese Möglichkeit erstellt ein "Dist" Ordner im Project Root in der die App
als eine HTML Datei zusammengestellt ist. Durch den Aufruf der index.html 
kann die App angeschaut werden.

-quasar dev:

Es wird vorausgesetzt NPM auf dem Rechner zu haben.
Wenn man sich im Terminal oder in der CMD im Project Root befindet muss zunächst
npm install ausgeführt werden. Daraufhin muss die CLI des Quasar Frameworks
installiert werden durch den Befehl "npm install -g @quasar/cli".
Nach den oben genannten Schritten kann man das Projekt 
mit dem Befehl "quasar dev" ausführen. 
Das Projekt sollte unter http://localhost:8080 erreichbar sein.