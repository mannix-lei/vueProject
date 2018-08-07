const columns = [
  {
    value: false,
    name: '名称',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: '1%'
  }
]

export class ColumnHelper {
  columns =[]
  sumWidth = 0
  language = ''
  constructor (language) {
    this.language = language
  }

  createColumns (cols) {
    cols.map(item => {
      let fItem = columns.find(c => c.key === item.key)
      if (fItem) {
        this.columns.push({...fItem, ...item})
        this.sumWidth += fItem.width
      }
    })
  }
}
