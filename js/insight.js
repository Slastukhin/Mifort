am5.ready(function() {

   // Create root element
   // https://www.amcharts.com/docs/v5/getting-started/#Root_element
   var root = am5.Root.new("chartdiv");
   
   // Set themes
   // https://www.amcharts.com/docs/v5/concepts/themes/
   root.setThemes([
     am5themes_Animated.new(root)
   ]);
   
   // Create the map chart
   // https://www.amcharts.com/docs/v5/charts/map-chart/
   var chart = root.container.children.push(
     am5map.MapChart.new(root, {
       panX: "rotateX",
       panY: "rotateY",
       projection: am5map.geoMercator()
     })
   );
   
   // Create series for background fill
   // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
   var backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
   backgroundSeries.mapPolygons.template.setAll({
     fill: root.interfaceColors.get("alternativeBackground"),
     fillOpacity: 0,
     strokeOpacity: 0
   });
   // Add background polygo
   // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
   backgroundSeries.data.push({
     geometry: am5map.getGeoRectangle(90, 180, -90, -180)
   });
   
   // Create main polygon series for countries
   // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
   var polygonSeries = chart.series.push(
     am5map.MapPolygonSeries.new(root, {
       geoJSON: am5geodata_worldLow
     })
   );
   
   polygonSeries.mapPolygons.template.setAll({
     fill: root.interfaceColors.get("alternativeBackground"),
     fillOpacity: 0.15,
     strokeWidth: 0.5,
     stroke: root.interfaceColors.get("background")
   });
   
   // Create polygon series for circles
   // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
   var circleTemplate = am5.Template.new({
     tooltipText: "{name}: {value}"
   });
   
   var bubbleSeries = chart.series.push(
     am5map.MapPointSeries.new(root, {
       calculateAggregates: true,
       valueField: "value",
       polygonIdField: "id"
     })
   );
   
   bubbleSeries.bullets.push(function () {
     return am5.Bullet.new(root, {
       sprite: am5.Circle.new(root, {
         radius: 10,
         templateField: "circleTemplate"
       }, circleTemplate)
     });
   });
   
   bubbleSeries.set("heatRules", [{
     target: circleTemplate,
     min: 3,
     max: 30,
     key: "radius",
     dataField: "value"
   }]);
   
   var colors = am5.ColorSet.new(root, {});
   
   bubbleSeries.data.setAll([
     {
       id: "AF",
       name: "Afghanistan",
       value: 32358260,
       circleTemplate: { fill: colors.getIndex(0) }
     },
     {
       id: "AL",
       name: "Albania",
       value: 3215988,
       circleTemplate: { fill: colors.getIndex(8) }
     },
     {
       id: "DZ",
       name: "Algeria",
       value: 35980193,
       circleTemplate: { fill: colors.getIndex(2) }
     },
     {
       id: "AO",
       name: "Angola",
       value: 19618432,
       circleTemplate: { fill: colors.getIndex(2) }
     },
     {
       id: "AR",
       name: "Argentina",
       value: 40764561,
       circleTemplate: { fill: colors.getIndex(3) }
     },
     {
       id: "AM",
       name: "Armenia",
       value: 3100236,
       circleTemplate: { fill: colors.getIndex(8) }
     },
     {
       id: "AU",
       name: "Australia",
       value: 22605732,
       circleTemplate: { fill: colors.getIndex(8) }
     },
     {
       id: "AT",
       name: "Austria",
       value: 8413429,
       circleTemplate: { fill: colors.getIndex(8) }
     },
     {
       id: "AZ",
       name: "Azerbaijan",
       value: 9306023,
       circleTemplate: { fill: colors.getIndex(8) }
     },
     {
       id: "BH",
       name: "Bahrain",
       value: 1323535,
       circleTemplate: { fill: colors.getIndex(0) }
     },
     {
       id: "BD",
       name: "Bangladesh",
       value: 150493658,
       circleTemplate: { fill: colors.getIndex(0) }
     },
     {
       id: "BY",
       name: "Belarus",
       value: 9559441,
       circleTemplate: { fill: colors.getIndex(8) }
     },
     {
       id: "BE",
       name: "Belgium",
       value: 10754056,
       circleTemplate: { fill: colors.getIndex(8) }
     },
     {
       id: "BJ",
       name: "Benin",
       value: 9099922,
       circleTemplate: { fill: colors.getIndex(2) }
     },
     {
       id: "BT",
       name: "Bhutan",
       value: 738267,
       circleTemplate: { fill: colors.getIndex(0) }
     },
     {
       id: "BO",
       name: "Bolivia",
       value: 10088108,
       circleTemplate: { fill: colors.getIndex(3) }
     },
     {
       id: "BA",
       name: "Bosnia and Herzegovina",
       value: 3752228,
       circleTemplate: { fill: colors.getIndex(8) }
     },
     {
       id: "BW",
       name: "Botswana",
       value: 2030738,
       circleTemplate: { fill: colors.getIndex(2) }
     },
     {
       id: "BR",
       name: "Brazil",
       value: 196655014,
       circleTemplate: { fill: colors.getIndex(3) }
     },
     {
       id: "BN",
       name: "Brunei",
       value: 405938,
       circleTemplate: { fill: colors.getIndex(0) }
     },
     {
       id: "BG",
       name: "Bulgaria",
       value: 7446135,
       circleTemplate: { fill: colors.getIndex(8) }
     },
     {
       id: "BF",
       name: "Burkina Faso",
       value: 16967845,
       circleTemplate: { fill: colors.getIndex(2) }
     },
     {
       id: "BI",
       name: "Burundi",
       value: 8575172,
       circleTemplate: { fill: colors.getIndex(2) }
     },
     {
       id: "KH",
       name: "Cambodia",
       value: 14305183,
       circleTemplate: { fill: colors.getIndex(0) }
     },
     {
       id: "CM",
       name: "Cameroon",
       value: 20030362,
       circleTemplate: { fill: colors.getIndex(2) }
     },
     {
       id: "CA",
       name: "Canada",
       value: 34349561,
       circleTemplate: { fill: colors.getIndex(4) }
     },
     {
       id: "CV",
       name: "Cape Verde",
       value: 500585,
       circleTemplate: { fill: colors.getIndex(2) }
     },
     {
       id: "CF",
       name: "Central African Rep.",
       value: 4486837,
       circleTemplate: { fill: colors.getIndex(2) }
     },
     {
       id: "TD",
       name: "Chad",
       value: 11525496,
       circleTemplate: { fill: colors.getIndex(2) }
     },
     {
       id: "CL",
       name: "Chile",
       value: 17269525,
       circleTemplate: { fill: colors.getIndex(3) }
     },
     {
       id: "CN",
       name: "China",
       value: 1347565324,
       circleTemplate: { fill: colors.getIndex(0) }
     },
     {
       id: "CO",
       name: "Colombia",
       value: 46927125,
       circleTemplate: { fill: colors.getIndex(3) }
     },
     {
       id: "KM",
       name: "Comoros",
       value: 753943,
       circleTemplate: { fill: colors.getIndex(2) }
     },
   ]);
   
   // Add globe/map switch
   var cont = chart.children.push(am5.Container.new(root, {
     layout: root.horizontalLayout,
     x: 20,
     y: 40
   }));
   
   cont.children.push(am5.Label.new(root, {
     centerY: am5.p50,
     text: "Map"
   }));
   
   var switchButton = cont.children.push(
     am5.Button.new(root, {
       themeTags: ["switch"],
       centerY: am5.p50,
       icon: am5.Circle.new(root, {
         themeTags: ["icon"]
       })
     })
   );
   
   switchButton.on("active", function () {
     if (!switchButton.get("active")) {
       chart.set("projection", am5map.geoMercator());
       backgroundSeries.mapPolygons.template.set("fillOpacity", 0);
     } else {
       chart.set("projection", am5map.geoOrthographic());
       backgroundSeries.mapPolygons.template.set("fillOpacity", 0.1);
     }
   });
   
   cont.children.push(
     am5.Label.new(root, {
       centerY: am5.p50,
       text: "Globe"
     })
   );
   
   // Make stuff animate on load
   chart.appear(1000, 100);
   
}); // end am5.ready()
   

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container', {
   chart: {
       type: 'line'
   },
   title: {
      text: 'Analitycs'
   },
   xAxis: {
       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
   },
   plotOptions: {
       line: {
           dataLabels: {
               enabled: true
           },
           enableMouseTracking: false
       }
   },
   series: [{
       name: 'Reggane',
       data: [50, 54, 58, 62, 68, 75, 75, 73, 68, 64, 60, 55,]
   },]
});


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const menuBtn = document.querySelector('.header__btn');
const menu = document.querySelector('.column-menu');
const body = document.querySelector('body')

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('column-menu__active');
    menuBtn.classList.toggle('header__btn_active');
    body.classList.toggle('lock');
})


$(function() {
  let header = $('.header');
   
  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
     header.addClass('header_fixed');
    } else {
     header.removeClass('header_fixed');
    }
  });
});
 