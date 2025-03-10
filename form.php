<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $phone = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);
    $form_subject = htmlspecialchars($_POST["subject"]);

    $to = "kancelaria@adwokatszczepanska.pl";  // Podmień na swój adres e-mail
    $subject = "Formularz kontaktowy: $form_subject";
    $body = "Done kontaktowe:\n
    Imię i nazwisko: $name\n
    Email: $email\n
    Numer kontaktowy: $phone\n
    \nTreść wiadomości:\n$message";

    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Wiadomość została wysłana!";
    } else {
        echo "Błąd podczas wysyłania wiadomości.";
    }
} else {
    echo "Nieprawidłowa metoda żądania.";
}
?>
