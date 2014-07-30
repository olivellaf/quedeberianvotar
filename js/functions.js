function deleteDoor(identifier) {
    if (confirm("¿Are you sure you want to delete this door?")) {
        location.href = "php/deleteDoor.php?door_id=" + identifier;
    }
}

function editDoor(identifier) {
    location.href = "php/editDoor.php?door_id=" + identifier;
}

function viewDoor(identifier) {
    location.href = "php/detail_door.php?door_id=" + identifier;
}