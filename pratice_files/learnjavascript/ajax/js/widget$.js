$(document).ready(function() {
    $('#imgUpload').click(() => {
        $.get('submitphoto.html', (response) => {
            $('.print').html(response);
        }).fail((pgRequest) => {
            $('.print').html(`<p>Sorry!, ${pgRequest.statusText} error</p>
            <p>Please, try again later</p>`);
        });
        $('#imgUpload').hide();
    });
    
    $.getJSON('../json/employees.json', (response) => {
        let $employeesList = '<ul class="employeeslist">';
        $.each(response, (_index, employee) => {
            if (employee.inoffice) {
                $employeesList += `<li class="in">${employee.name}</li>`;
            } else {
                $employeesList += `<li class="out">${employee.name}</li>`;
            }
        }); // end loop
        $employeesList += '</ul>';
        $('.status').html($employeesList);
    }); // end getJSON
    
    $.getJSON('../json/rooms.json', (response) => {
        let $rooms = '<ul class="rooms">';
        $.each(response, (_index, room) => {
            if (room.available) {
                $rooms += `<li class="empty">${room.name}</li>`;
            } else {
                $rooms += `<li class="full">${room.name}</li>`;
            }
        }); // end loop
        $rooms += '</ul>';
        $('.roomList').html($rooms);
    }); // end getJSON
}) // end ready