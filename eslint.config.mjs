import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: true,
  },
})
  .override(
    'nuxt/vue/rules', // specify the name of the target config, or index
    {
      // merge with the target config
      rules: {
        'vue/max-attributes-per-line': ['error', {
          singleline: {
            max: 3,
          },
          multiline: {
            max: 1,
          },

        }],
      },
    },
  )
  .override(
    'nuxt/stylistic',
    {
      rules: {
        'max-len': ['error', { code: 120 }],
      },
    },
  )
