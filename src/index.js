'use strict';

/**
 * Base de datos completa de nombres mexicanos
 * Incluye nombres propios, apellidos, y estadísticas de popularidad
 */

// Base de datos de nombres masculinos más populares en México
const NOMBRES_MASCULINOS = [
  { nombre: 'José', popularidad: 95, origen: 'Hebreo', significado: 'Dios añadirá' },
  { nombre: 'Luis', popularidad: 92, origen: 'Germánico', significado: 'Guerrero ilustre' },
  { nombre: 'Juan', popularidad: 90, origen: 'Hebreo', significado: 'Dios es misericordioso' },
  { nombre: 'Miguel', popularidad: 88, origen: 'Hebreo', significado: 'Quién como Dios' },
  { nombre: 'Carlos', popularidad: 85, origen: 'Germánico', significado: 'Hombre libre' },
  { nombre: 'Antonio', popularidad: 82, origen: 'Latino', significado: 'Valioso' },
  { nombre: 'Francisco', popularidad: 80, origen: 'Latino', significado: 'Francés libre' },
  { nombre: 'Alejandro', popularidad: 78, origen: 'Griego', significado: 'Protector de hombres' },
  { nombre: 'Manuel', popularidad: 75, origen: 'Hebreo', significado: 'Dios está con nosotros' },
  { nombre: 'Jesús', popularidad: 73, origen: 'Hebreo', significado: 'Salvador' },
  { nombre: 'Daniel', popularidad: 70, origen: 'Hebreo', significado: 'Dios es mi juez' },
  { nombre: 'David', popularidad: 68, origen: 'Hebreo', significado: 'Amado' },
  { nombre: 'Jorge', popularidad: 65, origen: 'Griego', significado: 'Agricultor' },
  { nombre: 'Eduardo', popularidad: 62, origen: 'Germánico', significado: 'Guardián rico' },
  { nombre: 'Rafael', popularidad: 60, origen: 'Hebreo', significado: 'Dios ha curado' },
  { nombre: 'Roberto', popularidad: 58, origen: 'Germánico', significado: 'Fama brillante' },
  { nombre: 'Fernando', popularidad: 55, origen: 'Germánico', significado: 'Viaje audaz' },
  { nombre: 'Ricardo', popularidad: 52, origen: 'Germánico', significado: 'Rey poderoso' },
  { nombre: 'Sergio', popularidad: 50, origen: 'Latino', significado: 'Guardián' },
  { nombre: 'Alberto', popularidad: 48, origen: 'Germánico', significado: 'Noble brillante' },
  { nombre: 'Raúl', popularidad: 45, origen: 'Germánico', significado: 'Consejero lobo' },
  { nombre: 'Arturo', popularidad: 42, origen: 'Celta', significado: 'Oso fuerte' },
  { nombre: 'Enrique', popularidad: 40, origen: 'Germánico', significado: 'Príncipe del hogar' },
  { nombre: 'Víctor', popularidad: 38, origen: 'Latino', significado: 'Vencedor' },
  { nombre: 'Armando', popularidad: 35, origen: 'Germánico', significado: 'Guerrero' },
  { nombre: 'Ángel', popularidad: 32, origen: 'Griego', significado: 'Mensajero' },
  { nombre: 'Guillermo', popularidad: 30, origen: 'Germánico', significado: 'Protector decidido' },
  { nombre: 'Héctor', popularidad: 28, origen: 'Griego', significado: 'El que sostiene' },
  { nombre: 'Gerardo', popularidad: 25, origen: 'Germánico', significado: 'Lanza valiente' },
  { nombre: 'Adrián', popularidad: 22, origen: 'Latino', significado: 'Venido del mar' }
];

