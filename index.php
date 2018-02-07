<!DOCTYPE>
<html>

<head>

<title>WEBSITE IN NOTEPAD</title>
<link rel="stylesheet" type="text/css" href="css/legend.css"/>
<link rel="icon" href="images/favicon.ico" type="favicon">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

</head>
<?php
$ser="localhost";
$user="root";
$pass="";
$db="website";
$con=mysqli_connect($ser,$user,$pass,$db)
?>

<body>


<div id="header">
  

   <div id="weblogo">
<img src="image/logo.jpg">
   </div>
  <div id="icon">
   

   <ul id="navmenu" style="list-style: none;">
	    <li> <a href="index.php"><img id="hm" src="image/home1.jpg" ></br> home </li></a>
            <li> <a href='credits.html'> <img id="cre" src="image/credits2.jpg" > </br> credits</li> </a>
   </ul>
      
  </div>
  
  
  <?php
  $sql="SELECT views FROM one";
  $result = mysqli_query($con, $sql);
  $row = mysqli_fetch_assoc($result);
  echo "hai";
  echo $row["views"];
  ?>

</div>

<div id="center">

<div id="gamebox">

<div id="descrption">
<?php
echo "view no:" .$row["views"];
?>
</div>

<div id="starthere"><center><a href="goto.php"><img id="hm" src="image/start.jpg" ></a></center><div>

</div>

</div>


</body>

</html>