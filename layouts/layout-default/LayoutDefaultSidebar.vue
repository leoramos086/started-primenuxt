<script setup lang="ts">
import { useLayout } from './composables/useLayout'
import LayoutDefaultMenu from './LayoutDefaultMenu.vue'

const { layoutState, setMenuActive, toggleMenuAnchored, isSidebarActive } = useLayout()
</script>

<template>
  <div
    class="top-0 left-0 z-[999] fixed flex flex flex-col flex-col bg-[--surface-card] w-64 h-full overflow-hidden layout-sidebar"
    @mouseenter="setMenuActive(true)"
    @mouseleave="setMenuActive(false)"
  >
    <div class="flex gap-5 px-8 py-6" :class="isSidebarActive ? 'justify-between' : 'justify-center'">
      <p>
        L<span v-if="isSidebarActive">ogo</span>
      </p>
      <RadioButton
        v-if="$viewport.isGreaterOrEquals('desktop') && layoutState.menuDesktopActive"
        v-model="layoutState.menuAnchored"
        :pt="{ icon: 'opacity-0', box: 'border-primary border-2' }"
        binary
        @click="toggleMenuAnchored"
      />
    </div>
    <div class="flex px-2 w-full h-auto overflow-hidden overflow-y-auto layout-menu-container">
      <LayoutDefaultMenu />
    </div>
    <div class="h-2">
      <p />
    </div>
  </div>
</template>

<style lang="scss">
@media screen and (screen(mobile)) {
  .layout-sidebar {
    @apply transform transition-transform -translate-x-full duration-300 ease-out
  }

  .layout-container.layout-mobile-active .layout-sidebar {
    @apply transform translate-x-0
  }
}

@media screen and (screen(desktop)) {
  .layout-container.layout-drawer {
    .layout-sidebar {
      @apply transition-[width] duration-300 ease-out w-[4.3rem]
    }

    &:not(.layout-sidebar-active) {
      .layout-menu-container {
        @apply overflow-y-hidden
      }
    }

    &.layout-sidebar-active {
      .layout-sidebar {
        @apply w-64
      }
    }
  }
}
</style>
