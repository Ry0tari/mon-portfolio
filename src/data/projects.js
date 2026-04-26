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
    tags: ['Framework Symfony', 'SQL', 'PHP', 'Modélisation'],
    pdfUrl: '/doc_tech/Documentation_Technique_petit_jardinier.pdf',
    images: [
      '/capture_site/petit_jardinier/Capture d\'écran 2026-04-26 153117.png',
      '/capture_site/petit_jardinier/Capture d\'écran 2026-04-26 153323.png',
      '/capture_site/petit_jardinier/Capture d\'écran 2026-04-26 153403.png',
      '/capture_site/petit_jardinier/Capture d\'écran 2026-04-26 153447.png',
      '/capture_site/petit_jardinier/Capture d\'écran 2026-04-26 153503.png',
      '/capture_site/petit_jardinier/Capture d\'écran 2026-04-26 153534.png',
    ],
  },
  {
    id: 'resto',
    title: 'Projet Resto',
    category: 'cours',
    context: 'Projet universitaire',
    description:
      "Ce projet a consisté en la création d'un site web regroupant différents restaurants. Il intègre un système d'avis et une fonctionnalité d'authentification des utilisateurs, le tout développé selon une architecture MVC.",
    missions: [
      'Développement MVC en PHP',
      'Création et gestion de la base de données MySQL',
      "Mise en place de l'authentification et du système d'avis",
    ],
    tags: ['PHP', 'MySQL', 'MVC'],
    pdfUrl: '/doc_tech/Documentation_Technique_Resto.pdf',
    images: [
      '/capture_site/resto/Capture d\'écran 2026-04-26 153808.png',
      '/capture_site/resto/Capture d\'écran 2026-04-26 153856.png',
      '/capture_site/resto/Capture d\'écran 2026-04-26 153938.png',
    ],
  },
  {
    id: 'seminaire',
    title: 'Projet Séminaire',
    category: 'cours',
    context: 'Projet universitaire',
    description:
      "Ce projet m'a permis d'apprendre et de mettre en pratique la création ainsi que la consommation d'une API REST développée en PHP.",
    missions: [
      "Création d'une API REST en PHP",
      "Consommation des endpoints de l'API",
    ],
    tags: ['PHP', 'API REST'],
    pdfUrl: '/doc_tech/Documentation_Technique_seminaire.pdf',
    images: [
      '/capture_site/seminaire/Capture d\'écran 2026-04-26 154307.png',
      '/capture_site/seminaire/Capture d\'écran 2026-04-26 154338.png',
    ],
  },
  {
    id: 'analim',
    title: 'Projet Analim',
    category: 'cours',
    context: 'Projet universitaire',
    description:
      "Dans le cadre du projet Analim, basé sur une architecture MVC et une base de données MySQL, j'ai été assigné à la mission de facturation en utilisant le langage PHP orienté objet.",
    missions: [
      'Développement de la mission de facturation',
      'Programmation PHP Orientée Objet',
      'Conception MVC',
    ],
    tags: ['PHP', 'POO', 'MVC', 'MySQL'],
    pdfUrl: '/doc_tech/Documentation_Technique_Analim.pdf',
    images: [
      '/capture_site/analim/Capture d\'écran 2026-04-26 154518.png',
      '/capture_site/analim/Capture d\'écran 2026-04-26 154621.png',
      '/capture_site/analim/Capture d\'écran 2026-04-26 154641.png',
      '/capture_site/analim/Capture d\'écran 2026-04-26 154707.png',
      '/capture_site/analim/Capture d\'écran 2026-04-26 154722.png',
    ],
  },
  {
    id: 'utrillo',
    title: 'Projet Utrillo',
    category: 'cours',
    context: 'Projet universitaire',
    description:
      "Développement d'une application mobile en Flutter interconnectée avec une API SpringBoot. J'ai eu la charge de la partie gestion utilisateur, incluant le module d'acceptation des comptes et le système d'attribution des rôles administrateur par un superAdmin.",
    missions: [
      'Développement frontend mobile avec Flutter',
      'Gestion des utilisateurs et rôles avec SpringBoot',
      'Mise en place du workflow de validation des comptes',
    ],
    tags: ['Flutter', 'SpringBoot', 'API'],
    pdfUrl: '/doc_tech/Documentation_technique_Utribu.pdf',
    isMobileFormat: true,
    images: [
      '/capture_site/Utribu/Capture d\'écran 2026-04-26 151732.png',
      '/capture_site/Utribu/Capture d\'écran 2026-04-26 151808.png',
      '/capture_site/Utribu/Capture d\'écran 2026-04-26 151834.png',
    ],
  },
  {
    id: 'replication-bdd',
    title: 'Réplication de base de données',
    category: 'cours',
    context: 'Projet système et réseau',
    description:
      "Mise en place d'une architecture de réplication de base de données à l'aide de MariaDB au sein d'un environnement virtualisé sous Debian 12.",
    missions: [
      'Configuration des machines virtuelles (VirtualBox)',
      'Installation et paramétrage de Debian 12',
      'Mise en place de la réplication Master/Slave MariaDB',
    ],
    tags: ['Debian 12', 'MariaDB', 'VirtualBox'],
    pdfUrl: '/doc_tech/Documentation_Technique_Replication_BDD.pdf',
  },
]

