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
      type: Number,
      value: 1,
      reflectToAttribute: true
    },
    mysrc: {
      type: String,
      value: "/carousel/images/1.jpg"
    },
    myprev: {
      type: String,
      value: "/carousel/images/8.jpg"
    },
    mynext: {
      type: String,
      value: "/carousel/images/2.jpg"
    },
    numImages: {
      type: Number,
      value: 8
    },
  },

  nextImage: function(){
    this.title++;
    var myfolder = "/carousel/images/";

    if(this.title == (this.numImages + 1)){
      this.title=1;
      this.myprev=myfolder.concat((this.numImages), ".jpg");
      this.mynext=myfolder.concat((this.title + 1), ".jpg");
    } else if (this.title == this.numImages ){
      this.mynext=myfolder.concat("1", ".jpg");
      this.myprev=myfolder.concat((this.title - 1), ".jpg");      
    } else {
      this.myprev=myfolder.concat((this.title - 1), ".jpg");
      this.mynext=myfolder.concat((this.title + 1), ".jpg");
    }
    
    this.mysrc= myfolder.concat(this.title, ".jpg");

  },

  prevImage: function(){
    this.title--;
    var myfolder = "/carousel/images/";

    if(this.title == 1) {
      this.mynext=myfolder.concat((this.title + 1), ".jpg");
      this.myprev=myfolder.concat(this.numImages, ".jpg"); 
    } else if (this.title == 0) {
      this.title= this.numImages;
      this.mynext= myfolder.concat("1", ".jpg");
      this.myprev= myfolder.concat((this.title -1 ), ".jpg");    
    } else {
      this.myprev=myfolder.concat((this.title -1), ".jpg");
      this.mynext=myfolder.concat((this.title + 1 ), ".jpg");      
    }
    this.mysrc= myfolder.concat(this.title, ".jpg");

  }

});
