(function($) {
    $(function() {

        var enableBtn = function() {
        $('.btn').attr("disabled", false);
        }
        $('.btn').click(function (){
            var that = this;
            $('.btn').attr("disabled", true);
            setTimeout(function() { enableBtn(that) }, 1500);
        });
        $('.main').click(function() {
            $('.maincontainer').css('display', 'block');
                if ($(window).width() <1400) {
                    $('.maincontainer').transition({
                    left: '0',
                    opacity: '1'
                    }, 1500);
                    $('.aboutcontainer, .workcontainer, .educontainer, .langcontainer, .skillscontainer').transition({
                    left: '125%'
                    }, 1500);
                    $('.aboutcontainer, .workcontainer, .educontainer, .langcontainer, .skillscontainer').transition({
                opacity: "0"
            }, 200, function() { //use callback here
                $('.aboutcontainer, .workcontainer, .educontainer, .langcontainer, .skillscontainer').css('display', 'none');
            });
                }
                else {
                    $('.maincontainer').transition({
                    left: '30%',
                    width: '70%',
                    opacity: '1'
                    }, 1500);
                    $('.aboutcontainer, .workcontainer, .educontainer, .langcontainer, .skillscontainer').transition({
                    left: '125%'
                    }, 1500);
                    $('.aboutcontainer, .workcontainer, .educontainer, .langcontainer, .skillscontainer').transition({
                opacity: "0"
            }, 200, function() { //use callback here
                $('.aboutcontainer, .workcontainer, .educontainer, .langcontainer, .skillscontainer').css('display', 'none');
            });
                }
        });
        $('.about').click(function() {
            $('.aboutcontainer').css('display', 'block');
            if ($(window).width() <1400) {
                $('.maincontainer').transition({
                left: '-100%',
            }, 1500);
            $('.aboutcontainer').transition({
                left: '0',
                opacity: '1'
            }, 1500);
            $('.workcontainer, .educontainer, .langcontainer, .skillscontainer').transition({
                left: '125%'
            }, 1500);
            $('.maincontainer, .workcontainer, .educontainer, .langcontainer, .skillscontainer').transition({
                opacity: "0"
            }, 200, function() { //use callback here
                $('.maincontainer, .workcontainer, .educontainer, .langcontainer, .skillscontainer').css('display', 'none');
            });
        }
        else {
            $('.maincontainer').transition({
                left: '-50%',
            }, 1500);
            $('.aboutcontainer').transition({
                left: '30%',
                opacity: '1'
            }, 1500);
            $('.workcontainer, .educontainer, .langcontainer, .skillscontainer').transition({
                left: '125%'
            }, 1500);
            $('.maincontainer, .workcontainer, .educontainer, .langcontainer, .skillscontainer').transition({
                opacity: "0"
            }, 200, function() { //use callback here
                $('.maincontainer, .workcontainer, .educontainer, .langcontainer, .skillscontainer').css('display', 'none');
            });
}
            
        });
        $('.experience').click(function() {
            $('.workcontainer').css('display', 'block');
if ($(window).width() <1400) {
$('.maincontainer, .aboutcontainer').transition({
                left: '-100%'
            }, 1500);
            $('.workcontainer').transition({
                left: '0',
                opacity: '1'
            }, 1500);
            $('.educontainer, .langcontainer, .skillscontainer').transition({
                left: '125%'
            }, 1500);
            $('.maincontainer, .aboutcontainer, .educontainer, .langcontainer, .skillscontainer').transition({
                opacity: "0"
            }, 200, function() { //use callback here
                $('.maincontainer, .aboutcontainer, .educontainer, .langcontainer, .skillscontainer').css('display', 'none');
            });
    }
else {
$('.maincontainer, .aboutcontainer').transition({
                left: '-50%'
            }, 1500);
            $('.workcontainer').transition({
                left: '30%',
                opacity: '1'
            }, 1500);
            $('.educontainer, .langcontainer, .skillscontainer').transition({
                left: '125%'
            }, 1500);
            $('.maincontainer, .aboutcontainer, .educontainer, .langcontainer, .skillscontainer').transition({
                opacity: "0"
            }, 200, function() { //use callback here
                $('.maincontainer, .aboutcontainer, .educontainer, .langcontainer, .skillscontainer').css('display', 'none');
            });
        
}
         });   
        $('.educationbtn').click(function() {
            $('.educontainer').css('display', 'block');
            if ($(window).width() <1400) {
$('.maincontainer, .aboutcontainer, .workcontainer').transition({
                left: '-100%'
            }, 1500);
            $('.educontainer').transition({
                left: '0',
                opacity: '1'
            }, 1500);
            $('.langcontainer, .skillscontainer').transition({
                left: '125%'
            }, 1500);
            $('.maincontainer, .aboutcontainer, .workcontainer, .langcontainer, .skillscontainer').transition({
                opacity: "0"
            }, 200, function() { //use callback here
                $('.maincontainer, .aboutcontainer, .workcontainer, .langcontainer, .skillscontainer').css('display', 'none');
            });

}
else {
$('.maincontainer, .aboutcontainer, .workcontainer').transition({
                left: '-50%'
            }, 1500);
            $('.educontainer').transition({
                left: '30%',
                opacity: '1'
            }, 1500);
            $('.langcontainer, .skillscontainer').transition({
                left: '125%'
            }, 1500);
            $('.maincontainer, .aboutcontainer, .workcontainer, .langcontainer, .skillscontainer').transition({
                opacity: "0"
            }, 200, function() { //use callback here
                $('.maincontainer, .aboutcontainer, .workcontainer, .langcontainer, .skillscontainer').css('display', 'none');
            });
        
}
       });     
        $('.languages').click(function() {
            $('.langcontainer').css('display', 'block');
if ($(window).width() <1400) {
  $('.maincontainer, .aboutcontainer, .workcontainer, .educontainer').transition({
                left: '-100%'
            }, 1500);
            $('.langcontainer').transition({
                left: '0',
                opacity: '1'
            }, 1500);
            $('.skillscontainer').transition({
                left: '125%'
            }, 1500);
            $('.maincontainer, .aboutcontainer, .workcontainer, .educontainer, .skillscontainer').transition({
                opacity: "0"
            }, 200, function() { //use callback here
                $('.maincontainer, .aboutcontainer, .workcontainer, .educontainer, .skillscontainer').css('display', 'none');
            });
}
else {
  $('.maincontainer, .aboutcontainer, .workcontainer, .educontainer').transition({
                left: '-50%'
            }, 1500);
            $('.langcontainer').transition({
                left: '30%',
                opacity: '1'
            }, 1500);
            $('.skillscontainer').transition({
                left: '125%'
            }, 1500);
            $('.maincontainer, .aboutcontainer, .workcontainer, .educontainer, .skillscontainer').transition({
                opacity: "0"
            }, 200, function() { //use callback here
                $('.maincontainer, .aboutcontainer, .workcontainer, .educontainer, .skillscontainer').css('display', 'none');
            });
        
}
         }); 
        $('.skills').click(function() {
            $('.skillscontainer').css('display', 'block');
            if ($(window).width() <1400) {
$('.maincontainer, .aboutcontainer, .workcontainer, .educontainer, .langcontainer').transition({
                left: '-100%'
            }, 1500);
            $('.skillscontainer').transition({
                left: '0',
                opacity: '1'
            }, 1500);
            $('.maincontainer, .aboutcontainer, .workcontainer, .educontainer, .langcontainer').transition({
                opacity: "0"
            }, 200, function() { //use callback here
                $('.maincontainer, .aboutcontainer, .workcontainer, .educontainer, .langcontainer').css('display', 'none');
            });
}
else {
$('.maincontainer, .aboutcontainer, .workcontainer, .educontainer, .langcontainer').transition({
                left: '-50%'
            }, 1500);
            $('.skillscontainer').transition({
                left: '30%',
                opacity: '1'
            }, 1500);
            $('.maincontainer, .aboutcontainer, .workcontainer, .educontainer, .langcontainer').transition({
                opacity: "0"
            }, 200, function() { //use callback here
                $('.maincontainer, .aboutcontainer, .workcontainer, .educontainer, .langcontainer').css('display', 'none');
            });

            }
        });
    });
})(jQuery);