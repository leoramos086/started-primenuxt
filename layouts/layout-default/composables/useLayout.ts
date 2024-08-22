interface LayoutConfig {
  menuMode: 'drawer'
  darkTheme: boolean
}

interface LayoutState {
  menuDesktopActive: boolean
  menuAnchored: boolean
  menuMobileActive: boolean
}

const layoutConfig = reactive<LayoutConfig>({
  menuMode: 'drawer',
  darkTheme: false,
})

const layoutState = reactive<LayoutState>({
  menuDesktopActive: false,
  menuAnchored: false,
  menuMobileActive: false,
})

export function useLayout() {
  function setMenuActive(status: boolean) {
    if (layoutState.menuAnchored) return
    layoutState.menuDesktopActive = status
  }

  function toggleMenuAnchored() {
    layoutState.menuAnchored = !layoutState.menuAnchored
  }

  function toggleMenuMobile(status: boolean | null = null) {
    layoutState.menuMobileActive = (status !== null) ? status : !layoutState.menuMobileActive
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
    toggleMenuAnchored,
    toggleMenuMobile,
    toggleDarkMode,
    isSidebarActive,
  }
}
