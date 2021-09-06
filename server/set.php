<?php
header("Content-Type: text/plain");

$cmd = '';
$OK  = FALSE;

if(isset($_GET['S11']))
{
    if($_GET['S11'] == 1)
    {
        $cmd .= "powerON();\n";
        $OK   = TRUE;
    }
}

if(isset($_GET['S10']))
{
    if($_GET['S10'] == 1)
    {
        $cmd .= "powerOFF();\n";
        $OK   = TRUE;
    }
}

for($i=1; $i<10; $i++)
{
    if(isset($_GET["S$i"]))
    {
        if($_GET["S$i"] == 1)
        {
            $cmd .= "if(isON) {\n";
            $cmd .= "spot($i,'on');\n";
            $cmd .= "setTimeout(\"spot($i,'standby');\",500);\n";
            $cmd .= "}\n";
            $OK   = TRUE;
        }
    }
}

if(file_put_contents("/tmp/spots.js",$cmd) !== FALSE && $OK == TRUE)
{
    print('OK');
}
else
{
    print('KO');
}
