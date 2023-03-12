<?php
$host = "localhost";
$db_user = "root";
$db_pass = null;
$db_name = "news_db";

$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM news ORDER BY date DESC";
$result = $conn->query($sql);

$news = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $news[] = $row;
    }
}

echo json_encode($news);

$conn->close();
?>
