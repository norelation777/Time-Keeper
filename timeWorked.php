<?php
	$myfile = fopen("workTime.txt", "w+");
	fwrite($myfile, $_REQUEST["workText"]);
?>