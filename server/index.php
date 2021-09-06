<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bona+Nova:ital,wght@0,400;0,700;1,400&family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&family=Open+Sans:ital,wght@0,300;0,700;1,300&display=swap" rel="stylesheet"> 

        <link href="styles.css" rel="stylesheet" />

       <script src="scripts.js"></script>
       <script>let user = "<?php print($user); ?>";</script>
    </head>
    <body>
        <header id="header">
            <h1>LIGHT PARTY</h1>
            <p id='state'>OFF<p>
        </header>
        <main id="main">
            <div id="panel">
                <?php
                for($i = 1; $i < 10; $i++)
                {
                    print("
                <div id=\"spot$i\" class=\"spot-off\"></div>");
                }
                ?>
            </div>
        </main>
        <footer id="footer"></footer>
    </body>
</html>