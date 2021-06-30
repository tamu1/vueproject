<template>
    <div>
            <h1>Class</h1>
            <p>{{ name }}</p>
            <span class="menu-icon" :class="!isActive ? 'hide' : ''">Tamana sharma</span>
            <button @click="toggleClass">Change Color</button> <br><br>
            <br>
            <button @click="changeParentName">change parent name </button><br><br>
        
</div>
</template>
<script>
export default {
    props : {
        name : Number
    },
    data() {
        return {
            isActive : false
        }
    },
    created(){
        console.log("created");
    },
mounted() {
    this.$parent.$on("updateParentName",this.onUpdateParent);
    this.$on("onUpdateName",function() {
        alert("classnew3");
        
        
    });

},

    methods : {
        toggleClass(){
            this.isActive = !this.isActive;
            
        },
        changeParentName() {
           // document.addEventListener('change',function() {
           //     this.name = '';
           // });

            //setTimeout(function(){
              //  this.isActive = true;
            //}.bind(this), 3000);

            this.$emit("onUpdateName","tamana");
            this.$parent.updateParentName("tanu");
            this.$root("onUpdateName","tamana");

        },
        onUpdateParent(){
            alert("class");
        },

        onChangeRoot() {
            alert("class");

        },
    }
}
</script>

<style scoped>

.menu-icon{
    color: red;
}

.hide {
    display: none;
}

</style>
