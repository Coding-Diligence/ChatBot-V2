<?php
include_once "scripts/services/database.php";

// Retrieve messages from the database
$sql = "SELECT * FROM messages";
$stmt = $bdLink->prepare($sql);
$stmt->execute();
$messages = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Store messages in the session
$_SESSION['messages'] = $messages;

// Function to send a message
function sendMessage($text) {
  global $bdLink;
  $sql = "INSERT INTO messages (sender, text, time, profileImage) VALUES ('user', :text, NOW(), 'assets/2.jpg')";
  $stmt = $bdLink->prepare($sql);
  $stmt->bindParam(':text', $text);
  $stmt->execute();
}

// Check if a message is submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $messageText = $_POST["message"];
  if (!empty($messageText)) {
    sendMessage($messageText);
    header("Location: index.php");
    exit();
  }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat</title>
  <style>
    .chat-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
    }

    .messages-container {
      margin-bottom: 20px;
    }

    .message {
      background-color: #fff;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .sender {
      font-weight: bold;
      margin-bottom: 5px;
    }

    .text {
      margin-bottom: 5px;
    }

    .time {
      color: #888;
      font-size: 12px;
    }

    form {
      display: flex;
    }

    input[type="text"] {
      flex: 1;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px 0 0 5px;
    }

    button[type="submit"] {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 0 5px 5px 0;
      cursor: pointer;
    }

    button[type="submit"]:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <div class="chat-container">
    <div class="btn-parent">
      <?php foreach ($messages as $message): ?>
        <div class="message">
          <div class="sender"><?php echo $message['sender']; ?> ' ' <?php echo $message['time']; ?></div>
          <div class="text"><?php echo $message['text']; ?></div>
        </div>
      <?php endforeach; ?>
    </div>
    
    <!-- Message input form -->
    <form method="post" action="">
      <input type="text" name="message" placeholder="Type your message">
      <button type="submit">Send</button>
    </form>
  </div>

</body>
</html>
