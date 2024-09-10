class Checks
{
    constructor()
    {
        this.checks = 0;
        this.headCheck = false;
        this.bodyCheck = false;
        this.waistCheck = false;
        this.legsCheck = false;
        this.armsCheck = false;
    }

    myCheck1() {
        console.log(this.checks);
        // Get the checkbox
        var checkBox = document.getElementById("check1");
        // Get the output text
        var text = document.getElementById("textCheck1");
        // If the checkbox is checked, display the output text

        if (checkBox.checked == true)
        {
            text.style.display = "block";
            this.checks++;
            this.headCheck = true;
        } 
        else 
        {
            text.style.display = "none";
            this.checks--;
            this.headCheck = false;
        }

        if (this.checks > 1)
        {
            var checkBox2 = document.getElementById("check2");
            var checkBox3 = document.getElementById("check3");
            var checkBox4 = document.getElementById("check4");
            var checkBox5 = document.getElementById("check5");
            if (checkBox2.checked == false)
                document.getElementById("check2").disabled = true;
            if (checkBox3.checked == false)
                document.getElementById("check3").disabled = true; 
            if (checkBox4.checked == false)
                document.getElementById("check4").disabled = true; 
            if (checkBox5.checked == false)
                document.getElementById("check5").disabled = true;
                
            document.getElementById("attack").style.display = "block";
        }
        else
        {
            var checkBox5 = document.getElementById("check5");
            var checkBox3 = document.getElementById("check3");
            var checkBox4 = document.getElementById("check4");
            var checkBox2 = document.getElementById("check2");

            document.getElementById("check5").disabled = false;
            document.getElementById("check3").disabled = false; 
            document.getElementById("check4").disabled = false; 
            document.getElementById("check2").disabled = false; 
            document.getElementById("attack").style.display = "none";
        }
    }
    myCheck2() {

        // Get the checkbox
        var checkBox = document.getElementById("check2");
        // Get the output text
        var text = document.getElementById("textCheck2");
    
        if (checkBox.checked == true)
        {
            text.style.display = "block";
            this.checks++;
            this.bodyCheck = true;
        } 
        else 
        {
            text.style.display = "none";
            this.checks--;
            this.bodyCheck = false;
        }
        
        if (this.checks > 1)
        {
            var checkBox1 = document.getElementById("check1");
            var checkBox3 = document.getElementById("check3");
            var checkBox4 = document.getElementById("check4");
            var checkBox5 = document.getElementById("check5");
            if (checkBox1.checked == false)
                document.getElementById("check1").disabled = true;
            if (checkBox3.checked == false)
                document.getElementById("check3").disabled = true; 
            if (checkBox4.checked == false)
                document.getElementById("check4").disabled = true; 
            if (checkBox5.checked == false)
                document.getElementById("check5").disabled = true; 
                
            document.getElementById("attack").style.display = "block";
        }
        else
        {
            var checkBox1 = document.getElementById("check1");
            var checkBox3 = document.getElementById("check3");
            var checkBox4 = document.getElementById("check4");
            var checkBox5 = document.getElementById("check5");

            document.getElementById("check1").disabled = false;
            document.getElementById("check3").disabled = false; 
            document.getElementById("check4").disabled = false; 
            document.getElementById("check5").disabled = false; 
            document.getElementById("attack").style.display = "none";
        }
    }
    myCheck3() {
        // Get the checkbox
        var checkBox = document.getElementById("check3");
        // Get the output text
        var text = document.getElementById("textCheck3");
    
        // If the checkbox is checked, display the output text
        if (checkBox.checked == true){
        text.style.display = "block";
        this.checks++;
        this.waistCheck = true;
        } else {
        text.style.display = "none";
        this.checks--;
        this.wastCheck = false;
        }

        if (this.checks > 1)
        {
            var checkBox1 = document.getElementById("check1");
            var checkBox2 = document.getElementById("check2");
            var checkBox4 = document.getElementById("check4");
            var checkBox5 = document.getElementById("check5");
            if (checkBox1.checked == false)
                document.getElementById("check1").disabled = true;
            if (checkBox2.checked == false)
                document.getElementById("check2").disabled = true; 
            if (checkBox4.checked == false)
                document.getElementById("check4").disabled = true; 
            if (checkBox5.checked == false)
                document.getElementById("check5").disabled = true;

            document.getElementById("attack").style.display = "block";
        }
        else
        {
            var checkBox1 = document.getElementById("check1");
            var checkBox5 = document.getElementById("check5");
            var checkBox4 = document.getElementById("check4");
            var checkBox2 = document.getElementById("check2");

            document.getElementById("check1").disabled = false;
            document.getElementById("check5").disabled = false; 
            document.getElementById("check4").disabled = false; 
            document.getElementById("check2").disabled = false; 
            document.getElementById("attack").style.display = "none";
        }
    }
    myCheck4() {
        // Get the checkbox
        var checkBox = document.getElementById("check4");
        // Get the output text
        var text = document.getElementById("textCheck4");
    
        // If the checkbox is checked, display the output text
        if (checkBox.checked == true){
            text.style.display = "block";
            this.checks++;
            this.legsCheck = true;
        } 
        else {
            text.style.display = "none";
            this.checks--;
            this.legsCheck = false;
        }

        if (this.checks > 1)
        {
            var checkBox1 = document.getElementById("check1");
            var checkBox3 = document.getElementById("check3");
            var checkBox2 = document.getElementById("check2");
            var checkBox5 = document.getElementById("check5");
            if (checkBox1.checked == false)
                document.getElementById("check1").disabled = true;
            if (checkBox3.checked == false)
                document.getElementById("check3").disabled = true; 
            if (checkBox2.checked == false)
                document.getElementById("check2").disabled = true; 
            if (checkBox5.checked == false)
                document.getElementById("check5").disabled = true; 

            document.getElementById("attack").style.display = "block";
        }
        else
        {
            var checkBox1 = document.getElementById("check1");
            var checkBox3 = document.getElementById("check3");
            var checkBox5 = document.getElementById("check5");
            var checkBox2 = document.getElementById("check2");

            document.getElementById("check1").disabled = false;
            document.getElementById("check3").disabled = false; 
            document.getElementById("check5").disabled = false; 
            document.getElementById("check2").disabled = false; 
            document.getElementById("attack").style.display = "none";
        }
    }
    myCheck5() {
        // Get the checkbox
        var checkBox = document.getElementById("check5");
        // Get the output text
        var text = document.getElementById("textCheck5");
    
        // If the checkbox is checked, display the output text
        if (checkBox.checked == true)
        {
            text.style.display = "block";
            this.checks++;
            this.armsCheck = true;
        } 
        else 
        {
            text.style.display = "none";
            this.checks--;
            this.armsCheck = false;
        }

        if (this.checks > 1)
        {
            var checkBox1 = document.getElementById("check1");
            var checkBox3 = document.getElementById("check3");
            var checkBox4 = document.getElementById("check4");
            var checkBox2 = document.getElementById("check2");
            if (checkBox1.checked == false)
                document.getElementById("check1").disabled = true;
            if (checkBox3.checked == false)
                document.getElementById("check3").disabled = true; 
            if (checkBox4.checked == false)
                document.getElementById("check4").disabled = true; 
            if (checkBox2.checked == false)
                document.getElementById("check2").disabled = true; 
            
            document.getElementById("attack").style.display = "block";
        }
        else
        {
            var checkBox1 = document.getElementById("check1");
            var checkBox3 = document.getElementById("check3");
            var checkBox4 = document.getElementById("check4");
            var checkBox2 = document.getElementById("check2");

            document.getElementById("check1").disabled = false;
            document.getElementById("check3").disabled = false; 
            document.getElementById("check4").disabled = false; 
            document.getElementById("check2").disabled = false;
            document.getElementById("attack").style.display = "none";
        }
    }



    // myCheck6() {
    //     // Get the checkbox
    //     var checkBox = document.getElementById("check6");
    //     // Get the output text
    //     var text = document.getElementById("textCheck6");
    //     // If the checkbox is checked, display the output text

    //     if (checkBox.checked == true)
    //     {
    //         text.style.display = "block";
    //         this.checks++;
    //         this.headCheck = true;
    //     } 
    //     else 
    //     {
    //         text.style.display = "none";
    //         this.checks--;
    //         this.headCheck = false;
    //     }

    //     if (this.checks > 1)
    //     {
    //         var checkBox7 = document.getElementById("check7");
    //         var checkBox8 = document.getElementById("check8");
    //         var checkBox9 = document.getElementById("check9");
    //         var checkBox10 = document.getElementById("check10");
    //         if (checkBox7.checked == false)
    //             document.getElementById("check7").disabled = true;
    //         if (checkBox8.checked == false)
    //             document.getElementById("check8").disabled = true; 
    //         if (checkBox9.checked == false)
    //             document.getElementById("check9").disabled = true; 
    //         if (checkBox10.checked == false)
    //             document.getElementById("check10").disabled = true;
                
    //         document.getElementById("attack").style.display = "block";
    //     }
    //     else
    //     {
    //         var checkBox10 = document.getElementById("check10");
    //         var checkBox8 = document.getElementById("check8");
    //         var checkBox9 = document.getElementById("check9");
    //         var checkBox7 = document.getElementById("check7");

    //         document.getElementById("check10").disabled = false;
    //         document.getElementById("check8").disabled = false; 
    //         document.getElementById("check9").disabled = false; 
    //         document.getElementById("check7").disabled = false; 
    //         document.getElementById("attack").style.display = "none";
    //     }
    // }
    // myCheck7() {

    //     // Get the checkbox
    //     var checkBox = document.getElementById("check7");
    //     // Get the output text
    //     var text = document.getElementById("textCheck7");
    
    //     if (checkBox.checked == true)
    //     {
    //         text.style.display = "block";
    //         this.checks++;
    //         this.bodyCheck = true;
    //     } 
    //     else 
    //     {
    //         text.style.display = "none";
    //         this.checks--;
    //         this.bodyCheck = false;
    //     }
        
    //     if (this.checks > 1)
    //     {
    //         var checkBox6 = document.getElementById("check6");
    //         var checkBox8 = document.getElementById("check8");
    //         var checkBox9 = document.getElementById("check9");
    //         var checkBox10 = document.getElementById("check10");
    //         if (checkBox6.checked == false)
    //             document.getElementById("check6").disabled = true;
    //         if (checkBox8.checked == false)
    //             document.getElementById("check8").disabled = true; 
    //         if (checkBox9.checked == false)
    //             document.getElementById("check9").disabled = true; 
    //         if (checkBox10.checked == false)
    //             document.getElementById("check10").disabled = true; 
                
    //         document.getElementById("attack").style.display = "block";
    //     }
    //     else
    //     {
    //         var checkBox6 = document.getElementById("check6");
    //         var checkBox8 = document.getElementById("check8");
    //         var checkBox9 = document.getElementById("check9");
    //         var checkBox10 = document.getElementById("check10");

    //         document.getElementById("check6").disabled = false;
    //         document.getElementById("check8").disabled = false; 
    //         document.getElementById("check9").disabled = false; 
    //         document.getElementById("check10").disabled = false; 
    //         document.getElementById("attack").style.display = "none";
    //     }
    // }
    // myCheck8() {
    //     // Get the checkbox
    //     var checkBox = document.getElementById("check8");
    //     // Get the output text
    //     var text = document.getElementById("textCheck8");
    
    //     // If the checkbox is checked, display the output text
    //     if (checkBox.checked == true){
    //         text.style.display = "block";
    //         this.checks++;
    //         this.waistCheck = true;
    //     } 
    //     else
    //     {
    //         text.style.display = "none";
    //         this.checks--;
    //         this.wastCheck = false;
    //     }

    //     if (this.checks > 1)
    //     {
    //         var checkBox6 = document.getElementById("check6");
    //         var checkBox7 = document.getElementById("check7");
    //         var checkBox9 = document.getElementById("check9");
    //         var checkBox10 = document.getElementById("check10");
    //         if (checkBox6.checked == false)
    //             document.getElementById("check6").disabled = true;
    //         if (checkBox7.checked == false)
    //             document.getElementById("check7").disabled = true; 
    //         if (checkBox9.checked == false)
    //             document.getElementById("check9").disabled = true; 
    //         if (checkBox10.checked == false)
    //             document.getElementById("check10").disabled = true;

    //         document.getElementById("attack").style.display = "block";
    //     }
    //     else
    //     {
    //         var checkBox6 = document.getElementById("check6");
    //         var checkBox10 = document.getElementById("check10");
    //         var checkBox9 = document.getElementById("check9");
    //         var checkBox7 = document.getElementById("check7");

    //         document.getElementById("check6").disabled = false;
    //         document.getElementById("check10").disabled = false; 
    //         document.getElementById("check9").disabled = false; 
    //         document.getElementById("check7").disabled = false; 
    //         document.getElementById("attack").style.display = "none";
    //     }
    // }
    // myCheck9() {
    //     // Get the checkbox
    //     var checkBox = document.getElementById("check9");
    //     // Get the output text
    //     var text = document.getElementById("textCheck9");
    
    //     // If the checkbox is checked, display the output text
    //     if (checkBox.checked == true){
    //         text.style.display = "block";
    //         this.checks++;
    //         this.legsCheck = true;
    //     } 
    //     else {
    //         text.style.display = "none";
    //         this.checks--;
    //         this.legsCheck = false;
    //     }

    //     if (this.checks > 1)
    //     {
    //         var checkBox6 = document.getElementById("check6");
    //         var checkBox8 = document.getElementById("check8");
    //         var checkBox7 = document.getElementById("check7");
    //         var checkBox10 = document.getElementById("check10");
    //         if (checkBox6.checked == false)
    //             document.getElementById("check6").disabled = true;
    //         if (checkBox8.checked == false)
    //             document.getElementById("check8").disabled = true; 
    //         if (checkBox7.checked == false)
    //             document.getElementById("check7").disabled = true; 
    //         if (checkBox10.checked == false)
    //             document.getElementById("check10").disabled = true; 

    //         document.getElementById("attack").style.display = "block";
    //     }
    //     else
    //     {
    //         var checkBox6 = document.getElementById("check6");
    //         var checkBox8 = document.getElementById("check8");
    //         var checkBox10 = document.getElementById("check10");
    //         var checkBox7 = document.getElementById("check7");

    //         document.getElementById("check6").disabled = false;
    //         document.getElementById("check8").disabled = false; 
    //         document.getElementById("check10").disabled = false; 
    //         document.getElementById("check7").disabled = false; 
    //         document.getElementById("attack").style.display = "none";
    //     }
    // }
    // myCheck10() {
    //     // Get the checkbox
    //     var checkBox = document.getElementById("check10");
    //     // Get the output text
    //     var text = document.getElementById("textCheck10");
    
    //     // If the checkbox is checked, display the output text
    //     if (checkBox.checked == true)
    //     {
    //         text.style.display = "block";
    //         this.checks++;
    //         this.armsCheck = true;
    //     } 
    //     else 
    //     {
    //         text.style.display = "none";
    //         this.checks--;
    //         this.armsCheck = false;
    //     }

    //     if (this.checks > 1)
    //     {
    //         var checkBox6 = document.getElementById("check6");
    //         var checkBox8 = document.getElementById("check8");
    //         var checkBox9 = document.getElementById("check9");
    //         var checkBox7 = document.getElementById("check7");
    //         if (checkBox6.checked == false)
    //             document.getElementById("check6").disabled = true;
    //         if (checkBox8.checked == false)
    //             document.getElementById("check8").disabled = true; 
    //         if (checkBox9.checked == false)
    //             document.getElementById("check9").disabled = true; 
    //         if (checkBox7.checked == false)
    //             document.getElementById("check7").disabled = true; 
            
    //         document.getElementById("attack").style.display = "block";
    //     }
    //     else
    //     {
    //         var checkBox6 = document.getElementById("check6");
    //         var checkBox8 = document.getElementById("check8");
    //         var checkBox9 = document.getElementById("check9");
    //         var checkBox7 = document.getElementById("check7");

    //         document.getElementById("check6").disabled = false;
    //         document.getElementById("check8").disabled = false; 
    //         document.getElementById("check9").disabled = false; 
    //         document.getElementById("check7").disabled = false;
    //         document.getElementById("attack").style.display = "none";
    //     }
    // }


    uncheckAll()
    {
        document.getElementById("check1").checked = false;
        document.getElementById("check2").checked = false;
        document.getElementById("check3").checked = false;
        document.getElementById("check4").checked = false;
        document.getElementById("check5").checked = false;
        // document.getElementById("check6").checked = false;
        // document.getElementById("check7").checked = false;
        // document.getElementById("check8").checked = false;
        // document.getElementById("check9").checked = false;
        // document.getElementById("check10").checked = false;

        document.getElementById("check1").disabled = false;
        document.getElementById("check2").disabled = false; 
        document.getElementById("check3").disabled = false; 
        document.getElementById("check4").disabled = false; 
        document.getElementById("check5").disabled = false; 
        // document.getElementById("check6").disabled = false;
        // document.getElementById("check7").disabled = false; 
        // document.getElementById("check8").disabled = false; 
        // document.getElementById("check9").disabled = false; 
        // document.getElementById("check10").disabled = false; 

        document.getElementById("textCheck1").style.display = "none";
        document.getElementById("textCheck2").style.display = "none";
        document.getElementById("textCheck3").style.display = "none";
        document.getElementById("textCheck4").style.display = "none";
        document.getElementById("textCheck5").style.display = "none";

        this.checks = 0;
        this.headCheck = false;
        this.bodyCheck = false;
        this.waistCheck = false;
        this.legsCheck = false;
        this.armsCheck = false;
    }
}
