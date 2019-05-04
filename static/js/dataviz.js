var width = Math.min(window.innerWidth, 475),
    height = window.innerHeight / 1.6,
    padding = 2, // separation between same-color nodes
    clusterPadding = 0, // separation between different-color nodes
    maxRadius = 11;
  

  // static/js/data2018.tsv
d3.tsv("static/data/games.tsv", function(data){
  var svg = d3.select("#dataviz").append("svg")
      .attr("width", width)
      .attr("height", height);

  for (var j = 0; j < data.length; j++) {
    if (window.innerWidth < 475)
      data[j].radius = 7;
    else
      data[j].radius = 10;
    data[j].x = Math.random() * width;
    data[j].y = Math.random() * height;
  }

  // Sorting data by gender. It ensures the gender appear in the same order for each year in the chart.
  // I'm ensuring here that the order on desktop is:
  // Row 1: M     F
  // Row 2: Multi Others
  function genderOrder(gender){
    switch(gender){
      case 'm': return 4;
      case 'f': return 2;
      case 'multi': return 3;
      default: return 1;
    }
  }
  data = data.sort(function(x, y){
    return d3.ascending(genderOrder(x.gender), genderOrder(y.gender));
  });

  var getData = function(data, year) {
    return data.filter(
      function(d){return d.year == year;}
    );
  }

  var getCenters = function(vname, size, data) {
    var centers, map;
    centers = _.uniq(_.pluck(data, vname)).map(function (d) {
      return {name: d, value: 3};
    });
    map = d3.layout.treemap().size(size).ratio(1/1);
    map.nodes({children: centers});
    return centers;
  };
  
  let genderColors = {
    f: '#F76425',
    m: '#60ADB9',
    multi: '#554236',
    other: '#F1EFA5'
  }

  var force = d3.layout.force();

  let year = $("#yearRange")[0].value;
  draw('gender', year);

  $("#yearRange").on('change', function(e){
    let year = e.target.value;
    draw('gender', year);
  });

function draw(varname, year) {
  let yearData = getData(data, year);

  svg.selectAll("circle").remove();
  var nodes = svg.selectAll("circle")
    .data(yearData);
  nodes.enter().append("circle")
    .attr("class", "node")
    .attr("cx", function (d) { return d.x; })
    .attr("cy", function (d) { return d.y; })
    .attr("r", function (d) { return d.radius; })
    .style("fill", function (d) { return genderColors[d.gender]; })
    .on("mouseover", function (d) { showPopover.call(this, d); })
    .on("mouseout", function (d) { removePopovers(); })
    .on("click", function (d) { d3.event.stopPropagation(); })
  
  var centers = getCenters(varname, [width, height], yearData);
  force.on("tick", tick(centers, nodes, varname, yearData));
  labels(centers)
  force.start();
};

// Removing the popover on mobile devices
document.addEventListener('touchstart', function(){ 
  removePopovers(); 
});

function tick(centers, nodes, varname, data) {
  var foci = {};
  for (var i = 0; i < centers.length; i++) {
    foci[centers[i].name] = centers[i];
  }
  return function (e) {
    for (var i = 0; i < data.length; i++) {
      var o = data[i];
      var f = foci[o[varname]];
      o.y += ((f.y + (f.dy / 2)) - o.y) * e.alpha;
      o.x += ((f.x + (f.dx / 2)) - o.x) * e.alpha;
    }
    nodes.each(collide(.11, data))
      .attr("cx", function (d) { return d.x; })
      .attr("cy", function (d) { return d.y; });
  }
}

function labels(centers) {
  svg.selectAll(".label").remove();

  svg.selectAll(".label")
  .data(centers).enter().append("text")
  .attr("class", "label")
  .text(function (d) { return genderLabel(d.name) })
  .attr("transform", function (d) {
    return "translate(" + (d.x + (d.dx / 2)) + ", " + (d.y + 20) + ")";
  });
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

function removePopovers () {
  $('.popover').each(function() {
    $(this).remove();
  }); 
}

function showPopover (d) {
  $(this).popover({
    placement: 'auto top',
    container: 'body',
    trigger: 'manual',
    html : true,
    content: function() {
      return "<strong>" + d.game + "</strong> (" + d.platforms + ")<br/><br/>Personnage incarné : " + genderLabel(d.gender) +
              "<br/>Editeur : " + d.editor + "<br/>Studio de développement : " + d.developer +
              "<br/>Année : " + d.year; 
    }
  });
  $(this).popover('show')
}

function collide(alpha, data) {
  var quadtree = d3.geom.quadtree(data);
  return function (d) {
    var r = d.radius + maxRadius + padding,
        nx1 = d.x - r,
        nx2 = d.x + r,
        ny1 = d.y - r,
        ny2 = d.y + r;
    quadtree.visit(function(quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== d)) {
        var x = d.x - quad.point.x,
            y = d.y - quad.point.y,
            l = Math.sqrt(x * x + y * y),
            r = d.radius + quad.point.radius + padding;
        if (l < r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    });
  };
}

});

  
// })