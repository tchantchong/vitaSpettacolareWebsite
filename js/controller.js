app.controller("mainCtrl", function ($scope, $uibModal) {
  $scope.openMailModal = function() {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'partials/mail.html',
      controller: 'ModalInstanceCtrl',
      keyboard: false,
      backdrop: 'static',
    });
  }
});

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {
  $scope.close = function () {
    $uibModalInstance.dismiss('close');
  };
});