// Base de datos de nombres femeninos más populares en México
const NOMBRES_FEMENINOS = [
  { nombre: 'María', popularidad: 98, origen: 'Hebreo', significado: 'Amada por Dios' },
  { nombre: 'Guadalupe', popularidad: 95, origen: 'Árabe', significado: 'Río de lobos' },
  { nombre: 'Juana', popularidad: 90, origen: 'Hebreo', significado: 'Dios es misericordioso' },
  { nombre: 'Antonia', popularidad: 85, origen: 'Latino', significado: 'Valiosa' },
  { nombre: 'Francisca', popularidad: 80, origen: 'Latino', significado: 'Francesa libre' },
  { nombre: 'Elena', popularidad: 78, origen: 'Griego', significado: 'Antorcha' },
  { nombre: 'Rosa', popularidad: 75, origen: 'Latino', significado: 'Rosa' },
  { nombre: 'Ana', popularidad: 72, origen: 'Hebreo', significado: 'Compasiva' },
  { nombre: 'Isabel', popularidad: 70, origen: 'Hebreo', significado: 'Promesa de Dios' },
  { nombre: 'Patricia', popularidad: 68, origen: 'Latino', significado: 'Noble' },
  { nombre: 'Carmen', popularidad: 65, origen: 'Latino', significado: 'Jardín' },
  { nombre: 'Alejandra', popularidad: 62, origen: 'Griego', significado: 'Protectora' },
  { nombre: 'Leticia', popularidad: 60, origen: 'Latino', significado: 'Alegría' },
  { nombre: 'Teresa', popularidad: 58, origen: 'Griego', significado: 'Cazadora' },
  { nombre: 'Silvia', popularidad: 55, origen: 'Latino', significado: 'De la selva' },
  { nombre: 'Josefina', popularidad: 52, origen: 'Hebreo', significado: 'Dios añadirá' },
  { nombre: 'Esperanza', popularidad: 50, origen: 'Latino', significado: 'Esperanza' },
  { nombre: 'Verónica', popularidad: 48, origen: 'Griego', significado: 'Imagen verdadera' },
  { nombre: 'Gabriela', popularidad: 45, origen: 'Hebreo', significado: 'Fuerza de Dios' },
  { nombre: 'Claudia', popularidad: 42, origen: 'Latino', significado: 'Coja' },
  { nombre: 'Mónica', popularidad: 40, origen: 'Griego', significado: 'Consejera' },
  { nombre: 'Andrea', popularidad: 38, origen: 'Griego', significado: 'Valiente' },
  { nombre: 'Daniela', popularidad: 35, origen: 'Hebreo', significado: 'Dios es mi juez' },
  { nombre: 'Paola', popularidad: 32, origen: 'Latino', significado: 'Pequeña' },
  { nombre: 'Karla', popularidad: 30, origen: 'Germánico', significado: 'Mujer libre' },
  { nombre: 'Mariana', popularidad: 28, origen: 'Latino', significado: 'Amargura graciosa' },
  { nombre: 'Lucía', popularidad: 25, origen: 'Latino', significado: 'Luz' },
  { nombre: 'Fernanda', popularidad: 22, origen: 'Germánico', significado: 'Viaje audaz' },
  { nombre: 'Valeria', popularidad: 20, origen: 'Latino', significado: 'Valiente' },
  { nombre: 'Sofía', popularidad: 18, origen: 'Griego', significado: 'Sabiduría' }
];

