document.addEventListener('DOMContentLoaded', function() {
    const loginScreen = document.getElementById('loginScreen');
    const timesheetManagement = document.getElementById('timesheetManagement');
    const timesheetCreation = document.getElementById('timesheetCreation');
    const timesheetView = document.getElementById('timesheetView');

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const userId = document.getElementById('userId').value;
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                loginScreen.style.display = 'none';
                timesheetManagement.style.display = 'block';
            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    });

    document.getElementById('createTimesheetBtn').addEventListener('click', function() {
        timesheetManagement.style.display = 'none';
        timesheetCreation.style.display = 'block';
    });

    document.getElementById('viewTimesheetsBtn').addEventListener('click', function() {
        fetch('/timesheets')
        .then(response => response.json())
        .then(timesheets => {
            const timesheetList = timesheets.map(ts => `Week: ${ts.week}`).join('\n');
            alert(timesheetList || 'No timesheets available');
        })
        .catch(error => console.error('Error:', error));
        timesheetManagement.style.display = 'none';
        timesheetView.style.display = 'block';
    });

    document.getElementById('timesheetForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const selectedWeek = document.getElementById('weekPicker').value;
        fetch('/timesheet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ week: selectedWeek }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(`Timesheet created for week: ${data.timesheet.week}`);
            } else {
                alert('Failed to create timesheet');
            }
        })
        .catch(error => console.error('Error:', error));
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