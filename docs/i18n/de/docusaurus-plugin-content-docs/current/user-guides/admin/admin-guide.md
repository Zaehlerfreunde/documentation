# Admin Portal Guide

Hier finden Sie die Erklärung zur Nutzung des Admin-Bereichs.

Den Guide für die Nutzung aus der Sicht der Endkunden finden Sie hier (diesen müssen Sie zur Weiterverwendung bitte im Wording + Screenshots für ihre Zwecke anpassen):

[Privatkunde](../private/private.md)

Hier finden Sie die Erklärung für die Benutzung unserer Lösung, wenn Sie KMU Kunden oder andere B2B Kunden haben.

[Anleitung für Zählerfreunde Geschäftskunden](../business/business.md)

**Verzeichnis:**

# 🔷 **1. Einführung**

### 🎯 **Zweck des Admin-Portals**

Willkommen im Admin-Portal. Dieses Portal ist Ihre zentrale Verwaltungsplattform für alle Submetering-, Visualisierungs- und Abrechnungsprozesse. Es ermöglicht Ihnen als Administrator:

-   Ihre Endkunden effizient zu verwalten
-   Zählerstände und Messstellen zentral zu organisieren
-   Tarife anzulegen und zu verwalten
-   Benutzerrollen zu steuern
-   Ihr White-Label Branding einzustellen
-   Supportanfragen strukturiert zu bearbeiten

Diese Anleitung führt Sie Schritt für Schritt durch alle Funktionen, sodass Sie Ihr System vollständig eigenständig bedienen können.

# 🔷 **2. Dashboard & Navigation**

### 🖥️ **2.1 Dashboard Überblick**

