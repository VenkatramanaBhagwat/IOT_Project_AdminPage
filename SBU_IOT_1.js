// to create different room option with different building//
function configureDropDownLists(ddl1,ddl2) {
    var freyhall = ['','Main Hall', 'Room 101', 'Room 102']; // each dropdown option is an array member
    var sac = ['','Hall', 'Ballroom A', 'Ballroom B'];
    var lighteng = ['','Room s10', 'Room s11', 'Room s12'];

    switch (ddl1.value) {
        case 'Frey Hall':
            ddl2.options.length = 0;
            for (i = 0; i < freyhall.length; i++) {
                createOption(ddl2, freyhall[i], freyhall[i]);
            }
            break;
        case 'Student Activity Center':
            ddl2.options.length = 0;
        for (i = 0; i < sac.length; i++) {
            createOption(ddl2, sac[i], sac[i]);
            }
            break;
        case 'Light Engineering':
            ddl2.options.length = 0;
            for (i = 0; i < lighteng.length; i++) {
                createOption(ddl2, lighteng[i], lighteng[i]);
            }
            break;
            default:
                ddl2.options.length = 0;
            break;
    }

};
// function to update the options

    function createOption(ddl, text, value) {
        var opt = document.createElement('option');
        opt.value = value;
        opt.text = text;
        ddl.options.add(opt);
    }
// end of configureDropDownLists


// to GET all users from database and to create a table

    $('#existingusers').click(function(e){
      e.preventDefault();

      $.ajax({
         type:'GET',
         url:'',
         success:function(data){
          console.log(data);
          var all_users="";
          for(var i=0; i<data.length;i++)
          {
            var j=i+1;
          all_users ="<tr><th>"+j+"</th><th>"+data[i].firstname+"</th> <th>"+data[i].lastname+"</th> <th>"+data[i].usercategory+"</th> <th>"+data[i].emailid+"</th> <th>"+data[i].sbu_id+"</th></tr>";
          $("#allusertable tbody").append(all_users);
          }
        }
      });
    });


//When a new user is added, collect details, make it as an JSON object and send it to Node.js

  $( "#form_adduser" ).submit(function(event) {
      //event.preventDefault();
    var formData = $(this).serializeArray();
    var newuserdata={};
    formData.forEach(function(ele){
      newuserdata[ele.name]=ele.value;
    })
alert(JSON.stringify(newuserdata));
    // $.ajax({
    //   type: "POST",
    //   url: "",
    //   data: newuserdata,
    //   success: function(msg){
    //     if(msg.data ==no error )
    //     {alert( "User Added : "+JSON.stringify(newuserdata) );}
    //     else {alert("could not add, try again "); }
    //    },
    //   dataType: "json",
    //   contentType : "application/json"
    // });

  });


  //When a new device is added, collect details, make it as an JSON object and send it to Node.js

    $( "#form_adddevice" ).submit(function(event) {
        //event.preventDefault();
      var deviceData = $(this).serializeArray();
      var newdevicedata={};
      deviceData.forEach(function(ele){
        newdevicedata[ele.name]=ele.value;
      })
  alert(JSON.stringify(newdevicedata));
      // $.ajax({
      //   type: "POST",
      //   url: "",
      //   data: newdevicedata,
      //   success: function(msg){
      //     if(msg.data ==no error )
      //     {alert( "Device Added : "+JSON.stringify(newdevicedata) );}
      //     else {alert("could not add, try again "); }
      //    },
      //   dataType: "json",
      //   contentType : "application/json"
      // });

    });
