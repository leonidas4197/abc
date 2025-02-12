/*Ejercicio:GHOST
Ghost es un juego de mesa para 2 jugadores.El juego consise en un tablero de 6 x 6
que representa un castillo embrujado. Cada jugador tiene 8 fantasmas, 4 buenos 
(los fantasmas pares) y 4 malos (los fantasmas impares). Los 8 fantasmas se ponen 
en las primeras 2 filas del lado del Jugador; cada jugador decide la posicion de cada
fantasma, dejando libres las esquinas (como muestra la imagen)ya que representa la salida del
castillo.

El juego se va a desarrollar en turnos y cada jugador puede mover un fantasma sólo una casilla ya
sea horizontal o vertical. Pueden comer otro fantasma si se mueven a la casilla donde está. El jugador
contrario NO SABRÁ cual es el fantasma bueno o malo de su oponente hasta que se lo coma; ya que pueden 
ser colocados por el jugador en el orden en que más gusten.

¿Como se gana? Puede suceder en los siguiente escenarios, lo que suceda rimero:
1.Gana quien SE HA COMIDO todos los fantasmas buenos de su oponente.
2.Gana quien LE HAN COMIDO todos sus fantasmas malos.
3.Gana quien logra llevar un fantasma por la salida del castillo del lado del contrario.

Como minimo el programa debe de realizar las siguiente funciones:
-Los jugadores deberán arrastrar y soltaralas distintas celdas posibles de forma que compruebes que sean
correctas y estén libres.
Celdas posibles para arrastrar el jugador 1 antes de iniciarlo:
Recordando que es un tablero 6 x 6
el jugador 1 solo podra colocar sus fantasmas en las casillas:1.2 1.3 1.4 1.5 Y 2.1 2.2 2.3 2.4.2.5
mientras que el jugador 2 solo podra colocar sus fantasmas en las casillas: 5.2 5.3 5.4 5.5 y 6.2 6.3 6.4 6.5

  X 1 2 3 4 5 6
  1   x x x x
  2   x x x x
  3
  4
  5   o o o o 
  6   o o o o

  -Algun usuario con doble click en un botón Start indicara que empieza el juego, y para ello ambos
  han debido posicionar sus 8 fantasmas.Se debe llevar un contador de cuantos fantasmas buenos y malos
  le queda a cada jugador. A la hora de empezar el juego ambos tendrán 4 buenos y 4 malos.
  -Se debe ir añadiendo en su contador (mediante el manejo del DOM) los fantasmas que el otro jugador
  ha comido.
  Por ejemplo si al jugador uno le han comido el f1 y f6

  Ejemplo: 

  Fantasmas buenos=F2 F4 F8 Fantasmas Malos=F3 F5 F7

  Ejemplo:

 X 1 2 3 4 5 6
  1   x x x 
  2   x   x x
  3
  4
  5   o o o o 
  6   o o o o

  Fantasmas buenos=F2 F4 F6 F8 Fantasmas Malos=F1 F3 F5 F7

  -El usuario elegira el fantasma a mover con un click en la celda, y pulsando las teclas de flechas
  podra mover en las direcciones indicadas que esté libre o que quiera comperse al fantasma del oponente.
  -Las casillas donde están los fantasmas del jugador 1 se pondrán con fondo rojo y las del jugador 2 
  con fondo azul.
  -Si el usuario pulsa la tecla r, la pagina debe de recargarse.
  -Se debe notificar quién gana en la web con un mensaje e insertando una imagen.
  -Crea una cookie que registra si ha ganado el jugador 1 o jugador 2 y que expier en 5 minutos.
  
  Los 8 fantasmas de cada jugador estaran fuera del tablero y se colocan dentro de este.
  
*/