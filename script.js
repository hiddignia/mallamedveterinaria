const ramos = [
  { id: "matematica", nombre: "Matemática general", semestre: 1, requisitos: [] },
  { id: "bioestadistica", nombre: "Bioestadística", semestre: 2, requisitos: ["matematica"] },
  { id: "comunicacion", nombre: "Taller de comunicación oral y escrita", semestre: 1, requisitos: [] },
  { id: "intro_medicina", nombre: "Introducción a la medicina veterinaria", semestre: 1, requisitos: [] },
  { id: "biocelular", nombre: "Biología celular", semestre: 1, requisitos: [] },
  { id: "quimica", nombre: "Química", semestre: 1, requisitos: [] },
  { id: "ingles1", nombre: "Inglés I", semestre: 2, requisitos: [] },
  { id: "ingles2", nombre: "Inglés II", semestre: 3, requisitos: ["ingles1"] },
  { id: "anat_canino", nombre: "Anatomía del canino", semestre: 2, requisitos: [] },
  { id: "anat_comp", nombre: "Anatomía comparada", semestre: 3, requisitos: ["anat_canino"] },
  { id: "histo", nombre: "Histoembriología", semestre: 2, requisitos: [] },
  { id: "zoologia", nombre: "Zoología", semestre: 3, requisitos: ["biocelular"] },
  { id: "gestion", nombre: "Medio ambiente y gestión ambiental", semestre: 3, requisitos: ["biocelular"] },
  { id: "micro", nombre: "Microbiología general y veterinaria", semestre: 4, requisitos: ["biocelular"] },
  { id: "bioquimica", nombre: "Bioquímica", semestre: 2, requisitos: ["quimica"] },
  { id: "genetica", nombre: "Genética", semestre: 4, requisitos: ["bioestadistica"] },
  { id: "practica_basica", nombre: "Práctica básica", semestre: 3, requisitos: ["intro_medicina", "anat_canino"] },
  { id: "admin", nombre: "Administración y emprendimiento veterinario", semestre: 4, requisitos: [] },
  { id: "fisiologia", nombre: "Fisiología animal", semestre: 4, requisitos: ["bioquimica", "anat_canino"] },
  { id: "enf_parasitarias", nombre: "Enfermedades parasitarias", semestre: 4, requisitos: ["zoologia"] },
  { id: "tecn_alim", nombre: "Tecnología de los alimentos", semestre: 5, requisitos: ["micro"] },
  { id: "reproduccion", nombre: "Reproducción e inseminación artificial", semestre: 5, requisitos: ["fisiologia"] },
  { id: "fisiopato", nombre: "Fisiopatología", semestre: 5, requisitos: ["histo", "fisiologia"] },
  { id: "inmunologia", nombre: "Inmunología", semestre: 5, requisitos: ["micro"] },
  { id: "nutricion", nombre: "Nutrición y alimentación animal", semestre: 5, requisitos: ["bioquimica"] },
  { id: "etologia", nombre: "Etología y bienestar animal", semestre: 5, requisitos: ["zoologia"] },
  { id: "gineco", nombre: "Ginecología y obstetricia", semestre: 6, requisitos: ["reproduccion"] },
  { id: "farmaco", nombre: "Farmacología y toxicología", semestre: 6, requisitos: ["fisiologia"] },
  { id: "control", nombre: "Control de calidad de los alimentos", semestre: 6, requisitos: ["enf_parasitarias", "tecn_alim"] },
  { id: "prod_avicola", nombre: "Producción avícola", semestre: 6, requisitos: ["nutricion", "etologia"] },
  { id: "semiologia", nombre: "Semiología", semestre: 7, requisitos: ["farmaco", "fisiopato", "anat_comp"] },
  { id: "epidemio", nombre: "Epidemiología veterinaria", semestre: 7, requisitos: ["enfermedades_infecciosas"] },
  { id: "practica_intermedia", nombre: "Práctica intermedia", semestre: 7, requisitos: ["farmaco", "enfermedades_infecciosas"] },
  { id: "med_caninos", nombre: "Medicina de caninos", semestre: 8, requisitos: ["laboratorio", "semiologia"] },
  { id: "laboratorio", nombre: "Laboratorio clínico", semestre: 7, requisitos: ["patologia_sistemas"] },
  { id: "patologia_sistemas", nombre: "Patología de sistemas", semestre: 6, requisitos: ["fisiopato"] },
  { id: "cirugia", nombre: "Cirugía general", semestre: 8, requisitos: ["semiologia"] },
  { id: "diag_imagenes", nombre: "Diagnóstico por imágenes", semestre: 9, requisitos: ["patologia_sistemas"] },
  { id: "practica_final", nombre: "Práctica final", semestre: 9, requisitos: ["practica_intermedia"] }
];

const malla = document.getElementById("malla");
const aprobados = new Set();

function renderMalla() {
  malla.innerHTML = "";
  ramos.forEach(ramo => {
    const requisitosCumplidos = ramo.requisitos.every(r => aprobados.has(r));
    const div = document.createElement("div");
    div.className = "subject";
    div.textContent = `${ramo.nombre} (S${ramo.semestre})`;
    if (aprobados.has(ramo.id)) {
      div.classList.add("completed");
    } else if (requisitosCumplidos) {
      div.classList.add("active");
      div.onclick = () => {
        aprobados.add(ramo.id);
        renderMalla();
      };
    }
    malla.appendChild(div);
  });
}

renderMalla();
