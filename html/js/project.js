
$(function () {

  $(window).keyup(function (e) {

    var cName = Math.floor( Math.random() * 10 );
    var tn = Math.floor( Math.random() * 100 );
    var ln = Math.floor( Math.random() * 100 );


    //jsonファイル指定
    var path = new Array();
    path[65] = "./json/data_A.json"
    path[66] = "./json/data_B.json"
    path[67] = "./json/data_C.json"
    path[68] = "./json/data_D.json"
    path[69] = "./json/data_E.json"
    path[70] = "./json/data_F.json"
    path[71] = "./json/data_G.json"
    path[72] = "./json/data_H.json"
    path[73] = "./json/data_I.json"
    path[74] = "./json/data_J.json"
    path[75] = "./json/data_K.json"
    path[76] = "./json/data_L.json"
    path[77] = "./json/data_M.json"
    path[78] = "./json/data_N.json"
    path[79] = "./json/data_O.json"
    path[80] = "./json/data_P.json"
    path[81] = "./json/data_Q.json"
    path[82] = "./json/data_R.json"
    path[83] = "./json/data_S.json"
    path[84] = "./json/data_T.json"
    path[85] = "./json/data_U.json"
    path[86] = "./json/data_V.json"
    path[87] = "./json/data_W.json"
    path[88] = "./json/data_X.json"
    path[89] = "./json/data_Y.json"
    path[90] = "./json/data_Z.json"



    //div生成
    var d = document.createElement('div')
    $('#bodyMovin').append(d);


    var animData = {
      wrapper: d,
      animType: 'svg',
      loop: false,
      prerender: true,
      autoplay: false,
      path: path[e.keyCode]
    };

    var anim = bodymovin.loadAnimation(animData);


    $(d).addClass('num' + cName);
    $(d).css({
      top: tn+'%',
      left: ln+'%'
    });

    anim.play();
    anim.addEventListener('complete',function () {
      $(d).remove();
    })

  });

  $('.js-btn').click(function () {
    $('input').focus();
  });


});