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


# Compatibilidad con `background-clip: text`

En la versión anterior del código, solo teníamos la propiedad:

```css
-webkit-background-clip: text;
```

Esto es específico para navegadores basados en WebKit (como Safari y Chrome).

## Cambio realizado

Se agregó la línea:

```css
background-clip: text;
```

## Razón del cambio

Este cambio se hizo para mejorar la compatibilidad con navegadores. La razón es:

- `-webkit-background-clip` es el prefijo específico para navegadores WebKit.
- `background-clip` es la propiedad estándar que funciona en todos los navegadores modernos.

## Buenas prácticas

Es una buena práctica incluir tanto la versión con prefijo (`-webkit-`) como la versión estándar, ya que:

1. **La versión con prefijo** asegura compatibilidad con versiones más antiguas de navegadores.
2. **La versión estándar** funcionará en navegadores modernos y asegura compatibilidad futura.


Es similar a tener un **"plan B"**: si un navegador no entiende una versión, usará la otra.


# Radar Animado con CSS

## 1. Estructura Base

Este es el contenedor principal del radar:

- `position: absolute` lo posiciona de forma absoluta dentro de su contenedor padre.
- `pointer-events: none` hace que no responda a eventos del mouse.
- `overflow: hidden` oculta cualquier contenido que se salga del contenedor.
- `border-radius: 15px` da esquinas redondeadas.

```css
.radar {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;
    background: black;
    pointer-events: none;
}
```

## 2. Línea del Radar

Crea la línea giratoria del radar:

- Se posiciona en el centro usando `top: 50%` y `left: 50%`.
- `transform-origin: center` establece el punto de rotación en el centro.
- La animación `radar-sweep` hace que gire continuamente cada 4 segundos.

```css
.radar-line {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, var(--neon-blue));
    transform-origin: center;
    animation: radar-sweep 4s linear infinite;
}
```

## 3. Efecto Visual de la Línea

Crea el efecto visual de la línea del radar:

- Usa un gradiente para crear el efecto de brillo.
- `box-shadow` añade un resplandor neón.
- La variable `--neon-blue` define el color del efecto.

```css
:root {
    --neon-blue: rgba(0, 255, 255, 0.8);
}

.radar-line {
    box-shadow: 0 0 10px var(--neon-blue);
}
```

## 4. Animación

Define cómo gira la línea del radar:

- Comienza en `0deg` y gira hasta `360deg`.
- `translate(-50%, -50%)` centra la línea.
- `scale(1)` mantiene el tamaño constante.

```css
@keyframes radar-sweep {
    from {
        transform: translate(-50%, -50%) rotate(0deg) scale(1);
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg) scale(1);
    }
}
```

## Efecto Final

El efecto final simula un radar girando, con una línea brillante que da una vuelta completa, similar a los radares que ves en películas o juegos.

# Diagrama de Clases (SVG)

## **Controlador del Juego**  
**Propósito:** Coordina todos los componentes del juego y gestiona el estado del mismo.  
- Mantiene referencias a los tableros de jugador/enemigo y los registros de mensajes.  
- Contiene métodos para inicializar, iniciar, reiniciar el juego y actualizar las estadísticas.  

## **Tablero**  
**Propósito:** Representa un tablero de juego (cuadrícula).  
- Gestiona la cuadrícula de celdas y la ubicación de los barcos.  
- Contiene una matriz 2D de celdas y una matriz de barcos.  
- Gestiona operaciones como la colocación de barcos y la recepción de disparos.  

## **Barco**  
**Propósito:** Representa un barco en el juego.  
- Rastrea las propiedades del barco y su estado de daños.  
- Mantiene propiedades como el tamaño, el nombre y el número de impactos.  
- Proporciona métodos para comprobar si el barco está hundido.  

## **Celda**  
**Propósito:** Representa una sola celda en el tablero.  
- Rastrea el estado de una posición específica de la cuadrícula (vacío, barco, impacto, fallo).  
- Contiene coordenadas de ubicación e información sobre la presencia del barco.  
- Gestiona la interacción con los disparos y proporciona información de estado.  

## **UIManager**  
**Propósito:** Gestiona la interfaz de usuario.  
- Representa los tableros y gestiona las interacciones del usuario.  
- Referencia elementos HTML y los actualiza.  
- Configura detectores de eventos para las acciones del usuario.  

## **MessageLog**  
**Propósito:** Gestiona los mensajes del juego.  
- Muestra información al jugador sobre los eventos del juego.  
- Almacena y representa los mensajes por tipo.  
- Proporciona marca de tiempo y formato.  

## **ShotResult y CellState**  
**Propósito:** Enumeraciones para el seguimiento de los estados del juego.  
- Define los posibles resultados de los disparos y los estados de las celdas.  

## **Relaciones en el diagrama**  
- `GameController` gestiona dos instancias de `Tablero` (jugador y enemigo).  
- Cada `Tablero` contiene varios objetos `Celda` (100 para una cuadrícula de 10x10).  
- Los `Tablero` hacen referencia a objetos `Barco`.  
- `MessageLog` contiene objetos `Message`.  
