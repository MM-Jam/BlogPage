<template>
    <div id="hot">
        <dl>
            <dt>最近热门</dt>
            <dd v-for="hot in hotList" :key="hot.id">{{hot}}</dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:['hotList']
}
</script>