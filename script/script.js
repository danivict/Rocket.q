
//Mock while no have database
const rooms = [13,15];

const codeRoom = document.getElementById("room-id")
const formulary = document.getElementById("formulary")
formulary.addEventListener('submit', function(e){
      ifRoomNotExist(codeRoom.value)
      e.preventDefault()

});
function ifRoomNotExist(element){
        if(!rooms.includes(parseInt(codeRoom.value))){
            alert("ERROR- A sala não existe")
        }
 }
