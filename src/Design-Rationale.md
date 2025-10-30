# Design-Rationale: League of Legends Fan Page

## Übersicht
Dieses Dokument erklärt die bewussten Designentscheidungen bezüglich Farbpalette und Typografie für die League of Legends Fan Page.

---

## Farbpalette

### Primärfarben

#### 1. **Slate-950 (Dunkelgrau/Schwarz) - Hintergrundfarbe**
```css
bg-slate-950 (#020617)
```

**Begründung:**
- **Gaming-Ästhetik**: Dunkle Hintergründe sind Standard in Gaming-Interfaces, da sie:
  - Die Augen bei längeren Sessions schonen
  - Leuchtende Akzentfarben besser zur Geltung bringen
  - Ein professionelles, modernes Erscheinungsbild schaffen
- **League of Legends Branding**: Das offizielle LoL-Interface nutzt überwiegend dunkle Themes
- **Kontrast**: Bietet optimale Grundlage für helle Text- und Akzentelemente
- **Immersion**: Schafft eine cineastische, fokussierte Atmosphäre

#### 2. **Amber-500 (Gold) - Akzentfarbe**
```css
text-amber-500 (#f59e0b)
border-amber-500
hover:text-amber-500
```

**Begründung:**
- **League of Legends DNA**: Gold ist eine der ikonischen Farben im LoL-Universum:
  - Repräsentiert Meisterschaft und Elite-Status
  - Wird für Ränge, Belohnungen und Auszeichnungen verwendet
  - Steht für Prestige und Exzellenz
- **Visuelle Hierarchie**: Die goldene Farbe lenkt das Auge auf wichtige Elemente:
  - Logo und Branding
  - Call-to-Action Buttons
  - Aktive Navigationselemente
  - Hover-States
- **Warme Kontraste**: Bildet einen starken, aber harmonischen Kontrast zum kühlen Slate-Hintergrund
- **Luxus und Qualität**: Vermittelt Wertigkeit und Premium-Charakter

#### 3. **Slate-300/400 (Hellgrau) - Sekundärtexte**
```css
text-slate-300 (#cbd5e1)
text-slate-400 (#94a3b8)
```

**Begründung:**
- **Lesbarkeit**: Helle Grautöne bieten ausreichenden Kontrast zum dunklen Hintergrund ohne zu grell zu sein
- **Informationshierarchie**: 
  - Slate-300 für aktive oder wichtige Sekundärelemente
  - Slate-400 für weniger wichtige, unterstützende Informationen
- **Augenschonung**: Nicht so intensiv wie reines Weiss, reduziert Augenbelastung
- **Moderne UI-Prinzipien**: Folgt aktuellen Dark-Mode Best Practices

### Weitere Farben

#### Slate-800/900 (Borders und Cards)
```css
border-slate-800
bg-slate-900
```

**Begründung:**
- **Subtile Trennung**: Ermöglicht visuelle Separation ohne harte Kontraste
- **Tiefe und Dimension**: Schafft Ebenen-Hierarchie durch leichte Farbabstufungen
- **Konsistenz**: Bleibt innerhalb der Slate-Farbfamilie für harmonisches Gesamtbild

#### Transparenzen
```css
bg-slate-950/95 (95% Opazität)
border-amber-500/20 (20% Opazität)
```

**Begründung:**
- **Glassmorphismus**: Moderne UI-Trends mit Backdrop-Blur-Effekten
- **Kontextuelles Bewusstsein**: Semi-transparente Header lassen Inhalte durchscheinen
- **Visuelle Raffinesse**: Subtile Borders ohne zu dominieren

---

## Typografie

### Schriftgroessen

Die Seite nutzt das Standardschriftsystem ohne explizite Schriftfamilie, verlässt sich auf System-Fonts:

```css
/* Base */
--font-size: 16px

/* Hierarchie über Tailwind */
text-2xl  /* Headers, Logo */
text-xl   /* Seitenüberschriften */
text-lg   /* Subheadings */
text-base /* Body-Text */
text-sm   /* Klein-Details */
```

**Begründung für System-Fonts:**
- **Performance**: Keine zusätzlichen Font-Downloads, schnellere Ladezeiten
- **Vertrautheit**: Nutzer sehen die Schrift, die sie von ihrem System gewohnt sind
- **Lesbarkeit**: System-Fonts sind für digitale Bildschirme optimiert
- **Professionalität**: Moderne Web-Standards bevorzugen System-Font-Stacks

