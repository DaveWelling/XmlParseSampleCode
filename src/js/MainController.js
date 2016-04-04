angular.module("app", []);
(function (module) {
    module.controller("MainController", controller);

    controller.$inject = ["$http"];

    function controller($http) {
        var promise = $http.get("ganttData.xml",
            {
                transformResponse: function (data) {
                    // convert the data to JSON and provide
                    // it to the success function below
                    var x2js = new X2JS();
                    var json = x2js.xml_str2json(data);
                    //return json;
                    var innerJson = x2js.xml_str2json(json["ajax-response"].contents.__cdata);
                    return innerJson;
                }
            }
            );
        promise.then(function(data) {
            console.log(data);
        }).catch(function(err) {
            console.log(err);
        });
    }
    
})(angular.module("app"));