// Base de datos de apellidos mexicanos más comunes
const APELLIDOS_MEXICANOS = [
  { apellido: 'González', frecuencia: 95, origen: 'Germánico', significado: 'Hijo de Gonzalo' },
  { apellido: 'Rodríguez', frecuencia: 92, origen: 'Germánico', significado: 'Hijo de Rodrigo' },
  { apellido: 'García', frecuencia: 90, origen: 'Vasco', significado: 'Joven' },
  { apellido: 'Martínez', frecuencia: 88, origen: 'Latino', significado: 'Hijo de Martín' },
  { apellido: 'López', frecuencia: 85, origen: 'Latino', significado: 'Hijo de Lope' },
  { apellido: 'Hernández', frecuencia: 82, origen: 'Germánico', significado: 'Hijo de Hernando' },
  { apellido: 'Pérez', frecuencia: 80, origen: 'Latino', significado: 'Hijo de Pedro' },
  { apellido: 'Sánchez', frecuencia: 78, origen: 'Latino', significado: 'Hijo de Sancho' },
  { apellido: 'Ramírez', frecuencia: 75, origen: 'Germánico', significado: 'Hijo de Ramiro' },
  { apellido: 'Cruz', frecuencia: 72, origen: 'Latino', significado: 'Cruz' },
  { apellido: 'Flores', frecuencia: 70, origen: 'Latino', significado: 'Flores' },
  { apellido: 'Gómez', frecuencia: 68, origen: 'Germánico', significado: 'Hombre' },
  { apellido: 'Díaz', frecuencia: 65, origen: 'Latino', significado: 'Hijo de Diego' },
  { apellido: 'Reyes', frecuencia: 62, origen: 'Latino', significado: 'Rey' },
  { apellido: 'Morales', frecuencia: 60, origen: 'Latino', significado: 'Moral' },
  { apellido: 'Jiménez', frecuencia: 58, origen: 'Hebreo', significado: 'Hijo de Jimeno' },
  { apellido: 'Álvarez', frecuencia: 55, origen: 'Germánico', significado: 'Hijo de Álvaro' },
  { apellido: 'Romero', frecuencia: 52, origen: 'Latino', significado: 'Peregrino a Roma' },
  { apellido: 'Alvarado', frecuencia: 50, origen: 'Germánico', significado: 'Guardián de todos' },
  { apellido: 'Torres', frecuencia: 48, origen: 'Latino', significado: 'Torres' },
  { apellido: 'Ruiz', frecuencia: 45, origen: 'Germánico', significado: 'Famoso' },
  { apellido: 'Vázquez', frecuencia: 42, origen: 'Vasco', significado: 'Hijo de Vasco' },
  { apellido: 'Castro', frecuencia: 40, origen: 'Latino', significado: 'Castillo' },
  { apellido: 'Mendoza', frecuencia: 38, origen: 'Vasco', significado: 'Montaña fría' },
  { apellido: 'Ortega', frecuencia: 35, origen: 'Latino', significado: 'Ortiga' },
  { apellido: 'Ramos', frecuencia: 32, origen: 'Latino', significado: 'Ramas' },
  { apellido: 'Moreno', frecuencia: 30, origen: 'Latino', significado: 'Moreno' },
  { apellido: 'Gutiérrez', frecuencia: 28, origen: 'Germánico', significado: 'Hijo de Gutier' },
  { apellido: 'Vargas', frecuencia: 25, origen: 'Latino', significado: 'Choza' },
  { apellido: 'Castillo', frecuencia: 22, origen: 'Latino', significado: 'Castillo' }
];

// Nombres indígenas mexicanos
const NOMBRES_INDIGENAS = [
  { nombre: 'Itzel', genero: 'femenino', origen: 'Maya', significado: 'Rocío del cielo' },
  { nombre: 'Xóchitl', genero: 'femenino', origen: 'Náhuatl', significado: 'Flor' },
  { nombre: 'Ximena', genero: 'femenino', origen: 'Hebreo/Vasco', significado: 'La que escucha' },
  { nombre: 'Citlali', genero: 'femenino', origen: 'Náhuatl', significado: 'Estrella' },
  { nombre: 'Yaretzi', genero: 'femenino', origen: 'Náhuatl', significado: 'Siempre serás amada' },
  { nombre: 'Cuauhtémoc', genero: 'masculino', origen: 'Náhuatl', significado: 'Águila que desciende' },
  { nombre: 'Itzel', genero: 'masculino', origen: 'Maya', significado: 'Señor de la superficie' },
  { nombre: 'Tláloc', genero: 'masculino', origen: 'Náhuatl', significado: 'Dios de la lluvia' },
  { nombre: 'Nezahualcóyotl', genero: 'masculino', origen: 'Náhuatl', significado: 'Coyote que ayuna' },
  { nombre: 'Moctezuma', genero: 'masculino', origen: 'Náhuatl', significado: 'Señor que se enoja' }
];

/**
 * Obtiene todos los nombres masculinos
 * @param {Object} opciones - Opciones de filtrado
 * @returns {Array} Lista de nombres masculinos
 */
export function getNombresMasculinos(opciones = {}) {
  const { minPopularidad = 0, maxPopularidad = 100, origen = null } = opciones;
  
  let nombres = NOMBRES_MASCULINOS.filter(n => 
    n.popularidad >= minPopularidad && n.popularidad <= maxPopularidad
  );
  
  if (origen) {
    nombres = nombres.filter(n => 
      n.origen.toLowerCase() === origen.toLowerCase()
    );
  }
  
  return nombres.sort((a, b) => b.popularidad - a.popularidad);
}

/**
 * Obtiene todos los nombres femeninos
 * @param {Object} opciones - Opciones de filtrado
 * @returns {Array} Lista de nombres femeninos
 */
export function getNombresFemeninos(opciones = {}) {
  const { minPopularidad = 0, maxPopularidad = 100, origen = null } = opciones;
  
  let nombres = NOMBRES_FEMENINOS.filter(n => 
    n.popularidad >= minPopularidad && n.popularidad <= maxPopularidad
  );
  
  if (origen) {
    nombres = nombres.filter(n => 
      n.origen.toLowerCase() === origen.toLowerCase()
    );
  }
  
  return nombres.sort((a, b) => b.popularidad - a.popularidad);
}

