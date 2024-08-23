<script setup lang="ts">
import { useLayout } from './composables/useLayout'
import LayoutDefaultSidebar from './LayoutDefaultSidebar.vue'
import LayoutDefaultTopbar from './LayoutDefaultTopbar.vue'

const { layoutConfig, layoutState, toggleMenuMobile } = useLayout()
const viewport = useViewport()

const sidebar = ref()

const containerClass = computed(() => {
  return {
    'layout-drawer': layoutConfig.menuMode == 'drawer',
    'layout-sidebar-active': layoutState.menuDesktopActive,
    'layout-sidebar-anchored': layoutState.menuAnchored,
    'layout-mobile-active': layoutState.menuMobileActive,
  }
})

onClickOutside(sidebar, () => {
  if (viewport.breakpoint.value == 'mobile' && layoutState.menuMobileActive) {
    toggleMenuMobile()
  }
})

watch(viewport.breakpoint, (newBreakpoint) => {
  if (newBreakpoint == 'desktop') {
    toggleMenuMobile(false)
  }
})
</script>

<template>
  <div class="layout-transparent-topbar group layout-container" :class="containerClass">
    <LayoutDefaultTopbar />

    <LayoutDefaultSidebar ref="sidebar" />

    <div class="layout-content-wrapper p-8 mobile:p-4">
      <div class="layout-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './assets/variables.scss';

.layout-container {
  min-height: 100vh;
  color: var(--text-color);
  background-color: var(--surface-ground);
}

.layout-container.layout-drawer {

  @media screen and (screen(desktop)) {

    .layout-content-wrapper {
      @apply ml-[4.3rem] overflow-x-hidden transition-[margin] duration-300 ease-out
    }

    &.layout-sidebar-anchored {

      .layout-content-wrapper {
        @apply ml-64
      }
    }
  }
}
</style>
