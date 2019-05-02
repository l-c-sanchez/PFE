var instruction = "Chaque bulle représente un jeu présenté à l'E3. En survolant avec votre souris chacune d'entre elle, vous obtiendrez plus d'informations le jeu associé.";
//Version simplifiée regroupant les principaux périphériques et systèmes mobiles
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
{
  instruction = "Chaque bulle représente un jeu présenté à l'E3. En cliquant sur chacune d'entre elle, vous obtiendrez plus d'informations le jeu associé.";
}

var example1 = new Vue({
    el: '#example-1',
    data: {
      chapo: 'Dans quelques semaines se tiendra l’”E3”, le plus important salon de jeu vidéo au monde. L’année dernière, de nombreux jeux mettant en avant des personnages féminins forts et non stéréotypés y ont été présentés. Un changement notable, même si l’amélioration de la représentation des femmes reste encore mesurée.',
      parasfirstpart: [
        { message: 'L’écran de l \'ordinateur montre une jeune femme en armure, un arc accroché dans le dos. <i>“C’est l’un de mes personnages de jeu vidéo préférés”</i>, confie Laurette en faisant pivoter, d’un geste sur son clavier, la guerrière juchée sur un promontoire rocheux. Etudiante en informatique de 20 ans, Laurette est passionnée par la populaire série de jeux vidéo d \'action et d’aventure Assassin’s Creed. Dans son dernier opus, les joueurs ont eu pour la première fois la possibilité d’incarner une héroïne - Kassandra.',
          img: [{
            src: "static/img/laurette1.jpg",
            id: "laurette1",
            alt: "testalt",
            title:"testitle",
            height:"1900px",
            width:"1306px",
            legend:"",
          },
          {
            src: "static/img/laurette2.jpg",
            id: "laurette2",
            alt: "testalt",
            title:"testitle",
            height:"1900px",
            width:"1306px",
            legend:"",
          },
        ]
        },
        { message: 'Le jeu a été présenté l’année dernière à l’E3, salon annuel de jeux vidéo très réputé. Que ce soit dans les jeux de tirs, comme Battlefield V où les joueurs peuvent désormais incarner une femme dans l’univers de la seconde guerre mondiale, ou même chez les Pokemon, puisqu’on peut désormais jouer une version femelle de Pikachu dans Super Smash Bros, jamais les personnages féminins n’ont semblé aussi présents. De quoi réjouir de nombreux observateurs, notamment dans la presse généraliste.' },
        { message: 'Mais, selon plusieurs associations féministes, cette amélioration de la représentativité des femmes dans les jeux vidéo est à nuancer. “Certes, plusieurs “gros” jeux proposent pour la première fois des femmes comme personnages principaux, et c’est un premier pas”, admet Julien Jacquet, président de Game’Her, une association visant à promouvoir la mixité dans le secteur. Selon lui, il reste néanmoins “beaucoup de travail à faire pour qu’il y ait autant de personnages féminins que masculins”. Et ce, alors que les femmes représentent la moitié des joueuses de jeux vidéo (préciser nuance du calcul ?) et ne se contentent pas de jeux “softs” ou sur mobile (voir l’enquête d’une entreprise spécialisée publiée en 2017).'},
        { inter: 'Peu de jeux sont centrés sur des personnages féminins',
          message: 'Peu d’études universitaires récentes se sont intéressées au pourcentage de personnages féminins jouables par les amateurs de jeux vidéo. La dernière a été publiée il y a sept ans. Elle conclut que, sur un ensemble de 669 jeux d’action, de tir ou de rôle, seuls 4% ont comme personnage principal une femme. Depuis, que s’est-il passé ? Les personnages féminins sont-ils devenues aussi communs que leurs homologues masculins ?'},
        { message: 'Pour répondre à ces questions, nous avons décidé de faire notre propre décompte en nous inspirant de la méthodologie de l’association américaine Feminist Frequency, qui publie chaque année sur son site Internet un rapport dédié au prestigieux salon de jeu vidéo l’E3 - sans mettre en ligne sa base de données détaillée. Selon l’organisation féministe, “comme en 2015 et en 2017, les jeux présentés à l’E3 proposent trois fois plus de personnages masculins que féminins”. Comme elle, nous avons collecté des informations sur les jeux présents à l’E3 chaque année. A-t-on la possibilité d’y jouer une femme, un homme ? Les deux ?'}
      ],
      dataviz: {
        title: "A l'E3 2018, 8 jeux seulement étaient centrés sur un personnage féminin",
        description: instruction,
        methodo: [
          {
          title: "Quels jeux ont été sélectionnés ?",
          id:"methodo-which",
          explanation: "Pour établir la liste des jeux à analyser, nous avons utilisé les données de l’IGN, un site américain spécialisé qui répertorie chaque année les jeux présents à l’E3. Pour éviter les phénomènes de doublons, les jeux présents à plusieurs salons ne sont comptabilisés que la première fois où l’IGN les a recensés. Les extensions et les DLC (contenus supplémentaires téléchargeables) n’ont pas été pris en compte."
          },
          {
            title: "Pourquoi prendre en compte les jeux de l’E3 ?",
            id:"methodo-why",
            explanation: "Conscients que ce salon très connu ne représente pas l’intégralité des jeux vidéo sortis chaque année, nous avons tout de même souhaité reprendre une méthodologie similaire à celle de Feminist Frequency. En effet, comme l’explique l’association féministe, “l’E3 est le plus grand événement de jeu vidéo chaque année, la plus grande opportunité pour les éditeurs d’atteindre leur audience, de se définir eux-mêmes et de définir l’industrie comme un ensemble.”"
          },
          {
            title: "Comment ont-ils été classifiés ?",
            id:"methodo-how",
            explanation: "En nous appuyant sur plusieurs sources, nous avons cherché à savoir quel est le genre du personnage principal que le joueur incarne dans chaque jeu. Les catégories « féminin » et « masculin » ont été attribuées aux jeux correspondants, tandis que « multi »  correspond aux jeux permettant de choisir le genre du personnage, de façon explicite ou en personnalisant son avatar. Les autres jeux ont été classés comme de « genre ambigu » (personnage impossible à associer avec un genre précis) ou « non-avenu » (personnage non-humain et non-associable à un genre, ou absence de personnage incarné précis). Certains jeux n’ont pas pu être pris en compte à cause du manque d’informations les concernant. "
          }
        ]
      },
      parassecondpart: [
        { message: 'Résultat : nous avons obtenu des données similaires à celles de Feminist Frequency. En termes quantitatif, l’amélioration de la représentation des personnages féminins dans les jeux vidéo paraît assez réduite : en 2018, seuls 7% des jeux proposaient une femme comme personnage principal… Soit un pourcentage presque similaire à 2016 (à compléter). '},
        { message: 'Des résultats qui ne surprennent pas Fanny Lignon. Pour cette chercheuse lyonnaise rattachée au CNRS, directrice de l’ouvrage Genre et jeux vidéo, l’industrie du jeu vidéo est en train de bouger “à petits pas”.' },
        { message: 'En effet, pendant de longues années, la représentation des personnages féminins de jeu vidéo a été limitée au “principe de la Schtroumpfette”. Autrement dit :“une femme ultra stéréotypée, au milieu de nombreux personnages masculins”. C’était, par exemple, la princesse Peach que Super Mario devait venir sauver dans les années 90. Ou encore les prostituées de Grand Theft Auto (GTA), série de jeu très célèbre née dans les années 2000. '},
        { message: '“De plus en plus d\'héroïnes fortes sont apparues depuis”, salue Fanny Lignon. Comptez, par exemple, sur l\'héroïne de la série de jeux vidéo Uncharted, Elena Fisher, qui aide par ses qualités intellectuelle le chasseur de trésors Nathan Drake. Dans Horizon : Zero Dawn, sorti en 2017 sur PS4, on peut désormais incarner Aloy, une jeune femme devenue chasseuse de machines pour sa tribu, dans un univers post-apocalyptique.'}
      ],
      learn_more: [
        {
          title: "Et Lara Croft dans tout ça ?",
          id:"laracroft",
          message: "A rédiger Lara croft"
        },
        {
          title: "Vous connaissiez Miss Pacman ?",
          id:"misspacman",
          message: "A rédiger Miss Pacman"
        }
      ],
      parasthirdpart: [
        { message: 'Les raisons d’un tel changement ? Fanny Lignon veut croire en une prise de conscience de l’industrie. Elle le met notamment sur le compte du GamerGate qui, en 2014, a considérablement marqué l’univers du jeu vidéo. Plusieurs développeuses ou militantes féministes sont alors attaquées pendant des mois par des gamers masculinistes. Un déferlement d’agressivité qui permet de rendre visible les créatrices de jeu, celles qui en parlent, mais aussi les problèmes qui traversent l’industrie. '},
        { message: 'En outre, selon Fanny Lignon, “les entreprises perçoivent que le marché est demandeur de plus de mixité”. Nombreuses sont les joueuses à s’interroger, lors de l’annonce d’un jeu, sur la présence d’un personnage féminin. Et certains hommes ne sont pas en reste. “Cela me permet de me projeter dans un autre corps”, indique Maxence, 21 ans.' }
      ],

      parasfourthpart: [
        { message: 'Mais le changement reste mesuré. Pour Pascale Thiérault, jeune chercheuse canadienne qui analyse le jeu vidéo par le prisme du genre à l’université de Montréal, les personnages féminins restent aussi beaucoup moins diversifiés que leurs homologues masculins. “Les héroïnes sont encore jeunes, jolies et blanches”. Les créateurs de jeu vidéo ne s’autorisent pas à faire des personnages féminins moins “sexy” - alors qu’ils le font davantage pour les personnages masculins. “Regardez Mario, il ne correspond pas aux standards de beauté masculins”, abonde la chercheuse du CNRS Fanny Lignon.',
        },
        { message: 'Il faut aussi composer avec le milieu du gaming. Une partie d’entre eux reste fermement attachés à ses “standards” de masculinité. En témoigne, notamment, l’indignation de certains joueurs quand Electronic Arts a présenté l’an passé son dernier Battlefield, qui propose d’incarner une femme dans l’univers de la seconde guerre mondiale. Un choix assumé par le directeur créatif de l’éditeur américain : "On se bat pour la cause. Ces gens ont deux choix : soit ils l \'acceptent... ou alors ils n \'achètent pas le jeu!", a-t-il déclaré dans le média spécialisé Gamasutra.'},
        { 
          message: 'Une position affirmée que ne partagent pas tous les acteurs du secteur. En témoigne la réaction molle de Valve, l’éditeur de la très populaire plateforme de jeu Steam, en mars, suite au scandale né de Rape day. Le jeu, dont la sortie était prévue en avril, était centré sur le principe suivant : “Harcelez verbalement, tuez et violez des femmes pour progresser dans l’histoire”.  Face à la polémique, Valva a fini par retirer le jeu du catalogue. « Nous respectons le désir des développeurs [de jeux] de s’exprimer, et la mission de Steam est de [les] aider à trouver un public mais ce développeur a choisi un sujet et une façon de l’illustrer qui rendent cette tâche très difficile pour nous », s’est simplement défendu la société américaine, sans critiquer ouvertement le jeu.'},
        { message: 'En effet, dans l’industrie, la question reste sensible. “On est encore dans une phase de prise de conscience”, constate Marie-Lou Dulac. Cette cheffe de projet éditorial travaille depuis presque deux ans chez Ubisoft. L’une de ses missions : faire un travail de recherche, pour amener ses collègues à “faire le constat” des lacunes de l’industrie. '},
        { message: 'Pour cela, elle organise des ateliers de sensibilisation à destination des employés d’Ubisoft. “Ce n’est pas facile tous les jours”, confie-t-elle. “Certaines personnes sont réfractaires, elle disent que les filles ne sont pas notre coeur de cible, que ce n’est pas prioritaire, que c’est du travail en plus”'},
        { message: 'Il y a cinq ans, le directeur technique d’Ubisoft avait d’ailleurs utilisé ce dernier argument pour défendre Assassin’s Creed : Unity, critiqué pour n’avoir proposé dans un mode de jeu en ligne que des personnages masculins. “Un personnage féminin, ça aurait voulu dire refaire beaucoup d’animation, beaucoup de costumes.” avait-il déclaré au site Video Gamer, avant d’être remis en cause par d’autres employés du studio, dont le directeur d’animation d’Assassin’s Creed III qui avait estimé dans un tweet le charge de travail à “un ou deux jours” seulement.'},
        { message: '“La capacité de se remettre en question, beaucoup de développeurs l’ont. Mais elle est difficile à concrétiser au sein de grosses entreprises”, explique Sybil Collas. “De plus, étant donné que le jeu vidéo est une industrie à but de monétisation, les studios et les éditeurs ont tendance à garder toujours la même ‘recette’, pour ne pas prendre de risque”, ajoute cette narrative designer (franciser la fonction ?) indépendante, qui travaille notamment pour Dontnod. '},
        { message: 'Ce studio parisien dit avoir essuyé les refus de nombreux éditeurs pour son jeu d’aventure épisodique Life is Strange, sorti en 2015, avant que la société japonaise Square Enix n’accepte de le soutenir. En cause : son héroïne Max, une étudiante en photographie dotée de la faculté de revenir dans le temps.  « Certains nous on dit : ‘nous ne désirons pas éditer votre jeu parce qu’il ne sera pas un succès. Vous ne pouvez pas avoir d’héroïne dans les jeux vidéo. Ce doit être un héros, c’est aussi simple que ça. Vous ne pouvez pas faire s’embrasser deux hommes dans le jeu, ce serait assez gênant’. », a dénoncé, en 2015, Jean-Maxime Morris, le co-fondateur de Dontnod, dans une vidéo présentant le jeu.'},
        { message: '“Oui c’est une meuf, oui elle a une sexualité, et ils avaient du mal à avaler la pilule, à croire que ça intéresserait les joueurs”, s’insurge Sybil Collas. Pour cette professionnelle, comme pour de nombreux spécialistes du secteur interrogés, les petits studios indépendants sont plus souples et plus enclins à s’affranchir des modèles et des narrations traditionnels que les mastodontes du secteur - qui consacrent souvent plusieurs années et des millions, voire des dizaines de millions de dollars à la production d’un seul jeu. '
        },
        { inter: "Des studios indépendants plus en avance",
          message: 'Un constat qui se confirme lorsqu’on s’engouffre dans les allées de l’EGX Rezzed, salon londonien de jeux vidéo qui se tenait dans les anciens docks de Londres, début avril.',
          img: [{
            src: "static/img/DSC07542.jpg",
            id: "EGXRezzed",
            alt: "EGX Rezzed",
            title:"EGX Rezzed",
            height:"1900px",
            width:"1306px",
            legend:"",
          }]
        },
        { 
        message: 'Dans les grandes salles lumineuses aménagées pour les studios indépendants, les créateurs sont nombreux à mettre en avant des personnages féminins. Ils sont plusieurs à parler “d’évidence”.'
        },
        { message: '“Pourquoi on ne l’aurait pas fait ?”, répond, surpris, Joseph Humfrey, cofondateur du studio anglais Inklestudios, quand on lui demande ce qui l’a poussé à imaginer une femme comme personnage principal pour son jeu d’archéologie. Elle s’appelle Aliya Elasra, porte une voile bleu qui laisse apparaître ses cheveux, et des vêtements banals et utilitaires.  Dans ce jeu sorti mi-avril, les joueurs doivent explorer des ruines et lire des inscriptions anciennes.'},
        { message: '“Avec toute notre équipe, nous avons trouvé très inspirant le parcours de l’archéologue égyptienne Monica Hanna, qui s’est illustrée en protégeant le patrimoine de son pays depuis la révolution de 2011”, raconte le programmeur. ',
        img: [{
          src: "static/img/heavensvault1.jpg",
          id: "HeavensVault",
          alt: "Heaven's Vault",
          title:"Heaven's Vault",
          height:"1900px",
          width:"1306px",
          legend:"",
        },
        {
          src: "static/img/heavensvault2.jpg",
          id: "HeavensVault2",
          alt: "Heaven's Vault",
          title:"Heaven's Vault",
          height:"1900px",
          width:"1306px",
          legend:"",
        }
      ]
        },
        { message: 'Un peu plus loin, Hannah Flynn présente le dernier-né de son studio londonien, Failbetter Games. Dans le brouhaha ambiant des jeunes gens venu tester ce jeu de rôle, du nom de Sunless Skies, la jeune femme aux cheveux teintés en bleu indique qu’il était “naturel pour le studio de proposer aux joueurs de choisir leur genre, car nous avons une équipe diversifiée et restreinte, dans laquelle chacun peut exprimer ses idées”.'},
        { message: 'Pour Sybil Collas, narrative designer qui fait partie de l’organisation Women In Games, qui milite pour la mixité dans l\'industrie du jeu vidéo en France, cette féminisation des effectifs est essentielle pour l’amélioration la représentation des femmes comme personnage. “Il est plus difficile de se projeter sur ce qu’on n’est pas. Les créateurs de contenu écrivent des personnages pour eux-mêmes, qui leur ressemblent.” Or, selon le dernier baromètre du Syndicat national du jeu vidéo, les femmes représentent seulement 14% des effectifs dans les studios de développement.'},
        { message: 'Chez Isart digital, école française de jeux vidéo, on se veut optimiste. Le nombre de filles est passé de 15 % en 2012 à 27 % en 2017 dans la filière jeu vidéo. Pour Charlotte Lavergne, directrice pédagogique Jeu Vidéo, “la génération des millenials est très au fait de ces problématiques et beaucoup plus ouverte que les précédentes. Aujourd’hui les jeunes filles s’affirment en tant que gameuses et envisagent de plus en plus ce genre d’études”.'},
        { message: ' “La sensibilisation des étudiants est également importante”, plaide Thomas Planques. Ce game designer intervient régulièrement dans des écoles françaises pour évoquer la question du genre. ELEMENTS DE REPORTAGES QUI SERONT FAITS DEBUTS MAI + CHUTE.'},
      ],
    }
  })


  if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
  {
    console.log("mobile")
    $("#laurette2").hide();
    $("#HeavensVault2").hide();
  }
  
$(".methodo-explanation").hide();
$( ".methodo-link" ).click(function() {
  console.log(this.title)
  if($("#" + this.title).is(":visible")){
    $("#" + this.title).hide();
  }
  else {
    $("#" + this.title).show();
  }
});

$(".btn-learn").hide();
$( ".btn-link" ).click(function() {
  console.log(this.title)
  if($("#" + this.title).is(":visible")){
    $(".btn-learn").hide();
    $("#" + this.title).hide();
  }
  else {
    $(".btn-learn").hide();
    $("#" + this.title).show();
  }
});

