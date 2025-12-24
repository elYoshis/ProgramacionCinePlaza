<?php
// Jose Manuel Cortez Concha
$dbhost	= "localhost";	   // localhost or IP
$dbuser	= "root";		  // database username
$dbpass	= "";		     // database password
$dbname	= "programacioncineplaza";    // database name

$archivo="backup/".$dbname.".sql";


$command="C:/xampp/mysql/bin/mysqldump -u ".$dbuser." ".$dbname." --opt > $archivo";

exec($command,$output);
echo "<script>alert('Se guardo la BD');</script>";
header("Location:../programacion/indexprog.php");

?>