Polymer({
  is: 'test-carousel',

  properties: {
    pressed: {
      type: Boolean,
      value: false,
      notify: true,
      reflectToAttribute: true
    },
    title: {
      type: String,
      value: "1",
      reflectToAttribute: true
    },
    mysrc: {
      type: String,
      value: "/carousel/images/1.jpg"
    },
    numImages: {
      type: String,
      value: "3"
    },
  },

  nextImage: function(){
    this.title++;
    if(this.title > this.numImages){
      this.title="1";
    }

    var myfolder = "/carousel/images/";
    this.mysrc= myfolder.concat(this.title, ".jpg");
  },

  prevImage: function(){
    this.title--;

    if(this.title < 1) {
      this.title= this.numImages;
    }

    var myfolder = "/carousel/images/";
    this.mysrc= myfolder.concat(this.title, ".jpg");
  }
});
