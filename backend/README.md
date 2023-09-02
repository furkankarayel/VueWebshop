Das Backend wird per "docker compose up" gestartet 
und läuft aktuell nicht ohne extra Schritte auszuführen.
Der Befehl npm install wird in der Docker Umgebung nicht ausgeführt.
Dieser Befehl müsste manuell ausgeführt werden, sodass der node_modules Ordner
vorhanden ist erst dann läuft das Backend mit dem bereits oben genannten Kommando.