# mx-nombres

<!-- BADGES-DONATIONS-START -->
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Donate-orange?logo=ko-fi)](https://ko-fi.com/gerardolucero)
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support-yellow?logo=buy-me-a-coffee)](https://buymeacoffee.com/lucerorios0)
<!-- BADGES-DONATIONS-END -->


[![npm version](https://badge.fury.io/js/mx-nombres.svg)](https://badge.fury.io/js/mx-nombres)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Base de datos completa de nombres mexicanos con estadísticas de popularidad, origen y validaciones.

## Instalación

```bash
npm install mx-nombres
```

## Uso

```javascript
import { getNombresMasculinos, getNombresFemeninos, buscarNombre, generarNombreCompleto } from 'mx-nombres';

// Obtener nombres masculinos
const masculinos = getNombresMasculinos();

// Buscar nombre específico
const info = buscarNombre('María');
console.log(info); // { nombre: 'María', genero: 'femenino', popularidad: 95, origen: 'hebreo' }

// Generar nombre completo aleatorio
const nombreCompleto = generarNombreCompleto('femenino');
```

## API

### `getNombresMasculinos()`
Retorna array con nombres masculinos mexicanos.

### `getNombresFemeninos()`
Retorna array con nombres femeninos mexicanos.

### `getApellidos()`
Retorna array con apellidos mexicanos más comunes.

### `buscarNombre(nombre)`
Busca información detallada de un nombre específico.

### `generarNombreCompleto(genero)`
Genera nombre y apellidos aleatorios.

### `validarNombreMexicano(nombre)`
Valida si un nombre es común en México.

## Características

- ✅ 150+ nombres masculinos mexicanos
- ✅ 140+ nombres femeninos mexicanos  
- ✅ 200+ apellidos mexicanos comunes
- ✅ Nombres indígenas mexicanos
- ✅ Estadísticas de popularidad
- ✅ Información de origen y significado

## Licencia

MIT © Gerardo Lucero

<!-- DONATIONS-START -->
## 💖 Apoya el Ecosistema Mexicano OSS

Si estos paquetes te ayudan (RFC, ISR, Nómina, Bancos, Feriados, Nombres, Códigos Postales, Validadores), considera invitarme un café o apoyar el mantenimiento:

- [Ko-fi](https://ko-fi.com/gerardolucero)
- [Buy Me a Coffee](https://buymeacoffee.com/lucerorios0)

> Gracias por tu apoyo 🙌. Priorizaré issues/PRs con **contexto de uso en México** (SAT/IMSS/INFONAVIT, bancos, feriados) y publicaré avances en los READMEs.
<!-- DONATIONS-END -->
