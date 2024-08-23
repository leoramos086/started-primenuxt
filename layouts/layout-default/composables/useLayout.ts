interface LayoutConfig {
  menuMode: 'drawer'
  darkTheme: boolean
}

interface LayoutState {
  menuDesktopActive: boolean
  menuAnchored: boolean
  menuMobileActive: boolean
  activeMenuItem: string | null
}

const layoutConfig = reactive<LayoutConfig>({
  menuMode: 'drawer',
  darkTheme: false,
})

const layoutState = reactive<LayoutState>({
  menuDesktopActive: false,
  menuAnchored: false,
  menuMobileActive: false,
  activeMenuItem: null,
})

export function useLayout() {
  const { $viewport } = useNuxtApp()

  function setMenuActive(status: boolean) {
    if (layoutState.menuAnchored) return
    layoutState.menuDesktopActive = status
  }

  const setActiveMenuItem = (item: string | null) => {
    layoutState.activeMenuItem = item
  }

  function toggleMenuAnchored() {
    layoutState.menuAnchored = !layoutState.menuAnchored
  }

  function toggleMenuMobile(status: boolean | null = null) {
    layoutState.menuMobileActive = (status !== null) ? status : !layoutState.menuMobileActive
  }

  function onMenuToggle(status: boolean | null = null) {
    if ($viewport.breakpoint.value === 'desktop') {
      layoutState.menuMobileActive = (status !== null) ? status : !layoutState.menuMobileActive
    }
    else {
      layoutState.menuDesktopActive = (status !== null) ? status : !layoutState.menuDesktopActive
    }
  }

  const toggleDarkMode = () => {
    if (!document.startViewTransition) {
      executeDarkModeToggle()

      return
    }

    document.startViewTransition(() => executeDarkModeToggle())
  }

  const executeDarkModeToggle = () => {
    layoutConfig.darkTheme = !layoutConfig.darkTheme
    document.documentElement.classList.toggle('app-dark')
  }

  const isSidebarActive = computed(() => layoutState.menuMobileActive || layoutState.menuDesktopActive)

  return {
    layoutConfig: readonly(layoutConfig),
    layoutState: readonly(layoutState),
    setMenuActive,
    setActiveMenuItem,
    onMenuToggle,
    toggleMenuAnchored,
    toggleMenuMobile,
    toggleDarkMode,
    isSidebarActive,
  }
}
