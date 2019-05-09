var chart = new Highcharts.Chart( {
  "title": {
    "text": " "
  },
  "chart": {
    "type": "column",
    "description": "",
    "backgroundColor": "rgba(255,255,255,0)",
    "borderRadius": 0,
    "alignTicks": false,
    "spacingTop": 30,
    "spacingBottom": 10,
    "spacingLeft": 10,
    "spacingRight": 10,
    "style": {
      "fontFamily": "Sanchez,Helvetica,Arial!important",
      "fontSize": "13px"
    },
    "renderTo": "d_graph_1557420005"
  },
  "plotOptions": {
    "series": {
      "stacking": "percent",
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
        "style": {
          "textOutline": "0.25px contrast",
          "fontSize": "12px",
          "zIndex": "-1",
          "letterSpacing": "0.25"
        },
        "useHTML": true
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
    "colorByPoint": false,
    "pie": {
      "dataLabels": {
        "distance": "40",
        "filter": {
          "property": "percentage",
          "value": "0",
          "operator": ">"
        }
      }
    },
    "column": {
      "animation": {
        "duration": 0
      }
    }
  },
  "yAxis": [
    {
      "title": {
        "text": ""
      },
      "labels": {
        "format": "{value:,.0f}",
        "space": true,
        "y": -3,
        "x": 5,
        "align": "left",
        "useHTML": true,
        "zIndex": -1,
        "step": 1,
        "style": {
          "color": "#2A303",
          "whiteSpace": "nowrap",
          "fontSize": "12px",
          "align": "right"
        },
        "formatter": 
    function () {
        let val_tick = this.value;
        if (this.chart.yAxis[0].userOptions.labels.space == true)
            val_tick = val_tick.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",") + this.chart.yAxis[0].userOptions.labels.format.replace("{value:,.0f}", " ").replace("{value}", " ");
        if (this.axis.paddedTicks.indexOf(this.value) % 2 != 0)
            return val_tick
    }

      },
      "min": null,
      "startOnTick": true,
      "max": null,
      "endOnTick": true,
      "type": "linear",
      "reversed": "",
      "plotLines": [
        {
          "value": "",
          "label": {
            "text": "",
            "align": "left",
            "rotation": "0",
            "useHTML": false,
            "x": 5,
            "style": {
              "color": "#ccc"
            }
          },
          "color": "#ccc",
          "width": "",
          "zIndex": 5
        }
      ],
      "plotBands": [
        {
          "from": "",
          "to": "",
          "label": {
            "text": "",
            "align": "left",
            "verticalAlign": "top",
            "rotation": "0",
            "useHTML": false,
            "textAlign": "",
            "x": "",
            "y": -5
          },
          "color": null,
          "zIndex": -1
        }
      ],
      "offset": 50,
      "tickLength": 50,
      "tickWidth": 1,
      "tickPosition": "inside",
      "opposite": false,
      "id": "0",
      "alignTicks": true,
      "showFirstLabel": true,
      "lineWidth": 0,
      "gridZIndex": -1
    }
  ],
  "xAxis": {
    "title": {
      "text": ""
    },
    "labels": {
      "format": "{value}",
      "step": "",
      "formatdt": "%Y",
      "space": false,
      "useHTML": true,
      "zIndex": -1,
      "padding": 30,
      "autoRotation": [
        0,
        -40,
        -60,
        -80
      ],
      "style": {
        "color": "#2A303",
        "fontSize": "12px"
      }
    },
    "type": "linear",
    "plotLines": [
      {
        "value": "",
        "label": {
          "text": "",
          "textAlign": "left",
          "verticalAlign": "top",
          "rotation": "90",
          "useHTML": false,
          "x": 5,
          "y": 12,
          "style": {
            "color": "#ccc"
          }
        },
        "color": "#ccc",
        "width": "",
        "zIndex": 5
      }
    ],
    "plotBands": [
      {
        "from": "",
        "to": "",
        "label": {
          "text": "",
          "align": "left",
          "verticalAlign": "top",
          "rotation": "90",
          "useHTML": false,
          "textAlign": "",
          "x": "",
          "y": 10,
          "zIndex": -1
        },
        "color": null,
        "zIndex": -10
      }
    ],
    "categories": [
      "E3 2016",
      "E3 2017",
      "E3 2018"
    ],
    "lineColor": "#2E3942",
    "tickLength": 7,
    "lineWidth": 1
  },
  "tooltip": {
    "valuePrefix": "",
    "valueSuffix": "%",
    "valueDecimals": "",
    "xDateFormat": "",
    "shared": "1",
    "title": "",
    "content": "",
    "annot": "",
    "strColumns": [
      [
        "Type de personnage",
        "E3 2016",
        "E3 2017",
        "E3 2018"
      ],
      [
        "Personnage principal f\u00e9minin",
        7,
        9,
        7
      ],
      [
        "Personnage principal masculin",
        26,
        24,
        25
      ],
      [
        "Multi (personnage f\u00e9minin et/ou masculin)",
        55,
        44,
        53
      ],
      [
        "Autres",
        12,
        23,
        15
      ],
      [
        "nb_jeux",
        97,
        137,
        119
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
      "font-family": "'Sanchez',Helvetica,Arial!important",
      "opacity": 1
    },
    "hideDelay": 200,
    "headerFormat": "<span style='text-align:left;letter-spacing:0;color:#2A303B;font-size:13px'><b>{point.key}</b></span><br/>",
    "pointFormat": "<span style='text-align:left;letter-spacing:0.5px;font-size:12px;color:{point.color};'>\u25cf </span>{series.name} : {point.y}<br>",
    "formatter":  function(tooltip) {
    var index = this.points[0].point.x;
    var annot_spe = "Nombre de jeux comptabilisés dans notre base de données : " + tooltip.chart.userOptions.tooltip.strColumns[5][index + 1];
    var str = tooltip.defaultFormatter.call(this, tooltip)
    var new_str = "";
    for (let i = 0; i < str.length; i++)
        new_str += str[i];
    return ("<div class='tooltipdiv'>" + new_str + (tooltip.chart.userOptions.tooltip.annot === "undefined" ? "" : tooltip.chart.userOptions.tooltip.annot) + annot_spe +  "</div>")
  }

  },
  "legend": {
    "enabled": "1",
    "reversed": "",
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "margin": 40,
    "y": -30,
    "x": 0,
    "itemStyle": {
      "fontSize": 13,
      "font-family": "'Sanchez',Helvetica,arial",
      "fontWeight": "normal",
      "color": "#2A303B"
    },
    "itemMarginBottom": 10
  },
  "series": [
    {
      "stack": "null",
      "name": "Multi (personnage f\u00e9minin et/ou masculin)",
      "lineWidth": 2,
      "color": "#c39e86",
      "type": "",
      "yAxis": "0",
      "visible": true,
      "dataLabels": {
        "enabled": false,
        "format": '{y}%'
      },
      "step": "",
      "data": [
        [
          55.0,
          "pt6",
          true
        ],
        [
          44.0,
          "pt7",
          false
        ],
        [
          53.0,
          "pt8",
          true
        ]
      ],
      "keys": [
        "y",
        "id",
        "marker.enabled"
      ]
    },
    {
      "stack": "null",
      "name": "Personnage principal f\u00e9minin",
      "lineWidth": 2,
      "color": "#f76425",
      "type": "",
      "yAxis": "0",
      "visible": true,
      "dataLabels": {
        "enabled": true,
        "format": '{y}%'
      },
      "step": "",
      "data": [
        [
          7.0,
          "#f76425",
          "pt0",
          true
        ],
        [
          9.0,
          "#f76425",
          "pt1",
          false
        ],
        [
          7.0,
          "#f76425",
          "pt2",
          true
        ]
      ],
      "keys": [
        "y",
        "color",
        "id",
        "marker.enabled"
      ]
    },
    {
      "stack": "null",
      "name": "Personnage principal masculin",
      "lineWidth": 2,
      "color": "#605148",
      "type": "",
      "yAxis": "0",
      "visible": true,
      "dataLabels": {
        "enabled": false
      },
      "step": "",
      "data": [
        [
          26.0,
          "pt3",
          true,
          false
        ],
        [
          24.0,
          "pt4",
          false,
          false
        ],
        [
          25.0,
          "pt5",
          true,
          false
        ]
      ],
      "keys": [
        "y",
        "id",
        "marker.enabled",
        "dataLabels.enabled"
      ]
    },
   
    {
      "stack": "null",
      "name": "Autres",
      "lineWidth": 2,
      "color": "#382c2c",
      "type": "",
      "yAxis": "0",
      "visible": true,
      "dataLabels": {
        "enabled": false
      },
      "step": "",
      "data": [
        [
          12.0,
          "#382c2c",
          "pt9",
          true,
          false
        ],
        [
          23.0,
          "#382c2c",
          "pt10",
          false,
          false
        ],
        [
          15.0,
          "#382c2c",
          "pt11",
          true,
          false
        ]
      ],
      "keys": [
        "y",
        "color",
        "id",
        "marker.enabled",
        "dataLabels.enabled"
      ]
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

