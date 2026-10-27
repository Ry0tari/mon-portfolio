export const categoryLabels = {
  cours: 'Académique',
  stage: 'Professionnel',
}

// Ordre d'affichage : expériences professionnelles d'abord, puis projets académiques du plus récent au plus ancien
export const projects = [
  {
    id: 'observatoire-etl',
    title: "Observatoire de l'eau (ETL)",
    category: 'stage',
    context: 'Stage 2026 — Conseil départemental de la Corrèze — Flux de données hydrométriques via ETL.',
    description:
      "L'Observatoire de l'eau répond à une demande du président du Conseil départemental : mieux suivre la qualité de l'eau et les espèces qui y vivent. J'ai pris en charge les flux de données provenant de différentes sources, de leur intégration jusqu'à leur publication cartographique.",
    missions: [
      "Refonte, maintenance et optimisation de flux d'intégration de données (ETL)",
      "Mise en place d'un système global de traçabilité et de logs applicatifs",
      'Réconciliation spatio-temporelle et dédoublonnage de bases de données complexes',
      "Génération automatisée de rapports d'analyse de flux au format Word",
      "Interfaçage avec des API web (REST/JSON) pour l'enrichissement de métadonnées",
      'Automatisation des mises à jour de services cartographiques sur ArcGIS Enterprise',
      'Développement de modules de purge et de nettoyage système post-traitement',
    ],
    tags: ['FME', 'ETL', 'ArcGIS', 'API REST'],
    pdfUrl: '/doc_tech/Bilan_Stage_2.pdf',
  },
  {
    id: 'observatoire-bdd',
    title: "Observatoire de l'eau (BDD)",
    category: 'stage',
    context: 'Stage 2025 — Conseil départemental de la Corrèze — Gestion de base de données.',
    description:
      "L'Observatoire de l'eau répond à une demande du président du Conseil départemental : mieux suivre la qualité de l'eau et les espèces qui y vivent. J'ai été chargé d'une partie de la base de données du projet.",
    missions: [
      'Analyse des tables existantes',
      'Création de tables pour optimiser la structure des données',
      'Gestion et contrôle des enregistrements',
    ],
    tags: ['DBeaver', 'DuckDB', 'SQL'],
  },
  {
    id: 'utrillo',
    title: 'Utribu',
    category: 'cours',
    context: 'BTS SIO — Application mobile Flutter connectée à une API Spring Boot.',
    description:
      "Développement d'une application mobile en Flutter interconnectée avec une API Spring Boot. J'ai eu la charge de la gestion des utilisateurs : le module d'acceptation des comptes et l'attribution des rôles administrateur par un super-administrateur.",
    missions: [
      'Développement frontend mobile avec Flutter',
      'Gestion des utilisateurs et rôles avec Spring Boot',
      'Mise en place du workflow de validation des comptes',
    ],
    tags: ['Flutter', 'Spring Boot', 'API', 'PostgreSQL', 'MongoDB'],
    pdfUrl: '/doc_tech/Documentation_technique_Utribu.pdf',
    isMobileFormat: true,
    images: [
      '/capture_site/Utribu/Capture d\'écran 2026-04-26 151732.png',
      '/capture_site/Utribu/Capture d\'écran 2026-04-26 151808.png',
      '/capture_site/Utribu/Capture d\'écran 2026-04-26 151834.png',
    ],
  },
  {
    id: 'analim',
    title: 'Analim',
    category: 'cours',
    context: "BTS SIO — Module de facturation d'une application web MVC.",
    description:
      "Analim est une application web basée sur une architecture MVC et une base de données MySQL. J'y ai développé le module de facturation en PHP orienté objet.",
    missions: [
      'Développement du module de facturation',
      'Programmation PHP orientée objet',
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
    id: 'petit-jardinier',
    title: "Le P'tit Jardinier",
    category: 'cours',
    context: 'BTS SIO — Application web de devis en ligne pour une entreprise de paysagisme.',
    description:
      "Application web métier pour une entreprise de paysagisme spécialisée dans l'entretien des espaces verts et la taille de haies. Elle remplace un processus de devis papier et téléphone par un portail client disponible 24h/24, où chacun estime en temps réel le coût de sa prestation et crée son devis en autonomie.",
    missions: [
      'Simulateur de devis en temps réel selon les dimensions des haies (hauteur, longueur)',
      'Espace client pour la création et le suivi des devis',
      "Tableau de bord professionnel : vue globale de l'activité, gestion des clients et du catalogue tarifaire",
      'Analyse des besoins, modélisation et documentation technique',
    ],
    tags: ['Symfony', 'PHP', 'SQL', 'Modélisation'],
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
    id: 'seminaire',
    title: 'Séminaire',
    category: 'cours',
    context: "BTS SIO — Création et consommation d'une API REST en PHP.",
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
    id: 'karate',
    title: 'Karaté',
    category: 'cours',
    context: 'BTS SIO — Application C# de gestion de compétitions.',
    description:
      "Application permettant à la Ligue de Lorraine de Karaté d'organiser tout au long de l'année des compétitions de « Kata » dans ses clubs affiliés, et de numériser l'ensemble des informations pour une gestion plus simple et plus rapide.",
    missions: [
      'Gestion des clubs',
      'Consultation de la liste des adhérents de chaque club',
      "Développement du menu général de l'application",
    ],
    tags: ['C#', 'Visual Studio'],
    pdfUrl: '/doc_tech/Documentation technique KARATE.pdf',
  },
]
