document
  .getElementById("jobApplicationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const phoneNo = document.getElementById("phone_no").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zipCode = document.getElementById("zipcode").value;
    const resume = document.getElementById("resume").value;
    const coverLetter = document.getElementById("cover_letter").value;
    const education = document.getElementById("education").value;
    const school = document.getElementById("school").value;
    const prevJob = document.getElementById("prev_job").value;
    const company = document.getElementById("company").value;
    const skills = document.getElementById("skills").value;
    const startDate = document.getElementById("start_date").value;

    // Create new row in the table
    const table = document
      .getElementById("table")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();
    newRow.insertCell(0).textContent = `${firstName} ${lastName}`;
    newRow.insertCell(1).textContent = phoneNo;
    newRow.insertCell(2).textContent = email;
    newRow.insertCell(
      3
    ).textContent = `${address}, ${city}, ${state}, ${zipCode}`;
    newRow.insertCell(4).textContent = resume ? "Uploaded" : "Not Uploaded";
    newRow.insertCell(5).textContent = coverLetter
      ? "Submitted"
      : "Not Submitted";
    newRow.insertCell(6).textContent = education;
    newRow.insertCell(7).textContent = school;
    newRow.insertCell(8).textContent = prevJob;
    newRow.insertCell(9).textContent = company;
    newRow.insertCell(10).textContent = skills;
    newRow.insertCell(11).textContent = startDate;

    // Clear form after submission
    document.getElementById("jobApplicationForm").reset();
  });

document.getElementById("viewTable").addEventListener("click", function () {
  const table = document.getElementById("applicationsTable");
  table.style.display =
    table.style.display === "none" || table.style.display === ""
      ? "block"
      : "none";
});
