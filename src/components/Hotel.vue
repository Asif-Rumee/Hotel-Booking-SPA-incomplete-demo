<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img alt="Vue logo" src="../assets/hotelpic.png" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ hotel.name }}</div>
      <p class="text-gray-700 text-base">{{ hotel.id }}</p>
      <p class="text-gray-700 text-base">{{ hotel.location }}</p>
      <p class="text-gray-700 text-base">{{ hotel.checkin }}</p>
      <p class="text-gray-700 text-base">{{ hotel.checkout }}</p>
    </div>
    <div>
      <router-link
        :to="{name: 'Booking', params: {hotel_id: hotel.id, hotel_name: hotel.name, hotel_location: hotel.location, hotel_checkin: hotel.checkin, hotel_checkout: hotel.checkout}}"
        class="w-1/5 bg-blue-500 hover:bg-blue-700 text-white rounded text-xl px-5 py-1 mx-5"
        @click="bookHotel"
      >book now</router-link>
    </div>
    <div class="px-6 py-4">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      >#photography</span>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      >#travel</span>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
      >#winter</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hotel: {}
  },
  name: "Hotel"
};
</script>