export type Language = 'en' | 'fr';

export const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      about: "About",
      contact: "Contact",
    },
    hero: {
      badge: "Hi! My name is Cyrielle",
      titleName: "I am a software developer",
      title: "who creates",
      titleAccent1: "mobile Apps",
      titleAccent2: "Web sites",
      titleAccent3: "user experiences",
      titleAccent4: "your next digital project",
      description1: "I have ",
      description2: "5 years of experience ",
      description3: " in web development, ",
      description4: "in native and cross-platform applications.",
      languagesWebTitle: "WEB: ",
      languagesWeb: "AngularJS, JavaScript, HTML, CSS, TypeScript, React",
      languagesMobileTitle: "MOBILE: ",
      languagesMobile: "Android (Java), iOS (Objective-C), React Native",
      viewWork: "Learn more",
      getInTouch: "Get in Touch"
    },
    features: {
      modernStack: "Clean code",
      modernStackDesc: "Write readable, structured, and tested code that follows standards, with sufficient documentation to simplify maintenance and support collaboration.",
      mobileFirst: "User Experience",
      mobileFirstDesc: "Contribute to crafting modern designs and interactions for smartphones, tablets, and desktops.",
      teamWork: "Teamwork",
      teamWorkDesc: "Contribute to creating a collaborative, respectful, and productive work environment where ideas are freely shared and successes celebrated together.",
      bulletFeature1Title: "Quality & Tests",
      bulletFeature1List: ["QA Tests", "Code Review", "Bug Analysis", "Functional Tests", "Documentation"],
      bulletFeature2Title: "Collaboration",
      bulletFeature2List: ["Respectful communication", "Pair programming", "Always active and involved during the happy hours", "Inter-team collaboration"],
      bulletFeature3Title: "Autonomy",
      bulletFeature3List: ["Priority management", "Problem solving", "Proactive approach", "Time management", "Critical thinking"],
    },
    about: {
      title: "About me.",
      p1: "My career path is unconventional, marked by experiences in several sectors before I turned to programming. I chose this field for its diversity, its numerous opportunities for growth, and the autonomy it offers.",
      p2: "Sharing knowledge and ideas is central to my approach. With skills in several programming languages, a strong team spirit, and a constant drive to improve, I am confident I can quickly become a versatile asset to your team.",
      p3: "I am an empathetic and sociable person. What I find most fulfilling in development is the gradual realization of an application and the recognition of users through their feedback.",
    },
    projects: {
      title: "Projects",
      description: "Key projects contributed to throughout my professional experience.",
      project1title: "mTransport - Driver Application",
      project2title: "mTransport - Parent Application",
      project3title: "mTransport - Portal Web",
      project1desc1: "This application, developed natively using Java for Android and Objective-C for iOS, is a valuable tool for school bus drivers to determine the correct route, locate scheduled stops along a route, and check the presence of students (expected, absent, or already on board).",
      project1desc2: "In last years, several major features have been added:",
      project1desc3: "Communication module, Internal forms (Discipline and technical forms), Automatic departures and arrivals, Preview of future routes, UI and UX improvements, Display of recent route changes, etc...",
      project2desc1: "Initially developed natively and then last year using React Native, this application allows parents to track their children's journeys, receive real-time notifications, and access information on routes and schedules.",
      project2desc2: "Thanks to this experience, I was able to build a foundation to continue improving my technical skills and gain autonomy in this language. Features developed:",
      project2desc3: "UI & UX of the login process, UI & UX of the Home page, UI & UX of reporting/cancelling a student's absence, UI & UX of the Settings page with checkbox logic.",
      project3desc1: "Transport - Web Portal is a complete platform that combines AngularJS, HTML, CSS and Javascript.",
      project3desc2: "This website includes many tools that allow dispatchers to track the vehicle fleet in real time on a map. It facilitates, among other things, route planning and driver assignment. I enjoy having skills in different software programs. Working on the portal is part of this desire to diversify my knowledge. Major features developed:",
      project3desc3: "Improvements and new tools on the map (Google Maps API), Adding new information reports (PDF and CSV), Creating a user-friendly FAQ, Implementing logic based on API requests from the server (I like using Ngrok for a clear data visualization)."
    },
    skills: {
      title: "Technical Skills",
      description: "List of tools and technologies that I have used and mastered in my professional experiences.",
      mobile: "Mobile Development",
      frontend: "Front-End Development",
      backend: "Back-End & Database",
      tools: "Tools & Workflow",
      stats: {
        experience: "Years Experience",
        bugs: "Bugs Found",
        motivation: "Motivation Percentage",
        save: "CMD + S Saves"
      }
    },
    contact: {
      title: "Contact Me",
      description: "I'm open to new opportunities and collaborations.",
      details: "Contact Details",
      emailMe: "Email Me",
      callMe: "Call Me",
      location: "Location",
      downloadCv: "Download CV",
    },
    footer: {
      desc: "Contact me :)",
      rights: "All rights reserved."
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      projects: "Projets",
      skills: "Compétences",
      about: "À propos",
      contact: "Contact",
    },
    hero: {
      badge: "Je m'appelle Cyrielle",
      titleName: "Je suis developpeuse",
      title: "",
      titleAccent1: "d'applications mobiles",
      titleAccent2: "de sites Web",
      titleAccent3: "d'expériences utilisateur",
      titleAccent4: "de votre prochain projet numérique",
      description1: "J'ai ",
      description2: "5 ans d'expérience ",
      description3: "en développement web,",
      description4: "en mobile natif et multi-plateformes.",
      languagesWebTitle: "WEB : ",
      languagesWeb: "AngularJS, JavaScript, HTML, CSS, TypeScript, React",
      languagesMobileTitle: "MOBILE : ",
      languagesMobile: "Android (Java), iOS (Objective-C), React Native",
      viewWork: "En savoir plus",
      getInTouch: "Me contacter"
    },
    features: {
      modernStack: "Bonnes pratiques",
      modernStackDesc: "Rédiger un code lisible, structuré et testé, respectant les normes, avec une documentation suffisante pour simplifier la maintenance et favoriser la collaboration.",
      mobileFirst: "Expérience Utilisateur",
      mobileFirstDesc: "Contribuer à élaborer des designs et interations modernes pour smartphones, tablettes et ordinateurs.",
      teamWork: "Travail en équipe",
      teamWorkDesc: "Contribuer à créer un environnement de travail collaboratif, respectueux et productif, où les idées sont multiples et les succès célébrés ensemble.",
      bulletFeature1Title: "Qualité & Tests",
      bulletFeature1List: ["Tests QA", "Code Review", "Analyse de bugs", "Tests fonctionnels", "Documentation"],
      bulletFeature2Title: "Collaboration",
      bulletFeature2List: ["Communication bienveillante", "Pair programming", "Toujours active et impliquée lors des 5 à 7", "Collaboration inter-équipes", "Esprit critique"],
      bulletFeature3Title: "Autonomie",
      bulletFeature3List: ["Gestion des priorités", "Résolution de problèmes", "Prise d'initiatives", "Gestion du temps"
      ]
    },
    about: {
      title: "À propos de moi.",
      p1: "Mon parcours est atypique, marqué par des expériences dans plusieurs secteurs avant de me tourner vers la programmation. J’ai choisi ce domaine pour sa diversité, ses nombreuses perspectives d’évolution et l’autonomie qu’il permet.",
      p2: "Le partage de connaissances et d’idées est au cœur de ma démarche. Forte de compétences en plusieurs langages de programmation, d’un solide esprit d’équipe et d’une volonté constante de progresser, je suis convaincue de pouvoir devenir rapidement un atout polyvalent pour votre équipe.",
      p3: "Je suis une personne empathique et sociable. Ce qui m’épanouit dans le développement, c’est la concrétisation progressive d’une application et la reconnaissance des utilisateur·rice·s à travers leurs retours.",
    },
    projects: {
      title: "Projets",
      description: "Principaux projets auxquels j’ai contribué au cours de mon parcours professionnel.",
      project1title: "mTransport - Application Conducteur",
      project2title: "mTransport - Application Parent",
      project3title: "mTransport - Portail Web",
      project1desc1: "Application développée en natif utilisant Java pour Android et Objective-C pour iOS. Cette application constitue une aide précieuse pour les conducteur·rice·s de véhicules scolaire afin de déterminer la direction à prendre, localiser les arrêts prévus sur un trajet et connaître la présence des élèves (attendus, absents ou déjà à bord).",
      project1desc2: "Ces dernières années, plusieurs fonctionnalités majeures ont été ajoutées :",
      project1desc3: "Module communication, Formulaires internes (Formulaire discipline et technique), Départs et arrivées automatiques, Aperçu des trajets futurs, Améliorations du UI et UX, Affichage des modifications récentes sur les itinéraires etc...",
      project2desc1: "Développée à la base en native puis l'année passée en React Native, cette application permet aux parents de suivre les trajets de leurs enfants, de recevoir des notifications en temps réel et d'accéder à des informations sur les itinéraires et les horaires.",
      project2desc2: "Grâce à cette expérience, j'ai pu me construire des bases pour continuer à m'améliorer techniquement et gagner en autonomie sur ce langage. Fonctionnalités développées :",
      project2desc3: "UI & UX du processus de connexion, UI & UX Accueil, UI & UX Déclarer/Annuler l'absence d'un·d'une élève, UI & UX de la page Paramètres avec la logique des checkbox.",
      project3desc1: "Transport - Portail Web est une plateforme complète qui associe AngularJS, HTML, CSS et Javascript.",
      project3desc2: "Ce site web comprend beaucoup d’outils permettant aux répartiteur·rice·s de pouvoir suivre en temps réel la flotte automobile sur une carte. Elle facilite, entre autres, la planification des trajets et l’affectation des conducteur·rice·s. J'aime avoir des compétences dans différents logiciels. Travailler sur le portail fait partie de cette envie de diversifier mes connaissances. Fonctionnalités majeures développées :",
      project3desc3: "Améliorations et nouveaux outils sur la carte. (API de Google Map), Ajouter de nouveaux rapports d'information. (PDF et CSV), Créer une FAQ adaptable en fonction des utilisateurs, Implémenter des logiques en fonction des requêtes API venant du serveur (J'aime utiliser Ngrok pour avoir un visuel clair des données transmisses)."
    },
    skills: {
      title: "Compétences Techniques",
      description: "Liste des outils et technologies que j’ai utilisés et maîtrisés dans le cadre de mes expériences professionnelles.",
      mobile: "Développement Mobile",
      frontend: "Développement Front-End",
      backend: "Back-End & Base de données",
      tools: "DevOps et Outils :",
      stats: {
        experience: "Années d'Expérience",
        bugs: "Bugs Trouvés",
        motivation: "Pourcentage de motivation",
        save: "CMD + S Sauvegardes"
      }
    },
    contact: {
      title: "Contactez-moi",
      description: "Je suis disponible pour des nouvelles opportunités et collaborations.",
      details: "Coordonnées",
      emailMe: "Email",
      callMe: "Téléphone",
      location: "Localisation",
      downloadCv: "Télécharger CV",
    },
    footer: {
      desc: "Contactez-moi :)",
      rights: "Tous droits réservés."
    },
  }
};
