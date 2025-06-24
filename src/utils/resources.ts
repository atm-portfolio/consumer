import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      message: {
        about: 'About',
        aboutThisApplication: 'About this application',
        architecture: 'Architecture',
        dashboard: 'Dashboard',
        dashboardDescription:
          'This is the dashboard page. Here you can see the list of projects and the list of products of each project. Once you have selected the projects and products you want to consume, click the submit button. This will create data for reports in Admin client.',
        email: 'Email',
        exitApp: 'Exit app',
        exitAppExplanation:
          'Click/Tap the icon located at the top-right corner to exit the application.',
        gettingStarted: 'Getting started',
        gettingStartedDescription:
          'To get started, you will need to log in with a credential that has user role to have be able to consume products.',
        gettingStartedFreeTier:
          "Please note that I'm using a free tier service, which means it may take some time for the application to wake up, usually within 50 seconds. Please be patient.",
        gettingStartedMinimizeWaitTimes:
          'So to minimize consecutive waiting times, once the application is up it will ping the server every 10 minutes to keep it alive. So your experience will not have any long loading times at all.',
        gettingStartedOrangeBar:
          'You should see an orange bar on top of the screen when the application is trying to wake the server up. After the server is properly up and running, all other endpoints calls will respond quickly.',
        gettingStartedPeek:
          'If you are just browsing and want to take a peek, you can log in with a guest account.',
        goToAbout: 'Go to about',
        hello: 'Portfolio - Consumer',
        home: 'Home',
        homeDescription:
          'This page was built using Vue as client side framework, Vite as the build tool, SASS as the pre-processor for styling, Typescript for type checking, ESLint for linting, Prettier for code formatting, and Playwright for testing. Additionally, Vue Router is used for routing and Vue i18n for internationalization.',
        homeExplanation:
          'This web application enables users to consume products associated with each project, generating data that is then reported on the Admin-facing React website. Notably, both applications share a common NodeJS API, facilitating seamless data exchange and integration.',
        homePurpose:
          'The purpose of this page is to demonstrate how to utilize this technology stack to build a consumer panel, which will serve as the consumer interface for a multi client and api-driven application ecosystem.',
        hostedOn: 'Hosted on',
        loading: 'Loading...',
        login: 'Login',
        loginExplanation:
          'Click/Tap the icon located at the top-right corner to log in',
        logout: 'Logout',
        notFound: 'Not found',
        password: 'Password',
        routePath: 'Current route path:',
        sourceCode: 'Source code',
        submit: 'Submit',
        techStackUsed: 'Technology stack used',
        user: 'User {number}',
        welcomeTo: 'Welcome to the consumer panel',
      },
    },
    fr: {
      message: {
        about: 'A propos',
        aboutThisApplication: 'A propos de cette application',
        architecture: 'Architecture',
        dashboard: 'Tableau de bord',
        dashboardDescription:
          'C est la page du tableau de bord. Ici, vous pouvez voir la liste des projets et la liste des produits de chaque projet. Une fois que vous avez s lectionn  les projets et les produits que vous souhaitez consommer, cliquez sur le bouton Soumettre. Cela cr era des donn es pour les rapports dans le client Admin.',
        email: 'Email',
        exitApp: "Quitter l'application",
        exitAppExplanation:
          'Cliquez/Tapez sur l ic ne situ e au coin sup rieur droit pour quitter l application.',
        gettingStarted: 'Commencer',
        gettingStartedDescription:
          'Pour commencer, vous devrez vous connecter avec un identifiant qui a le r le d utilisateur pour pouvoir consommer des produits.',
        gettingStartedFreeTier:
          "Notez que j'utilise un service de niveau gratuit, ce qui signifie que l'application peut prendre un peu de temps pour se lancer, en g n ral moins de 50 secondes. Veuillez patienter.",
        gettingStartedMinimizeWaitTimes:
          "Ainsi, pour minimiser les temps d'attente consécutifs, une fois que l'application est opérationnelle, elle pingera le serveur toutes les 10 minutes pour le maintenir en vie. Ainsi, votre expérience n'aura pas de longs temps de chargement.",
        gettingStartedOrangeBar:
          "Vous devriez voir une barre orange en haut de l'écran lorsque l'application essaie de réveiller le serveur. Une fois que le serveur est correctement démarré, tous les autres appels aux points de terminaison répondront rapidement.",
        gettingStartedPeek:
          'Si vous êtes juste en train de parcourir et que vous voulez jeter un oeil, vous pouvez vous connecter avec un compte invité.',
        goToAbout: 'Aller a propos',
        hello: 'Portfolio - Consommateur',
        home: 'Accueil',
        homeDescription:
          "Cette page a été créée en utilisant Vue en tant que framework côté client, Vite en tant qu'outil de construction, SASS en tant que préprocesseur pour la mise en forme, Typescript pour la vérification des types, ESLint pour l'analyse de code, Prettier pour la mise en forme du code, et Playwright pour les tests. De plus, Vue Router est utilisé pour le routage et Vue i18n pour l'internationalisation.",
        homeExplanation:
          'Cette application web permet aux utilisateurs de consommer des produits associés à chaque projet, générant des données qui sont ensuite rapportées sur le site web React orienté administrateur. Notamment, les deux applications partagent une même API NodeJS, facilitant ainsi un échange et une intégration de données transparents.',
        homePurpose:
          'Le but de cette page est de d montrer comment utiliser cette pile technologique pour cr er un panneau consommateur, qui servira d interface consommateur pour un  cosyst me d applications multi-clients et pilot  par API.',
        hostedOn: 'Hébergé sur',
        loading: 'Chargement...',
        login: 'Connexion',
        loginExplanation:
          'Cliquez/Tapez sur l ic ne situ e au coin sup rieur droit pour vous connecter',
        logout: 'Deconnexion',
        notFound: 'Non trouvé',
        password: 'Mot de passe',
        routePath: 'Chemin actuel:',
        sourceCode: 'Code source',
        submit: 'Valider',
        techStackUsed: 'Pile technologique utilisée',
        user: 'Utilisateur {number}',
        welcomeTo: 'Bienvenue sur le panneau consommateur',
      },
    },
  },
});

export { i18n };
