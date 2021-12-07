<script lang="ts" setup></script>

<template>
    <div class="about">
        <p>This is about Yilu Studio template</p>
        <div class="logo">
            <img src="@/assets/yilu.jpg" alt="yilu" />
        </div>
    </div>
</template>

<style scoped>
.about {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logo {
    width: 200px;
    height: 200px;
    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.6);
    border-radius: 100px;
    overflow: hidden;
}

img {
    width: 100%;
    height: 100%;
}
</style>
