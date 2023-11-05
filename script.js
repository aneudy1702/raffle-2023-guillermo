function addTicket() {
    const ticketNumber = document.getElementById('ticketNumber').value;
    const ticketList = document.getElementById('ticketList');
    const listItem = document.createElement('li');
    listItem.textContent = `Ticket Number: ${ticketNumber}`;
    ticketList.appendChild(listItem);
}

function manageTicket() {
    const ticketNumber = document.getElementById('ticketNumber').value;
    const isAvailable = document.getElementById('availability').checked;

    // Handle ticket management (mark as available/sold)
    // You can add your logic here.
}
