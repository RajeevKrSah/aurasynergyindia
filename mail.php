<?php
if(isset($_POST["submit"])){
// Checking For Blank Fields..
if($_POST["vname"]==""||$_POST["vemail"]==""||$_POST["sub"]==""||$_POST["msg"]==""){
echo "Fill All Fields..";
}else{
// Check if the "Sender's Email" input field is filled out
$email=$_POST['vemail'];
// Sanitize E-mail Address
$email =filter_var($email, FILTER_SANITIZE_EMAIL);
// Validate E-mail Address
$email= filter_var($email, FILTER_VALIDATE_EMAIL);
if (isset($_POST['submit'])){
    $to = "mailumes@gmail.com"; // this is your Email address

    $from = $_POST['umeshkashyap.jpl@gmail.com']; // this is the sender's Email address

    $first_name = $_POST['First Name'];

    $last_name = $_POST['Last Name'];
$subject = "Form submission";

    $subject2 = "Copy of your form submission";

    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];

    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "Frm:" . $from;
$headers2 = 'From:'. $to . "\r\n"; // Sender's Email
mail($to,$subject,$message,$headers);

    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender

    echo "Your mail has been sent successfuly ! Thank you for your feedback" . $first_name . ", we will contact you shortly.";

    // You can also use header('Location: thank_you.php');

}
}
}
?>