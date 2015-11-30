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
    }
  },

  nextImage: function(){
    this.title++;
    // return entire dom node of the div
    var myCollection = this.$.image_collection;
    var myImages = this.$.image_collection.children;;

    if(this.title == this.numImages ){
      this.nextValue = true;
    }

    if(this.prevValue == true) {
      this.prevValue = false;
    }

    // for(var i=-1; i <1 ; i++){
    //   myImages[(this.title + i)].animate([
    //     {transform: "translateX(-100px)"}, 
    //     {transform: "translateX(-200px)"}
    //   ], {
    //       duration: 500
    //   });
    // }
    var mynum = this.title;
    myImages[(mynum + 1)].className = "visible";   

    var player = myCollection.animate([
      {transform: "translateX(0px)"}, 
      {transform: "translateX(-332px)"}
    ], {
        duration: 500,
        iterations: 1
    });
    
    player.onfinish = function(e) {
      console.log("FINISH");
      myImages[(mynum - 2)].className = "invisible";    
      // myImages[(mynum + 1)].className = "visible";    
    }

  },

  prevImage: function(){
    this.title--;
    var myCollection = this.$.image_collection;
    var myImages = this.$.image_collection.children;   
     
    // if(this.title == 1) {
    // } else if (this.title == 0) {
    //   this.title= this.numImages;
    // } else {
    // }

    if(this.title == 1) {
      console.log("OI");
      this.prevValue = true;
    }

    if(this.nextValue == true) {
      this.nextValue = false;
    }


    var mynum = this.title;
    myImages[(mynum - 1)].className = "visible";  

    var player = myCollection.animate([
      {transform: "translateX(-332px)"}, 
      {transform: "translateX(0px)"}
    ], {
        duration: 500,
        iterations: 1
    });

    player.onfinish = function(e) {
      console.log("FINISH");
      // myImages[(mynum - 1)].className = "visible";    
      myImages[(mynum + 2)].className = "invisible";    
    }
  }

});

