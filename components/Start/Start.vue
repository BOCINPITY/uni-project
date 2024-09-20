<template>
	<uni-icons color="#0077FF" :type="heartType" size="20" @click="handleStart"></uni-icons>
</template>

<script setup>
	const props = defineProps({
		heartType:{
			type:String,
			default:"heart",
		}
	})
	// const emits = defineEmits(["handleStart"])
	const handleStart = () => {
		console.log(66)
	}
</script>

<style scoped>

</style>