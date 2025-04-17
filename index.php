<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dictionary </title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Word Dictionary </h1>
        <input type="text" id="wordInput" placeholder="Enter a word...">
        <button onclick="fetchWordDetails">Search</button>
        
        <div id="result">
            <h2 id="wordTitle"></h2>
            <p><strong>Definition:</strong> <span id="definition"></span></p>
            <p><strong>Synonyms:</strong> <span id="synonyms"></span></p>
            <p><strong>Antonyms:</strong> <span id="antonyms"></span></p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>