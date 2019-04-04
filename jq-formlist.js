$(function(){
    //this is the ready

    $('button').on('click', function(){
        //$(this)  this is the button
        let tr = `<tr><td>#0</td><td>#1</td><td>#2</td></tr>`
        $('input').each(function(i, e){
            tr = tr.replace('#'+i, $(e).val())
        })
        $('table tbody').append(tr)
    })

    //arrow functions keeps parent scope
    //$('input').each((i) => $(this).on('keydown', i == 2 ?  onlyDigits : noDigits))
    $('input').each(function(i) {$(this).on('keydown', i == 2 ?  onlyDigits : noDigits)})

})