{
  Page({
  
    /**
     * 页面的初始数据
     */
    data: {
      name:"aissue",
      age:18,
      students:[
        { id: 1, name: "kobe", age: 18 },
        { id: 1, name: "aissue", age: 20 },
        { id: 1, name: "sjj", age: 28 }
      ],
      counter: 0

      
    },
    add(){
      this.setData({
        counter: this.data.counter + 1
      })
    },
    sub() {
      this.setData({
        counter: this.data.counter - 1
      })
    },
    getUserInfo(res){
        console.log(res)
    }
  
    
  })
}