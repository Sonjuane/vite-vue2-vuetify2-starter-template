<template>
  <div>
    <div class="tabs" ref="tabs">
      <slot name="tabs">
        <button class="tablinks">London</button>
        <button class="tablinks">Paris</button>
        <button class="tablinks">Tokyo</button>
      </slot>
    </div>
    <div class="tab-content-wrapper" ref="tabcontent">
      <slot name="tabcontent"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsComponent",
  data() {
    return {
      activeTab: null,
      tabcontent: null,
    };
  },
  methods: {
    openCity(event, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      event.currentTarget.className += " active";
    },
    init() {
      let tabs = this.$refs.tabs.children;
      this.tabcontent = this.$refs.tabcontent;
      for (let tab of tabs) {
        let target = tab.getAttribute("target");
        tab.addEventListener("click", () => {
          this.enableTab(target);
        });
      }
    },
    enableTab(targetId) {
      let activeTab = this.activeTab;
      console.log("activeTab", activeTab);
      let tabcontent = this.tabcontent;
      let target = tabcontent.querySelector(`#${targetId}`);

      // REMOVE ACTIVE TAB COMPONENT IF IT EXISTS
      if (this.activeTab) this.activeTab.classList.remove("active");

      if (target) {
        console.log("target", target);
        this.activeTab = target;
        this.activeTab.classList.add("active");
        console.log(activeTab);
      }
    },
  },
  mounted() {
    window.testTabs = this;
    this.$nextTick(() => {
      this.init();
    });
  },
};
</script>

<style lang="scss">
/* Style the tab */
.tabs {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tabs button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tabs button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tabs button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  -webkit-animation: fadeEffect 0.5s;
  animation: fadeEffect 0.5s;

  &.active {
    display: block;
  }
}

/* Fade in tabs */
@-webkit-keyframes fadeEffect {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeEffect {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>