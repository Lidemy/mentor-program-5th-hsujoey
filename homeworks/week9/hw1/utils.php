<?php
  require_once("conn.php");

  function getUserDataFromUsername($username) {
    global $conn;
    $sql = sprintf(
      "select * from hsujoey_board_users where username = '%s'",
      $username
    );
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    return $row; // username, id, nickname
  }
?>