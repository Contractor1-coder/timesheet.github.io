document.addEventListener('DOMContentLoaded', function() {
    const loginScreen = document.getElementById('loginScreen');
    const timesheetManagement = document.getElementById('timesheetManagement');
    const timesheetCreation = document.getElementById('timesheetCreation');
    const timesheetView = document.getElementById('timesheetView');

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const userId = document.getElementById('userId').value;
        if (userId === '1') {
            loginScreen.style.display = 'none';
            timesheetManagement.style.display = 'block';
        } else {
            alert('Invalid ID. Please use ID 1 to log in.');
        }
    });

    document.getElementById('createTimesheetBtn').addEventListener('click', function() {
        timesheetManagement.style.display = 'none';
        timesheetCreation.style.display = 'block';
    });

    document.getElementById('viewTimesheetsBtn').addEventListener('click', function() {
        timesheetManagement.style.display = 'none';
        timesheetView.style.display = 'block';
    });

    document.getElementById('timesheetForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const selectedWeek = document.getElementById('weekPicker').value;
        alert(`Timesheet created for week: ${selectedWeek}`);
        // Here you would typically send this data to a server
    });

    document.getElementById('backToManagement').addEventListener('click', function() {
        timesheetCreation.style.display = 'none';
        timesheetManagement.style.display = 'block';
    });

    document.getElementById('backToManagementFromView').addEventListener('click', function() {
        timesheetView.style.display = 'none';
        timesheetManagement.style.display = 'block';
    });
});
