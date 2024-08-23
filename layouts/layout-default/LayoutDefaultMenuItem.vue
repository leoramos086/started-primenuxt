<script setup lang="ts">
import { useLayout } from './composables/useLayout'
import type { MenuItem } from './types/menu'

const route = useRoute()

const { layoutState, isSidebarActive, setActiveMenuItem, onMenuToggle } = useLayout()

interface Props {
  item: MenuItem
  index?: number
  root?: boolean
  parentItemKey?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  index: 0,
  root: true,
  parentItemKey: null,
})

const isActiveMenu = ref(false)
const itemKey = ref<string | null>(null)

onBeforeMount(() => {
  itemKey.value = props.parentItemKey ? props.parentItemKey + '-' + props.index : String(props.index)

  const activeItem = layoutState.activeMenuItem

  isActiveMenu.value = activeItem === itemKey.value || activeItem ? activeItem.startsWith(itemKey.value + '-') : false
})

watch(
  () => layoutState.activeMenuItem,
  (newVal) => {
    isActiveMenu.value = newVal === itemKey.value || (newVal as string).startsWith(itemKey.value + '-')
  },
)

function itemClick(event: Event, item: MenuItem) {
  if (item.disabled) {
    event.preventDefault()
    return
  }

  if ((item.to || item.url) && (isSidebarActive)) {
    onMenuToggle()
  }

  if (item.command) {
    item.command({ originalEvent: event, item: item })
  }

  const foundItemKey = item.items ? (isActiveMenu.value ? props.parentItemKey : itemKey.value) : itemKey.value

  setActiveMenuItem(foundItemKey)
}

function checkActiveRoute(item: MenuItem) {
  return route.path === item.to
}
</script>

<template>
  <li :class="{ 'layout-root-menuitem': root, 'active-menuitem': isActiveMenu }">
    <div v-if="root && item.visible !== false" class="layout-menuitem-root-text">
      {{ item.label }}
    </div>
    <a
      v-if="(!item.to || item.items) && item.visible !== false"
      :href="item.url"
      :class="item.class"
      :target="item.target"
      tabindex="0"
      @click="itemClick($event, item)"
    >
      <i class="layout-menuitem-icon">
        <component :is="item.icon" />
      </i>
      <span class="layout-menuitem-text">{{ item.label }}</span>

      <i v-if="item.items" class="layout-submenu-toggler">
        <IconChevronDown :size="15" />
      </i>
    </a>
    <RouterLink
      v-if="item.to && !item.items && item.visible !== false"
      :class="[item.class, { 'active-route': checkActiveRoute(item) }]"
      tabindex="0"
      :to="item.to"
      @click="itemClick($event, item)"
    >
      <i class="layout-menuitem-icon">
        <component :is="item.icon" />
      </i>
      <span class="layout-menuitem-text">{{ item.label }}</span>
      <i v-if="item.items" class="layout-submenu-toggler pi pi-angle-down pi-fw" />
    </RouterLink>
    <Transition v-if="item.items && item.visible !== false" name="layout-submenu">
      <ul v-show="root ? true : isActiveMenu" class="layout-submenu">
        <LayoutDefaultMenuItem
          v-for="(child, i) in item.items"
          :key="itemKey + '_' + i"
          :index="i"
          :item="child"
          :parent-item-key="itemKey"
          :root="false"
        />
      </ul>
    </Transition>
  </li>
</template>

<style lang="scss">
@media screen and (screen(desktop)) {
  .layout-container.layout-drawer {

    .layout-menuitem-root-text,
    .layout-menuitem-text {
      @apply transition-opacity duration-300 ease-out;
    }

    &:not(.layout-sidebar-active) {

      .layout-menuitem-root-text,
      .layout-menuitem-text {
        @apply opacity-0
      }
    }
  }
}
</style>
