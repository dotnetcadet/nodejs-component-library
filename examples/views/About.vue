<template>
  <Flex :padding="2" :spacing="{ vertical: 5 }">
    <FlexColumn v-bind="column">
      <Spinner />
    </FlexColumn>
    <FlexColumn v-bind="column">
      <div>value 1</div>
      <div>value 2</div>
    </FlexColumn>
  </Flex>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Flex, FlexRow, FlexColumn, Spinner, useAppConfig, FlexColumnConfig } from '../../src'

export default defineComponent({
  components: {
    Flex,
    FlexRow,
    FlexColumn ,
    Spinner
  },
  methods: {
    test(input: string) {

    }
  },
  data() {
    const text = ref('')
    const config = useAppConfig()
    const column: FlexColumnConfig = {
      rounded: 'md',
      padding: 2, 
      background:'blue-400',
      border: { color: 'blue-500', size: 1 },
      shadow: { size: 'xl', color: 'blue-500'},
    }
    return {
      text,
      column,
      items: [
        'Column 1',
        'Column 2',
        'Column 3'
      ]
    }
  }
})
</script>
