var cowgorithm = angular.module('cowgorithm', ['ngRedux'])
.config(($ngReduxProvider) => {
  window.cow ? $ngReduxProvider.provideStore(window.cow.store) : null;
});

cowgorithm.controller('cowController', cowController)

cowController.$inject = ['$scope', '$ngRedux'];

function cowController($scope, $ngRedux) {
    var vm = $scope;
    
    vm.selections = {
      color1: "#000000",
      color2: "#000000",
      modifier: ""
    }  

    vm.colors = [
      {id: "#000000", label: "black"}, 
      {id: "#ffffff", label: "white"},
      {id: "#ff0000", label: "red"},
      {id: "#00ff00", label: "green"},
      {id: "#0000ff", label: "blue"},
      {id: "#ff00ff", label: "magenta"},
      {id: "#fff000", label: "yellow"},
      {id: "#000fff", label: "cyan"},
    ];

    vm.modifier = "";

    vm.submitRequest = function(e){
      vm.addCattleRequest(vm.selections);
    }

    vm.mapStateToThis = function (state) {
      return {
          request: state.cattle.request,
      }
    }
  $ngRedux.connect(vm.mapStateToThis, {
      addCattleRequest
  })(vm)
};