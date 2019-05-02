var width = Math.min(window.innerWidth, 475),
    height = window.innerHeight / 1.6,
    padding = 2, // separation between same-color nodes
    clusterPadding = 0, // separation between different-color nodes
    maxRadius = 11;
  
  d3.tsv("static/js/data2018.tsv", function(data){
    var svg = d3.select("#dataviz").append("svg")
        .attr("width", width)
        .attr("height", height);

    for (var j = 0; j < data.length; j++) {
    console.log(width)
        if (window.innerWidth < 475)
            data[j].radius = 7;
        else
            data[j].radius = 10;
      data[j].x = Math.random() * width;
      data[j].y = Math.random() * height;
    }

    var getCenters = function (vname, size) {
        var centers, map;
        centers = _.uniq(_.pluck(data, vname)).map(function (d) {
          return {name: d, value: 3};
        });

        console.log('centers', centers);

        map = d3.layout.treemap().size(size).ratio(1/1);
        map.nodes({children: centers});

        return centers;
      };

    var nodes = svg.selectAll("circle")
    .data(data);
    
    nodes.enter().append("circle")
    .attr("class", "node")
    .attr("cx", function (d) { return d.x; })
    .attr("cy", function (d) { return d.y; })
    .attr("r", function (d) { return d.radius; })
    .style("fill", function (d) { 
        
        if (d.gender == 'F')
            return '#F76425'
        else if (d.gender == 'M')
            return '#60ADB9'
        else if (d.gender == "Multi")
            return '#554236'
        else
            return '#F1EFA5'
        // fill(d.gender);

    
    })
    .on("mouseover", function (d) { showPopover.call(this, d); })
    .on("mouseout", function (d) { removePopovers(); })

  var force = d3.layout.force();

  draw('gender');

  // $( ".btn" ).click(function() {
  //   draw(this.id);
  // });

  function draw (varname) {
    var centers = getCenters(varname, [width, height]);
    force.on("tick", tick(centers, varname));
    labels(centers)
    force.start();
  }

  function tick (centers, varname) {
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
      nodes.each(collide(.11))
        .attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; });
    }
  }

  function labels (centers) {
    svg.selectAll(".label").remove();

    svg.selectAll(".label")
    .data(centers).enter().append("text")
    .attr("class", "label")
    .text(function (d) { return d.name })
    .attr("transform", function (d) {
      return "translate(" + (d.x + (d.dx / 2)) + ", " + (d.y + 20) + ")";
    });
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
        let gender = "masculin"
        if (d.gender == "F")
          gender = "féminin"
        else if (d.gender == "Multi")
          gender = "féminin et/ou masculin"
        else if (d.gender == "Autre")
          gender = "Autre (genre ambigu ou personnage non genré)"

        return "<strong>" + d.game + "</strong> (" + d.platforms + ")<br/><br/>Personnage incarné : " + gender +
               "<br/>Editeur : " + d.editor + "<br/>Studio de développement : " + d.developer; 
      }
    });
    $(this).popover('show')
  }

  function collide(alpha) {
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


    function normalizegroup(group) {
        group = group.toLowerCase().replace(" ", "");
        group = group.split("(");
        return group[0]
    }


  });

  
// })