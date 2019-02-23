function additontwonumbers(str,str1) {
            
    const result = parseInt(str);
    
    const result1 = parseInt(str1);

    if (result<0 || result1<0){

        throw Error("please enter the intiger value")
    }
    else{return result + result1;}
    
    }

QUnit.test("additontwonumbers", function(assert) {
	assert.equal(additontwonumbers(30,30), 60, "The addition of two numbers of 30-30 is 60");
	assert.equal(additontwonumbers(20, 20), 40, "The addition of two numbers of 20-20 is 40");
	assert.equal(additontwonumbers(10, 10), 20, "The addition of two numbers of 10-10 is 20");
    assert.equal(additontwonumbers(5, 5), 10, "The addition of two numbers of 5-5 is 10");
    assert.equal(additontwonumbers(35, 35), 70, "The addition of two numbers of 35-35 is 70");
    assert.equal(additontwonumbers(20, 50), 60, "The addition of two numbers of 20-50 is 60");
	
 });