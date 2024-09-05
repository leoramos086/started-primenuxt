<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'

definePageMeta({
  layout: false,
})

const { login } = useAuth()
const toast = useToast()

const validationSchema = toTypedSchema(
  zod.object({
    email: zod.string().min(1, { message: 'Campo obrigatório' }).email({ message: 'Precisa ser um e-mail válido' }),
    password: zod.string().min(1, { message: 'Campo obrigatório' }),
  }),
)

const { values, errors, meta, validate, setTouched } = useForm({
  validationSchema,
})

const { value: email } = useField<string>('email')
const { value: password } = useField<string>('password')

async function submitForm() {
  if (!await validated()) return

  try {
    await login((values as Auth.LoginForm))

    await navigateTo('/')
  }
  catch (e) {
    const message = (typeof e === 'string') ? e : 'Não conseguimos. Por favor, tente novamente mais tarde!'

    toast.add({
      summary: 'Ops!',
      severity: 'error',
      detail: message,
      life: 3000,
    })
    console.error('Error login:', e)
  }
}

async function validated() {
  setTouched(true)

  return (await validate()).valid
}
</script>

<template>
  <div class="absolute bg-surface-100 dark:bg-surface-950 w-full h-full">
    <div
      class="right-0 fixed flex flex-col justify-between items-center bg-surface-0 dark:bg-surface-900 desktop:rounded-l-3xl w-4/12 tablet:w-full h-full min-h-[400px]"
    >
      <div class="flex justify-end p-4 w-full">
        <ButtonDarkMode :size="20" />
      </div>

      <form class="flex flex-col justify-center gap-6 px-10 w-full tablet:max-w-lg h-full">
        <div class="flex flex-col gap-2">
          <label for="email">Email</label>
          <InputText v-model="email" aria-describedby="email-help" :invalid="errors.email !== undefined" />
          <small v-if="meta.touched && errors.email" id="email-help" class="p-error">
            {{ errors.email }}
          </small>
        </div>

        <div class="flex flex-col mb-4">
          <label for="password">Senha</label>
          <Password
            id="password"
            v-model="password"
            aria-describedby="login.password"
            toggle-mask
            :feedback="false"
            :invalid="errors.password !== undefined"
            :pt="{ root: 'grid' }"
            class="p-invalid"
          />
          <small v-if="meta.touched && errors.password" id="password-help" class="p-error">
            {{ errors.password }}
          </small>
        </div>

        <Button label="Entrar" @click="submitForm" />
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.p-error {
  color: var(--p-inputtext-invalid-border-color);
}
</style>
