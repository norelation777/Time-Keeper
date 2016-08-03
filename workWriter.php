<?php
	$myfile = fopen("worked.txt", "a+");
	fwrite($myfile, $_REQUEST["workText"]);
?>