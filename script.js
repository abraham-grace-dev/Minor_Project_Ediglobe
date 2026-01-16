
const form = document.querySelector("#exceptionForm");
const tableBody = document.querySelector("#exceptionTableBody");
const filterIssueType = document.querySelector("#filterIssueType");
const filterStatus = document.querySelector("#filterStatus");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload

    const deliveryId = document.querySelector("#deliveryId").value.trim();
    const customerName = document.querySelector("#customerName").value.trim();
    const issueType = document.querySelector("#issueType").value;
    const priority = document.querySelector("input[name='priority']:checked").value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${deliveryId}</td>
        <td>${customerName}</td>
        <td>${issueType}</td>
        <td>${priority}</td>
        <td class="status">Open</td>
        <td>
            <button class="resolve-btn">Resolve</button>
            <button class="delete-btn">Delete</button>
        </td>
    `;

    if (priority === "High") {
        row.classList.add("high-priority");
    }

    tableBody.appendChild(row);

    form.reset();
});

tableBody.addEventListener("click", function (event) {
    const target = event.target;
    const row = target.closest("tr");

    // Resolve button
    if (target.classList.contains("resolve-btn")) {
        row.querySelector(".status").textContent = "Resolved";
        row.classList.add("resolved");
        target.disabled = true;
    }

    // Delete button
    if (target.classList.contains("delete-btn")) {
        const confirmDelete = confirm("Are you sure you want to delete this issue?");
        if (confirmDelete) {
            row.remove();
        }
    }
});
function applyFilters() {
    const rows = tableBody.querySelectorAll("tr");

    rows.forEach(row => {
        const issueType = row.children[2].textContent;
        const status = row.children[4].textContent;

        const issueTypeMatch =
            filterIssueType.value === "All" ||
            filterIssueType.value === issueType;

        const statusMatch =
            filterStatus.value === "All" ||
            filterStatus.value === status;

        if (issueTypeMatch && statusMatch) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

filterIssueType.addEventListener("change", applyFilters);
filterStatus.addEventListener("change", applyFilters);
