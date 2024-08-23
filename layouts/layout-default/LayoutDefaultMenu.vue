<script setup lang="ts">
import { ref } from 'vue'
import LayoutDefaultMenuItem from './LayoutDefaultMenuItem.vue'
import type { MenuItem } from './types/menu'
import { IconHouse, IconNewspaper } from '#components'

const model = ref<MenuItem[]>([
  {
    label: 'Principal',
    items: [{ label: 'Dashboard', icon: IconHouse, to: '/' }],
  },
  {
    label: 'Components',
    items: [{ label: 'Cards', icon: IconNewspaper, to: '/cards' }],
  },
  // {
  //   label: 'Administração',
  //   items: [
  //     { label: 'Form Layout', icon: IconMoon, to: '/uikit/formlayout' },
  //     { label: 'Input', icon: IconMoon, to: '/uikit/input' },
  //     { label: 'Button', icon: IconMoon, to: '/uikit/button', class: 'rotated-icon' },
  //     { label: 'Table', icon: IconMoon, to: '/uikit/table' },
  //     { label: 'List', icon: IconMoon, to: '/uikit/list' },
  //     { label: 'Tree', icon: IconMoon, to: '/uikit/tree' },
  //     { label: 'Panel', icon: IconMoon, to: '/uikit/panel' },
  //     { label: 'Overlay', icon: IconMoon, to: '/uikit/overlay' },
  //     { label: 'Media', icon: IconMoon, to: '/uikit/media' },
  //     { label: 'Menu', icon: IconMoon, to: '/uikit/menu' },
  //     { label: 'Message', icon: IconMoon, to: '/uikit/message' },
  //     { label: 'File', icon: IconMoon, to: '/uikit/file' },
  //     { label: 'Chart', icon: IconMoon, to: '/uikit/charts' },
  //     { label: 'Timeline', icon: IconMoon, to: '/uikit/timeline' },
  //     { label: 'Misc', icon: IconMoon, to: '/uikit/misc' },
  //   ],
  // },

  // {
  //   label: 'Hierarchy',
  //   items: [
  //     {
  //       label: 'Submenu 1',
  //       icon: IconMoon,
  //       items: [
  //         {
  //           label: 'Submenu 1.1',
  //           icon: IconMoon,
  //           items: [
  //             { label: 'Submenu 1.1.1', icon: IconMoon },
  //             { label: 'Submenu 1.1.2', icon: IconMoon },
  //             { label: 'Submenu 1.1.3', icon: IconMoon },
  //           ],
  //         },
  //         {
  //           label: 'Submenu 1.2',
  //           icon: IconMoon,
  //           items: [{ label: 'Submenu 1.2.1', icon: IconMoon }],
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Submenu 2',
  //       icon: IconMoon,
  //       items: [
  //         {
  //           label: 'Submenu 2.1',
  //           icon: IconMoon,
  //           items: [
  //             { label: 'Submenu 2.1.1', icon: IconMoon },
  //             { label: 'Submenu 2.1.2', icon: IconMoon },
  //           ],
  //         },
  //         {
  //           label: 'Submenu 2.2',
  //           icon: IconMoon,
  //           items: [{ label: 'Submenu 2.2.1', icon: IconMoon }],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   label: 'Get Started',
  //   items: [
  //     {
  //       label: 'Documentation',
  //       icon: IconMoon,
  //       to: '/documentation',
  //     },
  //     {
  //       label: 'View Source',
  //       icon: IconSun,
  //       url: 'https://github.com/primefaces/sakai-vue',
  //       target: '_blank',
  //     },
  //   ],
  // },
])
</script>

<template>
  <ul class="w-full layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <LayoutDefaultMenuItem v-if="!item.separator" :item="item" :index="i" />
      <li v-if="item.separator" class="menu-separator" />
    </template>
  </ul>
</template>

<style lang="scss">
.layout-menu {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-wrap: nowrap;

  .layout-root-menuitem {
    >.layout-menuitem-root-text {
      font-size: 0.857rem;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--text-color-secondary);
      margin: 1rem 0 0.5rem;
      padding-left: 0.25rem;
    }

    >a {
      display: none;
    }
  }

  a {
    user-select: none;

    &.active-menuitem {
      >.layout-submenu-toggler {
        transform: rotate(-180deg);
      }
    }
  }

  li.active-menuitem {
    >a {
      .layout-submenu-toggler {
        transform: rotate(-180deg);
      }
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    a {
      display: flex;
      align-items: center;
      position: relative;
      outline: 0 none;
      color: var(--text-color);
      cursor: pointer;
      padding: 0.75rem;
      border-radius: var(--content-border-radius);
      transition:
        background-color var(--element-transition-duration),
        box-shadow var(--element-transition-duration);

      .layout-menuitem-icon {
        margin-right: 0.5rem;
      }

      .layout-submenu-toggler {
        font-size: 75%;
        margin-left: auto;
        transition: transform var(--element-transition-duration);
      }

      &.active-route {
        font-weight: 700;
        color: var(--primary-color);
      }

      &:hover {
        background-color: var(--surface-hover);
      }

      &:focus {
        outline-offset: -1px;
        box-shadow: inset var(--focus-ring-shadow);
      }
    }

    ul {
      overflow: hidden;
      border-radius: var(--content-border-radius);

      li {
        a {
          margin-left: 1rem;
        }

        li {
          a {
            margin-left: 2rem;
          }

          li {
            a {
              margin-left: 2.5rem;
            }

            li {
              a {
                margin-left: 3rem;
              }

              li {
                a {
                  margin-left: 3.5rem;
                }

                li {
                  a {
                    margin-left: 4rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

.layout-submenu-enter-from,
.layout-submenu-leave-to {
  max-height: 0;
}

.layout-submenu-enter-to,
.layout-submenu-leave-from {
  max-height: 1000px;
}

.layout-submenu-leave-active {
  overflow: hidden;
  transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.layout-submenu-enter-active {
  overflow: hidden;
  transition: max-height 1s ease-in-out;
}
</style>
