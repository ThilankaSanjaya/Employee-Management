getAllEmployees()
function saveEmployee(){
       /* input eken ena valus allagannava*/
    let name = $('#empName').val();
    let address = $('#empAddress').val();
    let number = $('#empMNumber').val();




    $.ajax({
        url: 'http://localhost:8080/api/v1/employee/saveEmployee',
        type: 'POST',
        data: JSON.stringify({
                        "empID":"",
                        "empName":name,
                        "empAddress":address,
                        "empMNumber":number
                        }),
        contentType: 'application/json',
        success: function(response) {
            alert("Saved")
            getAllEmployees()
        },
        error: function(xhr, status, error) {
            alert("Error")
        }
    });
}

function updateEmployee(){
       /* input eken ena valus allagannava*/
    let empID =$('#empID').val();
    let name = $('#empName').val();
    let address = $('#empAddress').val();
    let number = $('#empMNumber').val();




    $.ajax({
        url: 'http://localhost:8080/api/v1/employee/updateEmployee',
        type: 'PUT',
        data: JSON.stringify({
                        "empID":empID,
                        "empName":name,
                        "empAddress":address,
                        "empMNumber":number
                        }),
        contentType: 'application/json',
        success: function(response) {
            alert("Updated");
            getAllEmployees()
        },
        error: function(xhr, status, error) {
            alert("Error")
        }
    });
}

function deleteEmployee(){
       /* input eken ena valus allagannava*/
    let empID =$('#empID').val();

    $.ajax({
        url: 'http://localhost:8080/api/v1/employee/deleteEmployee/'+empID,
        async:true,
        method: 'DELETE',
        success: function(response) {
            alert("Deleted")
            getAllEmployees()
        },
        error: function(xhr, status, error) {
            alert("Error")
        }
    });
}

function getAllEmployees(){
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8080/api/v1/employee/getAllEmployees',
        async:true,
        success: function(data) {
       if(data.code === "00") {
                       $('#empTable').empty();
                       for(let emp of data.content) {
                           let empID = emp.empID;
                           let name = emp.empName;
                           let address = emp.empAddress;
                           let number = emp.empMNumber;

                           var row = `<tr><td>${empID}</td><td>${name}</td><td>${address}</td><td>${number}</td></tr>`;
                           $('#empTable').append(row);
                       }
        }
        },
        error: function(xhr, status, error) {
            alert("Error")
        }
    });
}

$(document).ready(function() {
    $(document).on('click', '#empTable tr', function() {
        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();

        $('#empID').val(col0);
        $('#empName').val(col1);
        $('#empAddress').val(col2);
        $('#empMNumber').val(col3);
    });
});


