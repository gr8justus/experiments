'use strict';

const uploadBtn = document.querySelector('#imgUpload');

const upload = new XMLHttpRequest();
upload.onreadystatechange = () => {
    if (upload.readyState === 4) {
        document.querySelector('.print').innerHTML = upload.responseText;
    }
}
upload.open('GET', 'submitphoto.html');

uploadBtn.addEventListener('click', () => {
    upload.send();
    const parent = uploadBtn.parentNode
    parent.removeChild(uploadBtn);
});

const workStatus = new XMLHttpRequest();
workStatus.onreadystatechange = () => {
    if (workStatus.readyState === 4) {
        const employees = JSON.parse(workStatus.responseText);
        let employeesList = '<ul class="employeeslist">';
        for (const employee of employees) {
            if (employee.inoffice) {
                employeesList += `<li class="in">${employee.name}</li>`;
            } else {
                employeesList += `<li class="out">${employee.name}</li>`;
            }
        }
        employeesList += '</ul>'
        document.querySelector('.status').innerHTML = employeesList;
    }
};
workStatus.open('GET', '../json/employees.json');
workStatus.send();

const officeRooms = new XMLHttpRequest();
officeRooms.onreadystatechange = () => {
    if (officeRooms.readyState === 4) {
        const roomsList = JSON.parse(officeRooms.responseText);
        let rooms = '<ul class="rooms">';
        for (const room of roomsList) {
            if (room.available) {
                rooms += `<li class="empty">${room.name}</li>`;
            } else {
                rooms += `<li class="full">${room.name}</li>`;
            }
        }
        rooms += '</ul>'
        document.querySelector('.roomList').innerHTML = rooms;
    }
};
officeRooms.open('GET', '../json/rooms.json');
officeRooms.send();