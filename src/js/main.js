$(document).ready(function(){

    var source = $("#template-dischi").html();
    var template = Handlebars.compile(source);

    var source2 = $("#template-select-author").html();
    var template2 = Handlebars.compile(source2);

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

                var html2 = template2(context);

                $("#author-selected").append(html2);

            }
        },
        'error': function(){
            console.log('Si è verificato un errore');
        }
    });

    $('#author-selected').change(function(){
        var artistaSelezionato = $('#author-selected').val();

        $.ajax({
            'url': '../versione-ajax/lista-dischi.php',
            'method': 'GET',
            'data': {
                'author': artistaSelezionato
            },
            'success': function(data){

                $('.container.container-dischi').empty();

                for (var i = 0; i < data.length; i++) {
                    var disco = data[i];
                    console.log(disco);

                    var context = {
                        poster: disco.poster,
                        title: disco.title,
                        author: disco.author,
                        genre: disco.genre,
                        year: disco.year,
                    };

                    var html = template(context);

                    $('.container-dischi').append(html);
                }

            },
            'error': function(){
                console.log('Si è verificato un errore');
            }
        });

    });

});
