<script setup lang="ts">
import { useProducts } from '../../composables/products';
import { useQuery } from '@tanstack/vue-query'

const props = defineProps<{ productId: string }>()

const { getOne } = useProducts()

const { isPending, isError, data: productDetails, error } = useQuery({
    queryKey: ['product-details'],
    queryFn: () => getOne(props.productId)
})

</script>

<template>

    <div v-if="isPending">
        Fetching product details...
    </div>

    <div v-else-if="isError">
        An error has occurred: {{ error?.message }}
    </div>

    <template v-else>
        <h2>
            {{ (productDetails as any)?.title }}
        </h2>
        <p>
            {{ (productDetails as any)?.description }}
        </p>
        <p>
            Price: ${{ (productDetails as any)?.price }}
        </p>
        <div>
            <template v-for="(item, index) in (productDetails as any)?.images" :key="index">
                <img class="product-image" :src="item" :alt="`Product Image - ${index + 1}`">
            </template>
        </div>
    </template>
</template>

<style scoped>
.product-image {
    width: 300px;
    height: auto;
}
</style>