Nach der Registrierung/Anmeldung, öffnet sich die Seite mit dem Dashboard, wie bei allen Nutzern. Wenn Sie dann oben rechts auf den Buchstaben klicken, öffnet sich das Benutzermenü. Als Mitarbeiter haben Sie die Möglichkeit, auf „Admin Bereich“ zu klicken. Bitte teilen Sie uns dazu mit, welche Mitarbeiter einen Admin-Zugang erhalten sollen. Alternativ können Sie Ihre Admin URL aufrufen: “ihrunternehmen.[admin.zaehlerfreunde.de](http://admin.zaehlerfreunde.de/)”

![Bildschirmfoto 2025-07-09 um 15.25.38.png](/img/user-guides/admin/Bildschirmfoto_2025-07-09_um_15.25.38.png)

### 🗂️ **2.2 Navigation**

Die linke Seitenleiste ist Ihre Hauptnavigation. Sie enthält:

-   **Kundenverwaltung:** Alle Endkunden/Objekte auf einen Blick verwalten.
-   **Geräte/Zählpunkte:** Alle installierten Zähler und Sensoren inkl Status auf einen Blick.
-   **Tarife:** Preise und Abrechnungslogiken festlegen.
-   **Benutzerverwaltung:** Mitarbeiterzugänge und Rechte verwalten.
-   **ABOs:** Eigene Abos erstellen
-   **Einstellungen:** White-Label Branding, Standardtexte, Systemkonfiguration.
-   **Support**

# 🔷 **3. Allgemein**

### 👥 **3.1 Kundenübersicht**

**Zweck:** Hier legen Sie neue Endkunden an, verwalten ihre Stammdaten und ordnen ihnen Zählpunkte sowie Tarife zu. Jeder Kunde sollte mindestens **einen zugeordneten Zählpunkt und Tarif** haben.

### 📝 **3.2 Kundendetails -** Nutzer

-   Auflistung aller registrierten Nutzer mit Zeitstempel der letzten Anmeldung und Anzahl der Anmeldungen.
-   Die Endkunden können sich selbst registrieren oder halb manuell durch Uploads von Ihnen angelegt werden. Alternativ ist auch eine vollautomatisierte API-Anbindung und Erstellung der Kunden-Accounts möglich. Sie müssen nicht alle Endkunden einzeln hinzufügen. Diese Funktion bietet sich besonders am Anfang für Testzwecke an, um einen langsamen und sicheren Übergang sicherzustellen. Dies ermöglicht es, die Plattform zunächst mit einem kleinen, ausgewählten Kreis an Kunden zu testen.
-   Wenn auf einen Nutzer geklickt wird, sind die angemeldeten Objekte des Endnutzers und die angebundenen Geräte sichtbar.

## 🏢3.3 Objekte

### 🎯 **Zweck der Funktion „Objekte“**

In **Objekte** verwalten Sie **Liegenschaften, Gebäude oder Einheiten**, denen Zählpunkte (Zähler) zugeordnet werden. Dies dient der strukturierten Abbildung Ihrer realen Gebäude- und Zählerstruktur im System.

**💡 Warum ist das wichtig?**

-   Übersicht aller Standorte und Einheiten Ihrer Endkunden.
-   Klare Zuordnung von Zählern zu Gebäuden, Wohnungen oder Gewerbeeinheiten.
-   Grundlage für Abrechnungen und Verbrauchsberichte pro Objekt oder Einheit.

---

## 👁️‍🗨️ **3.3.1 Objekte Übersicht**

Unter **Objekte** finden Sie eine Tabelle mit:

-   **Objektname:** z.B. „Musterstraße 12“ oder „Wohnanlage Nordpark“.
-   **Adresse:** Straße, PLZ, Ort.
-   **Anzahl Zählpunkte:** Wie viele Zähler diesem Objekt zugeordnet sind.
-   **Aktionen:** Anzeigen, Bearbeiten, Löschen.

![Bildschirmfoto 2025-07-09 um 15.38.52.png](/img/user-guides/admin/Bildschirmfoto_2025-07-09_um_15.38.52.png)

-   Über das Plus-Symbol können neue Objekte angelegt werden und anschließend direkt Personen zu diesem Objekt eingeladen werden. Das ist besonders hilfreich, wenn mehrere Personen im gleichen Haushalt Zugang zu demselben Objekt haben möchten und nicht alles doppelt einrichten wollen.
-   Hierarchien: Egal ob eine Region mit mehreren Liegenschaften mit mehreren Mietern oder Einfamilienhäuser/kleine mittelständische Unternehmen. Mit der hierarchischen Struktur kann man Gebäude beliebig im Admin-Dashboard konfigurieren, unterordnen und Einsichtsrechte verteilen.
-   Beim Klicken auf das Objekt werden zusätzliche Informationen sichtbar, wie Nutzer und Geräte. Hier kann man auch Einladungen versenden und einsehen, welcher Tarif angebunden ist bzw. diesen hinterlegen.

![Bildschirmfoto 2024-08-05 um 14.50.20.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_14.50.20.png)

-   Für Geschäftskunden und Tarifstrukturen die an die jeweilige Spannungsebene geknüpft sind, lässt sich diese für die korrekte Kostenberechnung (siehe “Tarife”) hinterlegen.
    ![Bildschirmfoto 2025-05-14 um 14.55.02.png](/img/user-guides/admin/Bildschirmfoto_2025-05-14_um_14.55.02.png)

## **🏠 3.3.2 _“Was passiert bei einem Mieterwechsel?”:_**

-   Sie haben die Möglichkeit Geräte für bestimmte Zeitfenster freizugeben: Durch das Klicken auf das Uhr Symbol, lässt sich einstellen ab wann der Mieter zum Beispiel keine Einsicht mehr auf die Zählerdaten haben darf. Der Gleiche Zähler kann nun mit einem neuen Startdatum einem neuen Objekt zugeordnet werden. So wird verhindert dass alte Mieter den Verbrauch von Folgemietern einsehen können.

![Bildschirmfoto 2025-07-03 um 19.11.59.png](/img/user-guides/admin/Bildschirmfoto_2025-07-03_um_19.11.59.png)

## 🏢 **3.3.3 Best Practices**

✔️ Legen Sie **alle Gebäude oder Einheiten als Objekte an**, bevor Sie Zählpunkte zuordnen.

✔️ Verwenden Sie klare und konsistente Objektnamen (z.B. „Musterstraße 12, Wohnung 3.OG links“).

✔️ Prüfen Sie regelmäßig, ob alle Zählpunkte korrekt zugeordnet sind.

### 🔌 3.4 Geräte

-   Auflistung aller angebundener Geräte.
-   Status der Geräte (verbunden oder nicht verbunden)
-   Möglichkeit Geräte einzelnen Objekten hinzuzufügen.

Außerdem: Wenn Sie Geräte automatisiert über unsere API anlegen, können individuelle IDs hinterlegt werden. Dies dient zur einheitlichen Identifizierung Ihrer Geräte

![Bildschirmfoto 2025-04-24 um 16.25.22.png](/img/user-guides/admin/Bildschirmfoto_2025-04-24_um_16.25.22.png)

## 🏷️ **3.4 Tarife/Verträge**

### 🎯 **Zweck der Funktion „Tarife“**

In Tarife verwalten Sie die rechtlichen Beziehungen Ihrer Endkunden. Jeder Vertrag enthält Informationen zu Tarifen und Preisbestandteilen. Diese können individuell oder über API angelegt werden und global zugeordnet werden.

---

### 👁️‍🗨️ **3.4.1 Verträge Übersicht**

Die Übersicht zeigt Ihnen:

-   **Vertragsnummer oder Name**
-   **Kunde:** Welchem Endkunden der Vertrag zugeordnet ist.
-   **Tarif:** Welcher Tarif im Vertrag hinterlegt ist.

![Bildschirmfoto 2025-02-16 um 13.49.25.png](/img/user-guides/admin/Bildschirmfoto_2025-02-16_um_13.49.25.png)

---

### 🔧 **Funktionen in der Verträge Übersicht**

✅ **Neuen Vertrag anlegen**

1. Klick auf **„Neuen Vertrag anlegen“**.
2. Auswahl des Kunden aus der Liste.
3. Tarif auswählen, der dem Vertrag zugeordnet wird.
4. Vertragslaufzeit festlegen (Startdatum, optional Enddatum).
5. Weitere Vertragsdetails eingeben (z.B. Vertragsnummer, interne Notizen).
6. Speichern.

---

✅ **Bestehenden Vertrag bearbeiten**

-   Klick auf Vertrag → _„Bearbeiten“_.
-   Änderungen vornehmen (z.B. Tarifwechsel, Laufzeitverlängerung).
-   Speichern.

---

✅ **Vertrag Löschen**

-   Klick auf _„🗑️“_ neben dem Vertrag.
-   Bestätigung der Kündigung im Pop-up.

---

### 📄 **3.4.2 Vertragsdetails**

In der Detailansicht sehen Sie:

-   **Alle Vertragsdaten** (Name, Nummer, Laufzeit, Status).
-   **Tarifdetails:** Preise, Gültigkeit.
-   **Verknüpfte Zählpunkte:** Welche Zähler diesem Vertrag zugeordnet sind.

Mit dieser Funktion können Tarifprodukte konfiguriert und angelegt werden. Steuern und verschiedene weitere Preiskomponenten können miteinander verrechnet werden.

-   Tarife können mit flexiblen Bestandteilen global angelegt werden und Kundengruppen anhand von Verträgen zugeordnet werden.
-   Netzentgelte werden automatisch zugeordnet und verrechnet.

![Bildschirmfoto 2025-02-16 um 13.50.53.png](/img/user-guides/admin/Bildschirmfoto_2025-02-16_um_13.50.53.png)

### ✉️ **3.5 Einladungen (Endnutzer)**

-   Hier können Sie Einladungen an bestimmte Personen per E-Mail verschicken. Das ist besonders hilfreich, wenn Sie unsere Plattform am Anfang testen und langsam einführen möchten. Sie können ausgewählte Kunden einladen, sich zu registrieren, die Plattform auszuprobieren und Feedback zu geben.
-   Sobald Sie zu 100% zufrieden sind, können sich alle Endkunden ganz einfach über einen Link registrieren. Die Anmeldung kann auf Ihrer Webseite verlinkt oder per E-Mail an alle Kunden gesendet werden, bzw. automatisiert über unsere API-Anbindung erfolgen.

### 👁️‍🗨️ **3.5.1 Einladungen Übersicht**

In der **Einladungen Übersicht** sehen Sie alle bisher versendeten Einladungen an Endkunden mit:

-   **E-Mail Adresse** des eingeladenen Endkunden
-   **Status:** ausstehend (Einladung noch nicht angenommen) oder aktiviert
-   **Versendet am:** Datum der Einladung
-   **Aktionen:** Einladung erneut senden oder löschen

**_FAQ: Wie erstelle ich manuell ein Objekt + Gerät und lade einen Nutzer dazu ein?_**

**Achtung – Wichtiger Hinweis zur Objektzuordnung**

Objekte werden automatisch dem Nutzer zugeordnet, der sie erstellt hat. Wenn der Account eines Nutzers gelöscht wird, werden auch alle diesem Nutzer zugeordneten Objekte unwiderruflich mitgelöscht. Beachten Sie dies insbesondere bei der Verwaltung von Mitarbeiter-Accounts: Sollte ein Mitarbeiter Objekte erstellen und später das Unternehmen verlassen, darf sein Account nicht gelöscht werden, um den Verlust der zugehörigen Objekte zu vermeiden.

**Schritt 1:** Klicken Sie im Admin-Portal auf “Objekte” und anschließend auf das “+” Symbol. Geben Sie anschließend die Details zum Gebäude an. Im nächsten Schritt lassen sich untergeordnete Objekte diesem Objekt hinzufügen (bitte stellen Sie davor sicher, dass die entsprechenden Unterobjekte **bereits erstellt sind, zb. mehrere Wohnungen in einem Gebäude)**

![Bildschirmfoto 2024-08-05 um 14.52.58.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_14.52.58.png)

**Schritt 2:** Klicken Sie auf das Gebäude das Sie gerade neu erstellt haben und fügen Sie dem Gebäude ein Gerät und ggf. einen Tarif hinzu:

![Bildschirmfoto 2024-08-05 um 14.56.06.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_14.56.06.png)

(Theoretisch kann auch schon direkt eine Einladung verschickt werden (Schritt 3), allerdings muss der Endnutzer seine Geräte dann selbst über das User-Dashboard hinzufügen, selbes gilt für die Tarifdetails)

![Bildschirmfoto 2024-08-05 um 14.59.51.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_14.59.51.png)

![Bildschirmfoto 2024-08-05 um 15.07.54.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_15.07.54.png)

**Schritt 3:** Unter dem Reiter “Einladungen” das “Plus”-Symbol auswählen. E-Mail Adresse des Endnutzers angeben und Zugriffsrolle definieren, hierbei kann zwischen folgenden Rollen ausgesucht werden:

-   Nutzer: Erhält alle normalen Rechte eines Endnutzers (Gebäude, Geräte und Infos können geändert und neu hinzugefügt werden)
-   Ansichtszugriff: Erhält Zugriff auf alle Vebrauchsanzeigen und Co. kann aber selbst nichts mehr verstellen oder neu hinzufügen.
-   Aggregierte Sicht: Zeigt Monatsansichten aber keine live-Daten (Z.b. für Hausmeister/Facility Manager)
-   Inhaber: Darf alles was die “Nutzer” Rolle darf und kann seinem/ihrem Objekt weitere Nutzer hinzufügen, genauso wie das Objekt wieder löschen
    ![Bildschirmfoto 2024-08-05 um 15.25.39.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_15.25.39.png)

## 🔑 **3.5.2 Ablauf aus Kundensicht**

1. Kunde erhält **eine E-Mail mit dem Betreff „Einladung zu Ihrem Kundenportal“**.
2. Klick auf den **Aktivierungslink** in der E-Mail.
3. Vergabe eines **persönlichen Passworts**.
4. Login im Kundenportal ist ab sofort möglich.

# 🔷 4**. Verwaltung**

### 4.1 Admins

-   Auflistung aller Mitarbeiter mit Admin-Rechten
-   Möglichkeit weitere Mitarbeiter als Admin hinzuzufügen. Diese Mitarbeiter haben dann das Recht auf den Admin-Bereich zuzugreifen und können alle hier beschriebenen Funktionen sehen und bearbeiten.
-   ACHTUNG! Bitte passen Sie auf, dass hier nicht aus Versehen Kunden hinzugefügt werden oder andere unbefugte Personen.
    ![Bildschirmfoto 2025-07-09 um 16.11.23.png](/img/user-guides/admin/Bildschirmfoto_2025-07-09_um_16.11.23.png)

### 4.2 Zugriffsrollen

-   An dieser Stelle im Admin-Portal, können Sie beliebige Rollen erstellen, denen gewisse Rechte zugeordnet werden wie Nutzer auf Objekte zugreifen können. In folgendem Beispiel kann man eine neue Rolle zb “Hausmeister” erstellen um Nutzer mit dieser Rolle lediglich Dateneinsichtsrechte zu gewähren. Eine Mehrfach Auswahl ist möglich.

![Bildschirmfoto 2025-05-14 um 14.31.25.png](/img/user-guides/admin/Bildschirmfoto_2025-05-14_um_14.31.25.png)

-   Es können weitere Rollen mit unterschiedlichen Berechtigungen für Ihren individuellen Anwendnungsfall zusammengestellt werden

### 4.3 API

Unsere API kann für viele Zwecke genutzt werden. Primär dient sie dazu, langfristig Kosten zu sparen, indem auf die normale Marktkommunikation (MSCONS/AS4) verzichtet wird und die Daten schneller weitergeleitet werden. Über diese API können neue Objekte und Zähler vollautomatisch hinzugefügt sowie Nutzer automatisch angelegt werden. Bilaterale Synchronisierung zwischen unserem System und Ihrem ERP/CRM Systemen ist hierdurch möglich. Bilateral kann hier Die genaue Anleitung für die API finden Sie hier:

[Zählerfreunde API Integration](../../integrations/api-integration.md)

### 4.4 Abo

Unter diesem Menüpunkt können Sie ganz nach Wunsch verschiedene Abo-Modelle für Ihre Endkunden anlegen. Dadurch kann für gewünschte Abos der Funktionsumfang eingeschränkt werden.

![Bildschirmfoto 2025-08-20 um 17.12.16.png](/img/user-guides/admin/Bildschirmfoto_2025-08-20_um_17.12.16.png)

**Schritt 1:** Gewünschten Umfang des Abo’s anlegen und bepreisen.

**Schritt 2:** Unter “Zahlungsart” können Sie zwischen 3 Feldern auswählen. “Stripe” auswählen um unseren oder Ihren Stripe Account zu verbinden (bitte kontaktieren Sie uns für Hilfestellung). “Rechnung” : Bei dieser Auswahl müssen Sie selbst die Rechnungen dem Kunden ausstellen. “Externer Bestellprozess”: Bei dieser Auswahl können Sie einen Link hinterlegen über welchen Ihre Kunden eine von Ihnen bereitgestellte Bestellstrecke finden können

**Schritt 3:** Wählen Sie die Funktionen aus, die Ihren Endkunden innerhalb des Abos bereitgestellt werden sollen.

Über den Reiter “Nutzer” im Admin Menü, können Sie Ihren Nutzern anschließend auch manuell ein Abo zuordnen.

![Bildschirmfoto 2025-08-20 um 17.12.46.png](/img/user-guides/admin/Bildschirmfoto_2025-08-20_um_17.12.46.png)

Neukunden und Endkunden erhalten dann die Auswahloptionen in folgender Ansicht (natürlich in Ihrem Design):

![Bildschirmfoto 2025-08-20 um 17.14.12.png](/img/user-guides/admin/Bildschirmfoto_2025-08-20_um_17.14.12.png)

# ⚙️ 5. Einstellungen

-   ACHTUNG: Bitte beachten Sie, dass alle Anpassungen sich direkt auf alle Nutzer auswirken und sichtbar sind.

In den Einstellungen können einzelne Funktionen ein- oder ausgeschaltet werden. Diese Modularität ermöglicht es uns, Ihnen alle verfügbaren Funktionen zur Verfügung zu stellen und Ihnen gleichzeitig die Möglichkeit zu geben, Anpassungen schnell und einfach selbst vorzunehmen. Zusätzlich können Sie definieren, welche Geräte Ihre Kunden hinzufügen können.

![Bildschirmfoto 2025-08-20 um 17.25.25.png](/img/user-guides/admin/Bildschirmfoto_2025-08-20_um_17.25.25.png)

## 5.1 Funktionen

### **Sicherheit:**

-   “Einladung Erforderlich”:

Für Testzwecke kann man über diese Funktion die allgemeine Registrierung von Endnutzern verbieten. Dadurch lassen sich gezielt ein paar Testkunden einladen, bevor Sie ihre Lösung öffentlich schalten. Ein Kunde benötigt dementsprechend eine Einladungsemail für eine erfolgreiche Registrierung.

-   “Einladungsanfrage erlauben”

Durch Aktivierung dieser Funktion, kann ein Nutzer der nicht zuvor eingeladen wurde aber dennoch auf die App stößt, eine Einladungsanfrage stellen, die Sie anschließend annehmen oder ablehnen können.

### **Dashboard:**

-   “Übersicht”:

Aktivieren und deaktivieren der aggregierten Monatswidgets im Endkundendashboard:

![Bildschirmfoto 2024-08-05 um 16.05.17.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_16.05.17.png)

-   “Aktueller Gerätestatus”:

Aktivieren und deaktivieren der Geräteleistungen im Endkundendashboard

![Bildschirmfoto 2024-08-05 um 16.05.42.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_16.05.42.png)

-   “Support Chatbox:”

Über die Support-Chat-Funktion können Ihre Kunden mit uns kommunizieren und spezifische Fragen beantworten lassen. Hier setzen wir auf persönliche Antworten und nicht auf eine KI.

![Bildschirmfoto 2025-08-20 um 17.30.38.png](/img/user-guides/admin/Bildschirmfoto_2025-08-20_um_17.30.38.png)

-   “Day-Ahead Preise”:

Aktivieren und deaktivieren der Börsenpreisansicht unabhängig von Art des Stromtarifs (ansonsten wird der Börsenpreis ausschließlich Kunden mit dynamischem Tarifprodukt angezeigt)

![Bildschirmfoto 2025-08-22 um 16.55.18.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_16.55.18.png)

-   “Marktprämie für Anlagen”:

Durch die Anbindung verschiedener Schnittstellen, ist es uns gelungen eine Funktion mit Alleinstellungsmerkmal zu entwickeln! Durch die Marktprämie in Echtzeit können Anlagenbetreiber ihre Marktprämie laufend einsehen (nicht wie bisher nur am Ende des Monats). Das erhöht die Planbarkeit und das Liquiditätsmanagement (Zusatzmodul).

![Bildschirmfoto 2025-08-22 um 16.59.31.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_16.59.31.png)

### **Funktionalitäten:**

![Bildschirmfoto 2025-08-22 um 17.05.57.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_17.05.57.png)

-   “Simulator”:

Mit dem **Simulator** können Endkunden Vorschläge errechnen lassen, ob sich eine Solaranlage oder ein Balkonkraftwerk lohnt, wann es sich amortisiert und Angebote anzeigen lassen. Auch hier haben Sie die Möglichkeit, Affiliate-Kommissionen zu verdienen, wenn Ihre Endkunden über diese Funktion eine PV-Anlage kaufen.

-   “Tipps”:

Unter „**Tipps**“ werden Stromspartipps angezeigt. Diese können entweder Ihre eigenen Empfehlungen oder unsere sein, die mit Produkten verlinkt sind und Ihnen potenzielle Affiliate-Kommissionen einbringen.

-   “Dokumententresor”:

Bequem über API oder Mail-Verfahren Rechnungen den Kunden zum Download bereitstellen oder Vertragsunterlagen ablegen.

-   “Shop”:

Im **Shop** bieten wir Produkte an, mit denen man noch mehr Daten messen und den Haushalt besser visualisieren kann. Wenn Sie diesen für Ihre Endkunden zugänglich machen, haben Sie eine weitere Möglichkeit, Affiliate-Kommissionen zu kassieren. Wir können auch gerne Ihre eigenen Produkte dort einstellen.

-   “Objektvergleich”:

Besonders relevant um Anforderungen der HKVO abzudecken. Hier werden Verbräuche einzelner untergeordneter Wohnungen/Objekte mit den anderen Wohnungen/Objekten des Elterngebäudes verglichen.

![Bildschirmfoto 2024-08-05 um 16.12.03.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_16.12.03.png)

-   **“**Automationen/Smarte Steuerung”:

Diese Funktion wird zukünftig zum Herzstück unserer Lösung, sie erlaubt ihren Endkunden von PV-Überschussladen, Preissignal optimiertes Laden und Alarmen/Benachrichtigungen zu profitieren. Sie können wiederum ein eigenes Geschäftsmodell daraus entwickeln (Zusatzmodul). Weiter unten im Admin Dashboard auf der Selben Seite, können Sie die Regeln auf die Ihre Endnutzer Zugriff haben dürfen auswählen.

![Bildschirmfoto 2025-08-22 um 17.09.43.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_17.09.43.png)

Nutzer Dashboard-Ansicht:

![Bildschirmfoto 2025-08-22 um 17.10.58.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_17.10.58.png)

-   “Reporting”

Aktiviert die automatische Reportingfunktion für alle Endnutzer

-   “Objekterstellung”

Dürfen Endnutzer weitere Objekte eigenständig erstellen? Wenn ja, aktivieren Sie diese Funktion

-   “KI Assistent:”

Sie können einen "Agenten" erstellen (unter dem Admin Menüpunkt “Sonstiges” bei Einstellungen) der entweder einfach nur Hilfestellung leistet oder aktiv ins HEMS eingreift.

Kunden können den Assistenten nutzen um

-   Aktionen direkt auszuführen
-   Informationen zu Verbrauch und Co. zu erhalten
-   Regeln im HEMS zu aktivieren

Mittelfristig soll man über die KI alles im HEMS-Bezug auch durch ganz einfache Prompts managen können, z.B.: "mein Auto muss morgen um 9 Uhr voll sein, bitte nutze PV überschuss wenn möglich, sonst netzbezug"... etc.

![Bildschirmfoto 2025-08-22 um 17.17.13.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_17.17.13.png)

Endnutzer Ansicht:

![Bildschirmfoto 2025-08-22 um 17.18.54.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_17.18.54.png)

-   “Energieflussdiagramm”

Aktivieren Sie diese Grafik für Ihre Kunden:

![Bildschirmfoto 2025-08-22 um 17.20.54.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_17.20.54.png)

### **Tarife**

Unter diesen Einstellungen lässt sich festhalten was für Sparten und Tarife der Endnutzer hinzufügen darf.

### **Geräteverbindungen**

Hier können Sie einstellen welche Geräte ihre Nutzer selbst hinzufügen und integrieren dürfen.

-   **Virtuelle Summenzähler (aktuell nur durch Zählerfreunde aktivierbar):**

Mit dieser Funktion können Endkunden mehrere Zähler/Geräte kombinieren - bitte kontaktieren Sie uns für die Freischaltung der Funktion (Zusatzmodul).

## Darstellung

![Bildschirmfoto 2025-08-22 um 17.24.17.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_17.24.17.png)

-   Dark Mode ist verfügbar, muss jedoch zuerst aktiviert werden. Im Dark Mode wird der normale weiße Hintergrund dunkelgrau und die schwarze Schrift weiß.
    -   Wenn Sie den Dark Mode aktivieren möchten, müssen Sie unten ein Logo hinzufügen, das angezeigt wird, wenn sich ein Endkunde für die Nutzung des Dark Modes entscheidet.
-   Sie können Ihr Logo einfach durch die URL Ihres aktuellen Logos ersetzen. Wenn Sie Feineinstellungen wie Größenanpassungen vornehmen möchten, können Sie nebenstehend die Breite (in Pixeln) einstellen.
-   Hier können Sie die Anpassungen an die Unternehmensfarben vornehmen.
-   ACHTUNG: Bitte beachten Sie, dass alle Anpassungen sich direkt auf alle Nutzer innerhalb diesen Mandanten auswirken und sichtbar sind.

### Benachrichtigungen

Verschicken Sie Einladungserinnerungen oder andere Benachrichtigungen direkt über das Admin Dashboard

### Sonstiges

Hier können Sie einen Demo Account für ihre Website erstellen und den KI Assistenten einstellen

![Bildschirmfoto 2025-08-22 um 17.30.18.png](/img/user-guides/admin/Bildschirmfoto_2025-08-20_um_17.30.38.png)

-   **Onboarding für Neukunden**
    -   Wir haben eine **Klickstrecke inklusive Tarifrechner und Vertragsabschlusstrecke** für Sie entwickelt. Dieses Zusatzmodul können Sie hinzubuchen, um Neukunden in Ihr ERP System zu übertragen und um Projekte im Bereich Mieterstrom mit einer individuellen Antragsstrecke zu untermalen.

![Bildschirmfoto 2025-09-01 um 15.47.55.png](/img/user-guides/admin/Bildschirmfoto_2025-09-01_um_15.47.55.png)

![Bildschirmfoto 2025-09-01 um 15.49.37.png](/img/user-guides/admin/Bildschirmfoto_2025-09-01_um_15.49.37.png)

![Bildschirmfoto 2025-09-01 um 15.48.13.png](/img/user-guides/admin/Bildschirmfoto_2025-09-01_um_15.48.13.png)

# 👩‍💻 Datenverwaltung

![Bildschirmfoto 2025-08-22 um 17.27.39.png](/img/user-guides/admin/Bildschirmfoto_2025-08-22_um_17.27.39.png)

### Datenimport

-   Übersicht über Datenimport-Möglichkeiten, einschließlich Dienstleister wie metergrid, BlueMetering und metiundo, sowie über CSV-Import.
-   Der Vorteil hierbei ist, dass alle bestehenden Kundendateien problemlos importiert und in die Plattform integriert werden können.
-   Hinzufügen historischer Verbrauchsdaten: Weder für Sie noch für den Endkunden entsteht dabei zusätzliche Arbeit und bestehende Daten können weiterhin verwendet werden, ohne verloren zu gehen.

### Datenexport

Alle Daten können natürlich auch als XAP-Datei exportiert werden. Das hilft beim Normalisieren der Daten und ist für weitere Anwendungen wichtig, die die Daten verwerten (z.B. ESG Software).

### Datenweiterleitung

Die Datenweiterleitung ist ideal, um alle Daten (Smart-Meter sowie IoT-Geräte) zu normalisieren und kontinuierlich an Dritte, wie Abrechnungsdienstleister, weiterzuleiten. Über die Datenweiterleitung können die Daten auch in Prognose-Tools eingespeist werden, um die Strom-Einkaufsstrategie zu optimieren.

Die technische Einrichtung der Weiterleitung wird Schritt für Schritt erklärt, wenn Sie auf den grünen Button "Weiterleitung einrichten" klicken. Weitere Formate können auf Wunsch individuell hinzugefügt werden

![Bildschirmfoto 2024-08-05 um 16.31.59.png](/img/user-guides/admin/Bildschirmfoto_2024-08-05_um_16.31.59.png)

## **Zusätzliche Einstellungen:**

### **Sub-Mandanten**

Erlaubt das Anlegen von Sub-Mandanten die ihren eigenen Admin-Zugang erhalten und Design-Einstellungen für ihre Endnutzer vornehmen können. (White-Label innerhalb der White-Label Lösung). Sie können daraus wiederum einen eigenen Business-Case bauen (Zusatzmodul).

![Bildschirmfoto 2025-07-03 um 18.49.02.png](/img/user-guides/admin/Bildschirmfoto_2025-07-03_um_18.49.02.png)

Nachdem ein neuer Mandant hinzugefügt wurde, können entweder Sie oder der neue Mandant selbst eine individuelle URL erstellen, welche dann losgelöst von dem übergeordneten Mandanten eine eigenständige Lösung darstellt.

**Schritt 1:** Wählen Sie links im Menüfeld den Mandanten aus, für den Sie eine neue Subdomain erstellen möchten.

**Schritt 2:** Definieren Sie die Subdomain in der Art wie es Ihnen auf der Seite erklärt wird, kopieren Sie die URL und schon kanns losgehen. Wichtig: Wenn Sie die neue Subdomain ausprobieren möchten, stellen Sie sicher, dass Sie selbst ausgelogged sind und dass eine “Login Seite erstellt wurde”

![Bildschirmfoto 2025-07-03 um 18.48.46.png](/img/user-guides/admin/Bildschirmfoto_2025-07-03_um_18.48.46.png)

**Schritt 3:** Login-Seite erstellen: Hier wird definiert wie der Registrierungsbereich bzw. Anmeldebereich für den Submandanten aussehen soll.

![Bildschirmfoto 2025-07-03 um 18.55.28.png](/img/user-guides/admin/Bildschirmfoto_2025-07-03_um_18.55.28.png)

**Schritt 4:** Wie beim eigenen Mandanten lassen sich alle Einstellungen und die Gesamtdarstellung auch für den Submandanten konfigurieren.

-   “Support-Mail”: Hier können Sie ihre eigene Support-Mail hinterlegen, welche Ihren Endnutzern unter “FAQ” angezeigt wird.
-   Bei „FAQ“ (Endkunden Dashboard) finden Ihre Endkunden Antworten auf die häufigsten Fragen. Sie können uns gerne mitteilen wenn wir diese durch Ihre eigenen FAQ ersetzen sollen.

**Bitte kontaktieren Sie uns wenn sie an etwaigen “Zusatzmodulen” interessiert sind, wir schicken Ihnen hierfür gerne ein Angebot.**

### Mieterstrom

Sie können bequem Liegschaften anlegen und bestehende Wohnungen/Zähler hinzufügen. Außerdem können Sie direkt entsprechende Tarife hinterlegen. Wählen Sie hierfür die Art aus (Mischpreistarif oder Zweipreistarif) und geben Sie die entsprechenden Details an. Die Tarife werden nun für das Gesamte Projekt herangezogen und mit den entsprechenden Zählern verrechnet. **Sprechen Sie uns gerne an und wir unterstützen beim Anlegen der Projekte**

Neben der PV Quote für Mieter, stellen wir auch die komplette Verwaltung der Projekte für den Eigentümer zur Verfügung und bauen die Schnittestelle zum gewünschten Abrechnungssystem auf.

---

Alle Funktionen aus Endkundenperspektive finden Sie hier:

[KMU/B2B Guide](https://www.notion.so/KMU-B2B-Guide-13e7537d200e809480efe846d974309a?pvs=21)

Das war die Vorstellung und Erklärung unserer Lösung. Falls Sie Fragen haben, dann können Sie jederzeit sehr gerne auf uns zukommen und wir helfen Ihnen weiter!
