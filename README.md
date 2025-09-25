# mx-nombres

[![npm version](https://badge.fury.io/js/mx-nombres.svg)](https://badge.fury.io/js/mx-nombres)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Base de datos completa de nombres mexicanos con estadísticas de popularidad, origen, significado y validaciones.

## Características

- 📊 **Base de datos extensa** con nombres masculinos, femeninos y apellidos mexicanos
- 🏆 **Estadísticas de popularidad** basadas en datos del INEGI
- 🌍 **Información de origen** y significado de cada nombre
- 🏛️ **Nombres indígenas** de diferentes culturas mexicanas
- 🔍 **Búsqueda avanzada** por nombre, popularidad u origen
- ✅ **Validación** de nombres mexicanos típicos
- 🎲 **Generador** de nombres completos aleatorios
- 📈 **Estadísticas detalladas** por categorías

## Instalación

```bash
npm install mx-nombres
```

## Uso Básico

```javascript
import nombres from 'mx-nombres';

// Obtener nombres masculinos más populares
const masculinos = nombres.getNombresMasculinos();
console.log(masculinos.slice(0, 5)); // Top 5 nombres masculinos

// Obtener nombres femeninos
const femeninos = nombres.getNombresFemeninos();
console.log(femeninos.slice(0, 5)); // Top 5 nombres femeninos

// Buscar un nombre específico
const resultado = nombres.buscarNombre('María');
console.log(resultado);

// Generar nombre completo aleatorio
const nombreCompleto = nombres.generarNombreCompleto();
console.log(nombreCompleto); // "Carlos Hernández López"
```

## API Completa

### `getNombresMasculinos(opciones?)`

Obtiene la lista de nombres masculinos mexicanos.

**Parámetros:**
- `opciones` (object, opcional):
  - `limite` (number): Número máximo de nombres a retornar
  - `popularidadMinima` (number): Popularidad mínima (1-100)
  - `origen` (string): Filtrar por origen ('Hebreo', 'Latino', 'Germánico', etc.)

**Retorna:** Array de objetos con información de nombres

```javascript
const nombres = nombres.getNombresMasculinos({
  limite: 10,
  popularidadMinima: 70,
  origen: 'Hebreo'
});

// Cada nombre contiene:
// {
//   nombre: 'José',
//   popularidad: 95,        // Escala 1-100
//   origen: 'Hebreo',
//   significado: 'Dios añadirá'
// }
```

### `getNombresFemeninos(opciones?)`

Obtiene la lista de nombres femeninos mexicanos.

**Parámetros:** Mismas opciones que `getNombresMasculinos`

```javascript
const nombresFemeninos = nombres.getNombresFemeninos({
  limite: 15,
  popularidadMinima: 60
});

console.log(nombresFemeninos[0]);
// { nombre: 'María', popularidad: 98, origen: 'Hebreo', significado: 'Amada por Dios' }
```

### `getApellidos(opciones?)`

Obtiene la lista de apellidos mexicanos más comunes.

**Parámetros:**
- `opciones` (object, opcional):
  - `limite` (number): Número máximo de apellidos
  - `popularidadMinima` (number): Popularidad mínima
  - `region` (string): Filtrar por región ('Norte', 'Centro', 'Sur', 'Nacional')

```javascript
const apellidos = nombres.getApellidos({
  limite: 20,
  region: 'Nacional'
});

// Cada apellido contiene:
// {
//   apellido: 'García',
//   popularidad: 95,
//   region: 'Nacional',
//   origen: 'Español'
// }
```

### `getNombresIndigenas(cultura?)`

Obtiene nombres de origen indígena mexicano.

**Parámetros:**
- `cultura` (string, opcional): Cultura específica ('Náhuatl', 'Maya', 'Zapoteco', etc.)

```javascript
const indigenas = nombres.getNombresIndigenas('Náhuatl');

// Retorna nombres como:
// {
//   nombre: 'Itzel',
//   significado: 'Estrella de la tarde',
//   cultura: 'Náhuatl',
//   genero: 'Femenino'
// }
```

### `buscarNombre(nombre)`

Busca información detallada sobre un nombre específico.

**Parámetros:**
- `nombre` (string): Nombre a buscar

**Retorna:** Objeto con información completa del nombre o `null`

```javascript
const info = nombres.buscarNombre('Alejandro');

if (info) {
  console.log(`Nombre: ${info.nombre}`);
  console.log(`Popularidad: ${info.popularidad}/100`);
  console.log(`Origen: ${info.origen}`);
  console.log(`Significado: ${info.significado}`);
  console.log(`Género: ${info.genero}`);
}
```

### `generarNombreCompleto(opciones?)`

Genera un nombre completo mexicano aleatorio.

**Parámetros:**
- `opciones` (object, opcional):
  - `genero` (string): 'masculino', 'femenino' o 'aleatorio'
  - `incluirSegundoNombre` (boolean): Incluir segundo nombre
  - `popularidadMinima` (number): Popularidad mínima de los nombres
  - `region` (string): Región para apellidos

**Retorna:** String con nombre completo

```javascript
// Nombre aleatorio
const aleatorio = nombres.generarNombreCompleto();
console.log(aleatorio); // "Ana Sofía Martínez Rodríguez"

// Nombre masculino específico
const masculino = nombres.generarNombreCompleto({
  genero: 'masculino',
  incluirSegundoNombre: true,
  popularidadMinima: 80
});
console.log(masculino); // "José Luis García Hernández"

// Nombre con región específica
const regional = nombres.generarNombreCompleto({
  genero: 'femenino',
  region: 'Norte'
});
console.log(regional); // "María Elena González Morales"
```

### `validarNombreMexicano(nombreCompleto)`

Valida si un nombre completo es típicamente mexicano.

**Parámetros:**
- `nombreCompleto` (string): Nombre completo a validar

**Retorna:** Objeto con resultado de validación

```javascript
const validacion = nombres.validarNombreMexicano('José Luis García Hernández');

console.log(validacion);
// {
//   esValido: true,
//   confianza: 95,           // Porcentaje de confianza
//   detalles: {
//     nombre: { encontrado: true, popularidad: 95 },
//     segundoNombre: { encontrado: true, popularidad: 92 },
//     apellidoPaterno: { encontrado: true, popularidad: 95 },
//     apellidoMaterno: { encontrado: true, popularidad: 88 }
//   },
//   sugerencias: []          // Sugerencias si hay errores
// }
```

### `getEstadisticasNombres(opciones?)`

Genera estadísticas completas de la base de datos.

**Parámetros:**
- `opciones` (object, opcional):
  - `incluirOrigenes` (boolean): Incluir estadísticas por origen
  - `incluirRegiones` (boolean): Incluir estadísticas por región
  - `incluirIndigenas` (boolean): Incluir nombres indígenas

**Retorna:** Objeto con estadísticas detalladas

```javascript
const stats = nombres.getEstadisticasNombres({
  incluirOrigenes: true,
  incluirRegiones: true,
  incluirIndigenas: true
});

console.log(stats);
// {
//   totalNombres: {
//     masculinos: 150,
//     femeninos: 140,
//     indigenas: 80
//   },
//   totalApellidos: 200,
//   origenesMasComunes: [
//     { origen: 'Hebreo', cantidad: 45, porcentaje: 25.7 },
//     { origen: 'Latino', cantidad: 38, porcentaje: 21.7 },
//     // ...
//   ],
//   regionesApellidos: {
//     Norte: 65,
//     Centro: 78,
//     Sur: 57
//   },
//   popularidadPromedio: {
//     masculinos: 64.5,
//     femeninos: 67.2
//   }
// }
```

## Ejemplos de Uso Avanzados

### Generador de personajes
```javascript
function crearPersonaje() {
  const genero = Math.random() > 0.5 ? 'masculino' : 'femenino';
  const nombreCompleto = nombres.generarNombreCompleto({
    genero,
    incluirSegundoNombre: Math.random() > 0.3,
    popularidadMinima: 30
  });
  
  const validacion = nombres.validarNombreMexicano(nombreCompleto);
  
  return {
    nombre: nombreCompleto,
    genero,
    confianza: validacion.confianza,
    esAutentico: validacion.esValido
  };
}

const personaje = crearPersonaje();
console.log(personaje);
```

### Análisis de nombres por origen
```javascript
function analizarPorOrigen() {
  const origenes = ['Hebreo', 'Latino', 'Germánico', 'Griego', 'Árabe'];
  const analisis = {};
  
  origenes.forEach(origen => {
    const masculinos = nombres.getNombresMasculinos({ origen });
    const femeninos = nombres.getNombresFemeninos({ origen });
    
    analisis[origen] = {
      masculinos: masculinos.length,
      femeninos: femeninos.length,
      popularidadPromedio: [
        ...masculinos,
        ...femeninos
      ].reduce((sum, n) => sum + n.popularidad, 0) / (masculinos.length + femeninos.length)
    };
  });
  
  return analisis;
}

const analisisOrigenes = analizarPorOrigen();
console.log(analisisOrigenes);
```

### Validador de formularios
```javascript
function validarFormularioNombre(nombre, apellidoPaterno, apellidoMaterno) {
  const nombreCompleto = `${nombre} ${apellidoPaterno} ${apellidoMaterno}`;
  const resultado = nombres.validarNombreMexicano(nombreCompleto);
  
  return {
    esValido: resultado.confianza > 70,
    errores: resultado.confianza < 70 ? resultado.sugerencias : [],
    confianza: resultado.confianza,
    recomendaciones: resultado.confianza < 90 ? [
      'Verifica la ortografía',
      'Considera nombres más comunes en México'
    ] : []
  };
}

const validacion = validarFormularioNombre('Fernanda', 'López', 'Martínez');
console.log(validacion);
```

## Base de Datos

### Nombres Masculinos
La base incluye 150+ nombres masculinos populares en México con:
- **Tradicionales:** José, Luis, Juan, Miguel, Carlos
- **Modernos:** Sebastián, Mateo, Leonardo, Diego
- **Religiosos:** Jesús, Ángel, Salvador, Gabriel

### Nombres Femeninos  
140+ nombres femeninos con:
- **Clásicos:** María, Guadalupe, Carmen, Rosa
- **Contemporáneos:** Sofía, Isabella, Valentina, Regina
- **Compuestos:** María José, Ana Sofía, Luz María

### Apellidos
200+ apellidos organizados por:
- **Región Norte:** González, Rodríguez, Morales
- **Región Centro:** García, Hernández, López
- **Región Sur:** Pérez, Sánchez, Ramírez

### Nombres Indígenas
80+ nombres de culturas mexicanas:
- **Náhuatl:** Itzel, Xóchitl, Cuauhtémoc, Nezahualcóyotl
- **Maya:** Akbal, Itzamná, Nicte, Yaaxkin
- **Zapoteco:** Yalalag, Benito, Soledad

## Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar tests
npm test

# Coverage
npm run test:coverage

# Linting
npm run lint
```

## Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## Fuentes de Datos

- Instituto Nacional de Estadística y Geografía (INEGI)
- Registro Civil de México
- Estudios antropológicos de nombres indígenas
- Análisis histórico de nomenclatura mexicana

## Licencia

MIT © [Gerardo Lucero](https://github.com/GerardoLucero)

## Soporte

- [Issues](https://github.com/GerardoLucero/mx-nombres/issues)
- [Documentación](https://github.com/GerardoLucero/mx-nombres#readme)
