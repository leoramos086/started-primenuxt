<script setup lang="ts">
import { useLayout } from './composables/useLayout'

const { layoutState, setMenuActive, toggleMenuAnchored, isSidebarActive } = useLayout()
</script>

<template>
  <div
    class="top-0 left-0 z-[999] fixed flex flex-col bg-[--surface-card] w-64 h-full layout-sidebar"
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
      @apply transition-[width] duration-300 ease-out w-[5.5rem]
    }

    &.layout-sidebar-active {
      .layout-sidebar {
        @apply w-64
      }
    }
  }
}
</style>
