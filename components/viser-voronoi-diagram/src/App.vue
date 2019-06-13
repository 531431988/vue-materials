<template>
  <div>
    <v-chart :forceFit="true" height="400" :data="data" padding="0">
      <v-tooltip :showTitle="false"/>
      <v-polygon position="_x*_y" color="value" :label="label"/>
    </v-chart>
  </div>
</template>

<script>
const Data = require('./voronoi.json')
const DataSet = require('@antv/data-set')

const label = [
  'value', {
    offset: 0,
    textStyle: {
      fill: '#fff',
      fontSize: '12',
      textAlign: 'center',
      shadowBlur: 2,
      shadowColor: 'rgba(0, 0, 0, .45)'
    }
  }
]

export default {
  mounted () {
    const dv = new DataSet.View().source(Data)
    dv.transform({
      type: 'diagram.voronoi',
      fields: ['x', 'y'],
      size: [800, 600],
      as: ['_x', '_y']
    })
    this.$data.data = dv.rows
  },
  data () {
    return {
      data: [],
      label
    }
  }
}
</script>
