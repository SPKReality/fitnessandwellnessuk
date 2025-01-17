<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = htmlspecialchars($_POST['username']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

    $subject = "Welcome to Fitness & Wellness UK, $username!";
    $message = "Hi $username,\n\nThank you for signing up! We're excited to have you on board.\n\nBest regards,\nTaylor Gratton";
    $headers = "From: 877899@student.derby-college.ac.uk";

    if (mail($email, $subject, $message, $headers)) {
        echo "Signup successful! A confirmation email has been sent to $email.";
    } else {
        echo "Signup successful, but we couldn't send a confirmation email.";
    }
} else {
    echo "Invalid request.";
}
?>
