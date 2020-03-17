google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable([
        ['Country', 'Confirmed Cases', 'Deaths'],
        // ['China', 80813, 3073],
        ['Republic of Korea',6767,44],
        ['Japan',408,6],
        ['Singapore',130,0],
        ['Malaysia',83,0],
        ['Australia',62,2],
        ['Vietnam',17,0],
        ['New Zealand',5,0],
        ['Philippines',5,1],
        ['Cambodia',1,0],
        ['Italy',4636,197],
        ['Germany',639,0],
        ['France',613,9],
        ['Spain',374,5],
        ['Switzerland',209,1],
        ['The United Kingdom',167,1],
        ['Sweden',137,0],
        ['Netherlands',128,1],
        ['Norway',113,0],
        ['Belgium',109,0],
        ['Austria',66,0],
        ['Iceland',45,0],
        ['Greece',32,0],
        ['San Marino',24,0],
        ['Denmark',23,0],
        ['Finland',19,0],
        ['Israel',19,0],
        ['Ireland',18,0],
        ['Portugal',13,0],
        ['Czechia',12,0],
        ['Croatia',11,0],
        ['Estonia',10,0],
        ['Azerbaijan',9,0],
        ['Georgia',9,0],
        ['Slovenia',9,0],
        ['Romania',7,0],
        ['Russia',7,0],
        ['Belarus',6,0],
        ['Poland',5,0],
        ['Hungary',5,0],
        ['North Macedonia',3,0],
        ['Bosnia and Herzegovina',2,0],
        ['Luxembourg',2,0],
        ['Andorra',1,0],
        ['Armenia',1,0],
        ['Holy See',1,0],
        ['Latvia',1,0],
        ['Liechtenstein',1,0],
        ['Lithuania',1,0],
        ['Monaco',1,0],
        ['Serbia',1,0],
        ['Slovakia',1,0],
        ['Ukraine',1,0],
        ['Gibraltar',1,0],
        ['Thailand',48,1],
        ['India',31,0],
        ['Indonesia',2,0],
        ['Bhutan',1,0],
        ['Nepal',1,0],
        ['Sri Lanka',1,0],
        ['Iran',4747,124],
        ['Kuwait',58,0],
        ['Bahrain',49,0],
        ['United Arab Emirates',45,0],
        ['Iraq',44,4],
        ['Lebanon',22,0],
        ['Oman',16,0],
        ['Qatar',11,0],
        ['Saudi Arabia',8,0],
        ['Pakistan',5,0],
        ['Egypt',3,0],
        ['Morocco',2,0],
        ['Afghanistan',1,0],
        ['Jordan',1,0],
        ['Tunisia',1,0],
        ['Occupied Palestinian Territory',16,0],
        ['United States of America',213,11],
        ['Canada',51,0],
        ['Ecuador',14,0],
        ['Brazil',13,0],
        ['Chile',5,0],
        ['Mexico',5,0],
        ['Argentina',2,0],
        ['Colombia',1,0],
        ['Dominican Republic',1,0],
        ['Peru',1,0],
        ['Saint Martin',2,0],
        ['Saint Barthelemy',1,0],
        ['Algeria',17,0],
        ['Senegal',4,0],
        ['Cameroon',2,0],
        ['Nigeria',1,0],
        ['South Africa',1,0],
        ['Togo',1,0]
      ]);

      // var options = {
      //  colorAxis: {colors: ['green', 'red']}
      // };

      for (var i = 0; i < data.getNumberOfRows(); i++) {
        var countryValue = data.getValue(i, 1);
        data.setValue(i, 1, i);
        data.setFormattedValue(i, 1, countryValue + '%');
      }

      var options = {
        colorAxis: {
          colors: ['red', 'green', 'orange', 'blue', 'yellow'],
          values: [0, 1, 2, 3, 4]
        },
        legend: 'none'
      };

      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

      chart.draw(data, options);
    }