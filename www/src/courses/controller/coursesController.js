var app = angular.module("users")
.controller('coursesController', function($scope, $compile, $location) {

   var arrowDownIcon = "fa fa-chevron-down";
   var arrowLeftIcon = "fa fa-chevron-left";

   $scope.courseList=[
    {'id' : 1,
     'name' : 'ICOM5016',
     'arrowIcon':arrowLeftIcon
    },
    {'id' : 2,
     'name' : 'ICOM4035',
     'arrowIcon':arrowLeftIcon
    },
    {'id' : 3,
     'name' : 'ICOM4075',
     'arrowIcon':arrowLeftIcon
    },
    {'id' : 4,
     'name' : 'ICOM4009',
     'arrowIcon':arrowLeftIcon
     }
   ];

    $scope.tutorsList=[
        {'teaches' : [1,2,3,4],
         'firstName' : 'Nelson',
         'lastName' : 'TripleA',
         'picture': 'img/anuel.jpg'
        },
        {'teaches' : [1,3],
         'firstName' : 'Tahiri',
         'lastName' : 'Siquitraque',
         'picture': 'img/gringa_2.jpg'
        },
        {'teaches' : [2,4],
         'firstName' : 'Israel',
         'lastName' : 'LaBejtia',
         'picture': 'img/random_guy.jpg'
        }
       ];

   $scope.route = function(path){
       $location.path(path);
   }

   $scope.toggleCourse = function(i){
    if($scope.courseList[i].arrowIcon.search(arrowDownIcon)>-1){
        $scope.courseList[i].arrowIcon = arrowLeftIcon;
    }
    else{
        $scope.courseList[i].arrowIcon = arrowDownIcon;
    }

   }

});