/**
 * Obtiene todos los apellidos mexicanos
 * @param {Object} opciones - Opciones de filtrado
 * @returns {Array} Lista de apellidos
 */
export function getApellidos(opciones = {}) {
  const { minFrecuencia = 0, maxFrecuencia = 100, origen = null } = opciones;
  
  let apellidos = APELLIDOS_MEXICANOS.filter(a => 
    a.frecuencia >= minFrecuencia && a.frecuencia <= maxFrecuencia
  );
  
  if (origen) {
    apellidos = apellidos.filter(a => 
      a.origen.toLowerCase() === origen.toLowerCase()
    );
  }
  
  return apellidos.sort((a, b) => b.frecuencia - a.frecuencia);
}

/**
 * Obtiene nombres indígenas mexicanos
 * @param {string} genero - 'masculino', 'femenino', o null para ambos
 * @returns {Array} Lista de nombres indígenas
 */
export function getNombresIndigenas(genero = null) {
  if (!genero) return NOMBRES_INDIGENAS;
  
  return NOMBRES_INDIGENAS.filter(n => n.genero === genero);
}

/**
 * Busca nombres por término de búsqueda
 * @param {string} termino - Término a buscar
 * @param {Object} opciones - Opciones de búsqueda
 * @returns {Object} Resultados de búsqueda
 */
export function buscarNombre(termino, opciones = {}) {
  if (!termino || typeof termino !== 'string') {
    throw new Error('Debe proporcionar un término de búsqueda válido');
  }
  
  const { incluirApellidos = true, incluirIndigenas = true, exacto = false } = opciones;
  const terminoLower = termino.toLowerCase();
  
  const resultados = {
    masculinos: [],
    femeninos: [],
    apellidos: [],
    indigenas: []
  };
  
  // Función de comparación
  const coincide = (nombre, termino, exacto) => {
    if (exacto) {
      return nombre.toLowerCase() === termino;
    }
    return nombre.toLowerCase().includes(termino);
  };
  
  // Buscar en nombres masculinos
  resultados.masculinos = NOMBRES_MASCULINOS.filter(n => 
    coincide(n.nombre, terminoLower, exacto)
  );
  
  // Buscar en nombres femeninos
  resultados.femeninos = NOMBRES_FEMENINOS.filter(n => 
    coincide(n.nombre, terminoLower, exacto)
  );
  
  // Buscar en apellidos
  if (incluirApellidos) {
    resultados.apellidos = APELLIDOS_MEXICANOS.filter(a => 
      coincide(a.apellido, terminoLower, exacto)
    );
  }
  
  // Buscar en nombres indígenas
  if (incluirIndigenas) {
    resultados.indigenas = NOMBRES_INDIGENAS.filter(n => 
      coincide(n.nombre, terminoLower, exacto)
    );
  }
  
  // Calcular total
  resultados.total = resultados.masculinos.length + 
                    resultados.femeninos.length + 
                    resultados.apellidos.length + 
                    resultados.indigenas.length;
  
  return resultados;
}

/**
 * Genera un nombre completo aleatorio
 * @param {Object} opciones - Opciones de generación
 * @returns {Object} Nombre completo generado
 */
