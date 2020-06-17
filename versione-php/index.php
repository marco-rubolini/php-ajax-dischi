<?php include 'lista-dischi.php'; ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Php dischi</title>
        <link rel="stylesheet" href="../public/css/style.css">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    </head>
    <body>
        <header>
            <div class="container">
                <div class="logo">
                    <img src="../public/img/logo.png" alt="">
                </div>
            </div>
        </header>
        <main>
            <section class="elenco-dischi">
                <div class="container container-dischi">
                    <?php foreach ($dischi as $dischi) { ?>
                    <div class="disco">
                        <img src="<?php echo $dischi['poster'] ?>" alt="">
                        <h3><?php echo $dischi['title'] ?></h3>
                        <span class="author"><?php echo $dischi['author'] ?></span>
                        <span class="year"><?php echo $dischi['year'] ?></span>
                    </div>
                <?php } ?>
                </div>

            </section>
        </main>
    </body>
</html>
