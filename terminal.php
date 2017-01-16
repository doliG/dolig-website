<?php
if ( !isset($_POST['command']) ) {
    echo "Rien reçu";
}
else {
    echo "<div class=\"animated fadeInUp\">Commande reçue : " . $_POST['command'] . "</div><br><br>";
}
?>
