<?php
	$myfile = fopen("test.txt", "a+");
	fwrite($myfile, $_REQUEST["inText"]);
?>