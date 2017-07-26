<?php
if(isset($_POST["oneNumber"]) || isset($_POST["twoNumber"]) || isset($_POST["action"])) {
    $one = $_POST["oneNumber"];
    $two = $_POST["twoNumber"];
    $action = $_POST["action"];
    echo execute($one, $two, $action);
};
function execute ($firstNumber, $secondNumber, $action) {
    if ($action == "+") {
        return $firstNumber + $secondNumber;
    } elseif ($action == "-") {
        return $firstNumber - $secondNumber;
    } elseif ($action == "*") {
        return $firstNumber * $secondNumber;
    } elseif ($action == "/") {
        return $firstNumber / $secondNumber;
    }
}
?>