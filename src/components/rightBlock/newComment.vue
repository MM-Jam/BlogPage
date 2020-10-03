<template>
    <div id="new">
        <dl>
            <dt>最新评论</dt>
            <dd v-for="comment in commentList" :key="comment.id">
                <span class="name">{{comment.username}}</span>
                <span class="date">[{{comment.ctime}}]</span>
                <div class="content">{{comment.content}}</div>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:['commentList']
}
</script>