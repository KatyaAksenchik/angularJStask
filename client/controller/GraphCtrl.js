angular
    .module('app')
    .controller('GraphCtrl', ['$scope', 'weatherService', function ($scope, weatherService) {
        $scope.$watch("selectedItem.idcity", function () {
            weatherService.getWeatherMonth($scope.selectedItem.idcity).then(function (res) {
                var dataChart = res.list,
                    data = [];

                d3.selectAll("svg").remove();
                d3.selectAll(".tooltip").remove();

                var margin = {top: 20, right: 20, bottom: 100, left: 60},
                    width = 810 - margin.left - margin.right,
                    height = 400 - margin.top - margin.bottom;


                // var parseTime = d3.timeParse("%d-%b-%y""%d-%b-%y");

                var x = d3.scaleTime().range([0, width]);
                var y = d3.scaleLinear().range([height, 0]);


                var daytempline = d3.line()
                    .x(function (d) {
                        return x(d.date);
                    })
                    .y(function (d) {
                        return y(d.temp.day);
                    });

                var morntempline = d3.line()
                    .x(function (d) {
                        return x(d.date);
                    })
                    .y(function (d) {
                        return y(d.temp.morn);
                    });

                var nighttempline = d3.line()
                    .x(function (d) {
                        return x(d.date);
                    })
                    .y(function (d) {
                        return y(d.temp.night);
                    });

                function make_x_gridlines() {
                    return d3.axisBottom(x)
                        .ticks(5)
                }

                function make_y_gridlines() {
                    return d3.axisLeft(y)
                        .ticks(5)
                }

                var div = d3.select("body").append("div")
                    .attr("class", "tooltip")
                    .style("opacity", 0);

                var svg = d3.select("#chart").append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform",
                        "translate(" + margin.left + "," + margin.top + ")");


                dataChart.forEach(function (d) {
                    d.date = new Date(+d.dt * 1000);
                    d.temp.day = +d.temp.day - 273.15;
                    d.temp.morn = +d.temp.morn - 273.15;
                    d.temp.night = +d.temp.night - 273.15;

                });


                x.domain(d3.extent(dataChart, function (d) {
                    return d.date;
                }));

                y.domain([0, d3.max(dataChart, function (d) {
                    return d.temp.day;
                })]);

                svg.append("g")
                    .attr("class", "grid")
                    .attr("transform", "translate(0," + height + ")")
                    .call(make_x_gridlines()
                        .tickSize(-height)
                        .tickFormat("")
                    );

                svg.append("g")
                    .attr("class", "grid")
                    .call(make_y_gridlines()
                        .tickSize(-width)
                        .tickFormat("")
                    );

                svg.append("path")
                    .data([dataChart])
                    .attr("class", "line")
                    .attr("id", "day")
                    .attr("d", daytempline);

                svg.append("path")
                    .data([dataChart])
                    .attr("class", "line")
                    .attr("id", "morn-line")
                    .attr("d", morntempline);

                svg.append("path")
                    .data([dataChart])
                    .attr("class", "line")
                    .attr("id", "night-line")
                    .attr("d", nighttempline);


                svg.selectAll("dot")
                    .data(dataChart)
                    .enter().append("circle")
                    .attr("r", 4)
                    .style("fill", "#42A5B4")
                    .attr("cx", function (d) {
                        return x(d.date);
                    })
                    .attr("cy", function (d) {
                        return y(d.temp.day);
                    })
                    .on("mouseover", function (d) {
                        div.style("opacity", "0.9")
                            .style("background", "#42a5b4")
                            .text(d.temp.day.toFixed(1) + " °C, " + d.weather[0].description)
                            .style("left", (d3.event.pageX) + "px")
                            .style("top", (d3.event.pageY - 30) + "px");
                    })
                    .on("mouseout", mouseout);


                svg.selectAll("dot")
                    .data(dataChart)
                    .enter().append("circle")
                    .attr("r", 4)
                    .style("fill", "#4D7AB6")
                    .attr("cx", function (d) {
                        return x(d.date);
                    })
                    .attr("cy", function (d) {
                        return y(d.temp.night);
                    })
                    .on("mouseover", function (d) {
                        div.style("opacity", "0.9")
                            .style("background", "#4d7ab6")
                            .text(d.temp.night.toFixed(1) + " °C")
                            .style("left", (d3.event.pageX) + "px")
                            .style("top", (d3.event.pageY - 30) + "px");
                    })
                    .on("mouseout", mouseout);


                svg.selectAll("dot")
                    .data(dataChart)
                    .enter().append("circle")
                    .attr("r", 4)
                    .style("fill", "#F88847")
                    .attr("cx", function (d) {
                        return x(d.date);
                    })
                    .attr("cy", function (d) {
                        return y(d.temp.morn);
                    })
                    .on("mouseover", function (d) {
                        div.style("opacity", "0.9")
                            .style("background", "#f89e60")
                            .text(d.temp.morn.toFixed(1) + " °C")
                            .style("left", (d3.event.pageX) + "px")
                            .style("top", (d3.event.pageY - 30) + "px");
                    })
                    .on("mouseout", mouseout);

                function mouseout() {
                    div.style("opacity", "0");
                }


                svg.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x));


                svg.append("text")
                    .attr("transform",
                        "translate(" + (width / 2) + " ," +
                        (height + margin.top + 30) + ")")
                    .style("text-anchor", "middle")
                    .text("Date:");

                svg.append("g")
                    .call(d3.axisLeft(y));

                svg.append("text")
                    .attr("transform", "rotate(-90)")
                    .attr("y", 0 - margin.left)
                    .attr("x", 0 - (height / 2))
                    .attr("dy", "1em")
                    .style("text-anchor", "middle")
                    .text("Temperature °C");


                var yOffset = 15;

                function initLegend(element, color, text) {
                    svg.append("text")
                        .attr("x", 20)
                        .attr("y", height + margin.top + yOffset)
                        .attr("class", "legend")
                        .on("click", function () {
                            var dayLine = d3.select(element);
                            dayLine.classed("activated", !dayLine.classed("activated"));
                        })
                        .text(text + " temperature");

                    svg.append("rect")
                        .attr("class", "legend-square")
                        .attr("x", 0)
                        .attr("y", height + margin.top + yOffset - 9)
                        .style("fill", color);

                    yOffset += 15;
                }

                initLegend("#day", "#70b2b4", "Day");
                initLegend("#morn-line", "#f88c3d", "Morning");
                initLegend("#night-line", "#5366b6", "Night");

            })
        })

    }]);
