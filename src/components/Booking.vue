<template>
  <div class="flex justify-center">
    <div>
      <div class="bm-5">
        <h1>booking page</h1>
        <p>Hotel id: {{ this.$route.params.hotel_id }}</p>
        <p>Hotel name: {{ this.$route.params.hotel_name }}</p>
        <p>Hotel location: {{ this.$route.params.hotel_location }}</p>
        <p>Hotel checkin date: {{ this.$route.params.hotel_checkin }}</p>
        <p>Hotel checkout date: {{ this.$route.params.hotel_checkout }}</p>
        <div>Successfully booked</div>
      </div>
      <div class="mx-5">
        <router-link
          :to="{name: 'home', }"
          class="w-1/5 bg-blue-500 hover:bg-blue-700 text-white rounded text-xl px-2 py-1"
          @click="bookHotel"
        >back to search</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Booking"
};
</script>
<style>
@import "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css";
</style>