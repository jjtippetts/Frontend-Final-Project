
        var keypri = 0;
        var keysub = 0;
        //keypri use to remember current which main tag is using
        //keysub use to remember current sub-tag using situation

        //reset all description, which means clean the description field.
        //it will set all conditional item hidden, which initialize the page
        function cleandescription(){
            document.getElementById("description0").style.display="none";
            document.getElementById("musdescription1").style.display="none";
            document.getElementById("musdescription2").style.display="none";
            document.getElementById("musdescription3").style.display="none";
            document.getElementById("musdescription4").style.display="none";
            document.getElementById("lmkdescription1").style.display="none";
            document.getElementById("lmkdescription2").style.display="none";
            document.getElementById("lmkdescription3").style.display="none";
            document.getElementById("lmkdescription4").style.display="none";
            document.getElementById("lmkdescription5").style.display="none";
            document.getElementById("spcdescription1").style.display="none";
            document.getElementById("spcdescription2").style.display="none";
            document.getElementById("spcdescription3").style.display="none";
            document.getElementById("spcdescription4").style.display="none";
            document.getElementById("spcdescription5").style.display="none";
            document.getElementById("uvtdescription1").style.display="none";
            document.getElementById("uvtdescription2").style.display="none";
            document.getElementById("uvtdescription3").style.display="none";
            document.getElementById("MUG1").style.display="none";
            document.getElementById("MUG2").style.display="none";
            document.getElementById("MUG3").style.display="none";
            document.getElementById("MUG4").style.display="none";
            document.getElementById("LMG1").style.display="none";
            document.getElementById("LMG2").style.display="none";
            document.getElementById("LMG3").style.display="none";
            document.getElementById("LMG4").style.display="none";
            document.getElementById("LMG5").style.display="none";
            document.getElementById("UTG1").style.display="none";
            document.getElementById("UTG2").style.display="none";
            document.getElementById("UTG3").style.display="none";
            document.getElementById("sampphoto1").style.display="none";
            document.getElementById("sampphoto2").style.display="none";
            document.getElementById("sampphoto3").style.display="none";
            document.getElementById("sampphoto4").style.display="none";
            keysub = 0;
        }

        //function control the main menu, the left side one
        function clickswitch(key1){
            if(keypri == key1){
                //the situation that click one major button twice, which cancel its function and display Portland
                document.getElementById("submenu"+key1).style.display="none";
                document.getElementById("submenu0").style.display="";
                document.getElementById("PLG1").style.display="";
                document.getElementById("PLG2").style.display="";
                keypri = 0;
                cleandescription();
                document.getElementById("description0").style.display="";
            }else{
                //jump to new page, actually hide current page and set new one be displayed
                document.getElementById("submenu"+keypri).style.display="none";
                document.getElementById("submenu0").style.display="none";
                document.getElementById("PLG1").style.display="none";
                document.getElementById("PLG2").style.display="none";
                document.getElementById("submenu"+key1).style.display="";
                
                keypri = key1;
                cleandescription();
                if(key1 == 0){
                    //if press portland button, just display portland, not leave them blank
                    document.getElementById("PLG1").style.display="";
                    document.getElementById("PLG2").style.display="";
                    document.getElementById("description0").style.display="";
                }else{
                    document.getElementById("sampphoto"+key1).style.display="";
                }
            }
        }

        //this long-long-long function will coordinate with two variable 
        //control what will be displayed in the description field, each location has one
        function clickdescription(key2){
            //situation that stay in main portland page
            if(keypri == 0){
                cleandescription();
                document.getElementById("description0").style.display="";
            }
            //move to Museum part and select sub button
            else if(keypri == 1){
                if(key2 == 1){
                    cleandescription();
                    document.getElementById("musdescription1").style.display="";
                    document.getElementById("MUG1").style.display="";
                }
                else if(key2==2){
                    cleandescription();
                    document.getElementById("musdescription2").style.display="";
                    document.getElementById("MUG2").style.display="";
                }
                else if(key2==3){
                    cleandescription();
                    document.getElementById("musdescription3").style.display="";
                    document.getElementById("MUG3").style.display="";
                }
                else if(key2==4){
                    cleandescription();
                    document.getElementById("musdescription4").style.display="";
                    document.getElementById("MUG4").style.display="";
                }
            }
            //move to landmark
            else if(keypri == 2){
                if(key2 == 1){
                    cleandescription();
                    document.getElementById("lmkdescription1").style.display="";
                    document.getElementById("LMG1").style.display="";
                }
                else if(key2==2){
                    cleandescription();
                    document.getElementById("lmkdescription2").style.display="";
                    document.getElementById("LMG2").style.display="";
                }
                else if(key2==3){
                    cleandescription();
                    document.getElementById("lmkdescription3").style.display="";
                    document.getElementById("LMG3").style.display="";
                }
                else if(key2==4){
                    cleandescription();
                    document.getElementById("lmkdescription4").style.display="";
                    document.getElementById("LMG4").style.display="";
                }
                else if(key2==5){
                    cleandescription();
                    document.getElementById("lmkdescription5").style.display="";
                    document.getElementById("LMG5").style.display="";
                }
            }
            //move to shopping center menu
            else if(keypri == 3){
                if(key2 == 1){
                    cleandescription();
                    document.getElementById("spcdescription1").style.display="";
                }
                else if(key2==2){
                    cleandescription();
                    document.getElementById("spcdescription2").style.display="";
                }
                else if(key2==3){
                    cleandescription();
                    document.getElementById("spcdescription3").style.display="";
                }
                else if(key2==4){
                    cleandescription();
                    document.getElementById("spcdescription4").style.display="";
                }
                else if(key2==5){
                    cleandescription();
                    document.getElementById("spcdescription5").style.display="";
                }
            }
            //university menu
            else if(keypri == 4){
                if(key2 == 1){
                    cleandescription();
                    document.getElementById("uvtdescription1").style.display="";
                    document.getElementById("UTG1").style.display="";
                }
                else if(key2==2){
                    cleandescription();
                    document.getElementById("uvtdescription2").style.display="";
                    document.getElementById("UTG2").style.display="";
                }
                else if(key2==3){
                    cleandescription();
                    document.getElementById("uvtdescription3").style.display="";
                    document.getElementById("UTG3").style.display="";
                }
            }
        }

        //several varible that required for initialize google map API
        var map;
        var service;
        var infowindow;
        //matrix store location name, which eaiser to serach them by API
        //will pass two number to initmap and use them to reload map
        var address=[
            ["Downtown Portland"],
            ["Oregon Museum of Science and Industry", "Portland Art Museum", "Oregon Historical Society Museum", "Portland Children's Museum"],
            ["Pioneer Courthouse Square","Oregon Zoo","Pittock Mansion","Portland Japanese Garden","Washington Park"],
            ["Pioneer Place","Lloyd Center","Uptown Shopping Center","Woodburn Premium Outlets","Columbia Gorge Premium Outlets"],
            ["Portland State University","Oregon Health & Science University","University of Portland"]
        ];

        function initmap(number1,number2) {
            //set portland as position, although this coordinate seems not precises enough
            var portland = new google.maps.LatLng(-30.867, 151.195);

            infowindow = new google.maps.InfoWindow();

            map = new google.maps.Map(document.getElementById('map'), {
                center: portland, 
                zoom: 13
            });

            //first time run, null variable will lead it load Downtown
            if(number1 == null & number2 == null)
            {
                var request = {
                query: address[0][0],
                fields: ['name', 'geometry'],
                };
            }else{
                var request = {
                query: address[number1][number2],
                fields: ['name', 'geometry'],
                };
            }

            service = new google.maps.places.PlacesService(map);

            //will return the position looking for and move camera to there
            service.findPlaceFromQuery(request, function(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                    //call function and create marker on the map
                }

                map.setCenter(results[0].geometry.location);
            }
            });
            
            // Create the search box and link it to the UI element.
            var input = document.getElementById('pac-input');
            var searchBox = new google.maps.places.SearchBox(input);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            // Bias the SearchBox results towards current map's viewport.
            map.addListener('bounds_changed', function() {
            searchBox.setBounds(map.getBounds());
            });
        }

        //create marker and place them on the page
        function createMarker(place) {
            var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
            });

            google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
            });
        }
        
        
              
        
