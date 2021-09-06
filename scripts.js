let remote=
{
    power:0,
    init:{},
    view:{},
    select:{}
}

remote.view = function()
{
    
    //=== main ===
    let main = document.createElement("main");
    main.id = "main";
    document.body.appendChild(main);
    
    //=== remote ===
    let remote = document.createElement("div");
    remote.id = "remote";
    document.getElementById("main").appendChild(remote);

    //=== title remote ===
    let title = document.createElement("div");
    title.id = "titleRemote";
    title.innerHTML = "LIGHT REMOTE";
    document.getElementById("remote").appendChild(title);

    //=== body remote ===
    let bodyR = document.createElement("div");
    bodyR.id = "bodyRemote";
    document.getElementById("remote").appendChild(bodyR);

    //=== LED ===
    let led = document.createElement("div");
    led.id = "led";
    document.getElementById("bodyRemote").appendChild(led);

    //=== Conteneur ===
    let conteneur = document.createElement("div");
    conteneur.id  = "conteneurBtn";
    document.getElementById("bodyRemote").appendChild(conteneur);

    //=== Lignes & Boutons ===
    for(let i = 1; i < 5; i++)
    {
        let lignes = document.createElement("div");
        lignes.id = "ligne"+i;
        lignes.className = "ligne";
        document.getElementById("conteneurBtn").appendChild(lignes);

        if(i==1)
        {
            for(let j = 1; j < 4; j++)
            {
                let bouton = document.createElement("button");
                bouton.id  = "btn"+j;
                bouton.className = "btn";
                bouton.innerHTML = j;
                bouton.setAttribute("onclick","remote.select("+j+",1)");
                document.getElementById("ligne1").appendChild(bouton);

            }
        }

        if(i==2)
        {
            for(let j = 4; j < 7; j++)
            {
                let bouton = document.createElement("button");
                bouton.id  = "btn"+j;
                bouton.className = "btn";
                bouton.innerHTML = j;
                bouton.setAttribute("onclick","remote.select("+j+",1)");
                document.getElementById("ligne2").appendChild(bouton);
            }
        }
        if(i==3)
        {
            for(let j = 7; j < 10; j++)
            {
                let bouton = document.createElement("button");
                bouton.id  = "btn"+j;
                bouton.className = "btn";
                bouton.innerHTML = j;
                bouton.setAttribute("onclick","remote.select("+j+",1)");
                document.getElementById("ligne"+i).appendChild(bouton);
            }
        }
        if(i==4)
        {
            let boutonOff = document.createElement("button");
            boutonOff.id  = "btnOff";
            boutonOff.className = "btn";
            boutonOff.innerHTML = "OFF";
            boutonOff.setAttribute("onclick","remote.select(10,1)");
            document.getElementById("ligne"+i).appendChild(boutonOff);

            let boutonOn = document.createElement("button");
            boutonOn.id  = "btnOn";
            boutonOn.className = "btn";
            boutonOn.innerHTML = "ON";
            boutonOn.setAttribute("onclick","remote.select(11,1)");

            document.getElementById("ligne"+i).appendChild(boutonOn);
        }
    }

    //=== footer ===
    let footer = document.createElement("div");
    footer.id = "footerRemote";
    footer.innerHTML ="by Anthony Corgier";
    document.getElementById("remote").appendChild(footer);
},


remote.select = function(spot,value)
{
    if(remote.power == 0)
    {
        if(spot == 11)
        {
            let audio = new Audio("audio/dtmf_0.wav");
            audio.play();
            document.getElementById("led").style.backgroundColor= "red";
            let ajax = new XMLHttpRequest();
            ajax.open("GET", "server/set.php?S"+spot+"="+value,true);
            ajax.onreadystatechange = () =>
            {
                if (ajax.readyState == XMLHttpRequest.DONE)
                {   
                    remote.power = 1;
                }
            }
            ajax.send();
        }
        console.log(remote.power);
    }
    if(remote.power == 1)
    {
        if(spot == 10)
        {
            let audio = new Audio("audio/dtmf_0.wav");
            audio.play();
            document.getElementById("led").style.backgroundColor= "#CCC";
            let ajax = new XMLHttpRequest();
            ajax.open("GET", "server/set.php?S"+spot+"="+value,true);
            ajax.onreadystatechange = () =>
            {
                if (ajax.readyState == XMLHttpRequest.DONE)
                {   
                    remote.power = 0;
                }
            }
            ajax.send();
            console.log(remote.power);
        }
        if(1<=spot<=9)
        {
            let audio = new Audio("audio/dtmf_"+spot+".wav");
            audio.play();
            let ajax = new XMLHttpRequest();
            ajax.open("GET", "server/set.php?S"+spot+"="+value,true);
            ajax.onreadystatechange = () =>
            {
                if (ajax.readyState == XMLHttpRequest.DONE)
                {   
                    remote.power = 1;
                }
            }
            ajax.send();
            console.log(remote.power);
        }

    }


}


remote.init = function ()
{
    remote.view();
    
}
