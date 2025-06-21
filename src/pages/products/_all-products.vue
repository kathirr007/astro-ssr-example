<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
const allProducts = ref<any[]>([])

onMounted(async () => {
    const products = await axios.get('https://dummyjson.com/products')
    allProducts.value = products.data.products
}
)

</script>

<template>
    All Products list
    <div v-for="item in allProducts" :key="item.id">
        <a :href="`/products/${item.id}`">
            {{ item.title }}
        </a>
    </div>
</template>

<style scoped></style>