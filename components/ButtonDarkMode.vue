<script setup lang="ts">
import { IconSun, IconMoon } from '#components'

const { toggleDarkMode, layoutConfig } = useLayout()

const props = withDefaults(defineProps<{ size?: number }>(), { size: 24 })
</script>

<template>
  <Button plain text rounded @click="toggleDarkMode">
    <template #icon>
      <component :is="layoutConfig.darkTheme ? IconSun : IconMoon" :size="props.size" />
    </template>
  </Button>
</template>
