<script setup lang="ts">
const { auth } = useAuth()
</script>

<template>
  <div class="layout-content">
    <Card>
      <template #title>
        Welcome {{ auth.user?.name }}
      </template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
          quas!
        </p>
      </template>
    </Card>
  </div>
</template>
