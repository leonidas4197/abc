<?php
require_once("config.php");

//Conexion a la BD
try {
     $con = new PDO($dsn, $user, $password);
     $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e)  {
    //Si ha habido un fallo al conectarse a BD
    //Salta una excepcion, con getMessage sacamos la descripción de error
   echo ' Falló de conexión: ' . $e->getMessage();
}

var_dump($con);

try {

$sql = "select * from entrenador";



//Primero introducimos la sentencia sql
$stmt=$con->prepare($sql);    
//Decidimos de que forma queremos que se recuperen los datos principalmente hay dos
//FETCH_ASSOC devuelve los datos como un array asociativo 
//FETCH_OBJ devuelve cada 
$stmt-> setFetchMode(PDO::FETCH_ASSOC);
//Ejecutamos la sentencia sql
$stmt->execute();

$entrenadores= $stmt->fetchAll();

var_dump($entrenadores);
echo "Nombre del quinto entrenador:" .$entrenadores[4]["nombre"];

} catch (PDOException $e) {
    //Salta una excepcion, con getMessage sacamos la descripción de el error
    echo ' Error al ejecutar la sentencia SQL: ' . $e->getMessage();
}

?>