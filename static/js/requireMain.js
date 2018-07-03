'use strict';

(function(win) {
    //配置baseUrl

    /*
     * 文件依赖
     */
    var config = {
        baseUrl: './', 
        waitSeconds: 0,
        paths: {
            'jquery': 'js/jquery-3.2.1.min',
            'angular': 'js/angular.min',
            'angularAnimate': 'js/angular-animate.min',
            'angularSanitize': 'js/angular-sanitize.min',
            'angularFileUpload':'js/angular-file-upload.min',
              
            'angularUiRouter': 'js/angular-ui-router.min',
            'router': 'script/router',
        
            'bootstrap': 'js/bootstrap.min',
            'uiBootstrapTpls': 'js/ui-bootstrap-tpls.min',
            'jquery-ui': 'js/jquery-ui.min',

            'angularZhcsDirective': 'script/directive/zhcs.angular.directiveUtils-1.0.0',
            'angularZhcsService': 'script/service/zhcs.angular.serviceUtils-1.0.0',
            'slimscroll': 'js/jquery.slimscroll',
            'appService': 'script/service/app.service',

            'app': 'script/app',  
            'appCtrl': 'script/controller/app.controller',
            'examCtrl': 'script/controller/exam.controller',
            'addTestCtrl': 'script/controller/addTest.controller'
        },

        shim: { 
            'angular': {
                exports: 'angular',
                deps: ['jquery']
            },
            'angularAnimate': {
                deps: ['angular']
            },
            'angularSanitize': {
                deps: ['angular']
            },   
            'slimscroll': {
                deps: ['jquery']
            },
              
            'angularUiRouter': {
                deps: ['angular'] 
            },
            'angularFileUpload':{
                deps: ['angular']
            },
            'angularZhcsDirective': {
                deps: ['angular', 'jquery', 'jquery-ui', 'slimscroll']
            },
            'bootstrap': {
                deps: ['jquery']
            },
            'uiBootstrapTpls': {
                deps: ['angular'] 
            },
            'jquery-ui': {
                deps: ['jquery']
            }
        }
    };
    require.config(config);
    require(['jquery', 'angular', 'app',  'router', 'appService', 'appCtrl','examCtrl','addTestCtrl'], function($, angular) {
    	angular.bootstrap(document, ['app']); //动态方式启动angular
    });
})(window);
