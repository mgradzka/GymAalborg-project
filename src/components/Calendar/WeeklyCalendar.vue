<template>
  
  <div class="calendar">
    <header>
      <button class="secondary" style="align-self: flex-start; flex: 0 0 1">
        Today
      </button>
      <div
        class="calendar__title"
        style="display: flex; justify-content: center; align-items: center"
      >
        <div class="icon secondary">‹</div>
        <h2 class="" style="flex: 1">
          <span></span><strong>16 JAN–22 JAN</strong> 2022
        </h2>
        <div class="icon secondary">›</div>
      </div>
      <div style="align-self: flex-start; flex: 0 0 1"></div>
    </header>

    <div class="outer">
      <table>
        <thead>
          <tr>
            <th class="headcol"></th>
            <th>MONDAY</th>
            <th>TUESDAY</th>
            <th class="today">WEDNESDAY</th>
            <th>THURSDAY</th>
            <th>FRIDAY</th>
            <th class="secondary">SATURDAY</th>
            <th class="secondary">SUNDAY</th>
          </tr>
        </thead>
      </table>

      <div class="wrap">
        <table class="offset">
          <tbody>
            <tr>
              <td class="headcol"></td>
              <td></td>
              <td></td>
              <td class="past"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
        
            <tr>
              <td class="headcol">12:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><div class="event gymnastic double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Gymnastic <br>12:15 - 13:30 
                </div></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol">13:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td> <div class="event yoga double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >13:00-14:30 Yoga
                </div></td>
              <td><div class="event cheerleading double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Cheerleading <br>13:00 - 15:00 
                </div></td>
            </tr>
            <tr>
              <td class="headcol"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><div class="event gymnastic double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Gymnastic- elite team <br>13:30- 16:00 
                </div></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol">14:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol">15:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol"></td>
              <td></td>
              <td></td>
              <td></td>
              <td><div class="event gymnastic double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Gymnastic- baby<br>15:30 - 16:30 
                </div></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol">16:00</td>
              <td><div class="event gymnastic double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Gymnastic- Ukraine class <br>16:00 - 17:30 
                </div></td>
              <td></td>
              <td></td>
              <td></td>
              <td><div class="event gymnastic double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Gymnastic <br>16:00 - 17:15 
                </div></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol"></td>
              <td><div class="event gymnastic double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Gymnastic kids<br>16:30 - 17:20 
                </div></td>
              <td><div class="event gymnastic double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Gymnastic kids<br>16:30 - 17:20 
                </div></td>
              <td><div class="event gymnastic double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Gymnastic kids<br>16:30 - 17:20 
                </div></td>
              <td><div class="event gymnastic double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Gymnastic kids<br>16:30 - 17:20 
                </div></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol">17:00</td>
              <td><div class="event gymnastic double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Gymnastic <br>17:00 - 18:00 
                </div></td>
              <td><div class="event trampolin double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Trampoline- beginner<br>17:00 - 18:30 
                </div></td>
              <td><div class="event gymnastic double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Gymnastic <br>17:10 - 18:25 
                </div></td>
              <td></td>
              <td><div class="event gymnastic double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Gymnastic <br>17:15 - 18:45 
                </div></td>
              <td></td>
              
              <td></td>
            </tr>
            <tr>
              <td class="headcol"></td>
              <td><div class="event cheerleading double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Cheerleading- beginner <br>17:30 - 19:00 
                </div></td>
              <td><div class="event cheerleading double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Cheerleading- elite <br>17:30 - 19:00 
                </div></td>
              <td>
                <div class="event boxing double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Boxing <br>17:30–18:30 
                </div>
               
              </td>
              <td><div class="event cheerleading double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Cheerleading- beginner<br>17:30 - 19:00 
                </div> </td>
              <td><div class="event trampolin double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Trampoline- beginner<br>17:30 - 18:45 
                </div></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol">18:00</td>
              <td></td>
              <td><div class="event trampolin double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Trampoline- talent team<br>18:15 - 19:45 
                </div></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td class="headcol"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol">19:00</td>
              <td></td>
              <td><div class="event gymnastic double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Gymnastic- adults <br>19:00 - 21:00 
                </div></td>
              <td> <div class="event yoga double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Yoga 19:00-20:30
                </div></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol">20:00</td>
              <td><div class="event cheerleading double">
                  <input id="check" type="checkbox" class="checkbox" /><label
                    for="check"
                  ></label
                  >Cheerleading- senior <br>20:00 - 22:00 
                </div></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol">21:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol">22:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="headcol"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* body {
  flex-direction: column;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-family: "DINPro", "Helvetica Neue", sans-serif;
  padding: 3rem;
  margin: 0;
  background: #675757;
  box-sizing: border-box;
  height: 100vh;
} */

