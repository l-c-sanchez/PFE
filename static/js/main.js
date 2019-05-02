var instruction = "Chaque bulle représente un jeu présenté à l'E3. En survolant avec votre souris chacune d'entre elle, vous obtiendrez plus d'informations le jeu associé.";
//Version simplifiée regroupant les principaux périphériques et systèmes mobiles
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
{
  instruction = "Chaque bulle représente un jeu présenté à l'E3. En cliquant sur chacune d'entre elle, vous obtiendrez plus d'informations le jeu associé.";
}

if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
{
  $("#laurette2").hide();
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
    }
  })


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

