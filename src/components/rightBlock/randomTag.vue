<template>
    <div id="tags">
        <dl>
            <dt>随机标签云</dt>
            <dd v-for="(tag,index) in _tags" :key="tag-index">
                {{tag}}
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:['tags'],
    computed:{
        _tags(){
            return this.tags.sort(()=>{
                return Math.random() - 0.5
            })
        }
    }
}
</script>