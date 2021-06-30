<template>
    <div>
        <button @click="simpleEmit" class="btn btn-large btn-primary">Emit Root</button>
        <a href="/class">go to class</a>
        <a :href="url"></a>
        <img src="img.png" alt="">
        <img :src="img" :alt="img">
        </div>
</template>

<script>
export default {
    data(){
        return {
            url: "http://softobiz.com",
            img: "img.png"
        }
    },
    mounted(){
    this.$parent.$on("anyFunction",this.emitRoot);
    this.$on("callParent",this.emitParent);
    
    },
methods: {
    emitRoot() {
        this.$root.$emit("anyFunction","anyParam");
        
    },
    emitParent() {
        this.$parent.$emit("anyFunction","anyParam");
},
    onlyEmitParent(){
        this.$parent.parentEmitted();
    },
    simpleEmit() {
        this.$emit("callParent",'param');

        
    }
}
}

</script>




