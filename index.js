const formList = document.querySelector(".formInfo");

formList.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: formList.elements["name"].value,
    email: formList.elements["email"].value,
    subject: formList.elements["subject"].value,
    message: formList.elements["message"].value,
  };

  try {
    const response = await fetch("https://portfoliobackend-ezq1.onrender.com/api/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();  // ✅ Properly wait for JSON
    alert(result.message);  // ✅ Make sure your backend sends this field
  } catch (error) {
    alert("Error sending message");
    console.error("Error:", error);
  }
});
