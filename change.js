/**
 * Created by 1 on 11.02.2015.
 */
var aversResult = [];
var reverseResult = [];

// предолжить бросить монетку
var flag = true; // маркер того, когда зайти\выйти из выполнения программы
while(flag) {
    var tries = confirm("подбросить монетку?");
    var randomResult = Math.random(); // мас рендом для получения результата
    if (tries === false) {
        alert("кол-во выпаданий аверса: " + aversResult.length + ", кол-во выпаданий реверса: " + reverseResult.length);
        break
    } else if (randomResult < 0.5) {
        reverseResult.push(length + 1);
        alert("кол-во выпаданий аверса: " + aversResult.length + ", кол-во выпаданий реверса: " + reverseResult.length);
    } else {
        aversResult.push(length + 1);
        alert("кол-во выпаданий аверса: " + aversResult.length + ", кол-во выпаданий реверса: " + reverseResult.length);
    }
}




