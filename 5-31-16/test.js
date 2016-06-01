var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope) {
	$scope.name = "Mark";
	$scope.experiences = [
				{
				    language: 'C',
				    years: '3',
				    proficiency: 'knowledgable'
				},
				{
				    language: 'html',
				    years: '1',
				    proficiency: 'intermediate'
				},
				{
				    language: 'javascript',
				    years: '1',
				    proficiency: 'intermediate'
				}
		]
		     
				
});
