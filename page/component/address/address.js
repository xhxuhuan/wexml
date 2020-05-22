// page/component/new-pages/user/address/address.js
var qqsdk = require("../../../qqmap-wx-jssdk.js")
Component({
  data:{
    name:'',
    phone:'',
    detail:'',
    publicAddress: ''
  },
  methods: {
    onLoad(){
      var self = this;
      var qqMap = new qqsdk({
        key:"TELBZ-2F7WJ-DHOFQ-KLP5G-GGI6Z-U6FA5"
      });
      wx.getLocation({
        success:function(res){
          console.log(res);
          var latitude = res.latitude;
          var longitude = res.longitude;
          qqMap.reverseGeocoder({
            location: {
              latitude,
              longitude
            },
            success:function(res){
              console.log(res)
              self.setData({publicAddress : res.result.address})
            }
          })
        }
      })
    },
    formSubmit(){
      console.log(this.data)
      if (this.data.name && this.data.phone && this.data.detail && this.data.publicAddress){
        wx.setStorage({
          key: 'address',
          data: {
            name:this.data.name,
            phone:this.data.phone,
            detail:this.data.detail,
            publicAddress:this.data.publicAddress
          },
          success(){
            wx.navigateBack();
          }
        })
      }else{
        wx.showModal({
          title:'提示',
          content:'请填写完整资料',
          showCancel:false
        })
      }
    },
    getLocation() {
      let self =this
      wx.getLocation({
        type: 'wgs84',
        success: (res)=> {
          console.log(res)
          let locationDate = res
          wx.chooseLocation({
            latitude: locationDate.latitude,
            longitude: locationDate.longitude,
            success: (response) => {
              console.log(response)
              self.setData({publicAddress : response.address + response.name})
            }
          })
        },
        fail: (res)=> {
          console.log(res)
        }
      })
    },
    bindValue(e) {
      let key = e.currentTarget.dataset.name
      this.setData({
        [key] : e.detail.value
      })
    }
  }
})