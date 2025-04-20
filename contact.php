<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $message = htmlspecialchars($_POST["message"]);
    
    $data = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message\n-------------------\n";
    
    file_put_contents("messages.txt", $data, FILE_APPEND);

    echo "Thank you! Your message has been received.";
} else {
    echo "Error: Invalid request.";
}
?>
