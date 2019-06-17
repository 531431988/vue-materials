<template>
  <div>
    <vxe-table
      :data.sync="tableData"
      border
      :loading="loading"
      highlight-hover-row
      stripe
      max-height="400"
      :span-method="mergeMethod"
    >
      <vxe-table-column type="index" label="序号" width="60"></vxe-table-column>
      <vxe-table-column prop="name" label="姓名"></vxe-table-column>
      <vxe-table-column
        prop="sex"
        label="性别"
        :filters="[{label: '男', value: 0}, {label: '女', value: 1}]"
      >
        <template v-slot="{row}">{{row.sex ? '女' : '男'}}</template>
      </vxe-table-column>
      <vxe-table-column prop="age" header-align="center" align="center" label="年龄"></vxe-table-column>
      <vxe-table-column prop="weight" header-align="center" align="center" label="体重"></vxe-table-column>
      <vxe-table-column prop="address" label="地址" show-overflow></vxe-table-column>
      <vxe-table-column label="操作">
        <Button type="primary">查看</Button>&emsp;
        <Button type="error">删除</Button>
      </vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      tableData: []
    }
  },
  created () {
    this.loading = false
    this.tableData = [{ name: '杨明', sex: 1, age: 45, address: '陕西省 商洛市 丹凤县', weight: 45 }, { name: '白超', sex: 0, age: 26, address: '四川省 内江市 市中区', weight: 55 }, { name: '郭丽', sex: 1, age: 21, address: '贵州省 遵义市 凤冈县', weight: 55 }, { name: '黎秀兰', sex: 1, age: 40, address: '广西壮族自治区 崇左市 天等县', weight: 40 }, { name: '吴洋', sex: 0, age: 51, address: '福建省 莆田市 其它区', weight: 55 }, { name: '彭强', sex: 0, age: 36, address: '甘肃省 临夏回族自治州 积石山保安族东乡族撒拉族自治县', weight: 55 }, { name: '范刚', sex: 1, age: 56, address: '西藏自治区 日喀则地区 白朗县', weight: 56 }, { name: '方秀兰', sex: 0, age: 27, address: '湖北省 宜昌市 猇亭区', weight: 55 }, { name: '熊芳', sex: 1, age: 60, address: '青海省 海东市 化隆回族自治县', weight: 55 }]
  },
  methods: {
    mergeMethod ({ row, rowIndex, column, columnIndex, data }) {
      let prevRow = data[rowIndex - 1]
      let nextRow = data[rowIndex + 1]
      // 跨行合并性别相同的
      if (column.property === 'sex') {
        if (prevRow && prevRow.sex === row.sex) {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
        if (nextRow && nextRow.sex === row.sex) {
          return {
            rowspan: columnIndex,
            colspan: 1
          }
        }
      }
      // 跨列合并
      if (rowIndex < 3) {
        if (columnIndex === 3) {
          return {
            rowspan: 1,
            colspan: 2
          }
        } else if (columnIndex === 4) {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>

<style>
</style>
