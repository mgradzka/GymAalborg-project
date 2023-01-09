<template>
  <footer>
    <!-- <div class="social-images"> -->
      
      <div class="lower-social">
        <img src="../../assets/gym-logo-red.png" class="logo" alt="" />
        <div class="social-icons">
          <font-awesome-icon class="fa-brands" icon="fa-brands fa-instagram" />
          <font-awesome-icon class="fa-brands" icon="fa-brands fa-facebook" />
          <font-awesome-icon class="fa-brands youtube" icon="fa-brands fa-youtube" />
        </div>
      </div>
    <!-- </div> -->
    <div class="footer-div footer-sponsor">
      <h4>Sponsors</h4>

      <p>Aarestrup Værktøjs- og Maskinfabrik</p>
      <img src="../../assets/sponsor.png" alt="" />
    </div>
    <div class="footer-div contact-first">
      <h4>Contact</h4>

      <ul>
        <li>GymAalborg Karlskogavej 8B, 9200 Aalborg SV</li>
        <li>Tlf: 22 90 26 76</li>
        <li>E-mail: kontakt@gymaalborg.dk</li>
        <li>CVR: 37781819</li>
      </ul>
    </div>

    <div class="footer-div contact-second">
      <h4>Contact</h4>
      <ul>
        <li>Terms of use</li>
        <li>Privacy policy</li>
        <li>Terms of sale</li>
        <li>Rental conditions</li>
      </ul>
    </div>

    <div id="mapid"></div>
  </footer>
</template>

<script>
import leaflet from "leaflet";
import { onMounted } from "vue";
export default {
  setup() {
    let mymap;
    onMounted(() => {
      mymap = leaflet
        .map("mapid")
        .setView([57.02146500049752, 9.88878451227478], 13);

      leaflet
        .tileLayer(
          "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibm90aGVyeW5uIiwiYSI6ImNsY2tqZGt0YTBrejAzcHFteG1ueHhpbXoifQ.g_c3jyc7lKaOBcl2FA3mOA",
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            // center: 'center',
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
              "pk.eyJ1Ijoibm90aGVyeW5uIiwiYSI6ImNsY2tqZGt0YTBrejAzcHFteG1ueHhpbXoifQ.g_c3jyc7lKaOBcl2FA3mOA",
          }
        )
        .addTo(mymap);

      let marker = leaflet
        .marker([57.02146500049752, 9.88878451227478])
        .addTo(mymap);

      marker.bindPopup("GymAalborg").openPopup();
    });
  },
};
</script>

<style scoped>


p {
  font-size: 1rem;
}

.fa-brands {
  font-size: 5rem
}

footer {
  display: flex;
  flex-direction: row;
  /* grid-template-areas: "social contact1 contact2 sponsors map"; */
  background-color: #bf4c21;
  color: white;
  gap: 5rem;
  padding: 4rem;
  justify-content: center;
}

h4 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

p,
li {
  font-weight: 200;
  font-size: 1.2rem;
  line-height: 1.8rem;
}

.footer-div {
  width: 20rem;
  margin-top: 3rem;
}

.footer-div img {
  max-width: 15rem;
}

ul {
  list-style: none;
}
.logo {
  max-width: 15rem;
  height: 15rem;
}

#mapid {
  height: 20rem;
  width: 25%;
}

.lower-social {
  display: flex;
  flex-direction: column;
  row-gap: 3%;  
}

.social-icons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.fa-brands {
  width: 20%;
}

.youtube {
  width: 25%;
}
</style>
