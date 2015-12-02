Polymer({
  is: 'test-carousel',
  properties: {
    pressed: {
      type: Boolean,
      value: false,
      notify: true,
      reflectToAttribute: true
    },
    count: {
      type: Number,
      value: 1,
      reflectToAttribute: true
    },
    numImages: {
      type: Number,
      value: 8
    },
    prevValue: {
      type: Boolean,
      value: true
    },
    nextValue: {
      type: Boolean,
      value: false
    },
    imgList: {
      type: Array,
      value: []
    }
  },

  nextImage: function(){
    this.count++;
    // return entire dom node of the div
    var myCollection = this.$.image_collection;
    var myImages = this.$.image_collection.children;

    if(this.count == this.numImages ){
      this.nextValue = true;
    }

    if(this.prevValue == true) {
      this.prevValue = false;
    }

    var mynum = this.count;
    myImages[(mynum + 1)].className = "visible";   

    var player = myCollection.animate([
      {transform: "translateX(0px)"}, 
      {transform: "translateX(-332px)"}
    ], {
        duration: 500,
        iterations: 1
    });
    
    player.onfinish = function(e) {
      myImages[(mynum - 2)].className = "invisible";     
    }

  },

  prevImage: function(){
    this.count--;
    var myCollection = this.$.image_collection;
    var myImages = this.$.image_collection.children;   

    if(this.count == 1) {
      this.prevValue = true;
    }

    if(this.nextValue == true) {
      this.nextValue = false;
    }


    var mynum = this.count;
    myImages[(mynum - 1)].className = "visible";  

    var player = myCollection.animate([
      {transform: "translateX(-332px)"}, 
      {transform: "translateX(0px)"}
    ], {
        duration: 500,
        iterations: 1
    });

    player.onfinish = function(e) {
      myImages[(mynum + 2)].className = "invisible";    
    }
  }

});

