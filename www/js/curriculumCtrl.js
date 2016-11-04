angular.module('CurriculumController',[])

.controller('curriculumCtrl',function($scope){
	$scope.works = [     
	{ date: '2016', description: 'Informatica' },      
	{ date: '2015-2016', description: 'Baile' },      
	{ date: '2011-2012', description: 'Desarrollador Web' } 
]; 
})