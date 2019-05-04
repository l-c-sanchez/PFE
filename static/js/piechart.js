var height_chart = 375;
  if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
  {
    height_chart = 275
  }

	Highcharts.setOptions({
		lang: {
			decimalPoint: ',',
			thousandsSep: ' ',
			noData: 'Pas de données à afficher',
			numericSymbols: [null, 'M', 'G', 'T', 'P', 'E']
		}
	});
	  var pick = Highcharts.pick;
  Highcharts.seriesTypes.pie.prototype.connectorPath = function(labelPos) {
    var x = labelPos.x,
      y = labelPos.y,
      M = 'M',
      L = 'L';
    return pick(this.options.dataLabels.softConnector, true) ? [
      M,
      x + (labelPos[6] === 'left' ? 5 : -5), y, // end of the string at the label
      'C',
      x, y, // first break, next to the label
      2 * labelPos[2] - labelPos[4], 2 * labelPos[3] - labelPos[5],
      labelPos[2], labelPos[3], // second break
      L,
      labelPos[4], labelPos[5] // base
    ] : [
      M,
      x + (labelPos[6] === 'left' ? 5 : -5), y, // end of the string at the label
      L,
      labelPos[4], y, // second break
      L,
      labelPos[4], labelPos[5] // base
    ];
  };
	var chart = new Highcharts.Chart( {
  "title": {
    "text": " "
  },
  "chart": {
    "type": "pie",
    "description": "",
    "backgroundColor": "rgba(255,255,255,0)",
    "borderRadius": 0,
    "height": height_chart,
    "alignTicks": false,
    "style": {
      "fontSize": "11px"
    },
    "renderTo": "d_graph_1556898916"
  },
  "plotOptions": {
    "series": {
      "stacking": "",
      "marker": {
        "fillColor": "#FFF",
        "enabled": true,
        "radius": 3,
        "symbol": "circle",
        "lineWidth": 2,
        "lineColor": null,
        "states": {
          "hover": {
            "lineWidth": 2,
            "lineWidthPlus": 0,
            "radiusPlus": 1
          }
        }
      },
      "dataLabels": {
        "format": "{point.name} : {point.percentage:.0f}%"
      },
      "connectNulls": true,
      "fillOpacity": 0.2,
      "states": {
        "hover": {
          "enabled": true,
          "lineWidth": 0,
          "lineWidthPlus": 0
        }
      }
    },
    "colorByPoint": true,
    "pie": {
      "dataLabels": {
        "distance": 30,
        "filter": {
          "property": "percentage",
          "value": "0",
          "operator": ">"
        },
        "softConnector": false,
        "color": "#000000"
      },
      "animation": {
        "duration": 0
      }
    }
  },
  "yAxis": {
    "title": {
      "text": ""
    },
    "labels": {
      "format": "",
      "space": true
    },
    "min": null,
    "startOnTick": true,
    "max": null,
    "endOnTick": true,
    "type": "linear",
    "reversed": "",
    "lineWidth": 0
  },
  "xAxis": {
    "title": {
      "text": ""
    },
    "labels": {
      "format": "",
      "step": "",
      "formatdt": "%Y",
      "space": false,
      "useHTML": true,
      "zIndex": -1,
      "padding": 30
    },
    "type": "linear",
    "lineColor": "#2E3942",
    "tickLength": 7
  },
  "tooltip": {
    "valuePrefix": "",
    "valueSuffix": "",
    "valueDecimals": "",
    "xDateFormat": "",
    "shared": "",
    "title": "{{Ann\u00e9e}}",
    "content": "{{current}}% contre {{En 2014}}% en 2014.",
    "annot": "",
    "strColumns": [
      [
        "Ann\u00e9e",
        "Pourcentage d'hommes",
        "Pourcentage de femmes"
      ],
      [
        "En 2018",
        86,
        14
      ],
      [
        "En 2014",
        89.4,
        10.6
      ]
    ],
    "useHTML": true,
    "backgroundColor": "rgba(255,255,255,1)",
    "borderColor": "#E2E4E9",
    "borderRadius": 0,
    "borderWidth": 1,
    "shadow": false,
    "style": {
      "color": "#16212c",
      "opacity": 1
    },
    "hideDelay": 100,
    "formatter":  function(tooltip) {


function addSpace(nStr) {
    if (!isNaN(nStr)) {
        nStr = String(nStr);
        nStr = nStr.replace(".", ",");
        nStr = nStr.split(",");
        if (nStr[0].length > 4) {
            let x = nStr[0].split('.');
            let x1 = x[0];
            let x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) 
                x1 = x1.replace(rgx, '$1' + ' ' + '$2');
            nStr[0] = x1+x2;
        }
        return nStr;
    }
    else if (nStr.indexOf("/") >= 0) {
        nStr = nStr.split("/");
        return (addSpace(nStr[0]) + " - " + addSpace(nStr[1]))
    }
    else if (nStr.length > 1)
        return (addSpace(nStr[0]) + " - " + addSpace(nStr[1]))
    else
        return nStr
}


function matchInArray(exp, skeleton, index, shared){
    let chrono = 0;
    if (skeleton.xAxis.type != "linear")
        chrono = 1;
    while (exp.indexOf("{{current}}") != -1 && shared != 1) {
        shared[0] = addSpace(shared[0]);
        if (skeleton.tooltip.valuePrefix != "")
            skeleton.tooltip.valuePrefix += " ";
        var string_current = "<span style='color:" + shared[2] + "'>●</span> " + shared[1] + " : " + skeleton.tooltip.valuePrefix + shared[0] + skeleton.tooltip.valueSuffix;
        var new_exp_current = exp.replace("{{current}}", string_current);
        exp = new_exp_current
    }

    while (exp.indexOf("{{current}}") != -1 && shared == 1) {
        var string_current = "";
        if (skeleton.tooltip.valuePrefix != "") {
          for (var i = 0; i < skeleton.series.length; i++) {
            if (skeleton.series[i].data[index][1])
                string_current = string_current + "<span style='color:" + skeleton.series[i].color + "'>●</span> " + skeleton.series[i].name + " : " + skeleton.tooltip.valuePrefix + addSpace(skeleton.series[i].data[index][0 + chrono]) + skeleton.tooltip.valueSuffix + "<br>";
            }
        }
        else {
          for (var i = 0; i < skeleton.series.length; i++){
            if (skeleton.series[i].data[index][1])
                string_current = string_current + "<span style='color:" + skeleton.series[i].color + "'>●</span> " + skeleton.series[i].name + " : " + addSpace(skeleton.series[i].data[index][0 + chrono]) + " " + skeleton.tooltip.valueSuffix + "<br>";
            }
        }
        var new_exp_current = exp.replace("{{current}}", string_current);
        exp = new_exp_current;
    }
    for (var i = 0; i < skeleton.tooltip.strColumns.length; i++){
        var stringSearch = '{{' + skeleton.tooltip.strColumns[i][0] + '}}';
        while (exp.indexOf(stringSearch) != -1) {
            exp_replace = skeleton.tooltip.strColumns[i][index + 1];
            var new_exp = exp.replace(stringSearch, exp_replace);
            exp = new_exp;
        }
    }
    return exp;
}


   var str_tooltip = "";
   var index = this.series.xData.indexOf(this.point.x);
   if (this.series.yData[index][0])
       var yData = String(this.series.yData[index][0]) + "/" + String(this.series.yData[index][1]);
   else
       var yData = this.series.yData[index];

   if (tooltip.chart.userOptions.tooltip.title && this.series.yData[index])
       str_tooltip = str_tooltip + "<b>" + matchInArray(tooltip.chart.userOptions.tooltip.title, tooltip.chart.userOptions, index, [yData, this.series.name, this.series.color]) + '</b>';
   else if (tooltip.chart.userOptions.tooltip.title && this.series.valueData[index])
       str_tooltip = str_tooltip + "<b>" + matchInArray(tooltip.chart.userOptions.tooltip.title, tooltip.chart.userOptions, index, [this.series.valueData[index], this.series.points[index].name, this.series.points[index].color]) + '</b>';
   else if (!tooltip.chart.userOptions.tooltip.title && tooltip.chart.userOptions.chart.type == "pie")
       str_tooltip = str_tooltip + "<b>" + tooltip.chart.userOptions.series[0].data[index].name + '</b>';
   else if (tooltip.chart.userOptions.chart.type != "treemap")
       str_tooltip = str_tooltip + "<b>" + tooltip.chart.userOptions.tooltip.strColumns[0][index + 1] + '</b>';
   if (tooltip.chart.userOptions.tooltip.content  && this.series.yData[index])
       str_tooltip = str_tooltip + '<br>' + matchInArray(tooltip.chart.userOptions.tooltip.content, tooltip.chart.userOptions, index, [this.series.yData[index], this.series.name, this.series.color]);
   else if (tooltip.chart.userOptions.tooltip.content && this.series.valueData[index]) {
       str_tooltip = str_tooltip + '<br>' + matchInArray(tooltip.chart.userOptions.tooltip.content, tooltip.chart.userOptions, index, [this.series.valueData[index], this.series.points[index].name, this.series.points[index].color]);
   }
   return ("<div class='tooltipdiv'>" + str_tooltip + '<br>' + tooltip.chart.userOptions.tooltip.annot + "</div>")}

  },
  "legend": {
    "enabled": ""
  },
  "series": [
    {
      "name": "En 2018",
      "showInLegend": true,
      "data": [
        {
          "name": "Hommes",
          "y": 86.0,
          "color": "#3d4449"
        },
        {
          "name": "Femmes",
          "y": 14.0,
          "color": "#ffdd6b"
        }
      ],
      "step": ""
    }
  ],
  "accessibility": {
    "enabled": true
  },
  "exporting": {
    "enabled": false
  },
  "credits": {
    "enabled": false
  }
} );
