var width = Math.min(window.innerWidth * 0.95, 475),
    height = width, // window.innerHeight / 1.6,
    clusterPadding = 10, // separation between different-color nodes
    maxRadius = 11;

d3.tsv("static/data/games.tsv", function(data){
  var svg = d3.select("#dataviz-data").append("svg")
      .attr("width", width)
      .attr("height", height);
  
  function getRadius(width, pad, ncol){
    return (width-clusterPadding) / (2 * (1 + pad) * ncol);
  }

  function getPosition(index, r, pad, ncol) {
    let d = 2 * r * (1 + pad);
    let y = d/2 + Math.floor(index/ncol) * d;
    let x = d/2 + (index % ncol) * d;
    return {x: x, y: y};
  }

  var getData = function(data, year) {
    return data.filter(
      function(d){return d.year == year;}
    );
  }
  
  let genderColors = {
    f: '#F76425',
    m: '#60ADB9',
    multi: '#554236',
    other: '#F1EFA5'
  }

  function genderLabel(gender) {
    switch (gender) {
      case 'm':
        return 'Masculin';
      case 'f':
        return 'Féminin';
      case 'multi':
        return 'Multi';
      default:
        return 'Autres';
    }
  }

  let year = $("#yearRange").val();
  draw(year);  

  $("#yearRange").on("change", function(e){
    let year =  e.target.value;
    draw(year);
    $("#yearSpan").html(year);
    clearInterval(timer);
    $("#playButton").html("Lancer l'animation");
  });

  var running = false;
  var timer;

  $("#playButton").on("click", function() {
    var duration = 3000,
      maxstep = $("#yearRange")[0].max,
      minstep = $("#yearRange")[0].min;

    function toNextYear(){
      let currentYear = parseInt($("#yearRange").val(), 10);
      let year;
      if (currentYear < maxstep){
        year = currentYear + 1;
      } else {
        year = minstep;
      }
      $("#yearRange").val(year);
      $('#yearSpan').html(year);
      draw(year);
    }
    
    if (running == true) {
      $("#playButton").html("Lancer l'animation");
      running = false;
      clearInterval(timer);
    } else if (running == false) {
      $("#playButton").html("Arrêter l'animation");
      toNextYear();
      timer = setInterval(toNextYear, duration);
      running = true;
    }
  }); 


function draw(year) {
  let yearData = getData(data, year);

  // Group data by gender
  var groups = d3.nest()
    .key(function(d) { return d.gender; })
    .entries(yearData);

  // Positional settings
  let refPoints = {
    m: {x: 0, y: 0},
    f: {x: width/2, y: 0},
    multi: {x: 0, y: height/2},
    other: {x: width/2, y: height/2}
  }
  let internalWidth = width/2;
  let titleHeight = 40;
  let pad = 0.2;
  let ncolDefault = 10;
  let r = getRadius(internalWidth, pad, ncolDefault);

  labels(groups, refPoints, internalWidth, titleHeight);

  for (var i=0; i<groups.length; i++){
    let group = groups[i];
    let data = group.values;
    let name = group.key;

    let nbGames = data.length;
    let ncol = (nbGames >= 10) ? ncolDefault : 10; 

    var nodes = svg.selectAll("circle." + name).data(data);
    
    // remove unneeded circles
    nodes.exit()
      .transition(500)
      .attr("r", 0)
      .remove();

    // create any new circles needed
    nodes.enter().append("circle")
      .attr("r", 0);

    // Update all circles
    nodes
      .attr("class", "node " + name)
      .attr("cx", function (d, i) { return refPoints[name].x + getPosition(i, r, pad, ncol).x; })
      .attr("cy", function (d, i) { return refPoints[name].y + titleHeight + getPosition(i, r, pad, ncol).y; })
      .style("fill", function (d) { return genderColors[d.gender]; })
      .on("mouseover", null)
      .on("mouseover", function (d) { showPopover.call(this, d); })
      .on("mouseout", function (d) { removePopovers(); })
      .on("click", function (d) { d3.event.stopPropagation(); })

    //update all circles to right radius
    nodes.transition()
      .duration(500)
      .attr("r", function(d) {return r});
  }

};

function labels(groups, refPoints, internalWidth, titleHeight){
  svg.selectAll(".label").remove();
  svg.selectAll(".label")
    .data(groups).enter().append("text")
    .attr("class", "label")
    .text(function (d) { return genderLabel(d.key) })
    .attr("transform", function (d) {
      return "translate(" + (refPoints[d.key].x + (internalWidth / 2)) + ", " +
      (refPoints[d.key].y + (titleHeight / 2)) + ")";
    });
}

// Removing the popover on mobile devices
document.addEventListener('touchstart', function(){ 
  removePopovers(); 
});

function removePopovers () {
  $('.popover').each(function() {
    $(this).remove();
  }); 
}

function showPopover (d) {
  let popoverData = {
    placement: 'auto top',
    container: 'body',
    trigger: 'manual',
    html : true,
    content: "<strong>" + d.game + "</strong> (" + d.platforms + ")<br/><br/>Personnage incarné : " + genderLabel(d.gender).toLowerCase() +
              "<br/>Editeur : " + d.editor + "<br/>Studio : " + d.developer +
              "<br/>E3 : " + d.year
  }
  $(this).popover(popoverData);

  // Hack to ensure popover content is truly updated.
  var popover = $(this).data('bs.popover');
  popover.options.content = popoverData.content;

  $(this).popover('show')
}

});
