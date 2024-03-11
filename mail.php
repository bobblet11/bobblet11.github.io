<?php

$email = $_GET['email'];
$fname = $_GET['fname'];
$lname = $_GET['lname'];
$message = $_GET['message'];

$email_to = 'benglover78@gmail.com';
$email_subject = "Email response from " . $fname . $lname . ' at ' . $email_to;
$email_body = $message;
$headers = "From " . $fname . $lname . " on " . date("Y/m/d"). ".";

header("Location: ThankYou.html"); 

?>