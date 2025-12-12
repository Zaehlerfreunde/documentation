# Shelly Plus 1: Wärmepumpe über SG-Ready steuern

Dieses Tutorial beschreibt, wie Sie einen Shelly Plus 1 an die SG-Ready-Schnittstelle Ihrer Wärmepumpe anschließen und das Gerät mit unserer App verbinden, um die Wärmepumpe zu steuern.

## Voraussetzungen

- Ein Shelly Plus 1 (nicht Shelly Plus 1PM). Stellen Sie sicher, dass das Gerät auf dem neuesten Firmware-Stand ist.
- Zugriff auf das lokale Netzwerk (WLAN) und die Möglichkeit, das Shelly mit dem WLAN zu verbinden.
- Kenntnisse über die SG-Ready-Schnittstelle Ihrer Wärmepumpe (Herstellerhandbuch). Wichtig: SG-Ready ist in der Regel eine voltfreie (potentialfreie) Schaltkontakt-Schnittstelle.
- Schraubenzieher, Spannungsprüfer / Multimeter und ggf. Isoliermaterial.

## Sicherheitshinweise

- Arbeiten an elektrischen Anlagen nur mit abgeschalteter Versorgung und wenn Sie dafür qualifiziert sind.
- Wenn Sie unsicher sind, ziehen Sie einen Elektriker hinzu. Falsche Verdrahtung kann Geräteschäden oder gefährliche Zustände verursachen.

## SG-Ready Betriebszustände

SG-Ready definiert insgesamt vier Betriebszustände, von denen zwei durch unsere App verwendet werden. Bei einem PV-Überschuss wird der Betriebszustand 3 aktiviert, der als „Einschaltempfehlung“ gilt. Die Wärmepumpe trifft in diesem Fall die Entscheidung eigenständig. Besteht kein PV-Überschuss mehr, wird die Wärmepumpe wieder in den Betriebszustand 2 (Normalbetrieb) zurückgeschaltet.


## Schritt 1 — Verdrahtung: Shelly als potentialfreier Schalter

1. Schalten Sie die Stromversorgung der Wärmepumpe ab.
2. Finden Sie die SG-Ready-Klemmen an Ihrer Wärmepumpe (siehe Handbuch). Normalerweise sind das zwei Kontakte, die als voltfreier Schaltkontakt fungieren.
3. Verbinden Sie die beiden SG-Ready-Klemmen mit den Schaltkontakten des Shelly Relay (COM und NO/NC, je nach gewünschtem Verhalten). WICHTIG: Schließen Sie keine Netzspannung an die SG-Ready-Klemmen an — es muss ein potentialfreier Kontakt sein.
	 - Empfehlung: Verwenden Sie den Relais-Ausgang des Shelly als potentialfreien Schließer (COM ↔ NO), damit beim Schalten die SG-Ready-Schnittstelle geschlossen wird.
4. Sichern Sie die Verbindungen mechanisch und isolieren Sie offene Leiter.
5. Schalten Sie die Stromversorgung wieder ein.

## Schritt 2 — Shelly einrichten

1. Öffnen Sie die Shelly-App oder die Web-Oberfläche des Shelly Plus 1 und verbinden Sie das Gerät mit Ihrem WLAN.
2. Geben Sie dem Shelly einen sprechenden Namen (z. B. `SGReady-WP`), damit Sie ihn später in unserer App wiederfinden.
3. Stellen Sie den Relais-Modus so ein, dass der Ausgang als Schließer (NO) arbeitet, wenn Ihr Use-Case dies erfordert. Prüfen Sie anhand des Handbuchs der Wärmepumpe, ob SG-Ready durch Schließen oder Öffnen des Kontakts aktiviert wird.
4. Testen Sie mit einem Multimeter oder über die Shelly-Oberfläche, dass das Relais den Kontakt zuverlässig schließt/öffnet.

## Schritt 3 — Shelly mit unserer App verbinden


1. Öffnen Sie unsere App und navigieren Sie zu „Geräte verbinden“ / „Integrationen“. Wählen Sie `Wärmepumpe` und dann `SG-Ready`.
2. Melden Sie sich mit Ihrem Shelly-Cloud-Account an (OAuth/Token) — unsere App holt dann Geräte und Status automatisch.
3. Wählen Sie das zuvor konfigurierte Gerät (`SGReady-WP`) aus und fügen Sie es Ihrem Space hinzu.
4. Jetzt können Sie Regeln aktivieren um Ihre Wärmepumpe intelligent zu steuern.

## Schritt 4 — Testen und Verifizieren

1. In der Shelly App: Senden Sie einen Test-Befehl. Beobachten Sie die Schaltaktion des Shelly (Status in App, LED oder Relais-Kontakt mit Multimeter).
2. Bestätigen Sie an der Wärmepumpe, dass die gewünschte Betriebsänderung eintritt (z. B. Lastreduzierung). Manche Wärmepumpen geben eine Statusmeldung oder Logmeldung aus — prüfen Sie diese für zusätzliche Sicherheit.

## Troubleshooting

- Shelly reagiert nicht:
	- Prüfen Sie WLAN-Verbindung, IP-Adresse und ob das Gerät in der Shelly-App erreichbar ist.
	- Prüfen Sie, ob die Firewall/mDNS im Netzwerk die Erkennung blockiert.
- Schaltkontakt zeigt kein Verhalten an Wärmepumpe:
	- Vergewissern Sie sich, dass die beiden SG-Ready-Klemmen korrekt mit den Relais-Kontakten verbunden sind.
	- Messen Sie mit einem Multimeter, ob der Kontakt wirklich geschlossen wird, wenn Sie den Shelly schalten.
	- Prüfen Sie das Wärmepumpen-Handbuch, ob zusätzlich eine Konfiguration an der Wärmepumpe notwendig ist (z. B. Aktivierung der externen Steuerung).
- Kurzfristige Ausfälle/Störungen:
	- Prüfen Sie Firmware-Versionen (Shelly + Wärmepumpe) und aktualisieren Sie bei Bedarf.

### Hinweise & Best Practices

- Dokumentieren Sie die vorgenommenen Verdrahtungen und Einstellungen (z. B. Foto, Beschriftung der Klemmen).
- Verwenden Sie nach Möglichkeit Sicherungen und Schutzleiter, wie vom Hersteller empfohlen.
- Testen Sie das System im Normalbetrieb über mehrere Zyklen, bevor Sie es in die automatische Steuerung überführen.

