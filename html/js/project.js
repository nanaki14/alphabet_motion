
$(function () {

  $(window).keyup(function (e) {

    var cName = Math.floor( Math.random() * 10 );
    var tn = Math.floor( Math.random() * 100 );
    var ln = Math.floor( Math.random() * 100 );


    //jsonファイル指定
    var path2 = new Array();
    path2[65] = "../json/data_A.json"
    path2[66] = "../json/data_B.json"
    path2[67] = "../json/data_C.json"
    path2[68] = "../json/data_D.json"
    path2[69] = "../json/data_E.json"
    path2[70] = "../json/data_F.json"
    path2[71] = "../json/data_G.json"
    path2[72] = "../json/data_H.json"
    path2[73] = "../json/data_I.json"
    path2[74] = "../json/data_J.json"
    path2[75] = "../json/data_K.json"
    path2[76] = "../json/data_L.json"
    path2[77] = "../json/data_M.json"
    path2[78] = "../json/data_N.json"
    path2[79] = "../json/data_O.json"
    path2[80] = "../json/data_P.json"
    path2[81] = "../json/data_Q.json"
    path2[82] = "../json/data_R.json"
    path2[83] = "../json/data_S.json"
    path2[84] = "../json/data_T.json"
    path2[85] = "../json/data_U.json"
    path2[86] = "../json/data_V.json"
    path2[87] = "../json/data_W.json"
    path2[88] = "../json/data_X.json"
    path2[89] = "../json/data_Y.json"
    path2[90] = "../json/data_Z.json"



    //div生成
    var d = document.createElement('div')
    $('#bodyMovin').append(d);


    var animData = {
      wrapper: d,
      animType: 'svg',
      loop: false,
      prerender: true,
      autoplay: false,
      path: path2[e.keyCode]
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


});