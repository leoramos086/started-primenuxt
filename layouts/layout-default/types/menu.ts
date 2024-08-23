import type { FunctionalComponent } from 'vue'
import type { LucideProps } from 'lucide-vue-next'

export interface MenuItem {
  label: string
  icon?: FunctionalComponent<LucideProps>
  to?: string
  url?: string
  class?: string
  separator?: boolean
  target?: string
  visible?: boolean
  disabled?: boolean
  command?: (payload: { originalEvent: Event, item: MenuItem }) => void
  items?: MenuItem[]
}