### Schriftgewichte

```css
font-weight: 500 (Medium) - Überschriften, Buttons, Labels
font-weight: 400 (Normal) - Fliesstext, Inputs
```

**Begründung:**
- **Medium (500) für wichtige Elemente**:
  - Verbessert Hierarchie ohne zu dominant zu wirken
  - Moderner als traditionelles Bold (700)
  - Funktioniert gut mit System-Fonts
  - Professionelles Gaming-Design bevorzugt subtilere Gewichte

- **Normal (400) für Body-Text**:
  - Optimale Lesbarkeit bei längeren Texten
  - Reduziert visuelle Ermüdung
  - Standard für Fliesstext

### Keine expliziten Font-Size Tailwind-Klassen im Markup

**Wichtig**: Die Typografie wird über CSS-Variablen in `globals.css` gesteuert:

```css
h1 { font-size: var(--text-2xl); }
h2 { font-size: var(--text-xl); }
p  { font-size: var(--text-base); }
```

**Begründung:**
- **Konsistenz**: Zentrale Steuerung verhindert inkonsistente Font-Groessen
- **Wartbarkeit**: Änderungen an einem Ort statt in jedem Component
- **Semantisches HTML**: HTML-Elemente behalten ihre typografische Bedeutung
- **Responsive Design**: Einfachere Anpassung für verschiedene Bildschirmgroessen

---

## Farbpsychologie und Gaming-Kultur

### Warum Dunkel + Gold?

1. **Prestige**: In Gaming-Kulturen symbolisiert Gold den höchsten Rang
2. **Fokus**: Dunkle Hintergründe minimieren Ablenkungen
3. **Spannung**: Kontrastreiche Farbschemata erzeugen Dramatik
4. **Branding**: Spiegelt League of Legends' visuelle Identität wider
5. **Zeitlosigkeit**: Diese Kombination wirkt nicht modisch, sondern klassisch-elegant

### Emotionale Wirkung

- **Slate-Dunkel**: Seriosität, Professionalität, Tiefe, Mystery
- **Amber/Gold**: Energie, Erfolg, Wärme, Exzellenz, Aufregung
- **Kombiniert**: Schafft Balance zwischen "ernst/kompetitiv" und "aufregend/einladend"

---

## Accessibility-Überlegungen

### Kontrastverhältnisse

- **Amber-500 auf Slate-950**: Hoher Kontrast, WCAG AAA-konform
- **Slate-300 auf Slate-950**: Ausreichender Kontrast für Body-Text
- **Hover-States**: Deutliche visuelle Feedback durch Farbwechsel

### Typografie

- **16px Base**: Standardgroesse für gute Lesbarkeit
- **Line-height 1.5**: Optimaler Zeilenabstand für digitale Lesbarkeit
- **Medium-Weight**: Bessere Erkennbarkeit als Light-Weights

---

## Technische Implementierung

### Tailwind-basiertes System

Die Farben werden über Tailwind CSS utility classes angewendet:
- Schnelle Entwicklung
- Konsistente Spacing/Sizing
- Responsive Design out-of-the-box
- Tree-shaking für optimale Performance

### CSS-Variablen für Theming

Die `globals.css` definiert ein flexibles Farbsystem mit Light/Dark-Modes, auch wenn primär Dark verwendet wird:
- Zukunftssicher für potenzielle Theme-Switches
- Erlaubt einfache Anpassungen
- Folgt modernen CSS-Standards

---

## Zusammenfassung

Das Farbschema **Dunkelgrau (Slate) + Gold (Amber)** und die **System-Font-basierte Typografie** wurden gewählt, um:

1. ✅ **League of Legends' Branding** authentisch widerzuspiegeln
2. ✅ **Gaming-Standards** zu entsprechen (Dark UI)
3. ✅ **Visuelle Hierarchie** klar zu kommunizieren
4. ✅ **Performance** zu maximieren (System-Fonts)
5. ✅ **Accessibility** zu gewährleisten
6. ✅ **Professionalität** und **Prestige** auszustrahlen
7. ✅ **Moderne Web-Design-Prinzipien** zu folgen

Diese Designentscheidungen schaffen eine immersive, markengerechte und benutzerfreundliche Erfahrung für League of Legends Fans.
