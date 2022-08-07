// ------------------漢堡

$('.ham').click(function(){
    $('.top_nav').slideToggle()
})


// --------------index banner 輪播

$(function(){
    let divWidth = $('.banner').width()
    let imgCount = $('#banner_img li').length

    for(let i = 0; i < imgCount; i++){
        $('#banner_btn').append('<li></li>')
    }
    $('#banner_btn li:first').addClass('clicked')

    $('#banner_img li').width(divWidth)  //li的寬
    $('#banner_img').width(divWidth * imgCount) //ul的寬

    let index = 0
    let timer = setInterval(moveToNext, 3000)

    $('#banner_btn li').click(function(){
        clearInterval(timer)
        index = $(this).index()

        $('#banner_img').animate({
            left: divWidth * index * -1
        })
        $(this).addClass('clicked')
        $('#banner_btn li').not(this).removeClass('clicked')

        timer = setInterval(moveToNext, 3000)
    })

    function moveToNext(){
        if(index < imgCount -1){
            index = index + 1
        }else{
            index = 0
        }
        $('#banner_img').animate({
            left: divWidth * index * -1
        })
        $(`#banner_btn li:eq(${index})`).addClass('clicked')
        $(`#banner_btn li`).not(`:eq(${index})`).removeClass('clicked')
    }
});


// design 畫布移動
$('#skin img').draggable({
    containment: 'parent',
})

