<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
	<div class="bg-gray-950">
		<header>
		<the-header></the-header>
		</header>
		<router-view class="pt-[80px]"></router-view>
		<footer>
			<the-footer></the-footer>
		</footer>
	</div>
</template>