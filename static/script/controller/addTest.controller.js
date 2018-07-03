define(['app'], function(app) {
    app.controller('addExamCtrl', ['$rootScope', '$scope', '$http','$interval','FileUploader','dialogWindow', function($rootScope, $scope, $http,$interval,FileUploader,dialogWindow) {
        $scope.examSize = {
            height:'100%',
            size: '5px'
        };
        var questionNum  = 20;  //题目数量
        $scope.allQuestion = [];  //题目数组
        $scope.currentQuestion = 0;   //当前处理的题目序号

        $scope.changeQuestion = function (index) {
            $scope.currentQuestion = index
        };
        $scope.choose = function (answer) {
            answer.choose = !answer.choose;
        };

        $scope.addQuestionPart = function (hasSmallImg) {
            $scope.allQuestion[$scope.currentQuestion].question.push({
                hasSmallImg:hasSmallImg
            })
        };

        function init() {
            for(var i = 0;i < questionNum;i++){
                $scope.allQuestion.push({
                    question:[],
                    hasImage:false,
                    img:'',
                    answerList : []
                });
            }
        }
        init();

        //上传图片
        var uploader = $scope.uploader = new FileUploader({
            url: 'xxxxxxx'
        });
        // FILTERS
        // a sync filter
        uploader.filters.push({
            name: 'syncFilter',
            fn: function (item /*{File|FileLikeObject}*/, options) {
                console.log('syncFilter');
                return this.queue.length < 10;
            }
        });
        // an async filter
        uploader.filters.push({
            name: 'asyncFilter',
            fn: function (item /*{File|FileLikeObject}*/, options, deferred) {
                console.log('asyncFilter');
                setTimeout(deferred.resolve, 1e3);
            }
        });
        // CALLBACKS
        uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function (fileItem) {
            if(fileItem.file.size == 0){
                // dialogWindow.confirm('提示','文件:'+fileItem.file.name+'为空，不能上传!');
                fileItem.remove();
            }
            if(fileItem.file.size > 10000000){
                // dialogWindow.confirm('提示','文件:'+fileItem.file.name+'过大，不能上传!');
                fileItem.remove();
            }
            console.info('onAfterAddingFile', fileItem);
            var reader = new FileReader();
            reader.addEventListener("load",function (e) {
                //文件加载完成,更新angular绑定
                $scope.$apply(function () {
                    fileItem.showImgResult = e.target.result;
                },false)
            });
            reader.readAsDataURL(fileItem._file);
        };
        uploader.onAfterAddingAll = function (addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function (item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function (fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function (progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function (fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function (fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function (fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function (fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function () {
            console.info('onCompleteAll');
        };
        $scope.removeImg = function (item) {
            dialogWindow.confirm('提示','确认删除?',function () {
                item.remove();
            })
        };
    }])
});