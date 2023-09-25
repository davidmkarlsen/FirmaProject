<template>
	<div class="mt-20">
		<h4 class="text-center text-4xl">Dette er våre<br>fordeler</h4>
		<div class="flex flex-col mt-10 -mx-4 gap-9">
			<div class="px-8">
				<home_Fordel-div class="border-b-[1px] border-gray-600"></home_Fordel-div>
				<home_Fordel-div class="border-b-[1px] border-gray-600"></home_Fordel-div>
				<home_Fordel-div></home_Fordel-div>
			</div>
			<div class="w-100 h-52 bg-slate-300">
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Home_FordelDiv from './Home_FordelDiv.vue';
</script>