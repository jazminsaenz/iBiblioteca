angular.module('starter', ['ionic','MainController','AuthorController','CurriculumController','BibliotecaController','BookController'])

.config(function($urlRouterProvider,$stateProvider){

      $stateProvider  
      .state('main',{
        url:'/main',
        templateUrl:'templates/main.html',
        controller:'HomeCtrl'
      })
      .state('acceso',{
        url:'/acceso',
        templateUrl:'templates/ibiblioteca.html',
        controller:'ibibliotecaCtrl'
      })
      .state('consulta',{
        url:'/consulta',
        templateUrl:'templates/author.html',
        controller:'authorCtrl'
      })
      .state('curriculum',{
        url:'/curriculum',
        templateUrl:'templates/curriculum.html',
        controller:'curriculumCtrl'
      })
      .state('bookDetail',{
        url:'/book/:id',
        templateUrl:'templates/book.html',
        controller:'bookCtrl'
      })

      $urlRouterProvider.otherwise('main');
})
.factory('bookService', function() {     
var books = [       
      { title: 'Nadie como Tu', year: '2001', author: 'J.A Redmerski', isbn: '843992688X', editorial: 'Planeta', cover: 'img/libro3.jpg' }, 
      { title: 'La  Viuda', year: '2005', author: 'Fiona Barton', isbn: '0936388110', editorial: 'Planeta', cover: 'img/viuda.jpg' },       
      { title: 'Destroza este diario', year: '2011', author: 'Keri Smith', isbn: '0844273619', editorial: 'Anaya', cover: 'img/diario.JPG' },       
      { title: 'Alguien Como Tu ', year: '2012', author: 'Elisabet Benavent', isbn: '847039360X', editorial: 'Suma', cover: 'img/imagen6.jpg'},       
      { title: '50 Sombras de Grey', year: '2010', author: 'E.L. James', isbn: '8437624045', editorial: 'Zafiro', cover: 'img/grey.jpg' }  
       ];     
  return {         
    getBooks: function() {             
      return books;         
    },         
    getBook: function(id) {             
      return books[id];         
    },     
  } 
});

