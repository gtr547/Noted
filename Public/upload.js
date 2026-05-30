const form = document.getElementById("eventForm");
const formMessageText = document.getElementsByClassName("form-message-text")[0];

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const category = document.getElementById("category").value;
  const text = document.getElementById("details").value;
  const title = document.getElementById("title").value;

  if (!category || !text || !title) {
    formMessageText.textContent = `Please complete all fields.`;
    return;
  }

  const isoDateString = document.getElementById("datetime").value;

  if (!isoDateString) {
    formMessageText.textContent = "Please select a date and time.";
    return;
  }
  // Convert the string to a JavaScript Date object
  const date = new Date(isoDateString);
  // Format the date to a readable string
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const readableDate = date.toLocaleString("en-GB", options);

  const formData = {
    category: category,
    timeStamp: readableDate,
    text: text,
    title: title,
  };

  try {
    // Send form data using fetch API
    formMessageText.textContent = ""
    const response = await fetch("./api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      formMessageText.innerHTML = `Your note was successfully saved. View it <a href="./feed.html">here</a>.`;
      form.reset()
    } else {
      formMessageText.textContent = `Failed to save the note. Please try again.`
      console.error("Server Error:", response.statusText)
    }
  } catch (error) {
    formMessageText.textContent = `An error occurred. Please check your connection and try again.`
    console.error("Error:", error)
  }
});