$('document').ready(function(){
    console.log('document is ready');
    
    $(".service").each(function(index){
        $(this).mouseenter(function(){
                $(this).css('display','none');
                $(".details").each(function(idx){
                    if(idx === index){
                        $(this).css('display','block');
                        return false;
                    }
                });
        });
            
    });
    
    $(".details").each(function(index){
        $(this).mouseleave(function(){
                $(this).css('display','none');
                $(".service").each(function(idx){
                    if(idx === index){
                        $(this).css('display','block');
                        return false;
                    }
                });
        });  
    });
});

