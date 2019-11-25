<template>
    <ol>
        <ul v-for="item in items" v-bind:key="item">
            {{ item.text }}
        </ul>
    </ol>
</template>
<script>
export default {
    name: 'ItemList',
    props: {
        items: Array
    }
}
</script>