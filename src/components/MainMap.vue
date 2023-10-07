<template>
  <div class="container" :style="{ backgroundImage: backgroundImage }">
    <ButtonInvert @toggle-invert-filter="toggleInvertFilter" />
    <div id="map"></div>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ButtonInvert from "./ButtonInvert.vue"

export default {
  name: 'MainMap',
  data() {
    return {
      isFilterInverted: false,
      map: null
    };
  },
  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      this.map = L.map('map').setView([-19, -45], 6.1);

      const mywms = L.tileLayer.wms("/wms/master/IDE/ows?", {
        layers: 'IDE:ide_1102_mg_microrregioes_ibge_pol',
        format: 'image/png',
        version: '1.1.1',
        attribution: "country layer"
      });
      mywms.addTo(this.map);
    },
    toggleInvertFilter() {
      this.isFilterInverted = !this.isFilterInverted;

      const mapElement = document.getElementById('map');
      if (mapElement) {
        if (this.isFilterInverted) {
          mapElement.style.filter = 'invert(100%)';
        } else {
          mapElement.style.filter = 'none';
        }
      }
    }
  },
  components: {
    ButtonInvert
  }
};
</script>

<style scoped>
#map {
  width: 40%;
  height: 60vh;
  display: flex;
  flex-direction: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 5vh;
  transition: filter 0.5s ease;
}
@media screen and (max-width: 1000px) {
  #map {
    height: 50vh;
   width:90%;
   margin-top: 1vh;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 88vh;
}
</style>
