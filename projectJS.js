document.getElementById("generatePlan").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const goal = document.getElementById("goal").value;
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    const meals = {
      monday: {
        breakfast: document.getElementById("mondayBreakfast").value,
        snack: document.getElementById("mondaySnack").value,
        lunch: document.getElementById("mondayLunch").value,
        snack2: document.getElementById("mondaySnack2").value,
        dinner: document.getElementById("mondayDinner").value,
      },
      tuesday: {
        breakfast: document.getElementById("tuesdayBreakfast").value,
        snack: document.getElementById("tuesdaySnack").value,
        lunch: document.getElementById("tuesdayLunch").value,
        snack2: document.getElementById("tuesdaySnack2").value,
        dinner: document.getElementById("tuesdayDinner").value,
      },
    };
  
    document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meal Plan for ${name}</title>
        <style>
          body { font-family: monospace; padding: 20px; }
          h1, h2 { text-align: center; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #000; padding: 10px; text-align: left; }
        </style>
      </head>
      <body>
        <h1>Weekly Meal Plan for ${name}</h1>
        <p>Email: ${email}</p>
        <p>Goal: ${goal}</p>
        <h2>Meals</h2>
        <table>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Snack</th>
            <th>Lunch</th>
            <th>Snack</th>
            <th>Dinner</th>
          </tr>
          <tr>
            <td>Monday</td>
            <td>${meals.monday.breakfast}</td>
            <td>${meals.monday.snack}</td>
            <td>${meals.monday.lunch}</td>
            <td>${meals.monday.snack2}</td>
            <td>${meals.monday.dinner}</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>${meals.tuesday.breakfast}</td>
            <td>${meals.tuesday.snack}</td>
            <td>${meals.tuesday.lunch}</td>
            <td>${meals.tuesday.snack2}</td>
            <td>${meals.tuesday.dinner}</td>
          </tr>
        </table>
      </body>
      </html>
    `);
  });
  
  document.getElementById("clearForm").addEventListener("click", function () {
    document.getElementById("mealPlanForm").reset();
  });
  
  document.getElementById("printPlan").addEventListener("click", function () {
    window.print();
  });
  
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  