<template>
  <form @click.prevent="prevent">
    <select id="age" name="age">
      <option value="">Age</option>
      <option value="Under6">Under 6</option>
      <option value="6-9">6-9</option>
      <option value="10-15">10-15</option>
      <option value="15-18">15-18</option>
      <option value="Adults">Adults</option>
      <option value="All">All ages</option>
    </select>

    <select id="sport" name="sport">
      <option value="">Sport</option>
      <option value="Gymnastic">Gymnastic</option>
      <option value="Cheerleading">Cheerleading</option>
      <option value="Trampolin">Trampoline</option>
      <option value="Fitness">Fitness</option>
      <option value="Yoga">Yoga</option>
      <option value="Boxing">Boxing</option>
    </select>

    <select id="location" name="location">
      <option value="">Location</option>
      <option value="Gymnastikkens">Gymnastikkens Hus</option>
      <option value="Sønderbroskolen">Sønderbroskolen</option>
    </select>

    <select id="days" name="days">
      <option value="">Day</option>
      <option value="Monday">Monday</option>
      <option value="Tuesday">Tuesday</option>
      <option value="Wednesday">Wednesday</option>
      <option value="Thrusday">Thrusday</option>
      <option value="Friday">Friday</option>
      <option value="Saturday">Saturday</option>
      <option value="Sunday">Sunday</option>
    </select>


  <input type="time" id="appt" name="appt">


    <button class="clear">Clear all</button>
    <button class="search">Search</button>
  </form>
</template>

<style scoped>
form {
  margin-bottom:2rem
}
select, #appt{
  background-color: var(--red);
  color: white;
  margin: 3rem 3rem 3rem 0;
  padding: 1rem 1.6rem;
  border: none;
  border-radius: 40px;
}

option {
  background-color: white;
  color: black;
  padding: 1rem
}

.clear {
  color: var(--lighterred);
  background-color: white;
  border: 1px solid var(--lighterred);
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  padding: 1rem 1.4rem;
  transition: 0.4s ease-in;
  font-weight: 700;
  border-radius: 40px;
  margin-right: 1rem
}

.search {
  cursor: pointer;
  background-color: white;
  font-family: "Poppins", sans-serif;
  color: rgb(43, 43, 43);
  border: 1px solid rgb(43, 43, 43);
  padding: 1rem 1.4rem;
  transition: 0.4s ease-in;
  font-weight: 500;
  border-radius: 40px;
}
</style>
