<template>
  <div class="wrapper">
    <Navbar />
    <slot></slot>
    <Sidebar />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
// import Footer from "../components/Footer.vue";
export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    // Footer,
  },
  methods: {
    initFunction: function () {
      document.body.classList.toggle("hold-transition");
      document.body.classList.toggle("sidebar-mini");
      document.body.classList.toggle("layout-fixed");
    },
  },
  created: function () {
    this.initFunction();
  },
};
</script>
