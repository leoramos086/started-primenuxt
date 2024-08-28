<script setup lang="ts">
definePageMeta({
  layout: false,
})

const formLogin = reactive({
  email: '',
  password: '',
})
</script>

<template>
  <div class="absolute bg-surface-100 dark:bg-surface-950 w-full h-full">
    <div
      class="right-0 fixed flex flex-col justify-between items-center bg-surface-0 dark:bg-surface-900 desktop:rounded-l-3xl w-4/12 tablet:w-full h-full min-h-[400px]"
    >
      <div class="flex justify-end p-4 w-full">
        <ButtonDarkMode :size="20" />
      </div>
      <div class="flex flex-col justify-center gap-6 px-10 w-full tablet:max-w-lg h-full">
        <div class="flex flex-col gap-2">
          <label for="email">Email</label>
          <InputText id="email" v-model="formLogin.email" aria-describedby="login.email" />
          <small id="email-help" />
        </div>
        <div class="flex flex-col">
          <label for="password">Senha</label>
          <Password
            id="password"
            v-model="formLogin.password"
            aria-describedby="login.password"
            toggle-mask
            :feedback="false"

            :pt="{ root: 'grid' }"
          />
          <small id="password-help" />
        </div>
        <Button as="router-link" label="Entrar" size="large" to="/" class="mt-6" />
      </div>
    </div>
  </div>
</template>
