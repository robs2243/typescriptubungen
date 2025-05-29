const benutzer = document.getElementById("benutzer") as HTMLInputElement;
const passwort = document.getElementById("passwort") as HTMLInputElement;
const button = document.getElementById("sendButton")!;
const response = document.getElementById("responseText")!;

button.addEventListener("click", async () => {
  const benutzer_text = benutzer.value;
  const passwort_text = passwort.value;
  try {
    const res = await fetch("http://localhost:5000/py/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        benutzer: benutzer_text,
        passwort: passwort_text 
      })
    });

    const data = await res.json();
    response.textContent = data.response;
  } catch (err) {
    response.textContent = "Fehler beim Senden";
    console.error(err);
  }
});
