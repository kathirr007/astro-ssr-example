<script setup lang="ts">
import { useProducts } from '../../composables/products'
import { useQuery } from '@tanstack/vue-query'

const { getAll } = useProducts()

const { isPending, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: getAll,
})

</script>

<template>
    <div v-if="isPending">Loading...</div>
    <div v-else-if="isError">An error has occurred: {{ error }}</div>
    <template v-else>
        <div v-for="item in (data as any).products" :key="item.id">
            <a :href="`/products/${item.id}`">
                {{ item.title }}
            </a>
        </div>
    </template>
</template>

<style scoped></style>