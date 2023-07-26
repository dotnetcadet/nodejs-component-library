<template>
    <Grid>
      <GridColumn>
        test
      </GridColumn>
    </Grid>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Grid, GridColumn, Flex, FlexRow, FlexColumn } from '../../src/components'

export default defineComponent({
  components: {
    Grid,
    GridColumn,
    Flex,
    FlexRow,
    FlexColumn
  },
  data() {

    return {
      items: [
        'value 1',
        'value 2',
        'value 3'
      ]
    }
  }
})
</script>