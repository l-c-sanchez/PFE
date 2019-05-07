function isMobile(){
  return /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isSmallDevice(){
  return window.innerWidth < 990
}

var instruction = "Chaque bulle représente un jeu présenté à l'E3. Survolez chacune d'entre elle avec votre souris pour obtenir plus d'informations.";
var copyright_mobile = "";
var heavens_vault_mobile = "";
//Version simplifiée regroupant les principaux périphériques et systèmes mobiles
if(isMobile())
{
  copyright_mobile += " (Léa Sanchez / France Info)"
  heavens_vault_mobile += " (Heaven's Vault / Inklestudios)"
  instruction = "Chaque bulle représente un jeu présenté à l'E3. Cliquez sur chacune d'entre elle pour obtenir plus d'informations.";
}

instruction += '  Les catégories affichées correspondent au genre du personnage principal du jeu, "multi" étant associé aux productions permettant de choisir le genre de celui-ci.';

var example1 = new Vue({
    el: '#example-1',
    data: {
      chapo: 'L’E3, le plus important salon de jeu vidéo au monde, se tiendra le 6 juin. L’année dernière, de nombreuses créations mettant en avant des personnages féminins forts et peu stéréotypés y ont été présentées. Un changement notable, même si l’amélioration de la représentation des femmes reste encore mesurée.',
      parasfirstpart: [
        { message: 'Une femme en armure, un arc accroché dans le dos, apparaît sur l’écran de l’ordinateur. <i>"C’est l’un de mes personnages de jeu vidéo préférés"</i>, confie Laurette en faisant pivoter, d\’un geste sur son clavier, la guerrière juchée sur un promontoire rocheux. Etudiante en informatique de 20 ans, Laurette est passionnée par la populaire série de jeux vidéo d\'action et d\’aventure Assassin’s Creed. Dans son dernier opus, les joueurs ont pour la première fois la possibilité d\’incarner une héroïne - Kassandra.',
          img: [{
            src: "static/img/laurette1.jpg",
            id: "laurette1",
            alt: "testalt",
            title:"testitle",
            height:"1900px",
            width:"1306px",
            legend:"Laurette aime jouer des personnages féminins." + copyright_mobile,
          },
          {
            src: "static/img/laurette2.jpg",
            id: "laurette2",
            alt: "testalt",
            title:"testitle",
            height:"1900px",
            width:"1306px",
            legend:"(Léa Sanchez / France Info)",
          },
        ]
        },
        { message: 'Le jeu a été présenté l’année dernière à l’E3. Ce salon californien très réputé dans l\’industrie du jeu vidéo est organisé tous les ans, au mois de juin, à Los Angeles. Les studios et les éditeurs les plus importants y présentent leurs dernières créations et annoncent leurs prochains projets.' },
        { message: 'Son édition 2018 a, selon de nombreux observateurs, marqué un tournant dans la représentativité des femmes : jamais les personnages principaux féminins n\’auraient été aussi présents. Dans <i>Battlefield V</i>, jeu de tir dédié à la seconde guerre mondiale, il est désormais possible d’incarner une femme. De même dans les <i>Pokemon</i>.',
        img: [{
          src: "static/img/battlefieldv.jpg",
          id: "battlefieldv",
          alt: "Battlefield V",
          title:"Battlefield V",
          height:"",
          width:"",
          legend:"Battlefield V propose désormais à la fois un personnage féminin et un personnage masculin. (Electronic Arts / Battlefield V)",
        }
      ]
      },

        { 
          message: 'Une évolution nuancée par plusieurs associations féministes. <i>"Plusieurs grosses productions proposent pour la première fois d’incarner des femmes, et c’est un premier pas</i>, admet Julien Jacquet, fondateur de Game\’Her, une association en faveur de la mixité dans le secteur. <i>Mais il reste encore beaucoup de travail à faire pour qu’il y ait autant d’avatars féminins que masculins"</i>, ajoute le militant.'},
        { message: 'Il y a sept ans, sur un ensemble de 669 jeux d’action, de tir ou de rôle répertoriés par une <a href=”http://web.archive.org/web/20131031054125/https://www.penny-arcade.com/report/article/games-with-female-heroes-dont-sell-because-publishers-dont-support-them”>société d’études spécialisée</a>, seuls 4% des productions avaient comme protagoniste principal une femme, et 45% offraient la possibilité de choisir un avatar masculin ou féminin. Mais depuis, que s’est-il passé ?'},
        { inter: 'Peu de jeux sont centrés sur des personnages féminins',
          message: 'Selon l’organisation américaine <a href=”https://feministfrequency.com/2018/06/14/gender-breakdown-of-games-featured-at-e3-2018/”>Feminist Frequency</a>, en 2018, les jeux présentés à l\’E3 proposaient toujours <i>"trois fois plus de personnages masculins que féminins"</i>. Chaque année, cette association féministe publie sur son site un rapport dédié au prestigieux salon californien - sans mettre en ligne sa base de données détaillée. Comme elle, nous avons collecté des informations sur les créations et les projets présents à l’E3 chaque année depuis 2016. A-t-on la possibilité d\’y jouer une femme, un homme ? Les deux ?'}
      ],
      dataviz: {
        title: "A l'E3 2018, 8 jeux seulement étaient centrés sur un personnage féminin",
        description: instruction,
        methodo: [
          {
          title: "Quels jeux ont été sélectionnés ?",
          id:"methodo-which",
          explanation: "Nous avons utilisé les données de l’IGN, un site américain spécialisé qui répertorie chaque année <a href=”https://www.ign.com/wikis/e3/Games_at_E3_2018”>les jeux présents à l\’E3</a>. Pour éviter les doublons, les créations présentes à plusieurs salons ne sont comptabilisés que la première fois où l\’IGN les a recensés. Les extensions, les DLC (contenus supplémentaires téléchargeables), et les jeux indépendants montrés lors de conférences annexes comme  l\’E3 Week Mix 2017 n’ont pas été pris en compte. Les jeux dérivés (\"spin-off\") et autonomes (\"standalone\") ont été comptabilisés."
          },
          {
            title: "Pourquoi prendre en compte les jeux de l’E3 ?",
            id:"methodo-why",
            explanation: "Conscients que ce salon très connu ne représente pas l\’intégralité des jeux vidéo sortis chaque année, nous avons tout de même souhaité reprendre une méthodologie similaire à celle de Feminist Frequency. En effet, comme l’explique l’association féministe, <i>\"l\’E3 est le plus grand événement de jeu vidéo chaque année, la plus grande opportunité pour les éditeurs d’atteindre leur audience, de se définir eux-mêmes et de définir l’industrie comme un ensemble\"</i>"
          },
          {
            title: "Comment ont-ils été classifiés ?",
            id:"methodo-how",
            explanation: "En nous appuyant sur plusieurs sources, nous avons cherché à savoir quel est le genre du personnage principal que le joueur incarne dans chaque jeu. Les catégories \"féminin\" et \"masculin\" ont été attribuées aux jeux correspondants, tandis que \"multi\" correspond aux jeux permettant de choisir le genre du personnage principal, de façon explicite ou en personnalisant son avatar. Les autres jeux, dont ceux dont le protagoniste est impossible à associer avec un genre précis, ou ceux où les joueurs n\’incarnent pas un personnage précis, sont dans la catégorie \"Autres\". Certains titres n’ont pas pu être pris en compte à cause du manque d’informations les concernant. Pour toute question, n\’hésitez pas à nous contacter par mail : lea.sanchez@sciencespo.fr."
          }
        ]
      },
      parassecondpart: [
        { message: 'Résultat : en 2018, la majorité des jeux répertoriés propose désormais de choisir le genre de son avatar, ou d’alterner entre des avatars féminins et masculins. Les créations centrées sur un personnage masculin sont trois fois plus nombreuses que celles qui mettent à l’affiche des femmes exclusivement. Ces dernières atteignent 7% du total. Soit le même pourcentage qu’en 2016, trois ans plus tôt.'},
        { inter: 'Une évolution "à petits pas"',
          message: 'Une stabilité qui ne surprend pas Fanny Lignon. Pour cette chercheuse de l’université Lyon 1, directrice de l’ouvrage <i>Genre et jeux vidéo</i>, l’industrie du jeu vidéo est en train de bouger - mais <i>"à petits pas"</i>.' },
        { message: 'Pendant de longues années, la représentation des femmes dans les jeux vidéo a été limitée au <i>"principe de la Schtroumpfette"</i>. Autrement dit : <i>"une femme ultra stéréotypée, au milieu de nombreux protagonistes masculins"</i>. C’était, par exemple, les figures de princesses à sauver comme Peach que Super Mario devait venir secourir dans les années 90. Ou encore des représentations féminines très sexualisées, comme les prostituées de <i>Grand Theft Auto (GTA)</i>, série de jeu très célèbre née dans les années 2000. '},
        { message: '<i>"Plusieurs héroïnes fortes sont apparues depuis"</i>, salue Fanny Lignon. Comptez, par exemple, sur l\'héroïne de la série de jeux vidéo Uncharted, Elena Fisher, qui aide par ses qualités intellectuelle un chasseur de trésors. Dans <i>Horizon : Zero Dawn</i>, sorti en 2017, on peut désormais incarner Aloy, une jeune femme devenue chasseuse de machines pour sa tribu, dans un univers post-apocalyptique.'},

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
        { message: 'Les raisons de de changement ? Fanny Lignon veut croire en une prise de conscience de l’industrie. Elle le met notamment sur le compte du GamerGate qui, en 2014, a considérablement marqué l’univers du jeu vidéo.'},
        { message: 'Le petit ami d’une développeuse américaine, Zoe Quinn, l\’accuse dans un post de blog de l’avoir trompé avec un journaliste de Kotaku, un média spécialisé. Pour une nébuleuse de joueurs "ultra", elle l’aurait fait pour s’attirer ses faveurs éditoriales. Ils multiplient les insultes visant la jeune professionnelle.'},
        { message: 'Deux ans plus tôt, Anita Sarkeesian, militante féministe à la tête de Feminist Frequency, avait elle aussi fait les frais de ce déferlement de haine : en lançant un appel aux dons pour produire sur sa chaîne Youtube des vidéos sur la représentation des femmes dans les jeux vidéo, elle reçoit de multiples menaces de mort et de viol.'},
        { message: 'Cette série de polémiques permet de rendre visible les femmes du secteur, mais aussi les problèmes qui traversent l’industrie. En outre, selon Fanny Lignon, <i>"les entreprises ont commencé à percevoir que le marché est demandeur de plus de mixité"</i>. Sur les forums, nombreuses sont les joueuses à s’interroger, lors de l’annonce d’un jeu, sur la possibilité de choisir le sexe de leur avatar.' }
      ],

      parasfourthpart: [
        { message: 'En France, un <a href=”https://www.tns-sofres.com/sites/default/files/2013.12.10-jeux-videos.pdf” target="_blank" >rapport publié par le CNC en 2013</a> (Centre National du Cinéma et de l’image animée) estime que les femmes représentent 49% des amateurs de jeu vidéo. Une catégorie large, qui englobe les joueurs occasionnels comme réguliers, quelque soit le support et le type de produits. D\’après cette enquête, les femmes consomment plus de jeux vidéo familiaux ou de stratégie, les hommes étant plus nombreux à pratiquer les jeux de tir ou d’action. Parmi eux, plusieurs joueurs confient espérer eux aussi pouvoir incarner plus de femmes. <i>"Cela me permet de me projeter dans un autre corps"</i>, indique Maxence, 21 ans.'},
        { message: 'L’évolution des créateurs de jeu vidéo reste cependant mesurée. Pour Pascale Thiérault, jeune chercheuse canadienne de l’université de Montréal, les personnages féminins restent beaucoup moins diversifiés que leurs homologues masculins. <i>"Les héroïnes sont encore jeunes, jolies et blanches"</i>. Les studios ne s’autorisent pas à faire des figures féminines moins <i>"sexy"</i> - alors qu’ils le font davantage pour leurs homologues masculins. <i>"Regardez Mario, il ne correspond pas aux standards de beauté masculins"</i>, abonde la chercheuse lyonnaise Fanny Lignon.' },
        { message: 'Les studios doivent aussi composer avec une partie des joueurs, très attachée à ses <i>"standards"</i> de masculinité. En témoigne l\’indignation de certains hommes, quand Electronic Arts a présenté l\’an passé son dernier <i>Battlefield</i>, qui propose d’incarner une femme soldat dans l’univers de la seconde guerre mondiale. <i>"Ces gens ont deux choix : soit ils l\'acceptent... ou alors ils n\'achètent pas le jeu !"</i>, a réagi le directeur créatif de l’éditeur américain dans le média spécialisé <a target="_blank" href=”https://www.gamasutra.com/view/news/319787/This_is_not_okay_EA_minces_no_words_on_backlash_against_women_in_Battlefield.php”>Gamasutra</a>.'},
        { 
          message: 'Une position affirmée que ne partagent pas tous les acteurs du secteur. La très populaire plateforme de jeu Steam a réagi très mollement, en mars, au scandale né de <a  target="_blank" href=”http://www.francesoir.fr/societe-science-tech/rape-day-le-jeu-video-proposant-de-violer-des-femmes-finalement-retire”>Rape day</a>. Ce jeu, dont la sortie était prévue en avril, était centré sur le principe suivant : <i>"Harcelez verbalement, tuez et violez des femmes pour progresser dans l’histoire"</i>.',
          img: [{
            src: "static/img/steam-rapeday.jpg",
            id: "rapeday1",
            alt: "Rape Day",
            title:"Rape Day",
            height:"1900px",
            width:"1306px",
            legend:"Capture d'écran du site Steam.",
          },
          {
            src: "static/img/steam-rapeday2.jpg",
            id: "rapeday2",
            alt: "Rape Day",
            title:"Rape Day",
            height:"1900px",
            width:"1306px",
            legend:"Capture du jeu Rape Day (Desk Plant)",
          },
          ]
        },
        { message: 'Face à la polémique, elle a fini par retirer Rape Day du catalogue. <i>"Nous respectons le désir des développeurs de s’exprimer, et la mission de Steam est de [les] aider à trouver un public mais ce développeur a choisi un sujet et une façon de l’illustrer qui rendent cette tâche très difficile pour nous"</i>, s’est simplement défendu la société américaine <a target="_blank" href=”https://steamcommunity.com/games/593110/announcements/detail/1808664240304050758”>sur son site</a>, sans critiquer ouvertement le jeu.'},
        { message: '<i>"L’industrie est encore dans une phase de prise de conscience"</i>, constate Marie-Lou Dulac. Cette cheffe de projet éditorial travaille depuis presque deux ans chez Ubisoft. L\’une de ses missions : faire un travail de recherche, pour amener ses collègues à <i>"faire le constat"</i> des lacunes en matière de représentation des femmes.'},
        { message: 'Elle organise par exemple des ateliers de sensibilisation à destination des employés d\’Ubisoft. <i>"Ce n’est pas facile tous les jours"</i>, confie-t-elle. <i>"Certaines personnes sont réfractaires, elle disent que les filles ne sont pas notre coeur de cible, que ce n’est pas prioritaire, que c’est du travail en plus"</i>.'},
          { quote: {
            author:"James Therien, directeur technique d'Ubisoft, 2014.",
            text: "Un personnage féminin, ça aurait voulu dire refaire beaucoup d’animation, beaucoup de costumes"
          },
          message: 'Il y a cinq ans, le directeur technique d\’Ubisoft avait d’ailleurs utilisé cet argument pour défendre <i>Assassin’s Creed : Unity</i>, critiqué pour ne proposer dans un mode de jeu en ligne que des avatars masculins. <i>"Un personnage féminin, ça aurait voulu dire refaire beaucoup d’animation, beaucoup de costumes"</i>, avait-il déclaré au <a target="_blank" href=”https://www.videogamer.com/news/no_female_leads_in_assassins_creed_unity_unfortunate_but_a_reality_of_game_development_ubi”>site Video Gamer</a>. D\’autres employés du studio avaient remis cette déclaration en cause, dont un directeur d’animation qui avait estimé <a href=”https://twitter.com/GameAnim?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E476638349097058304&ref_url=https%3A%2F%2Fwww.lesinrocks.com%2F2014%2F06%2F13%2Fweb%2Factualite%2Faucun-personnage-feminin-assassins-creed-lexcuse-bidon-ubisoft%2F” target="_blank" >sur Twitter</a> la charge de travail à <i>"un ou deux jours"</i> seulement.'},
        { inter: '"Vous ne pouvez pas avoir d’héroïne dans les jeux vidéo"',
          message: '<i>"Beaucoup de développeurs ont la capacité de se remettre en question. Mais c’est difficile à concrétiser au sein de grosses entreprises</i>, explique Sybil Collas, professionnelle du secteur. <i>Le jeu vidéo est une industrie à but de monétisation et les studios et les éditeurs ont tendance à garder toujours la même ‘recette’, pour ne pas prendre de risque"</i>. Spécialisée dans la narration, elle travaille notamment pour Dontnod.'},
        { 
          message: 'Ce studio parisien dit avoir essuyé les refus de nombreux éditeurs pour son jeu d’aventure épisodique Life is Strange, sorti en 2015. En cause : son héroïne Max, une étudiante en photographie dotée de la faculté de revenir dans le temps. <i>"Certains nous ont dit : \‘nous ne désirons pas éditer votre jeu parce qu’il ne sera pas un succès. Vous ne pouvez pas avoir d’héroïne dans les jeux vidéo. Ce doit être un héros, c’est aussi simple que ça. Vous ne pouvez pas faire s’embrasser deux hommes dans le jeu, ce serait assez gênant\’"</i>, dénonçait en 2015 l’un des <a target="_blank"  href=”https://www.youtube.com/watch?v=t2Hr_LbIM2E”> cofondateurs du studio<a>.'},
        { message: '<i>"Oui c’est une meuf, oui elle a une sexualité, et ils avaient du mal à avaler la pilule, à croire que ça intéresserait les joueurs"</i>, s’insurge Sybil Collas. Pour elle, comme pour de nombreux spécialistes interrogés, les studios indépendants sont plus souples et plus enclins à s’affranchir des modèles et des narrations traditionnels que les mastodontes du secteur - qui consacrent souvent plusieurs années et des millions, voire des dizaines de millions de dollars à la production d’un seul jeu. '
        },
        { inter: "Des studios indépendants plus en avance",
          message: 'Un constat qui se confirme lorsqu’on s’engouffre dans les allées de l’EGX Rezzed, salon spécialisé qui se tenait dans les anciens docks de Londres, début avril. Dans les grandes salles lumineuses aménagées pour les studios indépendants, les créateurs sont nombreux à mettre en avant des héroïnes. Ils sont plusieurs à parler <i>"d\’évidence"</i>.',
          img: [{
            src: "static/img/DSC07542.jpg",
            id: "EGXRezzed",
            alt: "EGX Rezzed",
            title:"EGX Rezzed",
            height:"1900px",
            width:"1306px",
            legend:"De nombreux jeux indépendants ont été présentés au salon EGX Rezzed, en avril. (Léa Sanchez / France Info)",
          }]
        },
        { message: '<i>"Pourquoi on ne l’aurait pas fait ?"</i>, répond, surpris, Joseph Humfrey, cofondateur du studio anglais Inklestudios, quand on lui demande ce qui l’a poussé à choisir une femme comme personnage principal de son jeu d’archéologie. Elle s’appelle Aliya Elasra, porte une voile bleu qui laisse apparaître ses cheveux, et des vêtements banals et utilitaires.  Dans ce jeu sorti mi-avril, les joueurs doivent explorer des ruines et lire des inscriptions anciennes.',
        img: [{
          src: "static/img/heavensvault1.jpg",
          id: "HeavensVault",
          alt: "Heaven's Vault",
          title:"Heaven's Vault",
          height:"1900px",
          width:"1306px",
          legend:"Heaven's Vault est basé sur l'histoire d'une égyptologue." + heavens_vault_mobile,
        },
        {
          src: "static/img/heavensvault2.jpg",
          id: "HeavensVault2",
          alt: "Heaven's Vault",
          title:"Heaven's Vault",
          height:"1900px",
          width:"1306px",
          legend:"(Heaven's Vault / Inklestudios)",
        }
      ]
        },
        
        { message: 'Un peu plus loin, Hannah Flynn présente <i>Sunless Skies</i>, le dernier-né de son entreprise londonienne. Dans le brouhaha ambiant des jeunes gens venu tester ce jeu de rôle, la trentenaire aux cheveux teintés en bleu indique qu’il était <i>"naturel pour le studio de proposer aux joueurs de choisir leur genre, car nous avons une petite équipe diversifiée dans laquelle chacun peut exprimer ses idées"</i>.'},
        { message: 'Sybil Collas considère elle aussi que la féminisation des effectifs est essentielle : <i>"il est plus difficile de se projeter sur ce qu’on n’est pas. Les créateurs de contenu écrivent des personnages pour eux-mêmes, qui leur ressemblent" </i>, explique la créatrice de jeux. Elle a rejoint il y a quelques mois l\’organisation  <i>Women In Games France</i>, qui promeut la mixité dans l\'industrie du jeu vidéo, dont les effectifs sont majoritairement masculins.'},
        { message: 'Du côté des écoles, on se veut optimiste. A Isart digital, école française spécialisée, la proportion de filles dans la filière jeu vidéo a été multipliée par deux en cinq ans. Charlotte Lavergne, directrice pédagogique, constate <i>"une génération beaucoup plus ouverte que les précédentes"</i>. Plusieurs autres écoles ont mis en place des modules visant à sensibiliser leurs étudiants à la représentation des femmes dans leurs jeux. Thomas Planques, directeur créatif et producteur de jeux vidéo, intervient dans plusieurs d’entre elles.'},
        { message: 'CHUTE EN UN PARA ==> REPORTAGE JEUDI MATIN A l’IIM'}
      ],
    }
  })

window.onresize = function(event) {
  if(isSmallDevice() )
  {
    console.log($("#rapeday2"))
    $("#rapeday2" ).parent().css('display','none');
    $("#laurette2" ).parent().css('display','none');
    $("#HeavensVault2").parent().css('display','none');

  }
  else {
    $("#rapeday2" ).parent().show();
    $("#laurette2" ).parent().show();
    $("#HeavensVault2").parent().show();

  }
};

  if(isSmallDevice() )
  {
    console.log($("#rapeday2"))
    $("#rapeday2" ).parent().css('display','none');
    $("#laurette2" ).parent().css('display','none');
    $("#HeavensVault2").parent().css('display','none');

  }
  
$(".methodo-explanation").hide();
$( ".methodo-link" ).click(function() {
  console.log(this);
  var test =  $( this ).before()
  console.log(test);

  if($("#" + this.title).is(":visible")){
    $("#" + this.title).hide();
  }
  else {
    $("#" + this.title).show();
  }
});

$(".btn-learn").hide();
$( ".btn-link" ).click(function() {
  if($("#" + this.title).is(":visible")){
    $(".btn-learn").hide();
    $("#" + this.title).hide();
  }
  else {
    $(".btn-learn").hide();
    $("#" + this.title).show();
  }
});

// Cards


if(isMobile()) {
  $( ".flip-card" ).click(function() {
    var classToAdd = "reverseCard";
    var child = $(this).children("div:first")[0];
    if (!$(child).hasClass(classToAdd)) {
      $( ".flip-card .flip-card-inner" ).removeClass(classToAdd);
      $(child).addClass(classToAdd);
    } else {
      $(child).removeClass(classToAdd);
    }
  });

  $("article").click(function() {
    $( ".flip-card .flip-card-inner" ).removeClass("reverseCard");
  });

  $("article").on('touchstart', function() {
    $( ".flip-card .flip-card-inner" ).removeClass("reverseCard");
  });

} else {
  $( ".flip-card" ).hover(function() {
    var classToAdd = "reverseCard";
    var child = $(this).children("div:first")[0];
    if (!$(child).hasClass(classToAdd)) {
      $(child).addClass(classToAdd);
    } else {
      $(child).removeClass(classToAdd);
    }
  });
}


