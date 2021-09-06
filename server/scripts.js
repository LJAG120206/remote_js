let pid  = null;
let isON = false;

let spots  = [];
let spots_ = [];

function init()
{
    for(let i=1; i < 10; i++)
    {
        spots[i]  = 'off';
        spots_[i] = 'off';
    }
}

function spot(spot, state)
{
    document.getElementById('spot'+spot).className = 'spot-'+state;
    if(state == 'on')
    {
        document.getElementById('spot'+spot).style.zIndex = 10;
    }
    else
    {
        document.getElementById('spot'+spot).style.zIndex = 0;
    }
}

function receive()
{
    let ajax = new XMLHttpRequest(); 
    ajax.open("GET","get.php?user="+user,false);

    ajax.onreadystatechange = () =>
    {
        if (ajax.readyState == XMLHttpRequest.DONE)
        {
            if(ajax.responseText != '')
            {
                eval(ajax.responseText);
            }
        }
    }

    ajax.send();

    pid = setTimeout("receive();",250);
}

function powerON()
{
    if(isON == false)
    {
        isON = true;
        document.getElementById('state').innerHTML = 'ON';

        for(let i=1; i < 10; i++)
        {
            spots[i]  = 'standby';
            spots_[i] = 'standby';

            setTimeout("spot("+i+",'on');",i*100);
            setTimeout("spot("+(10-i)+",'standby');",i*100+1000);
        }
    }
}

function powerOFF()
{
    if(isON == true)
    {
        isON = false;
        document.getElementById('state').innerHTML = 'OFF';

        for(let i=1; i < 10; i++)
        {
            spot(i,'on');
            setTimeout("spot("+(10-i)+",'standby');",i*100+500);
            setTimeout("spot("+(10-i)+",'off');",    i*100+500+100);
        }
    }
}

pid = setTimeout("receive();",500);
