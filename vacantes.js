/*
  BASE DE DATOS PÚBLICA DEL BUSCADOR
  ---------------------------------
  IMPORTANTE:
  - Este archivo será público cuando lo subas a un repositorio público.
  - Incluí ÚNICAMENTE datos laborales que estén autorizados para difusión.
  - NO agregues nombres, DNI, CUIL, teléfonos, correos, domicilios,
    datos de docentes/postulantes ni observaciones que identifiquen personas.
  - Cada registro debe usar solamente los campos del ejemplo.

  Reemplazá los ejemplos ficticios por registros reales previamente depurados.
  Cuando lo hagas, cambiá DEMO_MODE a false.
*/

window.DEMO_MODE = true;

window.VACANTES = [
  {
    id: "demo-001",
    escuelaCodigo: "0001",
    pid: "BIO101",
    materiaCargo: "Biología",
    nivel: "Secundaria",
    modalidad: "Común",
    situacion: "Provisional",
    prestacion: "Módulos",
    dias: ["Lunes", "Miércoles"],
    horario: "08:00 a 10:00",
    turno: "Mañana",
    curso: "2.º año"
  },
  {
    id: "demo-002",
    escuelaCodigo: "0002",
    pid: "BIO101",
    materiaCargo: "Biología",
    nivel: "Secundaria",
    modalidad: "Común",
    situacion: "Suplente",
    prestacion: "Módulos",
    dias: ["Martes", "Jueves"],
    horario: "13:00 a 15:00",
    turno: "Tarde",
    curso: "3.º año"
  },
  {
    id: "demo-003",
    escuelaCodigo: "0003",
    pid: "CN201",
    materiaCargo: "Ciencias Naturales",
    nivel: "Secundaria",
    modalidad: "Común",
    situacion: "Provisional",
    prestacion: "Horas cátedra",
    dias: ["Lunes", "Martes", "Viernes"],
    horario: "10:00 a 12:00",
    turno: "Mañana",
    curso: "1.º año"
  },
  {
    id: "demo-004",
    escuelaCodigo: "0004",
    pid: "BIO205",
    materiaCargo: "Biología",
    nivel: "Secundaria",
    modalidad: "Técnica",
    situacion: "Titular interino",
    prestacion: "Módulos",
    dias: ["Miércoles", "Jueves"],
    horario: "15:00 a 17:00",
    turno: "Tarde",
    curso: "4.º año"
  },
  {
    id: "demo-005",
    escuelaCodigo: "0005",
    pid: "AUX001",
    materiaCargo: "Preceptor/a",
    nivel: "Secundaria",
    modalidad: "Común",
    situacion: "Suplente",
    prestacion: "Cargo",
    dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
    horario: "07:30 a 12:30",
    turno: "Mañana",
    curso: "—"
  },
  {
    id: "demo-006",
    escuelaCodigo: "0006",
    pid: "BIO101",
    materiaCargo: "Biología",
    nivel: "Secundaria",
    modalidad: "Común",
    situacion: "Titular",
    prestacion: "Módulos",
    dias: ["Viernes"],
    horario: "09:00 a 11:00",
    turno: "Mañana",
    curso: "2.º año"
  }
];
