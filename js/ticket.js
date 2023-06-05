document.getElementById('click').onclick=calcular;
    function calcular(){
        var cant=document.getElementById('palabracant').value;
        var cat=document.getElementById('palabracat').value;
        var totalparcial=0;
        var tot=0;
        if(cat==1){
            cat=0.8;
        }else if(cat==2){
            cat=0.5;
        }else if(cat==3){
            cat=0.15;
        }
        totalparcial=200*cant;
        tot=totalparcial-(totalparcial*cat);
        document.getElementById('total').innerHTML=tot;
    }
