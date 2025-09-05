# Allgemein

## Kundenübersicht

**Zweck:** Hier legen Sie neue Endkunden an, verwalten ihre Stammdaten und ordnen ihnen Zählpunkte sowie Tarife zu. Jeder Kunde sollte mindestens **einen zugeordneten Zählpunkt und Tarif** haben.

### Kundendetails - Nutzer

-   Auflistung aller registrierten Nutzer mit Zeitstempel der letzten Anmeldung und Anzahl der Anmeldungen.
-   Die Endkunden können sich selbst registrieren oder halb manuell durch Uploads von Ihnen angelegt werden. Alternativ ist auch eine vollautomatisierte API-Anbindung und Erstellung der Kunden-Accounts möglich. Sie müssen nicht alle Endkunden einzeln hinzufügen. Diese Funktion bietet sich besonders am Anfang für Testzwecke an, um einen langsamen und sicheren Übergang sicherzustellen. Dies ermöglicht es, die Plattform zunächst mit einem kleinen, ausgewählten Kreis an Kunden zu testen.
-   Wenn auf einen Nutzer geklickt wird, sind die angemeldeten Objekte des Endnutzers und die angebundenen Geräte sichtbar.

## Objekte

**🎯 Zweck der Funktion „Objekte“**

In **Objekte** verwalten Sie **Liegenschaften, Gebäude oder Einheiten**, denen Zählpunkte (Zähler) zugeordnet werden. Dies dient der strukturierten Abbildung Ihrer realen Gebäude- und Zählerstruktur im System.

**💡 Warum ist das wichtig?**

-   Übersicht aller Standorte und Einheiten Ihrer Endkunden.
-   Klare Zuordnung von Zählern zu Gebäuden, Wohnungen oder Gewerbeeinheiten.
-   Grundlage für Abrechnungen und Verbrauchsberichte pro Objekt oder Einheit.

---

### Objekte Übersicht

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

### Was passiert bei einem Mieterwechsel?

-   Sie haben die Möglichkeit Geräte für bestimmte Zeitfenster freizugeben: Durch das Klicken auf das Uhr Symbol, lässt sich einstellen ab wann der Mieter zum Beispiel keine Einsicht mehr auf die Zählerdaten haben darf. Der Gleiche Zähler kann nun mit einem neuen Startdatum einem neuen Objekt zugeordnet werden. So wird verhindert dass alte Mieter den Verbrauch von Folgemietern einsehen können.

![Bildschirmfoto 2025-07-03 um 19.11.59.png](/img/user-guides/admin/Bildschirmfoto_2025-07-03_um_19.11.59.png)

### Best Practices

✔️ Legen Sie **alle Gebäude oder Einheiten als Objekte an**, bevor Sie Zählpunkte zuordnen.

✔️ Verwenden Sie klare und konsistente Objektnamen (z.B. „Musterstraße 12, Wohnung 3.OG links“).

✔️ Prüfen Sie regelmäßig, ob alle Zählpunkte korrekt zugeordnet sind.

## Geräte

-   Auflistung aller angebundener Geräte.
-   Status der Geräte (verbunden oder nicht verbunden)
-   Möglichkeit Geräte einzelnen Objekten hinzuzufügen.

Außerdem: Wenn Sie Geräte automatisiert über unsere API anlegen, können individuelle IDs hinterlegt werden. Dies dient zur einheitlichen Identifizierung Ihrer Geräte

![Bildschirmfoto 2025-04-24 um 16.25.22.png](/img/user-guides/admin/Bildschirmfoto_2025-04-24_um_16.25.22.png)

## Tarife/Verträge

**🎯 Zweck der Funktion „Tarife“**

In Tarife verwalten Sie die rechtlichen Beziehungen Ihrer Endkunden. Jeder Vertrag enthält Informationen zu Tarifen und Preisbestandteilen. Diese können individuell oder über API angelegt werden und global zugeordnet werden.

---

### Verträge Übersicht

Die Übersicht zeigt Ihnen:

-   **Vertragsnummer oder Name**
-   **Kunde:** Welchem Endkunden der Vertrag zugeordnet ist.
-   **Tarif:** Welcher Tarif im Vertrag hinterlegt ist.

![Bildschirmfoto 2025-02-16 um 13.49.25.png](/img/user-guides/admin/Bildschirmfoto_2025-02-16_um_13.49.25.png)

---

### Funktionen in der Verträge Übersicht

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

### Vertragsdetails

In der Detailansicht sehen Sie:

-   **Alle Vertragsdaten** (Name, Nummer, Laufzeit, Status).
-   **Tarifdetails:** Preise, Gültigkeit.
-   **Verknüpfte Zählpunkte:** Welche Zähler diesem Vertrag zugeordnet sind.

Mit dieser Funktion können Tarifprodukte konfiguriert und angelegt werden. Steuern und verschiedene weitere Preiskomponenten können miteinander verrechnet werden.

-   Tarife können mit flexiblen Bestandteilen global angelegt werden und Kundengruppen anhand von Verträgen zugeordnet werden.
-   Netzentgelte werden automatisch zugeordnet und verrechnet.

![Bildschirmfoto 2025-02-16 um 13.50.53.png](/img/user-guides/admin/Bildschirmfoto_2025-02-16_um_13.50.53.png)

## Einladungen (Endnutzer)

-   Hier können Sie Einladungen an bestimmte Personen per E-Mail verschicken. Das ist besonders hilfreich, wenn Sie unsere Plattform am Anfang testen und langsam einführen möchten. Sie können ausgewählte Kunden einladen, sich zu registrieren, die Plattform auszuprobieren und Feedback zu geben.
-   Sobald Sie zu 100% zufrieden sind, können sich alle Endkunden ganz einfach über einen Link registrieren. Die Anmeldung kann auf Ihrer Webseite verlinkt oder per E-Mail an alle Kunden gesendet werden, bzw. automatisiert über unsere API-Anbindung erfolgen.

### Einladungen Übersicht

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

### Ablauf aus Kundensicht

1. Kunde erhält **eine E-Mail mit dem Betreff „Einladung zu Ihrem Kundenportal“**.
2. Klick auf den **Aktivierungslink** in der E-Mail.
3. Vergabe eines **persönlichen Passworts**.
4. Login im Kundenportal ist ab sofort möglich.
