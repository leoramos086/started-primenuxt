<script setup lang="ts">
const { toggleMenuMobile } = useLayout()
</script>

<template>
  <div class="flex justify-between items-center px-4 py-0 w-full min-h-[4.4rem]">
    <div class="px-4">
      <Button
        v-if="$viewport.isLessThan('desktop')"
        plain
        text
        rounded
        @click="toggleMenuMobile()"
      >
        <template #icon="scope">
          <span :class="scope.class">
            <IconMenu />
          </span>
        </template>
      </Button>
    </div>
    <div class="flex gap-2 px-4">
      <ButtonDarkMode />
      <Button plain text rounded>
        <template #icon="scope">
          <span :class="scope.class">
            <IconUserRound />
          </span>
        </template>
      </Button>
    </div>
  </div>
</template>
