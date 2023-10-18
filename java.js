var data=window.location.search;
        var params= new URLSearchParams(data);
        var firstname=params.get("first-name");
        var lastname=params.get("last-name");
        var email=params.get("email");
        var age=params.get("age");
        var tel=params.get("tel");
        var img=params.get("image");

        var getData="Email: "+email+"<br>";
            getData+="Age: "+age+"<br>";
            getData+="Tel: "+tel
        var getName=firstname+" "+lastname+"<br>";
        document.getElementById("fullname").innerHTML=getName;
        document.getElementById("Res").innerHTML=getData;
        document.getElementById("Img").src=img;