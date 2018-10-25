<template>
    <div>
        <div :style="inputStyle"></div>
    </div>
</template>

<script>
export default {
    props: {
        inputStyle: {
            type: Object,
            default () {}
        }
    }
};
</script>

