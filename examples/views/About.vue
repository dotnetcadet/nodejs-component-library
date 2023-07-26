<template>
  <Form>
    <FormTextArea 
      :label="{
        placement: 'top',
        value: 'test'
      }" 
      :summary="{
        placement: 'left',
        value: 'Some info describing the Text Area'
      }" 
      :disabled="false" 
      :rounded="'lg'" 
      :onDisable="{
        background: 'amber-900'
      }"
    />

  </Form>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Grid, GridColumn, Flex, FlexRow, FlexColumn, useAppConfig, FormTextArea, Form } from '../../src'

export default defineComponent({
  components: {
    Grid,
    GridColumn,
    Flex,
    FlexRow,
    FlexColumn,
    Form,
    FormTextArea
  },
  methods: {
    test(input: string) {
      console.log(input)
    }
  },
  data() {

    const config = useAppConfig()

    console.log(config)
    return {
      items: [
        'Column 1',
        'Column 2',
        'Column 3'
      ]
    }
  }
})
</script>
