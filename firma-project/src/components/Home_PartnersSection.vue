<template>
	<div class="mt-20">
		<h4 class="text-center text-xl">Utvalgte kunder og partnere</h4>
		<div class="mt-5 -mx-4 px-3 py-6 flex gap-12 bg-gray-700">
			<div class="w-9/12 h-32 bg-gray-600 flex gap-6 mx-auto overflow-x-scroll">
				<home_Partner-div></home_Partner-div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Home_PartnerDiv from './Home_PartnerDiv.vue';
</script>