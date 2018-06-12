define(['app'], function (app) {
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when("", "/main").otherwise("");
        $stateProvider
            .state('main', {
                url: '/main',
                "templateUrl": "partials/mainPage/main.html"
            })
            .state('exam', {
                url: '/exam',
                "templateUrl": "partials/testPage/exam.html"
            })
            .state('addExam', {
                url: '/addExam',
                "templateUrl": "partials/addTest/exam.html"
            })
  }]);
});
