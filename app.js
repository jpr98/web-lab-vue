new Vue({
    el: '#app',
    data: {
        value: "",
        preferred: "dog"
    },
    computed: {
        name () {
            return this.value == "" ? "Mascot owner" : this.value;
        },

        hero_class() {
            return this.preferred == "dog" ? "hero-dog" : "hero-cat";
        }
    },
    methods: {
        dogs: function() {
            this.preferred = "dog";
        },

        cats: function() {
            this.preferred = "cat";
        },

        footer: function() {
            this.$refs.footer.style.visibility = "hidden";
        }
    }
});