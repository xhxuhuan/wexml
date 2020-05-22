var qqsdk = require("../../qqmap-wx-jssdk.js")
Page({
  data: {
    latitude:"",
    longtitude:"",
    imgUrls: [
      '/image/b1.jpg',
      '/image/b2.jpg',
      '/image/b3.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
  },
  onLoad(){
    var _this = this;
    var qqMap = new qqsdk({
      key:"TELBZ-2F7WJ-DHOFQ-KLP5G-GGI6Z-U6FA5"
    });
    wx.getLocation({
      success:function(res){
        console.log(res);
        var latitude = res.latitude;
        var longtitude = res.longtitude;
        qqMap.reverseGeocoder({
          complete:function(res){
            console.log("111111111")
            console.log(res)
          }
        })
      }
    })
  }

 
  
  
    // wx.showShareMenu({
    //   success: (res) => {
    //     withShareTicket:true
    //     console.log(res)
    //   },
    // })
  
  

})