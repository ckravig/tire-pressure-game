var goal = [36,36.1,36.2,36.3,36.4,36.5];
var points = 0;

var num = Randomizer.nextFloat(25, 30);
num = (num.toFixed(1));

var click = mouseDownMethod(btnClick);
var unClick = mouseUpMethod(stop);

var psi = new Text("psi: " + num, "30pt Arial");
    psi.setPosition(getWidth()/2 + 40, 30);
    
    
    var currentPoints = 0;
    var currentPsi = num;
    var increase = 0.1;
    
    var txtPoints = new Text("Points: " + points, "30pt Arial");
    txtPoints.setPosition(10, 30);
    add(txtPoints);
    
    var txtGoal = new Text("Goal: 36", "25pt Arial");
    txtGoal.setPosition(getWidth()/2 + 60, 70);
    add(txtGoal);
    
    
    function increasePsi(){
        currentPsi = parseFloat(currentPsi) + parseFloat(increase);
        currentPsi = (currentPsi.toFixed(1));
        println(currentPsi);
        if(currentPsi == 31.0){
            tire.setRadius(101);
        }
        if(currentPsi == 31.5){
            tire.setRadius(102);
        }
        if(currentPsi == 32.0){
            tire.setRadius(103);
        }
        if(currentPsi == 32.5){
            tire.setRadius(104);
        }
        if(currentPsi == 33.0){
            tire.setRadius(105);
        }
        if(currentPsi == 33.5){
            tire.setRadius(106);
        }
        if(currentPsi == 34.0){
            tire.setRadius(107);
        }
        if(currentPsi == 34.5){
            tire.setRadius(108);
        }
        if(currentPsi == 35.0){
            tire.setRadius(109);
        }
        if(currentPsi == 35.5){
            tire.setRadius(110);
        }
        if(currentPsi == 36.0){
            tire.setRadius(111);
        }
        
    }
    
    function decreasePsi(){
        currentPsi = parseFloat(currentPsi) - parseFloat(increase);
        currentPsi = (currentPsi.toFixed(1));
        println(currentPsi);
        if(currentPsi == 31.0){
            tire.setRadius(101);
        }
        if(currentPsi == 31.5){
            tire.setRadius(102);
        }
        if(currentPsi == 32.0){
            tire.setRadius(103);
        }
        if(currentPsi == 32.5){
            tire.setRadius(104);
        }
        if(currentPsi == 33.0){
            tire.setRadius(105);
        }
        if(currentPsi == 33.5){
            tire.setRadius(106);
        }
        if(currentPsi == 34.0){
            tire.setRadius(107);
        }
        if(currentPsi == 34.5){
            tire.setRadius(108);
        }
        if(currentPsi == 35.0){
            tire.setRadius(109);
        }
        if(currentPsi == 35.5){
            tire.setRadius(110);
        }
        if(currentPsi == 36.0){
            tire.setRadius(111);
        }
    }
    
    function stop(){
        stopTimer(increasePsi);
        stopTimer(decreasePsi);
    }
    
    var tire = new Circle(100);
    tire.setPosition(getWidth()/2, getHeight()/2-75);
    tire.setColor(Color.black);
    add(tire);
    
    var spoke = new Circle(65);
    spoke.setPosition(getWidth()/2, getHeight()/2-75);
    spoke.setColor(Color.grey);
    add(spoke);
    
    var port = new Oval(20, 5);
    port.setPosition(getWidth()/2 + 65, getHeight()/2-75);
    port.setColor(Color.black);
    add(port);
    
    var gold = new Circle(3);
    gold.setPosition(getWidth()/2 + 57, getHeight()/2-75);
    gold.setColor("#FFD700");
    add(gold);
    
    var win = new Rectangle(100, 50);
    win.setPosition(getWidth()/2 -50 ,getHeight()/2 - 50);
    win.setColor(Color.ORANGE);
    
    
    var txtWin = new Text("Click for next tire", "30pt Arial");
    txtWin.setPosition(getWidth()/2 -150, getHeight()/2 - 60);
	
	start();
    
function start(){
    
    
    
    // Text Placement
    var high = new Rectangle(100, 50);
    high.setPosition(35,350);
    high.setColor(Color.blue);
    add(high);
    var low = new Rectangle(100, 50);
    low.setPosition(270,350);
    low.setColor(Color.red);
    add(low);
    var check = new Rectangle(100, 50);
    check.setPosition(getWidth()/2 - 48,350);
    check.setColor(Color.green);
    add(check);
    var txtCheck = new Text("Check", "20pt Arial");
    txtCheck.setPosition(getWidth()/2 - 35, 340);
    add(txtCheck);
    var txtLow = new Text("Release", "20pt Arial");
    txtLow.setPosition(270, 340);
    add(txtLow);
    var txtHigh = new Text("Add", "20pt Arial");
    txtHigh.setPosition(60, 340);
    add(txtHigh);
    var txt = new Text("Click Blue to add air, Red to release,", "18pt Arial");
    txt.setPosition(10, 430);
    add(txt);
    
    var txt2 = new Text(" and Green to check the current psi", "18pt Arial");
    txt2.setPosition(10, 450);
    add(txt2);
    
    add(psi);
    
    click;
    
}

function btnClick(e){
    // Button Click Function
    
    var elem = getElementAt(e.getX(), e.getY());
    if(elem == null){
    }else if(elem.getColor() == Color.blue){
        
        
        setTimer(increasePsi, 100);
        unClick;
        
        
    }else if(elem.getColor() == Color.red){
       
       setTimer(decreasePsi, 100);
        unClick;
       
    }else if(elem.getColor() == Color.green){
            psi.setText("psi: " + currentPsi);
            
            for(var i = 0; i < goal.length; i++){
	    var cur = goal[i];
    	    if(cur == currentPsi){
    	        var newPsi = Randomizer.nextFloat(25, 30);
    newPsi = (newPsi.toFixed(1));
    	        //currentPsi = num;
    	        currentPoints++;
    	        remove(tire);
                remove(spoke);
                remove(port);
                remove(gold);
                txtPoints.setText("Points: " + currentPoints );
                add(win);
                add(txtWin);
                tire.setRadius(100);
                
                
    	    }
        }
    }else if(elem.getColor() == Color.ORANGE){
        var newPsi = Randomizer.nextFloat(25, 30);
    newPsi = (newPsi.toFixed(1));
       currentPsi = newPsi;
        add(tire);
        add(spoke);
        add(port);
        add(gold);
        remove(win);
        remove(txtWin);
       psi.setText("psi: " + currentPsi);
    
    
}
}
