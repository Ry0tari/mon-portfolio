export const projects = [
  {
    id: 'karate',
    title: 'Projet Karaté',
    category: 'cours',
    context: 'Projet scolaire — Application C# de gestion de compétition.',
    description:
      "Le projet karaté va permettre à la ligue De Lorraine de Karaté d'organiser tout au long de l'année des compétitions de « Kata » dans les différents clubs qui lui sont affiliés et de numériser l'ensemble des informations pour une gestion plus simple et rapide.",
    missions: [
      'Gestion des clubs',
      'Consultation pour chaque club de la liste de ses adhérents',
      'Menu général',
    ],
    tags: ['C#', 'Visual Studio'],
    pdfUrl: '/doc_tech/Documentation technique KARATE.pdf',
  },
  {
    id: 'observatoire-bdd',
    title: "Observatoire de l'eau (BDD)",
    category: 'stage',
    context: 'Stage 2025 — Gestion de base de données.',
    description:
      "Le projet de l'observatoire de l'eau est une demande du président du conseil départemental pour avoir un meilleur suivi de la qualité de l'eau mais aussi des espèces présentes dans ces eaux. J'ai eu pour mission de gérer une partie de la base de données dans le cadre de ce projet.",
    missions: [
      'Analyse de table',
      'Création de table pour optimiser la donnée',
      "Gestion d'enregistrement",
    ],
    tags: ['DBeaver', 'DuckDB', 'SQL'],
    pdfUrl: '/doc_tech/Documentation_technique_observatoire_eau.pdf',
  },
  {
    id: 'observatoire-etl',
    title: "Observatoire de l'eau (ETL)",
    category: 'stage',
    context: 'Stage 2026 — Gestion de flux de données hydrométriques via ETL.',
    description:
      "Le projet de l'observatoire de l'eau est une demande du président du conseil départemental pour avoir un meilleur suivi de la qualité de l'eau mais aussi des espèces présentes dans ces eaux. J'ai eu pour mission de gérer des flux de données venant de différentes sources et j'ai dû effectuer différents traitements sur ces derniers.",
    missions: [
      "Refonte, maintenance et optimisation de flux d'intégration de données (ETL)",
      "Mise en place d'un système global de traçabilité et de logs applicatifs",
      'Réconciliation spatio-temporelle et dédoublonnage de bases de données complexes',
      "Génération automatisée de rapports d'analyse de flux au format Word",
      "Interfaçage avec des API web (REST/JSON) pour l'enrichissement de métadonnées",
      'Automatisation des mises à jour de services cartographiques sur ArcGIS Enterprise',
      'Développement de modules de purge et de nettoyage système post-traitement',
    ],
    tags: ['FME', 'ETL', 'ArcGIS'],
    pdfUrl: '/doc_tech/Bilan_Stage_2.pdf',
  },
  {
    id: 'service-college',
    title: 'Service Collège',
    category: 'stage',
    context: 'Stage 2025 — Intervention et préparation d\'équipement pour les collèges.',
    description:
      "J'ai accompagné le service collège dans différentes missions sur le terrain ou bien participé à la préparation de l'équipement.",
    missions: [
      'Ghostage de PC',
      "Intégration de tablettes dans une MDM",
      'Interventions techniques sur site',
    ],
    tags: ['Veeam', 'Putty', 'MDM'],
    pdfUrl: '/doc_tech/Documentation_technique_Collège.pdf',
  },
  {
    id: 'glpi',
    title: 'Installation GLPI',
    category: 'cours',
    context: 'Projet scolaire — Mise en place de la gestion d\'un parc informatique.',
    description:
      "Durant ce projet, on devait mettre en place la gestion d'un parc informatique au travers de l'outil GLPI.",
    missions: [
      'Installation de GLPI sur un serveur',
      "Installation d'un agent GLPI sur Linux",
      'Création et résolution de tickets',
    ],
    tags: ['GLPI', 'Linux', 'Debian'],
    pdfUrl: '/doc_tech/Documentation_gestion_patrimoine_info.pdf',
  },
  {
    id: 'petit-jardinier',
    title: 'Le Petit Jardinier',
    category: 'cours',
    context: 'Projet scolaire — Application de gestion.',
    description:
      "Projet de développement d'une application de gestion pour Le Petit Jardinier.",
    missions: [
      'Analyse des besoins',
      "Développement de l'application",
      'Documentation technique',
    ],
    tags: ['Développement', 'Gestion'],
    pdfUrl: '/doc_tech/Documentation_Technique_petit_jardinier.pdf',
  },
]