.outer {
  position: relative;
}

.calendar {
  margin: 4rem auto;
  max-width: 1280px;
  min-width: 500px;

  /* box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.2) ,0px 3px 7px rgba(0, 0, 0, 0.1); */
  border-radius: 8px;
  /* border: 1px solid rgb(131, 130, 130); */
}
.wrap {
  overflow-x: hidden;
  overflow-y: scroll;
  max-width: 1280px;
  height: 500px;
  border-radius: 8px;
}

thead {
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
}

header {
  background: #fff;
  padding: 1rem;
  color: rgba(0, 0, 0, 0.7);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px 8px 0px 0px;
}

header h2 {
  font-size: 1.8rem;
  text-align: center;
  font-weight: normal;
  font-family: "Poppins", sans-serif;
}
tbody {
  /* position: relative; */
  top: 100px;
}
table {
  background: #fff;
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

td {
  background: #fff;
}

.headcol {
  width: 60px;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  padding: 0.25rem 0;
  text-align: center;
  border: 0;
  position: relative;
  top: -12px;
  border-bottom: 1px solid transparent;
}

thead th {
  font-size: 1rem;
  font-weight: bold;
  color: rgb(66, 65, 65);
  padding: 1rem;

  text-align: center;
  width: 100%;
  font-family: "Poppins", sans-serif;
  /* color: var(--red); */
}

thead {
  z-index: 2;
  background: white;
  border-bottom: 2px solid #ddd;
}

tr,
tr td {
  height: 20px;
}
td {
  text-align: center;
}
tr:nth-child(odd) td:not(.headcol) {
  border-bottom: 1px solid #b7b7b7;
}

tr:nth-child(even) td:not(.headcol) {
  border-bottom: 1px solid #b7b7b7;
}

tr td {
  border-right: 1px solid #b7b7b7;
  padding: 0;
  white-space: none;
  word-wrap: nowrap;
}

tbody tr td {
  position: relative;
  vertical-align: top;
  height: 60px;
  padding: 0.25rem 0.25rem 0 0.25rem;
  width: auto;
}

.secondary {
  color: rgb(0, 0, 0);
}

.checkbox {
  display: none;
}

.checkbox + label {
  border: 0;
  outline: 0;
  width: 100px;
  height: 100px;
  background: white;
  color: transparent;
  display: block;
  display: none;
}

.checkbox:checked + label {
  border: 0;
  outline: 0;
  width: 100%;
  height: 100%;
  background: red;
  color: transparent;
  display: inline-block;
}

.event {
  /* background: #00b4fc; */
  color: white;
  border-radius: 2px;
  text-align: left;
  font-size: 1.2rem;
  z-index: 2;
  padding: 0.5rem;
  overflow-x: hidden;
  transition: all 0.2s;
  cursor: pointer;
}

.gymnastic {
  background-color: rgb(234, 57, 57);
}
.yoga {
  background-color: rgb(246, 62, 135);
}
.boxing {
  background-color: purple;
}
.cheerleading {
  background-color: rgb(243, 147, 37);
}
.trampolin {
  background-color: rgb(0, 149, 255);
}
.fitness {
  background-color: yellowgreen;
}


.event:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.612);
  background: #494949;
}

.event.double {
  height: 200%;
}

td:hover:after {
  content: "+";
  vertical-align: middle;
  font-size: 1.875rem;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
}

button.secondary {
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: white;
  padding: 0.5rem 0.75rem;
  font-size: 14px;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-weight: 500;
}

button.secondary:hover {
  background: #fafafa;
}
button.secondary:active {
  box-shadow: none;
}
button.secondary:focus {
  outline: 0;
}

.today {
  font-weight: 600;
  color: black;
  text-decoration: underline;
}

/* .now {
  box-shadow: 0px -1px 0px 0px red;
} */

.icon {
  font-size: 1.5rem;
  margin: 0 1rem;
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  position: relative;
  top: -2px;
}
</style>
