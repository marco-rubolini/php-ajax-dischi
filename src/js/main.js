$(document).ready(function(){

    var source   = $("#template-dischi").html();
    var template = Handlebars.compile(source);

    $.ajax({
        'url': '../versione-ajax/lista-dischi.php',
        'method': 'GET',
        'success': function(data){
            console.log(data);


            for (var i = 0; i < data.length; i++) {
                var dischi = data[i];

                var context = {
                    poster: dischi.poster,
                    title: dischi.title,
                    author: dischi.author,
                    genre: dischi.genre,
                    year: dischi.year,
                };

                var html = template(context);

                $('.container-dischi').append(html);

            }
        },
        'error': function(){
            console.log('Si è verificato un errore');
        }
    })

});
