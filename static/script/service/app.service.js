define(['app'], function (app) {
    app.service('dialogWindow', ['$uibModal', function ($uibModal) {
        var dialog = {
            confirm: function (title, msg, closeCallback, dismissCallback) {
                closeCallback = typeof closeCallback == 'function' ? closeCallback : function () {
                };
                dismissCallback = typeof dismissCallback == 'function' ? dismissCallback : function () {
                };
                $uibModal.open({
                    templateUrl: 'partials/dialogWindow/confirm.html',
                    controller: 'dialogServiceConfirmCtrl',
                    size: 'sm',
                    backdrop: 'static',
                    resolve: {
                        title: function () {
                            return title;
                        },
                        msg: function () {
                            return msg;
                        }
                    }
                }).result.then(closeCallback, dismissCallback);
            },
            inputConfirm: function (title, msg, closeCallback, dismissCallback) {
                closeCallback = typeof closeCallback == 'function' ? closeCallback : function () {
                };
                dismissCallback = typeof dismissCallback == 'function' ? dismissCallback : function () {
                };
                $uibModal.open({
                    templateUrl: 'partials/dialogWindow/inputConfirm.html',
                    controller: 'dialogInputConfirmCtrl',
                    size: 'sm',
                    backdrop: 'static',
                    resolve: {
                        title: function () {
                            return title;
                        },
                        msg: function () {
                            return msg;
                        }
                    }
                }).result.then(closeCallback, dismissCallback);
            }
        };
        return dialog;
    }]);
    app.controller('dialogServiceConfirmCtrl', ['$scope', '$uibModalInstance', 'title', 'msg', function ($scope, $uibModalInstance, title, msg) {
        $scope.title = title ? title : '确认框';
        $scope.msg = msg;

        $scope.ok = function () {
            $uibModalInstance.close();
        };
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);
    app.controller('dialogInputConfirmCtrl', ['$scope', '$uibModalInstance', 'title', 'msg', function ($scope, $uibModalInstance, title, msg) {
        $scope.title = title ? title : '确认框';
        $scope.msg = msg;
        $scope.data = '';

        $scope.ok = function () {
            $uibModalInstance.close($scope.data);
        };
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);
});
