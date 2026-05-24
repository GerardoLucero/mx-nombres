# mx-nombres

Base de datos completa de nombres mexicanos con estadísticas de popularidad, origen, significado y validaciones.

[![Ko-fi](https://img.shields.io/badge/Ko--fi-FF5E5B?style=flat&logo=ko-fi&logoColor=white)](https://ko-fi.com/gerardolucero)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?style=flat&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/lucerorios0)
[![GitHub Stars](https://img.shields.io/github/stars/GerardoLucero/mx-nombres?style=social)](https://github.com/GerardoLucero/mx-nombres)
[![npm version](https://badge.fury.io/js/mx-nombres.svg)](https://badge.fury.io/js/mx-nombres)
[![npm downloads](https://img.shields.io/npm/dm/mx-nombres.svg)](https://www.npmjs.com/package/mx-nombres)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- **Base de datos extensa** con nombres masculinos, femeninos y apellidos mexicanos
- **Estadísticas de popularidad** basadas en datos del INEGI
- **Información de origen** y significado de cada nombre
- **Nombres indígenas** de diferentes culturas mexicanas
- **Búsqueda avanzada** por nombre, popularidad u origen
- **Validación** de nombres mexicanos típicos
- **Generador** de nombres completos aleatorios
- **Estadísticas detalladas** por categorías

## Instalación

```bash
npm install mx-nombres
```

## Uso básico

```javascript
import nombres from 'mx-nombres';

// Obtener nombres masculinos más populares
const masculinos = nombres.getNombresMasculinos();
console.log(masculinos.slice(0, 5)); // Top 5

// Obtener nombres femeninos
const femeninos = nombres.getNombresFemeninos();
console.log(femeninos.slice(0, 5));

// Buscar un nombre específico
const resultado = nombres.buscarNombre('María');
console.log(resultado);

// Generar nombre completo aleatorio
const nombreCompleto = nombres.generarNombreCompleto();
console.log(nombreCompleto); // "Carlos Hernández López"
```

## API

### `getNombresMasculinos(opciones?)`

Obtiene la lista de nombres masculinos mexicanos.

**Opciones:**
- `limite` (number): Número máximo de nombres a retornar
- `popularidadMinima` (number): Popularidad mínima (1-100)
- `origen` (string): Filtrar por origen (`'Hebreo'`, `'Latino'`, `'Germánico'`, etc.)

```javascript
const nombres = nombres.getNombresMasculinos({
  limite: 10,
  popularidadMinima: 70,
  origen: 'Hebreo'
});

// Cada nombre contiene:
// { nombre: 'José', popularidad: 95, origen: 'Hebreo', significado: 'Dios añadirá' }
```

### `getNombresFemeninos(opciones?)`

Mismas opciones que `getNombresMasculinos`.

### `getApellidos(opciones?)`

Obtiene la lista de apellidos mexicanos más comunes.

**Opciones adicionales:**
- `region` (string): Filtrar por región (`'Norte'`, `'Centro'`, `'Sur'`, `'Nacional'`)

### `getNombresIndigenas(cultura?)`

Obtiene nombres de origen indígena mexicano (`'Náhuatl'`, `'Maya'`, `'Zapoteco'`, etc.).

### `buscarNombre(nombre)`

Busca información detallada sobre un nombre específico. Retorna objeto completo o `null`.

### `generarNombreCompleto(opciones?)`

Genera un nombre completo mexicano aleatorio.

```javascript
// Nombre aleatorio
const aleatorio = nombres.generarNombreCompleto();
console.log(aleatorio); // "Ana Sofía Martínez Rodríguez"

// Nombre con opciones
const masculino = nombres.generarNombreCompleto({
  genero: 'masculino',
  incluirSegundoNombre: true,
  popularidadMinima: 80
});
```

**Opciones:**
- `genero`: `'masculino'`, `'femenino'` o `'aleatorio'`
- `incluirSegundoNombre` (boolean)
- `popularidadMinima` (number)
- `region` (string)

### `validarNombreMexicano(nombreCompleto)`

Valida si un nombre completo es típicamente mexicano.

```javascript
const validacion = nombres.validarNombreMexicano('José Luis García Hernández');
// {
//   esValido: true,
//   confianza: 95,
//   detalles: { nombre: { encontrado: true, popularidad: 95 }, ... },
//   sugerencias: []
// }
```

### `getEstadisticasNombres(opciones?)`

Genera estadísticas completas de la base de datos.

## Base de datos

### Nombres masculinos — 150+
Tradicionales (José, Luis, Juan), modernos (Sebastián, Mateo, Leonardo), religiosos (Jesús, Ángel, Salvador).

### Nombres femeninos — 140+
Clásicos (María, Guadalupe, Carmen), contemporáneos (Sofía, Isabella, Valentina), compuestos (María José, Ana Sofía).

### Apellidos — 200+
Organizados por región: Norte (González, Rodríguez), Centro (García, Hernández), Sur (Pérez, Sánchez).

### Nombres indígenas — 80+
Náhuatl (Itzel, Xóchitl, Cuauhtémoc), Maya (Akbal, Itzamná, Nicte), Zapoteco (Yalalag, Benito).

## Fuentes de datos

- Instituto Nacional de Estadística y Geografía (INEGI)
- Registro Civil de México
- Estudios antropológicos de nombres indígenas

## Desarrollo

```bash
npm install
npm test
npm run test:coverage
npm run lint
```

## Licencia

MIT © [Gerardo Lucero](https://github.com/GerardoLucero)
