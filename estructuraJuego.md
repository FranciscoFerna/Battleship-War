# HTML
# Game Container
## main.game-container
### aside.info-panel

#### section.stats-container
- h2.visually-hidden
- dl
  - div.stat-item
    - dt
    - dd.stat-value
  - div.stat-item
    - dt
    - dd.stat-value
  - div.stat-item
    - dt
    - dd.stat-value
  - div.stat-item
    - dt
    - dd.stat-value

#### section.ship-status
- h2.status-title
- ul.ship-list
  - li.ship-item
    - div.ship-name
      - span
      - span
    - div.ship-health
      - span.health-segment.hit
      - span.health-segment.hit
      - span.health-segment.active
      - span.health-segment.active
      - span.health-segment.active
  - li.ship-item
    - div.ship-name
      - span
      - span
    - div.ship-health
      - span.health-segment.hit
      - span.health-segment.hit
      - span.health-segment.active
      - span.health-segment.active
  - li.ship-item
    - div.ship-name
      - span
      - span
    - div.ship-health
      - span.health-segment.hit
      - span.health-segment.hit
      - span.health-segment.active
      - span.health-segment.active
  - li.ship-item
    - div.ship-name
      - span
      - span
    - div.ship-health
      - span.health-segment.hit
      - span.health-segment.hit
      - span.health-segment.active
      - span.health-segment.active
  - li.ship-item
    - div.ship-name
      - span
      - span
    - div.ship-health
      - span.health-segment.hit
      - span.health-segment.hit
      - span.health-segment.active
      - span.health-segment.active

### section.boards-container
- article.board-wrapper
  - h2.radar-title
  - div.board-container
    - div.coordinater
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
    - div.row-coordinates
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
    - div.board-grid
    - div.radar-sweep
      - div.radar-line
- article.board-wrapper
  - h2.radar-title
  - div.board-container
    - div.coordinates
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
    - div.row-coordinates
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
      - span.label
    - div.board-grid
    - div.radar-sweep
      - div.radar-line

### nav.controls
- button.control-btn
- button.control-btn

### footer.message-log
- h2.log-title
- ol#log-container
  - li.message.system
    - time.message-time
    - p.message-content
  - li.message.miss
    - time.message-time
    - p.message-content
  - li.message.hit
    - time.message-time
    - p.message-content
  - li.message.hit
    - time.message-time
    - p.message-content
  - li.message.sunk
    - time.message-time
    - p.message-content
  - li.message.system
    - time.message-time
    - p.message-content

# CSS
# CSS

## @import
- `@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');`

## Reset de Estilos
- `*`: 
    - `margin: 0;`
    - `padding: 0;`
    - `box-sizing: border-box;`
    - `font-family: 'Rajdhani', 'Orbitron', sans-serif;`

## Variables CSS
- `:root`: 
    - `--dark-blue: #0a192f;`
    - `--ocean-blue: #1e3a8a;`
    - `--light-blue: #38bdf8;`
    - `--neon-blue: #00f2ff;`
    - `--red: #ef4444;`
    - `--orange: #f97316;`
    - `--gray: #94a3b8;`
    - `--black: #020617;`
    - `--white: #f8fafc;`

## Cuerpo (Body)
- `body`: 
    - `background-color: var(--dark-blue);`
    - `background-image: radial-gradient(...)`; (gradientes aplicados de forma radial)
    - `color: var(--white);`
    - `min-height: 100vh;`
    - `display: flex; flex-direction: column; align-items: center;`
    - `overflow-x: hidden;` (oculta la barra de desplazamiento horizontal)

## Estilos para el Header
- `.game-header`: 
    - `width: 100%;`
    - `padding: 20px;`
    - `display: flex; justify-content: center;`
    - `position: relative;`
    - `overflow: hidden;`
    - `margin-bottom: 10px;`

- `.logo-container`: 
    - `position: relative; text-align: center;`

- `.game-title`: 
    - `font-size: 3.5rem; font-weight: 800; letter-spacing: 4px; text-transform: uppercase;`
    - `background: linear-gradient(to right, var(--neon-blue), var(--light-blue));`
    - `-webkit-background-clip: text;`
    - `-webkit-text-fill-color: transparent;`
    - `filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.5));`

- `.game-subtitle`: 
    - `font-size: 1.2rem; text-transform: uppercase; letter-spacing: 8px; color: var(--gray);`
    - `margin-top: -5px;`

## Estilos para el Contenedor Principal
- `.game.container`: 
    - `width: 100%; max-width: 1300px;`
    - `display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 20px; padding: 20px;`
    - `perspective: 1000px;`

## Estilos para el Panel de Información
- `.info-panel`: 
    - `background: rgba(15, 23, 42, 0.8);`
    - `border-radius: 15px; padding: 20px;`
    - `border: 1px solid rgba(56, 189, 248, 0.3);`
    - `box-shadow: 0 0 20px rgba(56, 189, 248, 0.1);`
    - `backdrop-filter: blur(5px);`
    - `display: flex; flex-direction: column; gap: 20px;`

- `.stats-container`: 
    - `display: flex; flex-direction: column; gap: 10px;`

- `.stat-item`: 
    - `display: flex; justify-content: space-between; align-items: center;`
    - `padding: 8px 10px; background: rgba(30, 41, 59, 0.6);`
    - `border-radius: 10px; border-left: 3px solid var(--light-blue);`

- `.stat-value`: 
    - `font-weight: bold; color: var(--neon-blue);`

## Estilos para el Estado de la Nave
- `.ship-status`: 
    - `margin-top: 15px;`

- `.status-title`: 
    - `font-size: 1.2rem; text-transform: uppercase; color: var(--light-blue);`
    - `margin-bottom: 15px; letter-spacing: 2px; text-align: center;`
    - `text-shadow: 0 0 5px rgba(56, 189, 248, 0.5);`

- `.ship-list`: 
    - `display: flex; flex-direction: column; gap: 15px;`

- `.ship-item`: 
    - `background: rgba(30, 41, 59, 0.6); border-radius: 10px; padding: 10px;`
    - `border-left: 3px solid var(--neon-blue);`

- `.ship-name`: 
    - `display: flex; justify-content: space-between; font-weight: bold; margin-bottom: 5px;`

- `.ship-health`: 
    - `display: flex; gap: 4px; margin-top: 8px;`

- `.health-segment`: 
    - `height: 8px; flex: 1; background: rgba(56, 189, 248, 0.3);`
    - `border-radius: 4px; box-shadow: 0 0 10px;`

- `.health-segment.active`: 
    - `background: var(--neon-blue); box-shadow: 0 0 10px rgba(56, 189, 248, 0.8);`

- `.health-segment.hit`: 
    - `background: var(--red); box-shadow: 0 0 10px rgba(239, 68, 68, 0.8);`
