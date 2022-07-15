angular
  .module("DemoComponents", [])
  // .component("demoswitch", {
  //   templateUrl: "DemoComponents/demoswitch.html",
  //   transclude: true,
  //   bindings: {
  //     opened: "=",
  //     closed: "=",
  //   },
  //   controller: function ($scope) {
  //     $scope.toggle = () => {
  //       if (this.closed) return;
  //       console.log(this);
  //       this.opened = !this.opened;
  //     };
  //   },
  // })
  .component("selectdrop", {
    templateUrl: "DemoComponents/selectdrop.html",
    transclude: true,
    bindings: {
      url: "@",
    },
    controller: function ($scope, $http) {
      $scope.list = [];
      $scope.selected = "1";
      const fetchData = () => {
        $http.get(this.url).then((res) => {
          this.list = res.data;
          console.log(this);
        });
      };
      this.$onInit = fetchData;
    },
  })
  .component("demoswitch", {
    templateUrl: "DemoComponents/demoswitch.html",
    require: {
      x:'ngModel'
    },
    controller: function($scope) { 
      this.$onInit = function () { 
        this.x.$render = function () { 
          $scope.switch=this.$modelValue
        }
      }
      console.log('true')
      $scope.send2parent = (value) => { 
        this.x.$setViewValue(value)
      }
    }
  });
