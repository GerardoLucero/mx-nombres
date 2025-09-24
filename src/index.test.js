import lib from './index.js';

describe('mx-nombres', () => {
  describe('getNombresMasculinos', () => {
    test('debe retornar nombres masculinos populares', () => {
      const nombres = lib.getNombresMasculinos();
      expect(Array.isArray(nombres)).toBe(true);
      expect(nombres.length).toBeGreaterThan(0);
      expect(nombres[0]).toHaveProperty('nombre');
      expect(nombres[0]).toHaveProperty('popularidad');
      expect(nombres[0]).toHaveProperty('origen');
    });

    test('debe filtrar por popularidad', () => {
      const nombres = lib.getNombresMasculinos({ minPopularidad: 80 });
      nombres.forEach(nombre => {
        expect(nombre.popularidad).toBeGreaterThanOrEqual(80);
      });
    });

    test('debe filtrar por origen', () => {
      const nombres = lib.getNombresMasculinos({ origen: 'Hebreo' });
      nombres.forEach(nombre => {
        expect(nombre.origen).toBe('Hebreo');
      });
    });
  });

  describe('getNombresFemeninos', () => {
    test('debe retornar nombres femeninos populares', () => {
      const nombres = lib.getNombresFemeninos();
      expect(Array.isArray(nombres)).toBe(true);
      expect(nombres.length).toBeGreaterThan(0);
      expect(nombres[0]).toHaveProperty('nombre');
      expect(nombres[0]).toHaveProperty('popularidad');
    });
  });

  describe('getApellidos', () => {
    test('debe retornar apellidos mexicanos', () => {
      const apellidos = lib.getApellidos();
      expect(Array.isArray(apellidos)).toBe(true);
      expect(apellidos.length).toBeGreaterThan(0);
      expect(apellidos[0]).toHaveProperty('apellido');
      expect(apellidos[0]).toHaveProperty('frecuencia');
    });
  });

  describe('buscarNombre', () => {
    test('debe encontrar nombres existentes', () => {
      const resultado = lib.buscarNombre('José');
      expect(resultado).toHaveProperty('total');
      expect(resultado.total).toBeGreaterThan(0);
      expect(resultado).toHaveProperty('masculinos');
      expect(resultado).toHaveProperty('femeninos');
    });

    test('debe rechazar búsquedas inválidas', () => {
      expect(() => lib.buscarNombre('')).toThrow();
      expect(() => lib.buscarNombre(null)).toThrow();
    });
  });

  describe('generarNombreCompleto', () => {
    test('debe generar nombre completo válido', () => {
      const nombre = lib.generarNombreCompleto();
      expect(nombre).toHaveProperty('nombreCompleto');
      expect(nombre).toHaveProperty('nombres');
      expect(nombre).toHaveProperty('apellidoPaterno');
      expect(nombre).toHaveProperty('apellidoMaterno');
      expect(nombre).toHaveProperty('genero');
      expect(typeof nombre.nombreCompleto).toBe('string');
      expect(nombre.nombres.length).toBeGreaterThan(0);
    });

    test('debe respetar género especificado', () => {
      const nombreMasculino = lib.generarNombreCompleto({ genero: 'masculino' });
      const nombreFemenino = lib.generarNombreCompleto({ genero: 'femenino' });
      expect(nombreMasculino.genero).toBe('masculino');
      expect(nombreFemenino.genero).toBe('femenino');
    });
  });

  describe('getEstadisticasNombres', () => {
    test('debe retornar estadísticas completas', () => {
      const stats = lib.getEstadisticasNombres();
      expect(stats).toHaveProperty('totalNombresMasculinos');
      expect(stats).toHaveProperty('totalNombresFemeninos');
      expect(stats).toHaveProperty('totalApellidos');
      expect(stats).toHaveProperty('nombreMasPopularMasculino');
      expect(stats).toHaveProperty('apellidoMasFrecuente');
      expect(typeof stats.totalNombresMasculinos).toBe('number');
    });
  });

  describe('validarNombreMexicano', () => {
    test('debe validar nombres mexicanos', () => {
      const resultado = lib.validarNombreMexicano('José');
      expect(resultado).toHaveProperty('esMexicano');
      expect(resultado).toHaveProperty('categoria');
      expect(resultado).toHaveProperty('popularidad');
      expect(resultado.esMexicano).toBe(true);
    });

    test('debe rechazar nombres inválidos', () => {
      expect(() => lib.validarNombreMexicano('')).toThrow();
      expect(() => lib.validarNombreMexicano(null)).toThrow();
    });
  });
});