export function generarNombreCompleto(opciones = {}) {
  const { 
    genero = Math.random() > 0.5 ? 'masculino' : 'femenino',
    incluirSegundoNombre = Math.random() > 0.7,
    incluirNombreIndigena = Math.random() > 0.9
  } = opciones;
  
  let nombres = [];
  let apellidos = [];
  
  // Seleccionar nombre principal
  if (genero === 'masculino') {
    const nombrePrincipal = NOMBRES_MASCULINOS[Math.floor(Math.random() * Math.min(15, NOMBRES_MASCULINOS.length))];
    nombres.push(nombrePrincipal.nombre);
  } else {
    const nombrePrincipal = NOMBRES_FEMENINOS[Math.floor(Math.random() * Math.min(15, NOMBRES_FEMENINOS.length))];
    nombres.push(nombrePrincipal.nombre);
  }
  
  // Agregar segundo nombre si aplica
  if (incluirSegundoNombre) {
    if (incluirNombreIndigena) {
      const nombresIndigenas = getNombresIndigenas(genero);
      if (nombresIndigenas.length > 0) {
        const nombreIndigena = nombresIndigenas[Math.floor(Math.random() * nombresIndigenas.length)];
        nombres.push(nombreIndigena.nombre);
      }
    } else {
      if (genero === 'masculino') {
        const segundoNombre = NOMBRES_MASCULINOS[Math.floor(Math.random() * Math.min(20, NOMBRES_MASCULINOS.length))];
        nombres.push(segundoNombre.nombre);
      } else {
        const segundoNombre = NOMBRES_FEMENINOS[Math.floor(Math.random() * Math.min(20, NOMBRES_FEMENINOS.length))];
        nombres.push(segundoNombre.nombre);
      }
    }
  }
  
  // Seleccionar apellidos
  const apellidoPaterno = APELLIDOS_MEXICANOS[Math.floor(Math.random() * Math.min(20, APELLIDOS_MEXICANOS.length))];
  const apellidoMaterno = APELLIDOS_MEXICANOS[Math.floor(Math.random() * Math.min(20, APELLIDOS_MEXICANOS.length))];
  
  apellidos.push(apellidoPaterno.apellido);
  apellidos.push(apellidoMaterno.apellido);
  
  return {
    nombreCompleto: `${nombres.join(' ')} ${apellidos.join(' ')}`,
    nombres: nombres,
    apellidoPaterno: apellidos[0],
    apellidoMaterno: apellidos[1],
    genero: genero,
    tieneNombreIndigena: incluirNombreIndigena && incluirSegundoNombre
  };
}

/**
 * Obtiene estadísticas de nombres mexicanos
 * @returns {Object} Estadísticas completas
 */
export function getEstadisticasNombres() {
  const origenesMasculinos = {};
  const origenesFemeninos = {};
  const origenesApellidos = {};
  
  NOMBRES_MASCULINOS.forEach(n => {
    origenesMasculinos[n.origen] = (origenesMasculinos[n.origen] || 0) + 1;
  });
  
  NOMBRES_FEMENINOS.forEach(n => {
    origenesFemeninos[n.origen] = (origenesFemeninos[n.origen] || 0) + 1;
  });
  
  APELLIDOS_MEXICANOS.forEach(a => {
    origenesApellidos[a.origen] = (origenesApellidos[a.origen] || 0) + 1;
  });
  
  return {
    totalNombresMasculinos: NOMBRES_MASCULINOS.length,
    totalNombresFemeninos: NOMBRES_FEMENINOS.length,
    totalApellidos: APELLIDOS_MEXICANOS.length,
    totalNombresIndigenas: NOMBRES_INDIGENAS.length,
    origenesMasculinos,
    origenesFemeninos,
    origenesApellidos,
    nombreMasPopularMasculino: NOMBRES_MASCULINOS[0],
    nombreMasPopularFemenino: NOMBRES_FEMENINOS[0],
    apellidoMasFrecuente: APELLIDOS_MEXICANOS[0]
  };
}

/**
 * Valida si un nombre es típicamente mexicano
 * @param {string} nombre - Nombre a validar
 * @returns {Object} Resultado de validación
 */
export function validarNombreMexicano(nombre) {
  if (!nombre || typeof nombre !== 'string') {
    throw new Error('Debe proporcionar un nombre válido');
  }
  
  const resultados = buscarNombre(nombre, { exacto: true });
  const esMexicano = resultados.total > 0;
  
  let categoria = [];
  let popularidad = 0;
  
  if (resultados.masculinos.length > 0) {
    categoria.push('masculino');
    popularidad = Math.max(popularidad, resultados.masculinos[0].popularidad);
  }
  
  if (resultados.femeninos.length > 0) {
    categoria.push('femenino');
    popularidad = Math.max(popularidad, resultados.femeninos[0].popularidad);
  }
  
  if (resultados.apellidos.length > 0) {
    categoria.push('apellido');
    popularidad = Math.max(popularidad, resultados.apellidos[0].frecuencia);
  }
  
  if (resultados.indigenas.length > 0) {
    categoria.push('indígena');
    popularidad = Math.max(popularidad, 30); // Asignar popularidad base a nombres indígenas
  }
  
  return {
    nombre,
    esMexicano,
    categoria,
    popularidad,
    resultados
  };
}

export default {
  getNombresMasculinos,
  getNombresFemeninos,
  getApellidos,
  getNombresIndigenas,
  buscarNombre,
  generarNombreCompleto,
  getEstadisticasNombres,
  validarNombreMexicano
};
