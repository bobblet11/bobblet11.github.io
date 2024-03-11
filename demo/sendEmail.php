<html>
<body>

<?php 

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$message = $_POST['message'];

echo 'Dear Ben, <br>'.$message.'<br><br>';
echo 'Thanks. <br> Sincerely, ' .$fname.' '.$lname.' <br>from '.$email.'';

?>

</body>
</html>