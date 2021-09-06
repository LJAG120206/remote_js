<?php
header("Content-Type: text/javascript");

$cmd = file_get_contents("/tmp/spots.js");
file_put_contents("/tmp/spots.js",'');

print($cmd);
