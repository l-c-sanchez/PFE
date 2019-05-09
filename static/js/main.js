function isMobile(){
  return /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isSmallDevice(){
  return window.innerWidth < 990
}

function isSmallDeviceForCover(){
  return window.innerWidth < 620
}

var copyright_mobile = "";
var heavens_vault_mobile = "";
if(isMobile())
{
  copyright_mobile += " (Léa Sanchez / France Info)"
  heavens_vault_mobile += " (Heaven's Vault / Inklestudios)"
  
}

var header = new Vue({
  el: '#header',
  mounted() {
    let _this = this;
    window.addEventListener('resize', function () {
      _this.isSmallDevice = isSmallDeviceForCover()
    });
  },
  data: {
    isSmallDevice: isSmallDeviceForCover()
  }
})

var global = new Vue({
    el: '#global',
    mounted() {
      let _this = this;
      window.addEventListener('resize', function () {
        _this.isMobile = isMobile();   
        _this.isSmallDevice= isSmallDevice()       
      });
    },
    data: {
      isMobile: isMobile(),
      isSmallDevice: isSmallDevice(),
      chapo: 'L’E3, le plus important salon de jeu vidéo au monde, se tiendra le 6 juin. L’année dernière, de nombreuses créations mettant en avant des personnages féminins forts et peu stéréotypés y ont été présentées. Un changement notable, même si l’amélioration de la représentation des femmes reste encore mesurée.',
      parasfirstpart: [
        { message: 'Une femme en armure, un arc accroché dans le dos, apparaît sur l’écran de l’ordinateur. <i>"C’est l’un de mes personnages de jeu vidéo préférés"</i>, confie Laurette en faisant pivoter, d\’un geste sur son clavier, la guerrière juchée sur un promontoire rocheux. Etudiante en informatique, Laurette est passionnée par la série de jeux vidéo d\’aventure Assassin’s Creed. Dans son dernier opus, les joueurs ont pour la première fois la possibilité d\’incarner une héroïne - Kassandra.',
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
        { message: 'Son édition 2018 a marqué un tournant dans la représentativité des femmes : selon <a target="_blank"   href="https://www.lemonde.fr/pixels/article/2018/06/12/au-salon-du-jeu-video-de-l-e3-la-grande-annee-des-femmes_5313536_4408996.html" >plusieurs observateurs</a>, jamais les personnages principaux féminins n\’ont été aussi mis en avant. Dans <i>Battlefield V</i>, jeu de tir dédié à la seconde guerre mondiale, il est désormais possible d’incarner, entre autres, une femme. Idem pour le jeu de combat <i>Gears of War 5</i>, centré sur la combattante Kait.',
        img: [{
          src: "static/img/battlefieldv.jpg",
          id: "battlefieldv",
          alt: "Battlefield V",
          title:"Battlefield V",
          height:"",
          width:"",
          legend:"Des femmes soldats ont fait leur apparition dans Battlefield V. (Electronic Arts / Battlefield V)",
        }
      ]
      },

        { 
          message: 'Une évolution nuancée par plusieurs associations féministes. <i>"Plusieurs grosses productions proposent pour la première fois d’incarner des femmes</i>, admet Julien Jacquet, fondateur de Game\’Her, une association en faveur de la mixité dans le secteur. <i>Mais il reste encore beaucoup de travail à faire pour qu’il y ait autant d’avatars féminins que masculins"</i>, ajoute le militant.'},
        { inter: 'Peu de jeux sont centrés sur des personnages féminins',
          message: 'Il y a sept ans, sur un ensemble de 669 jeux d’action, de tir ou de rôle répertoriés par une <a href="http://web.archive.org/web/20131031054125/https://www.penny-arcade.com/report/article/games-with-female-heroes-dont-sell-because-publishers-dont-support-them" target="_blank" >société d’études spécialisée</a>, seuls 4% avaient comme protagoniste principal une femme, et 45% offraient la possibilité de choisir un avatar masculin ou féminin. Mais depuis, que s’est-il passé ?'},
        { 
          message: 'Selon l’organisation américaine <a target="_blank" href="https://feministfrequency.com/2018/06/14/gender-breakdown-of-games-featured-at-e3-2018/">Feminist Frequency</a>, en 2018, les jeux présentés à l\’E3 proposaient toujours <i>"trois fois plus de personnages masculins que féminins"</i>. Chaque année, cette association féministe publie sur son site un rapport dédié au salon californien. Comme elle, nous avons collecté des informations sur les projets présents à l’E3 chaque année depuis 2016. A-t-on la possibilité d\’y jouer une femme, un homme ? Les deux ?'}
      ],
      dataviz: {
        title: "A l'E3 2018, 8 jeux seulement étaient centrés sur un personnage féminin",
        description: {
          beginning_desktop:"Chaque bulle symbolise un jeu présenté à l'E3. Survolez chacune d'entre elles avec votre souris pour obtenir plus d'informations.",
          beginning_mobile:"Chaque bulle symbolise un jeu présenté à l'E3. Cliquez sur chacune d'entre elles pour obtenir plus d'informations.",
          end: '  Les catégories affichées correspondent au genre du personnage principal du jeu, "multi" étant associé aux productions permettant de choisir le genre de celui-ci.'
        },
        methodo: [
          {
          title: "Quels jeux ont été sélectionnés ?",
          id:"methodo-which",
          explanation: "Nous avons utilisé les données de l’IGN, un site américain spécialisé qui répertorie chaque année <a href=\"https://www.ign.com/wikis/e3/Games_at_E3_2018\" target=\"_blank\">les jeux présents à l\’E3</a>. Pour éviter les doublons, les créations présentes à plusieurs salons ne sont comptabilisées que la première fois où l\’IGN les a recensées. Les extensions, les DLC (contenus supplémentaires téléchargeables), et les jeux indépendants montrés lors de conférences annexes comme  l\’E3 Week Mix 2017 n’ont pas été pris en compte. Les jeux dérivés (\"spin-off\") et autonomes (\"standalone\") ont été comptabilisés."
          },
          {
            title: "Pourquoi prendre en compte les jeux de l’E3 ?",
            id:"methodo-why",
            explanation: "Conscients que ce salon très connu ne représente pas l\’intégralité des jeux vidéo sortis chaque année, nous avons tout de même souhaité reprendre une méthodologie similaire à celle de Feminist Frequency. En effet, comme l’explique l’association féministe, <i>\"l\’E3 est le plus grand événement de jeu vidéo chaque année, la plus grande opportunité pour les éditeurs d’atteindre leur audience, de se définir eux-mêmes et de définir l’industrie comme un ensemble\"</i>."
          },
          {
            title: "Comment ont-ils été classifiés ?",
            id:"methodo-how",
            explanation: "En nous appuyant sur plusieurs sources, nous avons cherché à savoir quel est le genre du personnage principal que le joueur incarne dans chaque jeu. Les catégories \"féminin\" et \"masculin\" ont été attribuées aux jeux correspondants, tandis que \"multi\" correspond aux jeux permettant de choisir le genre du personnage principal, de façon explicite ou en personnalisant son avatar. Les jeux où l’on incarne alternativement des personnages féminins et masculins y ont également été intégrés. Les autres jeux, dont ceux dont le protagoniste est impossible à associer avec un genre précis, ou ceux où les joueurs n\’incarnent pas un personnage précis, sont dans la catégorie \"Autres\". Certains titres n’ont pas pu être pris en compte à cause du manque d’informations les concernant. Pour toute question, envoyez un mail à cette adresse : lea.sanchez@sciencespo.fr."
          }
        ]
      },
      parassecondpart: [
        { message: 'Résultat : en 2018, la majorité des jeux répertoriés propose désormais de choisir le genre de son avatar, ou d’alterner entre des avatars féminins et masculins. Les créations centrées sur un personnage masculin sont trois fois plus nombreuses que celles qui mettent à l’affiche des femmes exclusivement. Ces dernières atteignent 7% du total. Soit le même pourcentage qu’en 2016, trois ans plus tôt.'},
        { inter: 'Une évolution "à petits pas"',
          message: 'Une stabilité qui ne surprend pas Fanny Lignon. Pour cette chercheuse de l’université Lyon 1, directrice de l’ouvrage <i>Genre et jeux vidéo</i>, l’industrie du jeu vidéo est en train de bouger - mais <i>"à petits pas"</i>.' },
        { message: 'Pendant de longues années, la représentation des femmes y a été limitée au <i>"principe de la Schtroumpfette"</i>. Autrement dit : <i>"une femme ultra stéréotypée, au milieu de nombreux protagonistes masculins"</i>. C’était, par exemple, les figures de princesses à sauver comme Peach que Super Mario devait venir secourir. Ou encore des représentations féminines très sexualisées, destinées au public masculin, comme les combattantes de <i>Mortal Kombat</i>, série de jeux née dans les années 90.',
          tweet: '<blockquote class="twitter-tweet" data-lang="fr"><p lang="fr" dir="ltr">[Femme Fatale] Mortal Kombat X : Le retour de Jade possible !<a href="http://t.co/QmHa7PRUaB">http://t.co/QmHa7PRUaB</a> <a href="http://t.co/YxIIg7GVaA">pic.twitter.com/YxIIg7GVaA</a></p>&mdash; Gamer-Network.fr (@Gamer_Network_) <a href="https://twitter.com/Gamer_Network_/status/516476327759605760?ref_src=twsrc%5Etfw">29 septembre 2014</a></blockquote>'
        },
        { message: 'Depuis, plusieurs studios à l’origine de ces jeux très stéréotypés ont annoncé leur décision de <a target="_blank" href="http://www.gameblog.fr/news/48792-mortal-kombat-x-des-mensurations-plus-realistes-pour-les-fem">"réduire les mensurations"</a> de leurs protagonistes féminines. <i>"Plusieurs personnages féminins forts ont également fait leur apparition"</i>, salue Fanny Lignon. Comptez, par exemple, sur l\'héroïne de la série <i>Uncharted</i>, Elena Fisher, personnage secondaire qui aide par ses qualités intellectuelle un chasseur de trésors. Dans <i>Horizon : Zero Dawn</i>, sorti en 2017, on peut désormais incarner Aloy, une jeune femme devenue chasseuse de machines pour sa tribu.'},

      ],
      learn_more: [
        {
          title: "Et Lara Croft dans tout ça ?",
          id:"laracroft",
          message: "En 2017, Lara Croft a été sacrée <a href='http://www.guinnessworldrecords.com/world-records/best-selling-videogame-heroine' target='_blank'”>héroïne la plus vendue</a> de l’histoire du jeu vidéo. La jeune archéologue, athlétique et très féminine, a été créée dans les années 90. Son designer, le britannique Toby Gard, s’inspire d’abord d’Indiana Jones. <i>\"Lara était supposée être quelqu’un qui était fort, et sexy mais juste à cause de sa puissance\"</i>, raconte-t-il <a href='http://archive.wikiwix.com/cache/?url=http%3A%2F%2Fwww.gamedaily.com%2Farticles%2Ffeatures%2Fthe-man-behind-lara%2F' target=’_blank’>dans une interview publiée en 2007</a>. Pourtant, la célébrité de Lara Croft viendra aussi de son imposante poitrine, dont l’origine reposerait - <a href='https://www.ign.com/articles/2008/03/01/ign-presents-the-history-of-tomb-raider?page=1' target=’_blank’>selon la légende </a> - sur une simple erreur de programmation. <br><br>Depuis, l’héroïne en mini-short et débardeur a évolué. Elle a laissé place à une aventurière à la plastique plus raisonnable.  <i>\"Son histoire et sa psychologie ont aussi été étoffés\" </i>, salue la chercheuse Fanny Lignon.",
          juxtapose: {
            first_img: "static/img/laracroft_1996.png",
            second_img:"static/img/laracroft_2013.jpg"
          }
        },
        {
          title: "Vous connaissiez Miss Pac-Man ?",
          id:"misspacman",
          message: 'Qui ne connaît pas Pac-Man ? Le jeu japonais, sorti dans les années 80, consiste à faire manger le plus de pac-gommes possibles à son personnage - une simple boule jaune - tout en évitant les fantômes. <br><br>Succès planétaire, le jeu d’arcade est aussi l’un des premiers à intégrer une "héroïne". En 1981, Ms. Pac-Man fait son apparition. <i>"La seule manière qui a été trouvée pour transformer Pac-Man en fille, c’est de lui mettre un noeud et du rouge à lèvres"</i>, soupire la chercheuse Fanny Lignon.<div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/HQv0zAXDCo8?start=483" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        }
      ],
      parasthirdpart: [
        { message: 'Les raisons de de changement ? Fanny Lignon veut croire en une prise de conscience de l’industrie. Elle le met notamment sur le compte du <a target="_blank" href="https://www.lemonde.fr/pixels/article/2014/09/15/derriere-le-gamersgate-un-groupe-antifeministe_4485191_4408996.html">GamerGate</a> qui, en 2014, a considérablement marqué l’univers du jeu vidéo. Le petit ami d’une développeuse, Zoe Quinn, l\’accuse de l’avoir trompé avec un journaliste de Kotaku, un média spécialisé. Pour une nébuleuse de joueurs "ultra", elle l’aurait fait pour s’attirer ses faveurs éditoriales. Ils multiplient les insultes visant la jeune Américaine.'},
        { message: 'Cette polémique rend visible les femmes du secteur, mais aussi les problèmes qui traversent l’industrie. D’autant plus que deux ans plus tôt, Anita Sarkeesian, militante féministe à la tête de Feminist Frequency, avait commencé à subir le même déferlement de haine : en lançant un appel aux dons pour produire sur sa chaîne Youtube des vidéos sur la représentation des femmes dans les jeux vidéo, elle reçoit de multiples menaces de mort et de viol.'},
        { quote: {
          author:"Anita Sarkeesian, vidéoblogueuse féministe, 2014. Twitter.",
          text: "Je suis en sécurité. Les autorités ont été averties. Je reste avec des amis ce soir. Je n’abandonne pas. Mais le harcèlement des femmes dans les milieux high-tech doit cesser !"
        },
          message: 'En parallèle, les femmes ont commencé à devenir un marché potentiel pour l’industrie du jeu vidéo : à partir des années 2000, plusieurs studios produisent plusieurs <a href="https://www.lsa-conso.fr/le-jeu-video-seduit-ajeux mark" target="_blank" >jeux marketés pour les femmes</a> : c’est le cas, notamment, de la série <i>Léa Passion</i> qui propose aux femmes d’incarner une vétérinaire ou encore une maîtresse d’école. <i>Mais le marché demandeur de plus de mixité"</i>, souligne Fanny Lignon. Sur les forums, nombreuses sont les joueuses à s’interroger, lors de l’annonce d’un jeu, sur la possibilité de choisir le sexe de leur avatar.' }
      ],
      players:[
        { name: 'Coralie, 31 ans',
          img: 'static/img/temoignage-mido.jpg',
          description: 'Streameuse de jeu vidéo.',
          skill: 'Spécialité : jeux de combat',
          quote: '“Dès que j’ai le choix, je joue avec un personnage féminin”',
          full_quote: '"Pouvoir jouer une femme, c’est important pour moi. Par exemple, dans le jeu de combat <i>Streetfighter</i>, je vais toujours incarner Ornika, une catcheuse. Dès que j’ai le choix, je prends un personnage féminin. Ça m’aide à me mettre dans sa peau. Du coup, la qualité de jeu n’est pas la même".'
        },
        { name: 'Violette, 25 ans',
          img: 'static/img/temoignage-violette.jpg',
          description: 'Joueuse régulière',
          skill: 'Spécialité : jeux d\'aventure',
          quote: '“Ecouter Lara Croft gémir, ça m’a fait sortir du jeu”',
          full_quote: '"Quand j’étais enfant, Lara Croft c’était un vrai modèle. Mais maintenant, quand une femme est trop sexualisée, ça me gêne. Dans une des refontes de Lara Croft, à laquelle je jouais en même temps que mon ex, elle était moins sexualisée qu’avant. Mais son petit déhanchement, le fait qu’on l’entende gémir, ça m’a fait sortir du jeu".'
        },
        { name: 'Hélicia, 23 ans',
          img: 'static/img/temoignage-helicia.jpg',
          description: 'Joueuse occasionnelle',
          skill: 'Spécialité : jeux de combat',
          quote: '“Je n’achète pas les jeux stéréotypés”',
          full_quote: '"J’admire les personnages féminins forts, qui vont se battre. J’ai beaucoup vécu le racisme, et ça me sert de catharsis. Mais, du coup, j’ai du mal à me reconnaître dans les figures féminines ultra stéréotypées. J’adore le jeu narratif <i>Life is strange</i>, mais ses héroïnes restent des Américaines blanches, jeunes et jolies".'
        },
      ],

      parasfourthpart: [
        { message: 'En France, un <a href="https://www.tns-sofres.com/sites/default/files/2013.12.10-jeux-videos.pdf" target="_blank" >rapport publié par le CNC en 2013</a> (Centre National du Cinéma et de l’image animée) estime que les femmes consomment plus de jeux vidéo familiaux ou de stratégie, les hommes étant plus nombreux à pratiquer les jeux de tir ou d’action. Toutes catégories de joueurs et tous supports confondus, les femmes représentent 49% des amateurs de jeu vidéo.'},
        { message: 'Malgré ce pourcentage important, l’évolution des créateurs de jeu vidéo reste mesurée. Ils doivent composer avec une partie des joueurs, très attachée à ses <i>"standards"</i> de masculinité. En témoigne l\’indignation de certains hommes, quand Electronic Arts a présenté l\’an passé son dernier <i>Battlefield</i>, qui intègre des femmes soldats. ',
          
      },
          { quote: {
            author:"@EnnPeeSee, 24 octobre 2018. Twitter.",
            text: "ON NE PEUT PAS APPUYER CETTE PROPAGANDE FEMINISTE !"
          },
            message: '<i>"Ces gens ont deux choix : soit ils l\'acceptent... ou alors ils n\'achètent pas le jeu !"</i>, a réagi le directeur créatif de l’éditeur américain dans le média spécialisé <a target="_blank" href="https://www.gamasutra.com/view/news/319787/This_is_not_okay_EA_minces_no_words_on_backlash_against_women_in_Battlefield.php">Gamasutra</a>.'},
        { message: 'Une position affirmée que ne partagent pas tous les acteurs du secteur. La très populaire plateforme de jeu Steam a réagi très mollement, en mars, au scandale né de <a  target="_blank" href="http://www.francesoir.fr/societe-science-tech/rape-day-le-jeu-video-proposant-de-violer-des-femmes-finalement-retire">Rape day</a>. Ce jeu, dont la sortie était prévue en avril, était centré sur le principe suivant : <i>"Harcelez verbalement, tuez et violez des femmes pour progresser dans l’histoire"</i>.',
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
        { message: 'Face à la polémique, elle a fini par retirer Rape Day du catalogue. <i>"Nous respectons le désir des développeurs de s’exprimer, et la mission de Steam est de [les] aider à trouver un public mais ce développeur a choisi un sujet et une façon de l’illustrer qui rendent cette tâche très difficile pour nous"</i>, s’est simplement défendue la société américaine <a target="_blank" href="https://steamcommunity.com/games/593110/announcements/detail/1808664240304050758">sur son site</a>, sans critiquer ouvertement le jeu.'},
        { message: '<i>"L’industrie est encore dans une phase de prise de conscience"</i>, constate Marie-Lou Dulac. Cette cheffe de projet éditorial travaille depuis presque deux ans chez Ubisoft. L\’une de ses missions : faire un travail de recherche, pour amener ses collègues à <i>"faire le constat"</i> des lacunes en matière de représentation des femmes. Elle organise par exemple des ateliers de sensibilisation.  <i>"Certaines personnes sont réfractaires, elle disent que les filles ne sont pas notre coeur de cible, que c’est du travail en plus"</i>, confie-t-elle.'},
          { quote: {
            author:"James Therien, directeur technique d'Ubisoft, 2014.",
            text: "Un personnage féminin, ça aurait voulu dire refaire beaucoup d’animation, beaucoup de costumes"
          },
          message: 'Il y a cinq ans, le directeur technique d\’Ubisoft avait d’ailleurs utilisé cet argument pour défendre <i>Assassin’s Creed : Unity</i>, critiqué pour ne proposer dans un mode de jeu en ligne que des avatars masculins. <i>"Un personnage féminin, ça aurait voulu dire refaire beaucoup d’animation, beaucoup de costumes"</i>, avait-il déclaré au <a target="_blank" href="https://www.videogamer.com/news/no_female_leads_in_assassins_creed_unity_unfortunate_but_a_reality_of_game_development_ubi">site Video Gamer</a>. D\’autres employés du studio avaient remis cette déclaration en cause, dont un directeur d’animation qui avait estimé <a href="https://twitter.com/GameAnim?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E476638349097058304&ref_url=https%3A%2F%2Fwww.lesinrocks.com%2F2014%2F06%2F13%2Fweb%2Factualite%2Faucun-personnage-feminin-assassins-creed-lexcuse-bidon-ubisoft%2F" target="_blank" >sur Twitter</a> la charge de travail à <i>"un ou deux jours"</i> seulement.'},
        { inter: '"Vous ne pouvez pas avoir d’héroïne dans les jeux vidéo"',
          message: '<i>"Beaucoup de développeurs ont la capacité de se remettre en question. Mais c’est difficile à concrétiser au sein de grosses entreprises</i>, explique Sybil Collas, professionnelle du secteur. <i>Le jeu vidéo est une industrie à but de monétisation et les studios et les éditeurs ont tendance à garder toujours la même ‘recette’, pour ne pas prendre de risque"</i>. Spécialisée dans la narration, elle travaille notamment pour Dontnod.'},
        { message: 'Ce studio parisien dit avoir essuyé les refus de nombreux éditeurs pour son jeu d’aventure épisodique <i>Life is Strange</i>, sorti en 2015. En cause : son héroïne Max, dotée de la faculté de revenir dans le temps. <i>"Certains nous ont dit : \‘nous ne désirons pas éditer votre jeu parce qu’il ne sera pas un succès. Vous ne pouvez pas avoir d’héroïne dans les jeux vidéo. Ce doit être un héros, c’est aussi simple que ça.\’"</i>, dénonçait en 2015 l’un des <a target="_blank"  href="https://www.youtube.com/watch?v=t2Hr_LbIM2E"> cofondateurs du studio<a>.'
        },
        { message: '<i>"Ils avaient du mal à avaler la pilule, à croire que ça intéresserait les joueurs"</i>, s\’insurge Sybil Collas. Pour elle, comme pour les autres spécialistes interrogés, les studios indépendants sont plus enclins à s’affranchir des modèles et des narrations traditionnels que les mastodontes du secteur - qui consacrent souvent plusieurs années et des millions de dollars à la production d’un seul jeu. '},
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
        { message: '<i>"Pourquoi on ne l’aurait pas fait ?"</i>, répond, surpris, Joseph Humfrey, cofondateur du studio anglais Inklestudios, quand on lui demande ce qui l’a poussé à choisir une femme comme personnage principal de son jeu d’archéologie. Elle s’appelle Aliya Elasra, porte un voile bleu qui laisse apparaître ses cheveux, et des vêtements banals et utilitaires.',
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
        
        { message: 'Un peu plus loin, Hannah Flynn présente <i>Sunless Skies</i>, le dernier jeu de rôle de son entreprise londonienne. La trentenaire aux cheveux teintés en bleu indique qu’il était <i>"naturel pour le studio de proposer aux joueurs de choisir leur genre, car nous avons une petite équipe mixte et diversifiée"</i>.'},
        { message: 'Sybil Collas considère elle aussi que la féminisation des effectifs est essentielle : <i>"il est plus difficile de se projeter sur ce qu’on n’est pas. Les créateurs de contenu écrivent des personnages pour eux-mêmes, qui leur ressemblent" </i>, explique la créatrice de jeux. Elle a rejoint il y a quelques mois l\’organisation  <i>Women In Games France</i>, qui promeut la mixité dans l\'industrie du jeu vidéo, dont les effectifs sont majoritairement masculins.'},
        { message: 'Du côté des écoles, on se veut optimiste. A Isart digital, école française spécialisée, la proportion de filles dans la filière jeu vidéo a été multipliée par deux en cinq ans. Charlotte Lavergne, directrice pédagogique, constate <i>"une génération beaucoup plus ouverte que les précédentes"</i>. Plusieurs autres écoles ont mis en place des modules visant à sensibiliser leurs étudiants à la représentation des femmes dans leurs jeux. Thomas Planques, directeur créatif et producteur de jeux vidéo, intervient dans plusieurs d’entre elles.'},
        { message: 'CHUTE EN UN PARA ==> REPORTAGE JEUDI MATIN A l’IIM'}
      ],
      gameTable: {
        title: "Voir les données", 
        columns: ["Jeu","Editeur","Studio","Personnage principal","Ann\u00e9e"]
      } 
    }
  })


function createTable(data){
  $('#games_table').dataTable({
    language: {
      processing:     "Traitement en cours...",
      search:         "Rechercher&nbsp;:",
      lengthMenu:    "Afficher _MENU_ &eacute;l&eacute;ments",
      info:           "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
      infoEmpty:      "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
      infoFiltered:   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
      infoPostFix:    "",
      loadingRecords: "Chargement en cours...",
      zeroRecords:    "Aucun &eacute;l&eacute;ment &agrave; afficher",
      emptyTable:     "Aucune donnée disponible dans le tableau",
      paginate: {
          first:      "Premier",
          previous:   "Pr&eacute;c&eacute;dent",
          next:       "Suivant",
          last:       "Dernier"
      },
      aria: {
          sortAscending:  ": activer pour trier la colonne par ordre croissant",
          sortDescending: ": activer pour trier la colonne par ordre décroissant"
      }
    },    
    data: data
  });
}

$(document).ready(function() {

  $.getJSON('./static/data/games.json', function(data){
    console.log('data', data.data);

    createTable(data.data);
  })
});



if(isSmallDevice() )
{
  $("#rapeday2" ).parent().css('display','none');
  $("#laurette2" ).parent().css('display','none');
  $("#HeavensVault2").parent().css('display','none');

}
  
$(".methodo-explanation").hide();
$( ".methodo-link" ).click(function() {
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
  // $( "#blabla-id" ).hide();
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

window.onresize = function(event) {
  
  if(isSmallDevice() )
  {
    $("#rapeday2" ).parent().css('display','none');
    $("#laurette2" ).parent().css('display','none');
    $("#HeavensVault2").parent().css('display','none');

  }
  else {
    $("#rapeday2" ).parent().show();
    $("#laurette2" ).parent().show();
    $("#HeavensVault2").parent().show();

// $(document).ready(function() {

//   /* find all iframes with ids starting with "tweet_" */
//   $("iframe[id^='tweet_']").load(function() {
//       this.contentWindow.postMessage({ element: this.id, query: "height" },
//           "https://twitframe.com");
//   });

// });

  }

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
};