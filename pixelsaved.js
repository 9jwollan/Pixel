function Pixel(r,g,b){

    //declare red
    //declare green
    //declare blue
this.myred = r;
this.myblue = b;
this.mygreen = g;




    this.addRed = function(n){
        //new = old then math
        this.myred = this.myred +n;
        if(this.myred>255)
        {this.myred=255}
    };

    this.addGreen = function(n){
        this.mygreen = this.mygreen +n;
        if(this.mygreen>255)
        {this.mygreen=255}
    };

    this.addBlue = function(n){
        this.myblue = this.myblue +n;
        if(this.myblue>255)
        {this.myblue=255}
    };

    this.brighten = function(n){
        //all three colors
        this.myred = this.myred * (1+n);
        this.mygreen = this.mygreen * (1+n);
        this.myblue = this.myblue * (1+n)
    };

    this.complement = function(n){
      let comp = new Pixel(255-this.myred,255-this.myblue,255-this.mygreen);
      return comp;
    };

    this.grayScale = function(){
      return (this.myred+this.mygreen+this.myblue)/3

    };


}

function report(mypixel){
    //reduces redundancy of code.
    console.log("My red is :"+mypixel.myred);
    console.log("My green is :"+mypixel.mygreen);
    console.log("My blue is :"+mypixel.myblue);
}

//declares a main method to test the code.
function main(){

    //creates a Pixel-object
    let rectangle = new Pixel(200,100,120);

    //use a report to test each function
    report(rectangle);

    rectangle.addRed(60);
    rectangle.addGreen(60);
    rectangle.addBlue(60);

    console.log("------Added 60 to each value above------");
    report(rectangle);

    rectangle.brighten(-0.40);
    console.log("------Reduced brightness by 40%------");
    report(rectangle);

    rectangle.complement();
    console.log("------Complement to the previous color------");
    report(rectangle);

    rectangle.grayScale();
    console.log("------Averages the 3 values from the brighten example------");
    report(rectangle);


}

//runs the code
main();
