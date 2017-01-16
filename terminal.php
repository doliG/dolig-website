<?php
if ( !isset($_POST['command']) ) {
    echo "Rien reçu";
}
else {
    echo "Commande reçue : " . $_POST['command'];
}
?>
