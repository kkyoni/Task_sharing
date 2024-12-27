<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $data['from_title'] }}</title>
</head>
<body>
    <h2>Hello, {{ $username }}</h2>
    <p>We received a request to reset your password.</p>
    <p>Your new password is: <strong>{{ $password }}</strong></p>
    <p>Please use this password to log in and then update it as soon as possible.</p>
    <p>If you did not request a password reset, please ignore this email.</p>
</body>
</html>
