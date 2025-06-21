<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

const props = defineProps<{ productId: string }>()
const productDetails = ref<any>()

onMounted(async () => {
    console.log('fetching product details')
    const products = await axios.get(`https://dummyjson.com/products/${props.productId}`)
    productDetails.value = products.data
}
)

</script>

<template>


    <Suspense>
        <div>
            <!-- component with nested async dependencies -->
            <h2>
                {{ productDetails?.title }}
            </h2>
            <p>
                {{ productDetails?.description }}
            </p>
            <p>
                Price: ${{ productDetails?.price }}
            </p>
            <div>
                <template v-for="(item, index) in productDetails?.images" :key="index">
                    <img class="product-image" :src="item" :alt="`Product Image - ${index + 1}`">
                </template>
            </div>
        </div>

        <!-- loading state via #fallback slot -->
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<style scoped>
.product-image {
    width: 300px;
    height: auto;
}
</style>