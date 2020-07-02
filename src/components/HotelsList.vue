<template>
  <div>
    <div class="flex justify-center">
      <span class="text-2xl">Find a hotel</span>
    </div>

    <div class="flex justify-center mb-5 mt-2">
      <input class="w-1/5 border mx-5 rounded" v-model="location" placeholder="location" />

      <HotelDatePicker
        format="MM/DD/YYYY"
        class="w-2/5 mx-5"
        @check-in-changed="setCheckinDate"
        @check-out-changed="setCheckoutDate"
      ></HotelDatePicker>
      <input class="w-1/5 border mx-5 rounded" v-model="children" placeholder="children" />
      <button
        class="w-1/5 bg-blue-500 hover:bg-blue-700 text-white rounded text-xl px-5 py-1 mx-5"
        @click="getHotels"
      >search</button>
    </div>
    <div class="flex justify-center my-5">
      <div class="flex flex-wrap" style="width:50%">
        <ul v-for="hotelItem in hotelsListFiltered" :key="hotelItem.id">
          <li>
            <Hotel :hotel="hotelItem"></Hotel>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HotelDatePicker from "vue-hotel-datepicker";
import Hotel from "./Hotel.vue";

export default {
  name: "HotelsList",
  components: {
    HotelDatePicker,
    Hotel
  },
  data() {
    return {
      name: "",
      location: "lisbon",
      checkin: "",
      checkout: "",
      children: 0,
      hotelsList: [],
      hotelsListFiltered: []
    };
  },

  methods: {
    setCheckinDate(newDateIn) {
      this.checkin = newDateIn.toLocaleDateString();
      console.log(newDateIn.toLocaleDateString());
    },
    setCheckoutDate(newDateOut) {
      this.checkout = newDateOut.toLocaleDateString();
      console.log(newDateOut.toLocaleDateString());
    },
    getHotels() {
      var list;
      axios
        .get("hotels.json")
        .then(response => (this.hotelsList = response.data));
      console.log(list);
      this.hotelsListFiltered = this.hotelsList.filter(x => {
        return this.checkin == x.checkin && this.checkout == x.checkout;
      });
    }
  }
};
</script>
<style>
@import "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css";
</style>