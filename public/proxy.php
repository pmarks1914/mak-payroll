<?php
// Get the URL to proxy from the query parameter
$url = $_GET['url'];

// Initialize a cURL session
$ch = curl_init($url);

// Set cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute the cURL request and retrieve the response
$response = curl_exec($ch);

// Close cURL session
curl_close($ch);

// Set the content type header to JSON (or appropriate content type)
header('Content-Type: application/json');

// Echo the response
echo $response;
?>
